import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rate: "top_rate",
};

export const tvType = {
  popular: "popular",
  top_rate: "top_rate",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  // baseUrl/movie/movieType[type]api_key=76aa868d2d9198f36f8e7f370a9fb825
  // https://api.themoviedb.org/3/movie/popular?api_key=76aa868d2d9198f36f8e7f370a9fb825
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },

  // /search/movie
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  // /movie/{movie_id}
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  //   /movie/{movie_id}/credits
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  //   GET /movie/{movie_id}/similar
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
