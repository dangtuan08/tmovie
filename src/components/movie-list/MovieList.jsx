import React from "react";
import { OutlineButton } from "../button/Button";
import "./movieList.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import MovieCard from "../movie-card/MovieCard";
import { useSelector } from "react-redux";

function MovieList() {
  const listMoviePopular = useSelector(
    (state) => state.movieReducer.listMoviePopular
  );
  console.log(listMoviePopular.results);
  return (
    <div className="section mb-3">
      <div className="section__header mb-2">
        <h2>Trending Movies</h2>
        <OutlineButton className="small">View more</OutlineButton>
      </div>
      <div className="section__movie-list">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
        >
          {!listMoviePopular.results
            ? ""
            : listMoviePopular.results.map((item) => {
                return (
                  <SwiperSlide>
                    <MovieCard movie={item} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieList;
