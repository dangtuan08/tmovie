import React, { useEffect } from "react";
import Caroucel from "../components/caroucel/Caroucel";
import { useDispatch, useSelector } from "react-redux";

import {
  getListMoviesPopuler,
  getListMoviesTopRate,
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
      getListMoviesPopuler({ type: movieType.popular, params: { page: page } })
    );

    dispatch(
      getListMoviesTopRate({
        type: movieType.top_rated,
        params: { page: page },
      })
    );
  }, []);

  useEffect(() => {
    console.log(loading);
    document.body.scrollTo(0, 0);
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
          <MovieList category={category.movie} type={movieType.popular} />
          <MovieList category={category.movie} type={movieType.top_rated} />
          <MovieList />
        </>
      )}
    </>
  );
}

export default Home;
