import styles from './slider.module.css'
import React, { useState, useEffect } from 'react'

const Slider = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2EzNzlmNmI4MjczNmUyYmQwYjQyMzAyMDM4ODQ0MSIsInN1YiI6IjY0NzA2NmU2NTQzN2Y1MDBjMzI4MWVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S6SBMSx80eXF17PmGkUXdhVNJuS5EX__fRXcN4KHDeY',
    },
  }

  const [imageURL1, setImageURL1] = useState('')
  const [imageURL2, setImageURL2] = useState('')
  const [imageURL3, setImageURL3] = useState('')
  const [imageURL4, setImageURL4] = useState('')
  const [imageURL5, setImageURL5] = useState('')

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          options
        )
        const data = await response.json()
        const image1 = data.results[0].backdrop_path
        const image2 = data.results[1].backdrop_path
        const image3 = data.results[2].backdrop_path
        const image4 = data.results[3].backdrop_path
        const image5 = data.results[4].backdrop_path
        const imageURL1 = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${image1}`
        const imageURL2 = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${image2}`
        const imageURL3 = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${image3}`
        const imageURL4 = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${image4}`
        const imageURL5 = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${image5}`
        setImageURL1(imageURL1)
        setImageURL2(imageURL2)
        setImageURL3(imageURL3)
        setImageURL4(imageURL4)
        setImageURL5(imageURL5)
      } catch (error) {
        console.log('Error fetching:', error)
      }
    }

    fetchImage()
  }, [])

  /////////// Слайдер ///////

  const images = [`${imageURL1}`, `${imageURL2}`, `${imageURL3}`, `${imageURL4}`, `${imageURL5}`]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.slider}>
      <div className='slider'>
        <img src={images[currentImageIndex]} alt='Slider Image' className={styles.slider_image} />
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
        />
        <button className={styles.slider_form_btn} type='submit'>
          Пошук
        </button>
      </form>
    </div>
  )
}
export default Slider
