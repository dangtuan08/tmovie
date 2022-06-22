import React from "react";

import apiConfig from "../../../api/apiConfig";
import { OutlineButton } from "../../button/Button";
import "./content.scss";

const Content = ({ movie }) => {
  console.log(movie);
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
            class="movie-content__poster__img"
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
          <div className="section-cast">
            <h3 className="cast-title">Casts</h3>
            <div className="casts row">
              <div className="cast__item col l-2 m-3 c-3 ">
                <div className="cast__item--img">
                  <img
                    src="https://image.tmdb.org/t/p/w500//ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
                    alt="cast"
                  />
                </div>

                <p>Jared Leto</p>
              </div>
              <div className="cast__item col l-2 m-3 c-3">
                <img
                  src="https://image.tmdb.org/t/p/w500//xr2GSp8Pm6fT5VGm0I9tsWVcZ8q.jpg"
                  alt="cast"
                />
                <p>Jared Leto</p>
              </div>
              <div className="cast__item col l-2 m-3 c-3">
                <img
                  src="https://image.tmdb.org/t/p/w500//ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
                  alt="cast"
                />
                <p>Jared Leto</p>
              </div>
              <div className="cast__item col l-2 m-3 c-3">
                <img
                  src="https://image.tmdb.org/t/p/w500//ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
                  alt="cast"
                />
                <p>Jared Leto</p>
              </div>
              <div className="cast__item col l-2 m-3 c-3">
                <img
                  src="https://image.tmdb.org/t/p/w500//ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
                  alt="cast"
                />
                <p>Jared Leto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
