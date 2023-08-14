import { useLazyQuery } from "@apollo/client";
import { GET_SONGS_BY_PLAYLIST_ID } from "../../graphql/queries/getSongsByPlaylistIdQuery";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useDebounce from "../../hooks/useDebounce";
import SongCard from "../SongCard";
import SongCardShimmer from "../SongCard/SongCardShimmer";
import Player from "../Player";
import styles from "./playlist.module.css";

function PlayList({ currentPlayListMetaData, mainRef }) {
  const [searchText, setSearchText] = useState(null);
  const [activeSong, setActiveSong] = useState(null);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const debouncedValue = useDebounce(searchText, 500);
  const [getSongsByPlayListId, { loading, error, data }] = useLazyQuery(
    GET_SONGS_BY_PLAYLIST_ID
  );

  useEffect(() => {
    getSongsByPlayListId({
      variables: {
        playlistId: currentPlayListMetaData?.id,
        search: debouncedValue,
      },
    });
  }, [debouncedValue, getSongsByPlayListId, currentPlayListMetaData]);

  const handleSongClick = (e) => {
    const songCard = e.target.closest(".song-card");
    if (!songCard) {
      return;
    }
    const title = songCard.dataset.title;
    const song = data?.getSongs?.find((song) => song.title === title);
    setActiveSong(song);
  };

  const handleNextBtnClk = () => {
    const currentSongInd = data?.getSongs?.findIndex(
      (song) => song.title === activeSong.title
    );
    const nextSongInd = (currentSongInd + 1) % data.getSongs.length;
    console.log({ currentSongInd, nextSongInd, songs: data.getSongs });
    setActiveSong(data.getSongs[nextSongInd]);
  };

  const handlePrevBtnClk = () => {
    const currentSongInd = data?.getSongs?.findIndex(
      (song) => song.title === activeSong.title
    );
    const prevSongInd =
      (currentSongInd - 1 + data.getSongs?.length) % data.getSongs.length;
    console.log({ currentSongInd, prevSongInd, songs: data.getSongs });
    setActiveSong(data.getSongs[prevSongInd]);
  };

  const togglePlayListVisibility = () => {
    setShowPlaylist((prev) => !prev);
  };

  const handleCloseBtnClk = () => {
    setActiveSong(null);
  };

  return (
    <div className={`${styles["playlist-container"]}`}>
      <div className={styles["open-playlist-btn-container"]}>
        <button
          type="button"
          className={styles["playlist-btn"]}
          onClick={togglePlayListVisibility}
        >
          Open PlayList
        </button>
      </div>
      <div
        className={`${styles["playlist"]} ${
          activeSong ? "" : styles["full"]
        }  ${showPlaylist ? styles["visible"] : styles["invisible"]}`}
      >
        <div className={styles["playlist-name-container"]}>
          <h2>{currentPlayListMetaData?.title}</h2>
        </div>
        <div className={styles["close-playlist-btn-container"]}>
          <button
            type="button"
            className={styles["playlist-btn"]}
            onClick={togglePlayListVisibility}
          >
            Close PlayList
          </button>
        </div>
        <div className={styles["search-container"]}>
          <input
            type="text"
            placeholder="Search Song, Artist"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className={styles["search-icon"]} />
        </div>
        {loading ? (
          <SongCardShimmer />
        ) : (
          <div
            className={styles["playlist-songs-container"]}
            onClick={handleSongClick}
          >
            {data?.getSongs?.map((song) => (
              <SongCard
                key={song.title}
                isActive={song.title === activeSong?.title}
                {...song}
              />
            ))}
          </div>
        )}
      </div>
      {activeSong && (
        <Player
          handleNextBtnClk={handleNextBtnClk}
          handlePrevBtnClk={handlePrevBtnClk}
          handleCloseBtnClk={handleCloseBtnClk}
          togglePlayListVisibility={togglePlayListVisibility}
          activeSong={activeSong}
          mainRef={mainRef}
          key={activeSong?.title}
        />
      )}
    </div>
  );
}

export default PlayList;
