import React from "react";

import "./content.scss";
import { OutlineButton } from "../../button/Button";

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original//gG9fTyDL03fiKnOpf2tr01sncnt.jpg")`,
      }}
    >
      <div className="movie-content">
        <div className="movie-content__poster">
          <div
            class="movie-content__poster__img"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original//6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg")`,
            }}
          >
            {/* <img
              src="https://image.tmdb.org/t/p/original//6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg"
              alt=""
            /> */}
          </div>
        </div>

        <div className="movie-content__info">
          <h2 className="title">Mobius</h2>
          <div className="genres">
            <OutlineButton className="small">Action</OutlineButton>
            <OutlineButton className="small">Science Fiction</OutlineButton>
            <OutlineButton className="small">Fantasy</OutlineButton>
          </div>
          <p className="overview">
            Dangerously ill with a rare blood disorder, and determined to save
            others suffering his same fate, Dr. Michael Morbius attempts a
            desperate gamble. What at first appears to be a radical success soon
            reveals itself to be a remedy potentially worse than the disease.
          </p>
          <div className="section-cast">
            <h3 className="cast-title">Casts</h3>
            <div className="casts">
              <div className="cast__item">
                <img
                  src="https://image.tmdb.org/t/p/w500//ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
                  alt="cast"
                />
                <p>Jared Leto</p>
              </div>
              <div className="cast__item">
                <img
                  src="https://image.tmdb.org/t/p/w500//ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
                  alt="cast"
                />
                <p>Jared Leto</p>
              </div>
              <div className="cast__item">
                <img
                  src="https://image.tmdb.org/t/p/w500//ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
                  alt="cast"
                />
                <p>Jared Leto</p>
              </div>
              <div className="cast__item">
                <img
                  src="https://image.tmdb.org/t/p/w500//ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
                  alt="cast"
                />
                <p>Jared Leto</p>
              </div>
              <div className="cast__item">
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

export default Banner;
