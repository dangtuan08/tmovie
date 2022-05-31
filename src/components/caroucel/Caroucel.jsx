import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import "swiper/css";

import Button, { OutlineButton } from "../button/Button";

import apiConfig from "../../api/apiConfig";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import "./caroucel.scss";
import CaroucelItem from "./CaroucelItem";

function Caroucel() {
  const [movieItems, setMovieItems] = useState([]);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     const params = { page: 1 };
  //     try {
  //       const response = await tmdbApi.getMoviesList(movieType.popular, {
  //         params,
  //       });
  //       setMovieItems(response.results.slice(1, 4));
  //       console.log(response);
  //     } catch {
  //       console.log("error");
  //     }
  //   };
  //   getMovies();
  // }, []);

  useEffect(() => {
    tmdbApi
      .getMoviesList(movieType.popular, { params: { page: 1 } })
      .then((res) => {
        console.log(res.results);
        let items = [];
        items = res.results;
        setMovieItems(items.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="movie-slide">
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
      >
        {movieItems.map((item, index) => {
          return (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <CaroucelItem
                  item={item}
                  className={`${isActive ? "active" : ""}`}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Caroucel;
