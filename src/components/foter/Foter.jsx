import React from 'react'
import style from "./foter.module.css"

const Foter = () => {
  return (
    <div className={style.foter}>
        <div className={style.foter_container}>
            <ul className={style.foter_list}>
                <li ><a className={style.foter_list_link } href="/">ОСНОВИ</a></li>
                <li ><a className={style.foter_list_link} href="/">Про TMDB</a></li>
                <li ><a className={style.foter_list_link} href="/">Зв’язок із нами</a></li>
                <li ><a className={style.foter_list_link} href="/">Форуми підтримки</a></li>
                <li ><a className={style.foter_list_link} href="/">API</a></li>
                <li ><a className={style.foter_list_link} href="/">Стан системи</a></li>
            </ul>
            <ul className={style.foter_list}>
                <li ><a className={style.foter_list_link} href="/">УЗЯТИ УЧАСТЬ</a></li>
                <li ><a className={style.foter_list_link} href="/">Біблія зі сприяння</a></li>
                <li ><a className={style.foter_list_link} href="/">Додати новий фільм</a></li>
                <li ><a className={style.foter_list_link} href="/">Додати новий серіал</a></li>
            </ul>
            <ul className={style.foter_list}>
                <li ><a className={style.foter_list_link} href="/">СПІЛЬНОТА</a></li>
                <li ><a className={style.foter_list_link} href="/">Поради</a></li>
                <li ><a className={style.foter_list_link} href="/">Обговорення</a></li>
                <li ><a className={style.foter_list_link} href="/">Таблиця лідерів</a></li>
                <li ><a className={style.foter_list_link} href="/">Twitter</a></li>
            </ul>
            <ul className={style.foter_list}>
                <li ><a className={style.foter_list_link} href="/">УГОДИ</a></li>
                <li ><a className={style.foter_list_link} href="/">Умови користування</a></li>
                <li ><a className={style.foter_list_link} href="/">Правила використання API</a></li>
                <li ><a className={style.foter_list_link} href="/">Політика конфіденційності</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Foter