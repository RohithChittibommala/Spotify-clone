import { formatTime } from "../../utils/formatTime";
import styles from "./songcard.module.css";

function SongCard({ artist, duration, photo, title, isActive }) {
  return (
    <div
      className={`song-card ${styles["song-card"]} ${
        isActive && styles.active
      }`}
      data-title={title}
    >
      <div className={styles["thumbnail-container"]}>
        <img src={photo} alt="song thumbnail" />
      </div>
      <div className={styles["song-info-container"]}>
        <h6 className={styles["song-info-title"]}>{title}</h6>
        <p className={styles["song-info-artist"]}>{artist}</p>
      </div>
      <div className={styles["duration-container"]}>
        <p className={styles.duration}>{formatTime(duration)}</p>
      </div>
    </div>
  );
}

export default SongCard;
