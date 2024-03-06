import { Link } from "react-router-dom";
import { NAVBAR_ICONS, NAVBAR_PAGES } from "./data";
import styles from "./Navbar.module.scss";
import { IconContext } from "react-icons";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1>Logo</h1>
      <ul className={styles.container}>
        <div className={styles.pagesContainer}>
          {NAVBAR_PAGES.map(({ label, route }) => {
            return (
              <li key={label}>
                <Link className={styles.link} to={route}>
                  {label}
                </Link>
              </li>
            );
          })}
        </div>

        <div className={styles.iconsContainer}>
          <IconContext.Provider value={{ size: "1.3rem", color: "white" }}>
            {NAVBAR_ICONS.map(({ IconComponent, IconRoute }, index) => (
              <Link to={IconRoute}>
                <IconComponent key={index} />
              </Link>
            ))}
          </IconContext.Provider>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
