import styles from "./sidebar.module.css";
function SideBarShimmer() {
  console.log(styles);
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar-logo-container"]}>
        <div
          className={`${styles["shimmer-logo"]} ${styles["shimmer-content"]}`}
        ></div>
      </div>
      <ul className={styles["sidebar-items-container"]}>
        {Array(5)
          .fill("")
          .map((_, index) => (
            <li key={index} className={`${styles["sidebar-item"]}`}>
              <div className={styles["shimmer-content"]}></div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SideBarShimmer;
