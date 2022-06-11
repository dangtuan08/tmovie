import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { openModalVideoThunk } from "../../slices/modalSlice";
import Button from "../button/Button";

import "./movieCard.scss";

function MovieCard({ movie, category }) {
  // console.log(movie);
  const urlPoster = apiConfig.originalImage(movie.poster_path);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModalVideoThunk({ type: category, id: movie.id }));
  };

  const handleClickImg = () => {
    navigate(`/${category}/${movie.id}`);
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
        <h3>{movie.title || movie.name}</h3>
      </Link>
    </div>
  );
}

export default MovieCard;
