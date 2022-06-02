import React, { useEffect } from "react";
import Caroucel from "../components/caroucel/Caroucel";
import { useDispatch, useSelector } from "react-redux";
import { getListMovies } from "../slices/movieSlice";
import { movieType } from "../api/tmdbApi";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movieReducer.loading);
  // console.log(loading);
  useEffect(() => {
    const page = 1;

    dispatch(
      getListMovies({ type: movieType.popular, params: { page: page } })
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
        </>
      )}
    </>
  );
}

export default Home;
