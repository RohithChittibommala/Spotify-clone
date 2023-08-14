import { formatTime } from "../../utils/formatTime";
import styles from "./player.module.css";

function SongProgressBar({
  duration,
  progressBarRef,
  audioRef,
  currentDuration,
}) {
  const handleSeek = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = progressBarRef.current?.value;
    }
  };

  const completedProgress = (currentDuration / duration) * 100;

  return (
    <div className={styles["progress-bar"]}>
      <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
      <div className={styles["input-container"]}>
        <div
          className={styles["completed-progress"]}
          style={{ width: `${completedProgress}%` }}
        ></div>
        <input
          type="range"
          onChange={handleSeek}
          value={currentDuration}
          ref={progressBarRef}
          max={duration}
        />
      </div>
      <span>{formatTime(duration)}</span>
    </div>
  );
}

export default SongProgressBar;
