import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import apiConfig from "../../api/apiConfig";
import tmdbApi, { category } from "../../api/tmdbApi";
import { openModalVideo, openModalVideoThunk } from "../../slices/modalSlice";
import Button, { OutlineButton } from "../button/Button";
import "./caroucel.scss";

const CaroucelItem = (props) => {
  let hisrory = useNavigate();
  const dispatch = useDispatch();
  console.log("render caroucel");
  const urlImgBG = apiConfig.originalImage(props.item.backdrop_path);
  const urlPoster = apiConfig.w500Image(props.item.poster_path);
  // console.log(urlPoster, urlImgBG);
  const handleBtnTrailer = () => {
    // const getVideo = async () => {
    //   const videos = await tmdbApi.getVideos(category.movie, props.item.id);
    //   if (videos.results.length > 0) {
    //     dispatch(openModalVideo(videos.results[0].key));
    //   }
    // };
    // getVideo();

    dispatch(openModalVideoThunk({ type: category.movie, id: props.item.id }));
  };
  return (
    <div
      className={`movie-slide__item ${props.className}`}
      style={{
        backgroundImage: `url("${urlImgBG}")`,
      }}
    >
      <div className="movie-slide__item__content container">
        <div className="movie-slide__item__content__info">
          <h2 className="title">{props.item.original_title}</h2>
          <div className="overview">{props.item.overview}</div>
          <div className="btns">
            <Button className="btn" onClick={handleBtnTrailer}>
              Watch trailer
            </Button>
            <OutlineButton onClick={() => hisrory("/movie/" + props.item.id)}>
              Watch now
            </OutlineButton>
          </div>
        </div>
        <div className="movie-slide__item__content__poster">
          <img src={`${urlPoster}`} alt="poster" />
        </div>
      </div>
    </div>
  );
};
export default CaroucelItem;
