import React, { useEffect, useState } from "react";
import Header from '../../components/header/Header'
import Slider from "../../components/slider/Slider";
import Card from "../../components/card/Card";


const HomeSerials = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loadData, setLoadData] = useState(false);
    const [serialsList, setSerialsList] = useState([]);
  
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
            "https://api.themoviedb.org/3/tv/popular?page=1",
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
    }, []);
  
    if (errorMessage !== "") {
      alert("Oops, some went wrong");
    }

  return (
    <div>
        <Header />
        <Slider movie={serialsList[0]} />
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
    </div>
  )
}

export default HomeSerials