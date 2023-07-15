import React from "react";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import styles from "./movieDetail.module.css"

const MovieDetail = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loadData, setLoadData] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchMoviesDetail = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2EzNzlmNmI4MjczNmUyYmQwYjQyMzAyMDM4ODQ0MSIsInN1YiI6IjY0NzA2NmU2NTQzN2Y1MDBjMzI4MWVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S6SBMSx80eXF17PmGkUXdhVNJuS5EX__fRXcN4KHDeY",
        },
      };

      try {
        setLoadData(true);
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
          options
        );
        const data = await response.json();
        setMovieDetails(data.results);
        setLoadData(false);
      } catch (error) {
        setLoadData(true);
        setErrorMessage(error.message);
      }
    };
    fetchMoviesDetail();
  }, []);

  if (errorMessage !== "") {
    alert("Oops, some went wrong");
  }

  console.log(movieDetails);

  return (
    <>
      <Header />
      <div className={styles.movie_detail_container}>

      </div>
    </>
  );
};

export default MovieDetail;
