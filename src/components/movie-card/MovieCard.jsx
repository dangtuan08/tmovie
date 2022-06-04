import React from "react";
import { Link, useNavigate } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import Button from "../button/Button";

import "./movieCard.scss";

function MovieCard({ movie }) {
  console.log(movie);
  const urlPoster = apiConfig.originalImage(movie.poster_path);
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventdefault();
  };

  const handleClickImg = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <div className="movie-card">
      <div className="movie-card__poster">
        <img
          //   className=""
          src={urlPoster}
          alt=""
        />
        <div className="overlay" onClick={handleClickImg}></div>

        <Button className="btn-trailer" onClick={handleClick}>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
}

export default MovieCard;
