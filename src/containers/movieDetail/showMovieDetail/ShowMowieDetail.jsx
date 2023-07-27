import React from "react";
import styles from "./showMovieDetail.module.css";

const ShowMowieDetail = ({
  backdrop_path,
  budget,
  revenue,
  title,
  tagline,
  overview,
  popularity,
  poster_path,
  release_date,
  runtime,
  production_countries,
  genres,
}) => {




  return (
    <div>
      <img
        className={styles.backgroun_image}
        src={
          "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" +
          backdrop_path
        }
      ></img>
      <div className={styles.container}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w300_and_h450_face` + poster_path}
          alt="poster"
        />
        <div className={styles.content_container}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{tagline}</p>
          <p className={styles.text}>Дата виходу: {release_date}</p>
          <p className={styles.text}>Тривалість {runtime} хв.</p>
          <p className={styles.text}>Бюджет: {budget} $</p>
          <p className={styles.text}>Касові збори: {revenue} $</p>
          <p className={styles.text}>Популярність {popularity}</p>
          {overview ? (
            <>
            <p className={styles.text}>Опис</p>
            <p className={styles.discription}>{overview}</p>
            </>
          ) : (
            <div>
              {""}
            </div>
          )

          }
          {/* {production_countries.map((country) => (
            <p>{country?.name}</p> 
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ShowMowieDetail;
