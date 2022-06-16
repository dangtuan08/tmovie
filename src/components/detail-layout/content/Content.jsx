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
      <div className="movie-content row">
        <div className="movie-content__poster col c-0 m-4">
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

        <div className="movie-content__info col c-12 m-8">
          <h2 className="title">Mobius</h2>
          <div className="genres">
            <OutlineButton className="small genres-btn">Action</OutlineButton>
            <OutlineButton className="small genres-btn">
              Science Fiction
            </OutlineButton>
            <OutlineButton className="small genres-btn">Fantasy</OutlineButton>
          </div>
          <p className="overview">
            Dangerously ill with a rare blood disorder, and determined to save
            others suffering his same fate, Dr. Michael Morbius attempts a
            desperate gamble. What at first appears to be a radical success soon
            reveals itself to be a remedy potentially worse than the disease.
          </p>
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

export default Banner;
