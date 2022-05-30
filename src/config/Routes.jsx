import React from "react";

import { Routes as Switch, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

function Routes() {
  return (
    <Switch>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:category/:id"} element={<Detail />} />
      <Route path={"/:category"} element={<Catalog />} />
      <Route path={"/:category/search/:keyword"} element={<Catalog />} />
    </Switch>
  );
}

export default Routes;
