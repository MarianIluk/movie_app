import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import ShowMowieDetail from "./showMovieDetail/ShowMowieDetail";
import Foter from "../../components/foter/Foter";
import Video from "./video/Video";

const MovieDetail = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [movieDetails, setMovieDetails] = useState([]);
  const [video, setVideo] = useState("");

  let { id } = useParams();

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
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + id + "?language=uk",
          options
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    const fetchMoviesVideos = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2EzNzlmNmI4MjczNmUyYmQwYjQyMzAyMDM4ODQ0MSIsInN1YiI6IjY0NzA2NmU2NTQzN2Y1MDBjMzI4MWVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S6SBMSx80eXF17PmGkUXdhVNJuS5EX__fRXcN4KHDeY",
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + id + "/videos",
          options
        );
        const data = await response.json();
        const trailer = data.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setVideo(trailer ? trailer.key : data.results[0].key);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchMoviesVideos();
    fetchMoviesDetail();
  }, [video]);

  if (errorMessage !== "") {
    alert("Oops, some went wrong");
  }

  return (
    <>
      <Header />
      <ShowMowieDetail
        backdrop_path={movieDetails.backdrop_path}
        budget={movieDetails.budget}
        revenue={movieDetails.revenue}
        title={movieDetails.title}
        tagline={movieDetails.tagline}
        overview={movieDetails.overview}
        popularity={movieDetails.popularity}
        poster_path={movieDetails.poster_path}
        release_date={movieDetails.release_date}
        runtime={movieDetails.runtime}
        production_countries={movieDetails.production_countries}
        genres={movieDetails.genres}
        key={movieDetails.id}
      />
      <Video videoKey={video} />
      <Foter />
    </>
  );
};

export default MovieDetail;
