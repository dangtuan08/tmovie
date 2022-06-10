import React from "react";
import Button from "../button/Button";
import "./inputSearch.scss";

const InputSearch = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search..." />
      <Button className="btn-search small">Search</Button>
    </div>
  );
};

export default InputSearch;
