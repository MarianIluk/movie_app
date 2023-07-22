import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Search from "./components/search/Search";
import Pagination from "./components/pagination/Pagination";
import Foter from "./components/foter/Foter";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loadData, setLoadData] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(1);

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
          `https://api.themoviedb.org/3/movie/now_playing?language=uk&page=${count}`,
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

    const fetchSearch = async () => {
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
          `https://api.themoviedb.org/3/search/movie?query=${value}`,
          options
        );
        const data1 = await response.json();
        console.log("search", data1.results);
      } catch (error) {}
    };

    fetchSearch();
    fetchMovies();
    window.scrollTo(0, 0);
  }, [count]);

  if (errorMessage !== "") {
    alert("Oops, some went wrong");
  }

  ///////////////////////////////////////////////
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  /////////////////////////////////////////////////

  const handleSearch = (event) => {
    setValue(event.target.value);
  };

  const filteredMovie = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(value.toLowerCase())
  );

  ///////////////////////////////////////////////

  return (
    <>
      <Header />
      <Search movie={movieList[0]} handleSearch={handleSearch} />
      <div>{loadData ? <Spinner /> : ""}</div>
      <div className="container_card">
        {filteredMovie.map((movie) => (
          <Card
            loadData={loadData}
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            vote_average={movie.vote_average}
            key={movie.id}
          />
        ))}
      </div>

      <Pagination increment={increment} decrement={decrement} count={count} />
      <Foter />
    </>
  );
}

export default App;
