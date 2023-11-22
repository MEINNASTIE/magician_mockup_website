// components/MemoryGame.js
import React, { useState, useEffect } from 'react';
import styles from '../../styles/MemoryGame.module.css'; // Import your Tailwind CSS or use inline styles

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const generateCardData = () => {
  const icons = ['🐱', '🐶', '🐰', '🐻', '🐯', '🦊', '🐵', '🐘'];
  const doubledIcons = [...icons, ...icons];
  return shuffleArray(doubledIcons).map((icon, index) => ({
    id: index,
    icon,
    isFlipped: false,
  }));
};

const MemoryGame = () => {
  const [cards, setCards] = useState(generateCardData());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.icon === secondCard.icon) {
        setMatchedPairs((prev) => prev + 1);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards]);

  const handleCardClick = (clickedCard) => {
    if (flippedCards.length < 2 && !flippedCards.includes(clickedCard) && !clickedCard.isFlipped) {
      setFlippedCards((prev) => [...prev, clickedCard]);
      setCards((prevCards) =>
        prevCards.map((prevCard) =>
          prevCard.id === clickedCard.id ? { ...prevCard, isFlipped: true } : prevCard
        )
      );
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.icon !== secondCard.icon) {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.isFlipped ? { ...card, isFlipped: false } : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards]);

  const resetGame = () => {
    setCards(generateCardData());
    setFlippedCards([]);
    setMatchedPairs(0);
  };

  return (
    <div>
      <div className={styles.memoryGame}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${styles.card} ${card.isFlipped ? styles.flipped : ''}`}
            onClick={() => handleCardClick(card)}
          >
            {card.isFlipped ? card.icon : '🔒'}
          </div>
        ))}
      </div>
      {matchedPairs === cards.length / 2 && (
        <div>
          <p>Congratulations! You've matched all pairs!</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;

