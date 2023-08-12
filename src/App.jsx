import { useQuery } from "@apollo/client";
import { useState } from "react";
import SideBar from "./components/SideBar/Index";
import PlayList from "./components/PlayList/Index";
import LoadingSpinner from "./components/Spinner/LoadingSpinner";
import { GET_PLAYLISTS } from "./utils/graphqlQueries";
import "./App.css";
import Player from "./components/Player/Index";

function App() {
  const { loading: playlistsLoading, data: playlistData } =
    useQuery(GET_PLAYLISTS);
  const [currentPlayListId, setCurrentPlayListId] = useState(1);
  const [activeSong, setActiveSong] = useState(null);

  const handlePlayListClk = (playListId) => {
    setCurrentPlayListId(playListId);
  };

  if (playlistsLoading) {
    return <LoadingSpinner />;
  }

  const playList = playlistData?.getPlaylists.find(
    (playlist) => playlist.id === currentPlayListId
  );

  // console.log(playlistsLoading, playList);

  return (
    <div className="main">
      <SideBar
        playlistsLoading={playlistsLoading}
        sidebarItems={playlistData?.getPlaylists}
        currentPlayListId={currentPlayListId}
        handlePlayListClk={handlePlayListClk}
      />
      <PlayList
        playList={playList}
        setCurrentSong={setActiveSong}
        activeSong={activeSong}
      />
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

export default App;
