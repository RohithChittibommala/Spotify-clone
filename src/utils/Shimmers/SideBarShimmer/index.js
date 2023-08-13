import styles from "./sidebar-shimmer.module.css";
function SideBarShimmer() {
  console.log(styles);
  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <div
          className={`${styles["shimmer-logo"]}, ${styles["shimmer-content"]}`}
        ></div>
      </div>
      <div className="sidebar-items-container">
        <ul>
          {Array(5)
            .fill("")
            .map((_, index) => (
              <li key={index} className={`sidebar-item shimmer`}>
                <div className={styles["shimmer-content"]}></div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBarShimmer;
