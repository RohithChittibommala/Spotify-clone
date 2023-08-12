import { faLeftLong, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Player({ setCurrentSong, activeSong }) {
  return (
    <div className="player">
      <button className="close-btn" onClick={() => setCurrentSong(null)}>
        Close
      </button>
    </div>
  );
}

export default Player;
