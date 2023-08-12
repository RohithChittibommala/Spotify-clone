import { useEffect, useRef, useState } from "react";
import { formatTime } from "../../utils/utlities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faEllipsisVertical,
  faForward,
  faPause,
  faPlay,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

function Player({ setCurrentSong, activeSong }) {
  const audioRef = useRef();
  const progressBarRef = useRef();
  const [currentDuration, setCurrentDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    audioRef.current?.play();
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying((prev) => !prev);
  };

  // console.log(activeSong);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentDuration(audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="player">
      <button
        type="button"
        className="close-btn"
        onClick={() => {
          setCurrentSong(null);
        }}
      >
        Close
      </button>
      <DisplaySongDetails activeSong={activeSong} />
      <audio ref={audioRef} src={activeSong?.url} />
      <ProgressBar
        duration={audioRef.current?.duration || 0}
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        currentDuration={currentDuration}
      />
      <Controls
        handleNext={() => {}}
        handlePlayPause={handlePlayPause}
        isPlaying={isPlaying}
      />
    </div>
  );
}

function DisplaySongDetails({ activeSong }) {
  return (
    <div className="song-details ">
      <div className="info">
        <h2>{activeSong?.title}</h2>
        <p>{activeSong?.artist}</p>
      </div>
      <div className="poster-container">
        <img src={activeSong?.photo} alt="song poster" />
      </div>
    </div>
  );
}

function ProgressBar({ duration, progressBarRef, audioRef, currentDuration }) {
  const handleSeek = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = progressBarRef.current?.value;
    }
  };

  const completedProgress = currentDuration / duration;

  return (
    <div className="progress-bar">
      <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
      <div className="input-container">
        <div
          className="completed-progress"
          style={{ width: `${completedProgress * 100}%` }}
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

function Controls({ handlePlayPause, handleNext, isPlaying }) {
  return (
    <div className="controls-container">
      <button className="ellipsis-btn">
        <FontAwesomeIcon className="control-icon" icon={faEllipsisVertical} />
      </button>
      <div className="controls">
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

export default Player;
