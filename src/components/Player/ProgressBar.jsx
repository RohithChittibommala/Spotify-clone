import { formatTime } from "../../utils/utlities";

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
    <div className="progress-bar">
      <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
      <div className="input-container">
        <div
          className="completed-progress"
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
