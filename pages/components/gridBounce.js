import React from 'react'
import { motion } from 'framer-motion'

const GridWithBounceEffect = () => {
  const gridItems = [
    {
      image: 'url("/magic.png")',
      text: 'Brand Partnerships',
      link: '/link1', 
    },
    {
      image: 'url("/magic2.jpg")',
      text: 'Private Events',
      link: '/link2', 
    },
    {
      image: 'url("/magic3.jpg")',
      text: 'Stage Magic',
      link: '/link3', 
    },
    {
      image: 'url("/magic4.jpg")',
      text: 'Corporate Events',
      link: '/link4',
    },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="h-[800px] p-[100px] text-[32px]">
      {gridItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '5px',
            backgroundImage: item.image,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '20px',
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div>{item.text}</div>
        </motion.a>
      ))}
    </div>
  );
};

export default GridWithBounceEffect
