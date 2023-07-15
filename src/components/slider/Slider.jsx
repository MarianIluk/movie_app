
import styles from './slider.module.css'
import React, { useState, useEffect, } from 'react'


const Slider = ({movie}) => {
  
  // const images = [`${URL1}`, `${URL2}`, `${URL3}`, `${URL4}`, `${URL5}`]
  
  // const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  //   }, 5000)
    
  //   return () => clearInterval(interval)
  // }, [])

  // const [value, setValue] = useState("");

  // const filteredMovie = movieList.filter((movie) =>
  //     movie.title.toLowerCase().includes(value.toLowerCase())
  //   );

  // https://image.tmdb.org/t/p/w1920_and_h800_multi_faces

  // console.log(movie);

  // const URLImage = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`

  return (
    <div className={styles.slider}>
      <div className='slider'>
        <img src='' alt='Slider Image' className={styles.slider_image} />
      </div>
      <h2 className={styles.slider_title}>Ласкаво просимо.</h2>
      <h2 className={styles.slider_subtitle}>
        Мільйони фільмів, серіалів і персон. Досліджуйте зараз.
      </h2>
      <form className={styles.slider_form} action=''>
        <input
          className={styles.slider_form_input}
          type='text'
          placeholder='Пошук фільму, серіалу, персони...'
          // onChange={async (event) => {
          //   setValue(event.target.value);
          // }}
        />
      </form>
    </div>
  )
}
export default Slider
