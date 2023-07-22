import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <a href="/" className={styles.header_logo}>
          TMDB
        </a>
        <ul className={styles.header_list}>
          <li className={styles.header_list_item}>
            <a className={styles.header_list_item_link} href="/">
              Фільми
            </a>
          </li>
          <li className={styles.header_list_item}>
            <a className={styles.header_list_item_link} href="./serials/">
              Серіали
            </a>
          </li>
          <li className={styles.header_list_item}>Персони</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
