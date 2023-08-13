import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import PlayList from "./components/PlayList";
import { GET_PLAYLISTS } from "./utils/graphqlQueries";
import SideBarShimmer from "./components/SideBar/SideBarShimmer";
import "./App.css";
import PlayListShimmer from "./components/PlayList/PlayListShimmer";

function App() {
  const { loading: playlistsLoading, data: playlistData } =
    useQuery(GET_PLAYLISTS);
  const [currentPlayListMetaData, setCurrentPlayListMetaData] = useState();

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

  console.log(currentPlayListMetaData);
  return (
    <div className="main">
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
        <PlayList currentPlayListMetaData={currentPlayListMetaData} />
      )}
    </div>
  );
}

export default App;
