import React, { useState, useEffect } from 'react';
import styles from '../../styles/FlipCard.module.css';

const FlipCard = ({ top, left, tiltDegree }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isVanishing, setIsVanishing] = useState(false);

  const handleCardClick = () => {
    if (clickCount < 0) {
      setClickCount((prevCount) => prevCount + 1);
    } else {
      setIsVanishing(true);
    }
  };

  const handleTransitionEnd = () => {
    if (isVanishing) {
      setIsFlipped(false);
      setTimeout(() => {
        setIsVanishing(false);
        setClickCount(0);
      }, 10000); // 10 seconds
    }
  };

  useEffect(() => {
    if (!isVanishing) {
      setClickCount(0);
    }
  }, [isVanishing]);

  return (
    <div
      className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''} ${
        isVanishing ? styles.vanishing : ''
      } absolute`}
      onClick={handleCardClick}
      onTransitionEnd={handleTransitionEnd}
      style={{
        top,
        left,
        transform: `rotate(${tiltDegree}deg)`,
      }}
    >
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}></div>
        <div className={styles.flipCardBack}></div>
      </div>
    </div>
  );
};

const App = () => {
  const cardPositions = [
    { top: '40%', left: '40%', tiltDegree: 40 },
    { top: '20%', left: '35%', tiltDegree: 20 },
    { top: '45%', left: '10%', tiltDegree: -10 },
    { top: '30%', left: '-10%', tiltDegree: 15 },
    { top: '10%', left: '7%', tiltDegree: -30 },
  ];

  return (
    <div className="relative h-screen w-full">
      {cardPositions.map((position, index) => (
        <FlipCard key={index} top={position.top} left={position.left} tiltDegree={position.tiltDegree} />
      ))}
    </div>
  );
};

export default App;



