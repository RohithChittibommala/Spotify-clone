import React from "react";
import styles from "./playlist.module.css";
import SongCardShimmer from "../SongCard/SongCardShimmer";

function PlayListShimmer() {
  return (
    <div className={`${styles.playlist} ${styles.full}`}>
      <div
        className={`{${styles["playlist-name-container"]} ${styles["shimmer-name-content"]}`}
      />
      <div
        className={`${styles["search-container"]} ${styles["shimmer-search-content"]}`}
      />
      <SongCardShimmer />
    </div>
  );
}

export default PlayListShimmer;
