import { useEffect, useRef, useState } from "react";
import Controls from "./Controls";
import DisplaySongDetails from "./DisplaySongDetails";
import SongProgressBar from "./SongProgressBar";
import styles from "./player.module.css";

function Player({
  setCurrentSong,
  activeSong,
  mainRef,
  handlePrevBtnClk,
  handleNextBtnClk,
}) {
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
    <div className={styles["player"]}>
      <button
        type="button"
        className={styles["close-btn"]}
        onClick={handleCloseBtnClk}
      >
        Close
      </button>
      <DisplaySongDetails activeSong={activeSong} mainRef={mainRef} />
      <audio ref={audioRef} src={activeSong?.url} />
      <SongProgressBar
        duration={audioRef.current?.duration || 0}
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        currentDuration={currentDuration}
      />
      <Controls
        handleNextBtnClk={handleNextBtnClk}
        handlePrevBtnClk={handlePrevBtnClk}
        handlePlayPause={handlePlayPause}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default Player;
