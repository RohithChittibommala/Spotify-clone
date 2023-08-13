import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faEllipsisVertical,
  faForward,
  faPause,
  faPlay,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

function Controls({ handlePlayPause, handleNext, isPlaying }) {
  return (
    <div className="controls-container">
      <button className="ellipsis-btn">
        <FontAwesomeIcon className="control-icon" icon={faEllipsisVertical} />
      </button>
      <div className="song-controls">
        <button onClick={handleNext}>
          <FontAwesomeIcon className="control-icon" icon={faBackward} />
        </button>
        <button className="pause" onClick={handlePlayPause}>
          <FontAwesomeIcon
            className="control-icon"
            icon={isPlaying ? faPause : faPlay}
          />
        </button>
        <button onClick={handleNext}>
          <FontAwesomeIcon className="control-icon" icon={faForward} />
        </button>
      </div>
      <button className="sound-btn">
        <FontAwesomeIcon className="control-icon" icon={faVolumeHigh} />
      </button>
    </div>
  );
}

export default Controls;
