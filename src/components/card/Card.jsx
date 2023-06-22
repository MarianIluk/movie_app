import React, { useEffect } from "react";
import styles from "./card.module.css";

const Card = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2EzNzlmNmI4MjczNmUyYmQwYjQyMzAyMDM4ODQ0MSIsInN1YiI6IjY0NzA2NmU2NTQzN2Y1MDBjMzI4MWVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S6SBMSx80eXF17PmGkUXdhVNJuS5EX__fRXcN4KHDeY",
    },
  };


  useEffect(() => {


      const fetchMovies = async () => {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        );
        const data = await response.json();
        const movieList = data.results;
        return console.log(movieList);
      };
      
      const movie = fetchMovies();
      console.log(movie);
  }, []);

  return (
    <div>
        
        {/* {movie.map((movie) => (
              <p>{movie.title}</p>
            ))} */}
    </div>

  )
};


export default Card;
