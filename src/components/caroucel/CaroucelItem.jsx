import React from "react";
import { useNavigate } from "react-router-dom";

import apiConfig from "../../api/apiConfig";
import Button, { OutlineButton } from "../button/Button";
import "./caroucel.scss";

const CaroucelItem = (props) => {
  let hisrory = useNavigate();

  const urlImgBG = apiConfig.w500Image(props.item.backdrop_path);
  //   console.log(urlPoster);
  const urlPoster = apiConfig.originalImage(props.item.poster_path);

  return (
    <div
      className={`movie-slide__item ${props.className}`}
      style={{
        backgroundImage: `url("${urlPoster}")`,
      }}
    >
      <div className="movie-slide__item__content container">
        <div className="movie-slide__item__content__info">
          <h2 className="title">{props.item.original_title}</h2>
          <div className="overview">{props.item.overview}</div>
          <div className="btns">
            <Button
              className="btn"
              onClick={() => hisrory("/movie/" + props.item.id)}
            >
              Watch now
            </Button>
            <OutlineButton>Watch trailer</OutlineButton>
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
