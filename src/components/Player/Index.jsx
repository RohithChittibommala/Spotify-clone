function Player({ setCurrentSong, activeSong }) {
  console.log(activeSong);
  return (
    <div className="player">
      <button
        type="button"
        className="close-btn"
        onClick={() => setCurrentSong(null)}
      >
        Close
      </button>
      <div className="song-details">
        <div className="info">
          <h2>{activeSong?.title}</h2>
          <p>{activeSong?.artist}</p>
        </div>
        <div className="poster-container">
          <img src={activeSong?.photo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Player;
