import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import "swiper/css";

import Button, { OutlineButton } from "../button/Button";

import apiConfig from "../../api/apiConfig";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import "./caroucel.scss";

function Caroucel() {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(1, 4));
        console.log(response);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);
  return (
    <div className="hero-slide">
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const HeroSlideItem = (props) => {
  let hisrory = useNavigate();

  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const setModalActive = async () => {
    // const modal = document.querySelector(`#modal_${item.id}`);
    // const videos = await tmdbApi.getVideos(category.movie, item.id);
    // if (videos.results.length > 0) {
    //   const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
    //   modal
    //     .querySelector(".modal__content > iframe")
    //     .setAttribute("src", videSrc);
    // } else {
    //   modal.querySelector(".modal__content").innerHTML = "No trailer";
    // }
    // modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button
              className="btn"
              onClick={() => hisrory("/movie/" + item.id)}
            >
              Watch now
            </Button>
            {/* <Button
              className="btn btn-outline"
              // onClick={() => hisrory.push("/movie/" + item.id)}
            >
              Watch trailer
            </Button> */}
            <OutlineButton>Watch trailer</OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Caroucel;
