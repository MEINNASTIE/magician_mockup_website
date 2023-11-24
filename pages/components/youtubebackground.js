import React from 'react'

import styles from '../../styles/Home.module.css'

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className={styles.videoresponsive}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
        controls="0"
      ></iframe>
    </div>
  );
};

export default YouTubeVideo


