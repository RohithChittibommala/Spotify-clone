function SongCard({ url, artist, duration, photo, title, isActive }) {
  return (
    <div className={`song-card ${isActive ? "active" : ""}`} data-title={title}>
      <div className="thumbnail-container">
        <img src={photo} alt="song thumbnail" />
      </div>
      <div className="song-info-container">
        <h6>{title}</h6>
        <p>{artist}</p>
      </div>
      <div className="duration-container">
        <p>{`${Math.floor(duration / 60)}:${
          duration % 60 <= 9 ? "0" + (duration % 60) : duration % 60
        }`}</p>
      </div>
    </div>
  );
}

export default SongCard;
