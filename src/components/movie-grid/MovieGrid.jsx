import React, { useCallback, useEffect, useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";

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
  const params = useParams();

  const [movies, setMovies] = useState([]);
  const [loadingSpiner, setLoadingSpiner] = useState(true);
  const [loadMore, setLoadMore] = useState(true);
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

    if (params.keyword) {
      tmdbApi
        .search(category, {
          params: { page: page.current, query: params.keyword },
        })
        .then((res) => {
          setMovies(res.results);
          // console.log(res);
          setLoadingSpiner(false);
          if (res.page < res.total_pages) {
            setLoadMore(true);
          } else {
            setLoadMore(false);
          }
        });
    } else if (category === cate.movie) {
      setLoadingSpiner(true);
      tmdbApi
        .getMoviesList(type, {
          params: { page: page.current },
        })
        .then((res) => {
          setMovies(res.results);
          setLoadingSpiner(false);

          if (res.page === res.total_pages) {
            setLoadMore(false);
          }
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

          if (res.page === res.total_pages) {
            setLoadMore(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [category, type, params.keyword]);

  const handleLoadMore = () => {
    page.current = page.current + 1;
    // console.log("handleLoadMore", page);
    // if (keyword)
    if (params.keyword) {
      tmdbApi
        .search(category, {
          params: { page: page.current, query: params.keyword },
        })
        .then((res) => {
          setMovies([...movies, ...res.results]);
          setLoadingSpiner(false);

          if (res.page < res.total_pages) {
            setLoadMore(true);
          } else {
            setLoadMore(false);
          }
        });
    } else if (category === cate.movie) {
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

  // console.log("re-render", movies);
  return (
    <>
      {loadingSpiner ? (
        <div className="loading">
          <BeatLoader color={"#ff0000"} size={80} />
        </div>
      ) : (
        <>
          <div className="section mb-3">
            <MovieSearch category={category} />
          </div>

          <div className="movie-grid">
            {movies.map((item) => {
              return (
                <MovieCard key={item.id} movie={item} category={category} />
              );
            })}
          </div>
          {loadMore && (
            <div className="movie-grid__loadmore">
              <OutlineButton onClick={handleLoadMore} className="small">
                Load more
              </OutlineButton>
            </div>
          )}
        </>
      )}
    </>
  );
};

const MovieSearch = ({ category }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    if (!value.startsWith(" ")) {
      setKeyword(e.target.value);
    }
  };

  const handleSearchClick = useCallback(() => {
    // console.log(keyword.trim());
    // console.log(`/${category}/search/${keyword}`);

    navigate(`/${category}/search/${keyword.trim()}`);
  });
  return (
    <div className="search">
      <InputSearch
        placeholder="Search..."
        value={keyword}
        onChange={handleChange}
      />
      <Button className="btn-search small" onClick={handleSearchClick}>
        Search
      </Button>
    </div>
  );
};

export default MovieGrid;
