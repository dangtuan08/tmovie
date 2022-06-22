import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdbApi, { category, movieType } from "../api/tmdbApi";
import Content from "../components/detail-layout/content/Content";
import Video from "../components/detail-layout/video/Video";
import MovieList from "../components/movie-list/MovieList";

function Detail() {
  const [detailMovie, setDetailMovie] = useState({});
  const params = useParams();
  // const [id, category] = params;
  // console.log(params);

  useEffect(() => {
    window.scrollTo(0, 0);

    tmdbApi
      .detail(params.category, params.id, { params: {} })
      .then((res) => {
        // console.log(res);
        setDetailMovie(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  return (
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
  );
}

export default Detail;
