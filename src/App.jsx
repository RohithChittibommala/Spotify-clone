import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar/Index";
import PlayList from "./components/PlayList/Index";
import { GET_PLAYLISTS } from "./utils/graphqlQueries";
import SideBarShimmer from "./utils/Shimmers/SideBarShimmer";
import "./App.css";

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
