import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header_container}>
            <h1 className={styles.header_title}>TMDB</h1>
            <ul className={styles.header_list}>
                <li className={styles.header_list_item}>Фільми</li>
                <li className={styles.header_list_item}>Серіали</li>
                <li className={styles.header_list_item}>Персони</li>
            </ul>
        </div>
    </div>
  )
}

export default Header