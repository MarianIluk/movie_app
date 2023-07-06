import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/Card'
import Header from './components/header/Header'
import Slider from './components/slider/Slider'

function App() {
  const [movieList, setMovieList] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [loadData, setLoadData] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2EzNzlmNmI4MjczNmUyYmQwYjQyMzAyMDM4ODQ0MSIsInN1YiI6IjY0NzA2NmU2NTQzN2Y1MDBjMzI4MWVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S6SBMSx80eXF17PmGkUXdhVNJuS5EX__fRXcN4KHDeY',
        },
      }

      try {
        setLoadData(true)
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
          options
        )
        const data = await response.json()
        setMovieList(data.results)
        setLoadData(false)
      } catch (error) {
        setLoadData(true)
        setErrorMessage(error.message)
      }
    }

    fetchMovies()
  }, [])

  if (errorMessage !== '') {
    alert('Oops, some went wrong')
  }

  return (
    <>
      <Header />
      <Slider />
      <div class = "container_card">
      {movieList.map((movie) => (
        <Card
          id={movie.id}
          backdropPath={movie.backdrop_path}
          title={movie.title}
          releaseDate={movie.release_date}
          key={movie.id}
        />
      ))}
      </div>

    </>
  )
}

export default App
