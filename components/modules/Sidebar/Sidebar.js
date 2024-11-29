
import styles from'@/styles/Sidebar.module.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHome,
  faLock,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div>
          <img
            src="/images/logo/logo.webp"
            alt="logo"
            className={styles.logo_img}
          />
        </div>
        <h3 className={styles.title}>Sabzlearn</h3>
      </div>
      <ul className={styles.sidebar_links}>
        <li>
          <Link
            href="/"
            className={`${styles.sidebar_link_active} ${styles.sidebar_link}`}
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            className={styles.sidebar_link}
          >
            <FontAwesomeIcon icon={faBookmark} className={styles.tag} />
            <span>Courses</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            className={styles.sidebar_link}
          >
            <FontAwesomeIcon icon={faTag} className={styles.tag_img} />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link
          href="/"
          style={{ textDecoration: "none" }}
          className={styles.sidebar_link}
        >
          <FontAwesomeIcon icon={faLock} className={styles.tag} />
          <span>about</span>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar