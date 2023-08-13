import { useEffect, useRef } from "react";
import styles from "./player.module.css";
// import useDominantColor from "../../utils/useDominantColor";

function DisplaySongDetails({ activeSong }) {
  const imageRef = useRef();

  return (
    <div className={styles["song-details"]}>
      <div className={styles["info"]}>
        <h2>{activeSong?.title}</h2>
        <p>{activeSong?.artist}</p>
      </div>
      <div className={styles["poster-container"]}>
        <img src={activeSong?.photo} alt="song poster" />
      </div>
    </div>
  );
}

export default DisplaySongDetails;
