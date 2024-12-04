/* eslint-disable @next/next/no-img-element */

import styles from "@/styles/Navbar.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Navbar() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const handelSearch = () => {
    if (!searchValue.trim()) {
      return;
    }
    router.push(`/search?q=${searchValue}`);
  };
  const handelInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handelSearch();
    }
  };
  useEffect(() => setSearchValue(router.query.q), []);
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_search}>
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handelInputChange}
          onKeyDown={handleKeyDown}
        />
        <span className={styles.navbar_search_icon} onClick={handelSearch}>
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

export default Navbar;
