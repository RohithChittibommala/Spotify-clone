import Logo from "../../assets/logo.svg";

function SideBar({ sidebarItems, currentPlayListId, handlePlayListClk }) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img src={Logo} alt={"spotify logo"} />
      </div>
      <div className="sidebar-items-container">
        <ul>
          {sidebarItems?.map((item) => (
            <li
              key={item.id}
              onClick={() => handlePlayListClk(item.id)}
              className={` sidebar-item ${
                currentPlayListId === item.id ? "active" : ""
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
