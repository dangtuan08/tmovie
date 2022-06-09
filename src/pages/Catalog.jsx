import React from "react";
import { useParams } from "react-router-dom";
import CatalogHeader from "../components/catalog-header/CatalogHeader";
import { category as cate, movieType } from '../api/tmdbApi'
function Catalog() {
  const { category, type } = useParams()
  console.log(category, type);

  return <>
    <CatalogHeader title={category === cate.movie ? 'Movies' : 'TV Series'} />
  </>;
}

export default Catalog;
