import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Slider from "./components/slider/Slider";


function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loadData, setLoadData] = useState(false);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
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
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setMovieList(data.results);
        setLoadData(false);
      } catch (error) {
        setLoadData(true);
        setErrorMessage(error.message);
      }
    };
    console.log(movieList)

    fetchMovies();
  }, []);

  if (errorMessage !== "") {
    alert("Oops, some went wrong");
  }

  console.log(movieList);


  return (
    <>
      <Header />
      <Slider movie={movieList[0]} />
      <div className="container_card">
        {movieList.map((movie) => (
          <Card
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            vote_average={movie.vote_average}
            key={movie.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
