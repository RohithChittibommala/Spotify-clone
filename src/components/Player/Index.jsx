import { useEffect, useRef, useState } from "react";
import SongProgressBar from "./ProgressBar";
import Controls from "./Controls";

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

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentDuration(audioRef.current.currentTime);
    }
  };

  const handleCloseBtnClk = () => {
    setCurrentSong(null);
  };

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="player">
      <button type="button" className="close-btn" onClick={handleCloseBtnClk}>
        Close
      </button>
      <DisplaySongDetails activeSong={activeSong} />
      <audio ref={audioRef} src={activeSong?.url} />
      <SongProgressBar
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

export default Player;
