import styles from "./songcard.module.css";

const SongCardShimmer = () =>
  Array(5)
    .fill("")
    .map((_, ind) => (
      <div className={`song-card ${styles["song-card"]}`} key={ind}>
        <div className={styles["thumbnail-container"]}>
          <div className={`${styles["shimmer-placeholder-thumbnail"]}`} />
        </div>
        <div className={styles["song-info-container"]}>
          <div className={`${styles["shimmer-placeholder-title"]}`} />
          <div className={`${styles["shimmer-placeholder-artist"]}`} />
        </div>
        <div className={styles["duration-container"]}>
          <div className={`${styles["shimmer-placeholder-duration"]}`} />
        </div>
      </div>
    ));
export default SongCardShimmer;
