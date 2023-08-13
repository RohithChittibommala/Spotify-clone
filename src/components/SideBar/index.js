import Logo from "../../assets/logo.svg";
import styles from "./sidebar.module.css";

function SideBar({ sidebarItems, currentPlayListId, handlePlayListClk }) {
  console.log(currentPlayListId);
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar-logo-container"]}>
        <img src={Logo} alt={"spotify logo"} className={styles.logo} />
      </div>
      <ul className={styles["sidebar-items-container"]}>
        {sidebarItems?.map((item) => (
          <li
            key={item.id}
            onClick={() => handlePlayListClk(item)}
            className={` ${styles["sidebar-item"]} ${
              currentPlayListId === item.id && styles["active"]
            }`}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
