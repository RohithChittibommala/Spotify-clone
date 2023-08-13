import { useLazyQuery } from "@apollo/client";
import { GET_SONGS_BY_PLAYLIST_ID } from "../../utils/graphqlQueries";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useDebounce from "../../utils/useDebounce";
import SongCard from "../SongCard";
import SongCardShimmer from "../SongCard/SongCardShimmer";
import Player from "../Player";
import styles from "./playlist.module.css";

function PlayList({ currentPlayListMetaData }) {
  const [searchText, setSearchText] = useState(null);
  const [activeSong, setActiveSong] = useState(null);
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

  return (
    <div className={styles["playlist-container"]}>
      <div className={`${styles.playlist} ${activeSong ? "" : styles.full}`}>
        <div className={styles["playlist-name-container"]}>
          <h2>{currentPlayListMetaData?.title}</h2>
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
          setCurrentSong={setActiveSong}
          activeSong={activeSong}
          key={activeSong?.title}
        />
      )}
    </div>
  );
}

export default PlayList;
