/* eslint-disable @next/next/no-img-element */

import styles from '@/styles/Navbar.module.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_search}>
        <input type="text" placeholder="Search" />
        <span className={styles.navbar_search_icon}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>

      <div>
        <img
          src="/images/avatar/avatar.png"
          alt="logo"
          className={styles.user_avatar}
        />
      </div>
    </div>
  );
}

export default Navbar