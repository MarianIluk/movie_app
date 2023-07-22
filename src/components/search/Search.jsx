import styles from "./search.module.css";
import React from "react";

const Search = ({ movie, handleSearch }) => {


  return (
    <div className={styles.search}>
      <div className="search">
        <img
          src={`https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${movie?.backdrop_path}`}
          alt="Search Image"
          className={styles.search_image}
        />
      </div>
      <h2 className={styles.search_title}>Ласкаво просимо.</h2>
      <h2 className={styles.search_subtitle}>
        Мільйони фільмів, серіалів і персон. Досліджуйте зараз.
      </h2>
      <form className={styles.search_form} action="">
        <input
          className={styles.search_form_input}
          type="text"
          placeholder="Пошук фільму, серіалу, персони..."
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};
export default Search;
