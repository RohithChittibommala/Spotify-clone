import "./index.css";

const SongCardShimmer = () => {
  return (
    <div className="song-card shimmer-placeholder">
      <div className="thumbnail-container">
        <div className="shimmer-placeholder-thumbnail"></div>
      </div>
      <div className="song-info-container">
        <div className="shimmer-placeholder-title"></div>
        <div className="shimmer-placeholder-artist"></div>
      </div>
      <div className="duration-container">
        <div className="shimmer-placeholder-duration"></div>
      </div>
    </div>
  );
};

export default SongCardShimmer;
