import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import tmdbApi, { category, movieType } from "../api/tmdbApi";
import Content from "../components/detail-layout/content/Content";
import Video from "../components/detail-layout/video/Video";
import MovieList from "../components/movie-list/MovieList";
import { getListSimilar, resetSimilar } from "../slices/movieSlice";

function Detail() {
  const [detailMovie, setDetailMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [trailer, setTrailer] = useState([]);

  const params = useParams();
  // const [id, category] = params;
  // console.log(params);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    dispatch(getListSimilar({ id: params.id, cate: params.category }));

    // tmdbApi
    //   .detail(params.category, params.id, { params: {} })
    //   .then((res) => {
    //     // console.log(res);
    //     setDetailMovie(res);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const getDetail = async () => {
      try {
        const detail = await tmdbApi.detail(params.category, params.id, {
          params: {},
        });

        const videoTrailer = await tmdbApi.getVideos(
          params.category,
          params.id
        );
        // console.log(videoTrailer);
        if (videoTrailer.results.length > 0) {
          setTrailer(videoTrailer.results.slice(0, 5));
        } else {
          setTrailer(videoTrailer.results);
        }
        setDetailMovie(detail);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getDetail();

    // tmdbApi
    //   .getVideos(params.category, params.id)
    //   .then((res) => {
    //     console.log(res.results);
    //     setTrailer(res.results)
    //     setLoading(false);

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    return () => {
      dispatch(resetSimilar());
    };
  }, [params]);

  console.log(params.category);
  return (
    <>
      {loading ? (
        <div className="loading">
          <BeatLoader color={"#ff0000"} size={150} />
        </div>
      ) : (
        <>
          <Content movie={detailMovie} category={params.category} />
          <div className="container">
            {trailer.map((item) => {
              return <Video key={item.key} trailer={item} />;
            })}

            <MovieList
              category={params.category}
              type="similar"
              id={params.id}
              title="Similar"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
