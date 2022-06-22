import React, { useEffect } from "react";
import Caroucel from "../components/caroucel/Caroucel";
import { useDispatch, useSelector } from "react-redux";

import {
  getListMoviesPopuler,
  getListMoviesTopRate,
  getListTVPopuler,
  getListTVTopRate,
} from "../slices/movieSlice";
import { category, movieType } from "../api/tmdbApi";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import MovieList from "../components/movie-list/MovieList";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movieReducer.loading);
  // console.log(loading);
  useEffect(() => {
    const page = 1;

    dispatch(
      getListMoviesPopuler({
        type: movieType.popular,
        params: { page: page },
      })
    );

    dispatch(
      getListMoviesTopRate({
        type: movieType.top_rated,
        params: { page: page },
      })
    );

    dispatch(
      getListTVPopuler({
        type: movieType.popular,
        params: { page: page },
      })
    );
    dispatch(
      getListTVTopRate({
        type: movieType.top_rated,
        params: { page: page },
      })
    );
  }, []);

  useEffect(() => {
    console.log(loading);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">
          <BeatLoader color={"#ff0000"} size={150} />
        </div>
      ) : (
        <>
          <Caroucel />
          <div className="container">
            <MovieList
              category={category.movie}
              type={movieType.popular}
              title="Trending Movies"
            />
            <MovieList
              category={category.movie}
              type={movieType.top_rated}
              title="Top Rate Movies"
            />
            <MovieList
              category={category.tv}
              type={movieType.popular}
              title="Trending Tv"
            />
            <MovieList
              category={category.tv}
              type={movieType.top_rated}
              title="Top Rate Tv"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
