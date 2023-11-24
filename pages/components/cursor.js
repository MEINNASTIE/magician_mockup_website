import { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', updateCursorPosition)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div className={styles.cursor} style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  );
};

export default CustomCursor
