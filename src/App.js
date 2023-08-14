import { useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import SideBar from "./components/SideBar";
import PlayList from "./components/PlayList";
import SideBarShimmer from "./components/SideBar/SideBarShimmer";
import PlayListShimmer from "./components/PlayList/PlayListShimmer";
import { GET_PLAYLISTS } from "./graphql/queries/getPlaylistQuery";
import "./App.css";

function App() {
  const { loading: playlistsLoading, data: playlistData } =
    useQuery(GET_PLAYLISTS);
  const [currentPlayListMetaData, setCurrentPlayListMetaData] = useState();
  const mainRef = useRef();

  const handlePlayListClk = (playList) => {
    setCurrentPlayListMetaData(playList);
  };

  useEffect(() => {
    setCurrentPlayListMetaData(playlistData?.getPlaylists[0]);
  }, [playlistsLoading]);

  if (playlistsLoading) {
    return (
      <div className="main">
        <SideBarShimmer />
        <PlayListShimmer />
      </div>
    );
  }

  return (
    <div className="main" ref={mainRef}>
      {currentPlayListMetaData ? (
        <SideBar
          playlistsLoading={playlistsLoading}
          sidebarItems={playlistData?.getPlaylists}
          currentPlayListId={currentPlayListMetaData?.id}
          handlePlayListClk={handlePlayListClk}
        />
      ) : (
        <SideBarShimmer />
      )}
      {currentPlayListMetaData && (
        <PlayList
          currentPlayListMetaData={currentPlayListMetaData}
          mainRef={mainRef}
        />
      )}
    </div>
  );
}

export default App;
