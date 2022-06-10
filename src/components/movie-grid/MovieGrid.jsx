import React, { useEffect, useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

import tmdbApi, {
  category as cate,
  movieType,
  tvType,
} from "../../api/tmdbApi";
import Button, { OutlineButton } from "../button/Button";
import InputSearch from "../inputSearch/InputSearch";
import MovieCard from "../movie-card/MovieCard";
import "./movieGrid.scss";

// const movie = {
//   adult: false,
//   backdrop_path: "/7ucaMpXAmlIM24qZZ8uI9hCY0hm.jpg",
//   genre_ids: (3)[(14, 12, 28)],
//   id: 338953,
//   original_language: "en",
//   original_title: "Fantastic Beasts: The Secrets of Dumbledore",
//   overview:
//     "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
//   popularity: 5488.223,
//   poster_path: "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
//   release_date: "2022-04-06",
//   title: "Fantastic Beasts: The Secrets of Dumbledore",
//   video: false,
//   vote_average: 6.8,
//   vote_count: 1592,
// };

const MovieGrid = ({ category, type: propsType }) => {
  let type = propsType;
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [loadingSpiner, setLoadingSpiner] = useState(true);
  const [keyword, setKeyword] = useState("");
  let page = useRef();

  // nếu propsType = null thì set type mặc định để call api là popular theo loại category truyền vào
  if (type) {
  } else {
    switch (category) {
      case cate.movie:
        type = movieType.popular;
        break;

      default:
        type = tvType.popular;
        break;
    }
  }

  // Tạo biến lưu trữ load page tiếp theo khi click loadmore

  // useEffect(() => {
  //   page.current = 1;
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    page.current = 1;
    setLoadingSpiner(true);
    if (category === cate.movie) {
      setLoadingSpiner(true);
      tmdbApi
        .getMoviesList(type, {
          params: { page: page.current },
        })
        .then((res) => {
          setMovies(res.results);
          setLoadingSpiner(false);
        })
        .catch((err) => console.log(err));
    } else {
      tmdbApi
        .getTvList(type, {
          params: { page: page.current },
        })
        .then((res) => {
          setMovies(res.results);
          setLoadingSpiner(false);
        })
        .catch((err) => console.log(err));
    }
  }, [category, type]);

  const handleLoadMore = () => {
    page.current = page.current + 1;
    // console.log("handleLoadMore", page);
    if (category === cate.movie) {
      tmdbApi
        .getMoviesList(type, {
          params: { page: page.current },
        })
        .then((res) => {
          setMovies([...movies, ...res.results]);
        })
        .catch((err) => console.log(err));
    } else {
      tmdbApi
        .getTvList(type, {
          params: { page: page.current },
        })
        .then((res) => {
          setMovies([...movies, ...res.results]);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSearch = () => {
    navigate(`/${category}/search/${keyword}}`);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  // console.log("re-render");
  return (
    <>
      {loadingSpiner ? (
        <div className="loading">
          <BeatLoader color={"#ff0000"} size={100} />
        </div>
      ) : (
        <>
          <div className="section mb-3">
            <div className="search">
              <InputSearch
                placeholder="Search..."
                value={keyword}
                onChange={handleChange}
              />
              <Button className="btn-search small" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>

          <div className="movie-grid">
            {movies.map((item) => {
              return (
                <MovieCard key={item.id} movie={item} category={category} />
              );
            })}
          </div>
          <div className="movie-grid__loadmore">
            <OutlineButton onClick={handleLoadMore} className="small">
              Load more
            </OutlineButton>
          </div>
        </>
      )}
    </>
  );
};

export default MovieGrid;
