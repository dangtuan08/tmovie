import React from "react";

import apiConfig from "../../../api/apiConfig";
import { OutlineButton } from "../../button/Button";
import Cast from "../cast/Cast";
import "./content.scss";

const Content = ({ movie, category }) => {
  // console.log(movie);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${apiConfig.originalImage(movie.backdrop_path)})`,
      }}
    >
      <div className="movie-content row">
        <div className="movie-content__poster col c-0 m-4">
          <div
            className="movie-content__poster__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(movie.poster_path)})`,
            }}
          >
            {/* <img
              src="https://image.tmdb.org/t/p/original//6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg"
              alt=""
            /> */}
          </div>
        </div>

        <div className="movie-content__info col c-12 m-8">
          <h2 className="title">{movie.original_title}</h2>
          <div className="genres">
            {!movie &&
              movie.genres.map((item) => {
                return (
                  <OutlineButton key={item.id} className="small genres-btn">
                    {item.name}
                  </OutlineButton>
                );
              })}
          </div>
          <p className="overview">{movie.overview}</p>

          <Cast id={movie.id} category={category} />
        </div>
      </div>
    </div>
  );
};

export default Content;
