import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faEllipsisVertical,
  faForward,
  faPause,
  faPlay,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./player.module.css";

function Controls({
  handlePlayPause,
  handleNextBtnClk,
  isPlaying,
  handlePrevBtnClk,
}) {
  return (
    <div className={styles["controls-container"]}>
      <button className={styles["ellipsis-btn"]}>
        <FontAwesomeIcon
          className={styles["control-icon"]}
          icon={faEllipsisVertical}
        />
      </button>
      <div className={styles["song-controls"]}>
        <button onClick={handlePrevBtnClk}>
          <FontAwesomeIcon
            className={styles["control-icon"]}
            icon={faBackward}
          />
        </button>
        <button className={styles["pause"]} onClick={handlePlayPause}>
          <FontAwesomeIcon
            className={styles["control-icon"]}
            icon={isPlaying ? faPause : faPlay}
          />
        </button>
        <button onClick={handleNextBtnClk}>
          <FontAwesomeIcon
            className={styles["control-icon"]}
            icon={faForward}
          />
        </button>
      </div>
      <button className={styles["sound-btn"]}>
        <FontAwesomeIcon
          className={styles["control-icon"]}
          icon={faVolumeHigh}
        />
      </button>
    </div>
  );
}

export default Controls;
