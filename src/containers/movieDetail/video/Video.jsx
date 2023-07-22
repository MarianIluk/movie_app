import React from 'react'
import YouTube from 'react-youtube';
import styles from "./video.module.css"

const Video = ({key}) => {
 const opts = {
    height: '500',
    width: '1000',
 }

 console.log(key);

  return (
    <div className={styles.container_video}>
        <YouTube videoId="RqW5LPW4ozk" opts={opts} />
    </div>
  )
}

export default Video