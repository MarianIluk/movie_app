import React from "react";
import YouTube from "react-youtube";
import styles from "./video.module.css";

const Video = ({ videoKey }) => {
  const opts = {
    height: "400",
    width: "800",
    host: "https://www.youtube.com",
    playerVars: {
      autoplay: 1,
      controls: 0,
      autohide: 1,
      wmode: "opaque",
      origin: "http://localhost:8100",
    },
  };

  return (
    <div className={styles.container_video}>
      <h2 className={styles.title}>Трейлер</h2>
      <YouTube videoId={videoKey} opts={opts} />
    </div>
  );
};

export default Video;
