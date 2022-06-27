import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/bundle";
import { useNavigate } from "react-router-dom";

import MovieCard from "../movie-card/MovieCard";
import { useSelector } from "react-redux";
import { category, movieType, tvType } from "../../api/tmdbApi";
import { OutlineButton } from "../button/Button";
import "./movieList.scss";

function MovieList(props) {
  // console.log(listMoviePopular.results);
  // console.log(props.category, props.type);

  let title = props.title;
  let listMovie = [];

  const listMovieTopRate = useSelector((state) => {
    if (
      props.category === category.movie &&
      props.type === movieType.top_rated
    ) {
      // console.log("toprate");
      return state.movieReducer.listMovieTopRate;
    } else {
      return null;
    }
  });

  const listMoviePopular = useSelector((state) => {
    if (props.category === category.movie && props.type === movieType.popular) {
      return state.movieReducer.listMoviePopular;
    } else {
      return null;
    }
  });

  const listTvPopular = useSelector((state) => {
    if (props.category === category.tv && props.type === tvType.popular) {
      return state.movieReducer.listTvPopular;
    } else {
      return null;
    }
  });

  const listTvTopRate = useSelector((state) => {
    if (props.category === category.tv && props.type === tvType.top_rated) {
      return state.movieReducer.listTvTopRate;
    } else {
      return null;
    }
  });

  const listSimilar = useSelector((state) => {
    if (props.type === "similar") {
      return state.movieReducer.listSimilar;
    } else {
      return null;
    }
  });

  if (props.type !== "similar") {
    if (props.category === category.movie) {
      switch (props.type) {
        case movieType.popular:
          // console.log(listMoviePopular.results);
          listMovie = listMoviePopular;
          break;
        default:
          listMovie = listMovieTopRate;
          // console.log(listMovieTopRate.results);

          break;
      }
    } else {
      switch (props.type) {
        case tvType.popular:
          // console.log(props.type);
          // console.log(listMoviePopular.results);

          listMovie = listTvPopular;
          break;
        default:
          listMovie = listTvTopRate;
          // console.log(listMovieTopRate.results);

          break;
      }
    }
  } else {
    if (props.category === category.movie) {
      // console.log("Movie", props.type);
      listMovie = listSimilar;
    } else {
      listMovie = listSimilar;
      // console.log("TV", props.type);
    }
  }
  // useEffect(() => {

  // }, [listMovieTopRate, listMoviePopular, listTvPopular, listTvTopRate]);

  // console.log("re-render");

  let navigate = useNavigate();
  const handleViewMore = () => {
    navigate(`/${props.category}/type=${props.type}`);
  };

  return (
    <div className="section mb-3">
      <div className="section__header mb-2">
        <h2>{title}</h2>
        {props.type === "similar" ? (
          ""
        ) : (
          <OutlineButton className="small" onClick={handleViewMore}>
            View more
          </OutlineButton>
        )}
      </div>
      <div className="section__movie-list">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          navigation={{ clickable: true }}
          freeMode={true}
          modules={[FreeMode, Navigation]}
        >
          {!listMovie.results
            ? ""
            : listMovie.results.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
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
