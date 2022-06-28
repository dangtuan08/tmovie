import React, { useEffect, useState } from "react";
import apiConfig from "../../../api/apiConfig";
import tmdbApi from "../../../api/tmdbApi";
import "./cast.scss";

const Cast = ({ id, category }) => {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCasts = async () => {
      const res = await tmdbApi.credits(category, id);
      //   console.log(res);
      setCasts(res.cast.slice(0, 5));
    };
    getCasts();
  }, [category, id]);

  //   console.log(casts);

  const renderCastItems = () => {
    return casts.map((item) => {
      return (
        <div className="cast__item col l-2 m-3 c-3 " key={item.id}>
          <div className="cast__item--img">
            <img src={`${apiConfig.w500Image(item.profile_path)}`} alt="cast" />
          </div>

          <p>{item.name}</p>
        </div>
      );
    });
  };

  return (
    <div className="section-cast">
      <h3 className="cast-title">Casts</h3>
      <div className="casts row">{renderCastItems()}</div>
    </div>
  );
};

export default Cast;
