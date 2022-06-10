import React from "react";
import { useParams } from "react-router-dom";
import CatalogHeader from "../components/catalog-header/CatalogHeader";
import { category as cate, movieType } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";

function Catalog() {
  const { category, type } = useParams();
  console.log(category, type);

  return (
    <>
      <CatalogHeader title={category === cate.movie ? "Movies" : "TV Series"} />
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} type={type ? type : null} />
        </div>
      </div>
    </>
  );
}

export default Catalog;
