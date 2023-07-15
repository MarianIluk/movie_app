import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MovieDetail from "./containers/movieDetail/MovieDetail";
import NotFoundPage from "./containers/NotFoundPage";
import HomeSerials from "./containers/serials/HomeSerials";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/moviedetails/id=:id" element={<MovieDetail />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/serials/" element={<HomeSerials />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
