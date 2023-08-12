import { useLazyQuery } from "@apollo/client";
import { GET_SONGS_BY_PLAYLIST_ID } from "../../utils/graphqlQueries";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useDebounce from "../../utils/useDebounce";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import SongCard from "../SongCard/SongCard";

function PlayList({ playList, setCurrentSong, activeSong }) {
  const [searchText, setSearchText] = useState(null);
  const debouncedValue = useDebounce(searchText, 500);
  const [getSongsByPlayListId, { loading, error, data }] = useLazyQuery(
    GET_SONGS_BY_PLAYLIST_ID,
    {
      pollInterval: 60 * 60 * 1000, // polling every 1hr to update the playlists
    }
  );

  useEffect(() => {
    getSongsByPlayListId({
      variables: {
        playlistId: playList?.id,
        search: debouncedValue,
      },
    });
  }, [debouncedValue, getSongsByPlayListId, playList?.id]);

  if (loading) {
    return <p> loding ...</p>;
  }

  const handleSongClick = (e) => {
    const songCard = e.target.closest(".song-card");
    if (!songCard) {
      return;
    }

    const title = songCard.dataset.title;
    const song = data?.getSongs?.find((song) => song.title === title);
    setCurrentSong(song);
  };

  // console.log(data?.getSongs);

  return (
    <div className={`playlist ${activeSong ? "" : "full"}`}>
      <div className="playlist-name-container">
        <h2>{playList?.title}</h2>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Song, Artist"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="playlist-songs-container" onClick={handleSongClick}>
        {data?.getSongs?.map((song) => (
          <SongCard
            key={song.title}
            isActive={song.title === activeSong?.title}
            {...song}
          />
        ))}
      </div>
    </div>
  );
}

export default PlayList;
