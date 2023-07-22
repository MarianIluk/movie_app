import React from "react";
import style from "./pagination.module.css";

const Pagination = ({ increment, decrement, count }) => {
  return (
    <div className={style.container}>
      {count > 1 && (
        <button className={style.button_pagination} onClick={decrement}>
          &#171;
        </button>
      )}
      <p className={style.count_pagination}>{count}</p>
      <button className={style.button_pagination} onClick={increment}>
        &#187;
      </button>
    </div>
  );
};

export default Pagination;
