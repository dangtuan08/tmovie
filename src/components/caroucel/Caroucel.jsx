import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import "./caroucel.scss";
import CaroucelItem from "./CaroucelItem";
import { useSelector } from "react-redux";

function Caroucel() {
  // const [movieItems, setMovieItems] = useState([]);
  // console.log("render Caroucel");
  let listMoviesShow = [];
  const listMovies = useSelector(
    (state) => state.movieReducer.listMoviePopular.results
  );
  if (listMovies) {
    listMoviesShow = listMovies.slice(0, 5);
  }

  // Call API trực tiếp dùng async/await
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

  // Call API trực tiếp dùng .then.catch
  // useEffect(() => {
  //   tmdbApi
  //     .getMoviesList(movieType.popular, { params: { page: 1 } })
  //     .then((res) => {
  //       console.log(res.results);
  //       let items = [];
  //       items = res.results;
  //       setMovieItems(items.slice(0, 4));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="movie-slide">
      <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay]}
      >
        {listMoviesShow.map((item, index) => {
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
