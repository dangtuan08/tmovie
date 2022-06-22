import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import tmdbApi, { category, movieType } from "../api/tmdbApi";
import Content from "../components/detail-layout/content/Content";
import Video from "../components/detail-layout/video/Video";
import MovieList from "../components/movie-list/MovieList";

function Detail() {
  const [detailMovie, setDetailMovie] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(detailMovie);
  const params = useParams();
  // const [id, category] = params;
  // console.log(params);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    tmdbApi
      .detail(params.category, params.id, { params: {} })
      .then((res) => {
        // console.log(res);
        setDetailMovie(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  return (
    <>
      {loading ? (
        <div className="loading">
          <BeatLoader color={"#ff0000"} size={150} />
        </div>
      ) : (
        <>
          <Content movie={detailMovie} />
          <div className="container">
            {/* <Video />
        <Video />
        <Video />
        <Video /> */}
            <MovieList
              category={category.movie}
              type={movieType.popular}
              title="Trending Movies"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
