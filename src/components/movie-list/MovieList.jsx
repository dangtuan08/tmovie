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
import { category, movieType } from "../../api/tmdbApi";

function MovieList(props) {
  // console.log(listMoviePopular.results);
  // console.log(props.category);

  let title = "";

  let listMovie = [];

  const listMovieTopRate = useSelector(
    (state) => state.movieReducer.listMovieTopRate
  );
  const listMoviePopular = useSelector(
    (state) => state.movieReducer.listMoviePopular
  );

  if (props.category === category.movie) {
    switch (props.type) {
      case movieType.popular:
        title = "Trending Movies";
        // console.log(listMoviePopular.results);

        listMovie = listMoviePopular;
        break;
      default:
        listMovie = listMovieTopRate;
        console.log(listMovieTopRate.results);

        title = "Top Rate Movies";
        break;
    }
  }
  // console.log(listMovie);
  return (
    <div className="section mb-3">
      <div className="section__header mb-2">
        <h2>{title}</h2>
        <OutlineButton className="small">View more</OutlineButton>
      </div>
      <div className="section__movie-list">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
        >
          {!listMovie.results
            ? ""
            : listMovie.results.map((item) => {
                return (
                  <SwiperSlide>
                    <MovieCard category={props.category} movie={item} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieList;
