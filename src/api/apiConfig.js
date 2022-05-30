const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "76aa868d2d9198f36f8e7f370a9fb825",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
