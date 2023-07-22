import React, { useEffect, useState } from "react";
import Header from '../../components/header/Header'
import Search from "../../components/search/Search";
import Card from "../../components/card/Card";
import Pagination from "../../components/pagination/Pagination";
import Foter from "../../components/foter/Foter";


const HomeSerials = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loadData, setLoadData] = useState(false);
    const [serialsList, setSerialsList] = useState([]);
    const [count, setCount] = useState(1);
  
    useEffect(() => {
      const fetchSerials = async () => {
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
            `https://api.themoviedb.org/3/tv/popular?language=uk&page=${count}`,
            options
          );
          const data = await response.json();
          setSerialsList(data.results);
          setLoadData(false);
        } catch (error) {
          setLoadData(true);
          setErrorMessage(error.message);
        }
      };
  
      fetchSerials();
      window.scrollTo(0, 0);
    }, [count]);
  
    if (errorMessage !== "") {
      alert("Oops, some went wrong");
    }


    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };

  return (
    <div>
        <Header />
        <Search movie={serialsList[0]} />
      <div className="container_card">
        {serialsList.map((movie) => (
          <Card
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.name}
            releaseDate={movie.first_air_date}
            vote_average={movie.vote_average}
            key={movie.id}
          />
        ))}
      </div>
      <Pagination increment={increment} decrement={decrement} count={count}  />
      <Foter />
    </div>
  )
}

export default HomeSerials