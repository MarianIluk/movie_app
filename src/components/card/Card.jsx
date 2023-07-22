import React from "react";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";
import image from "./no-image.png";

const Card = ({ id, posterPath, title, releaseDate, vote_average, loadData }) => {
  const navigate = useNavigate();

  function getFilmId(id) {
    navigate(`/moviedetails/id/${id}`);
  }
  return (
    <div className={styles.card} onClick={() => getFilmId(id)}>
      <div>
        {loadData ? (
        <img src={image} alt="Loading Placeholder" />
      ) : (
      <img
        className={styles.card_img}
        src={`https://image.tmdb.org/t/p/w220_and_h330_face` + posterPath}
        alt=""
      />
      )} 
      </div>
      <div className={styles.card_container_card_releaseDate}>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_releaseDate}>{releaseDate}</p>
      </div>
      <p className={styles.card_vote}>{vote_average * 10 + "%"}</p>
    </div>
  );
};

export default Card;
