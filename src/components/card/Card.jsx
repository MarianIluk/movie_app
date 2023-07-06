import React, { useEffect, useState } from 'react'
import styles from './card.module.css'

const Card = ({ id, backdropPath, title, releaseDate }) => {
  return (
    <div onClick={() => console.log('')}>
      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face` + backdropPath} alt='' />
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_title}>{releaseDate}</p>
    </div>
  )
}

export default Card
