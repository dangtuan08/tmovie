import React, { useEffect, useRef } from "react";
import {
  Link,
  matchPath,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";

import logo from "../../assets/tmovie.png";
import "./header.scss";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const navigate = useNavigate();
  let checkPath = pathname;

  // Check pathname nếu có dạng = /:category/type=:type (/movie/type=popular)
  //Cách 1
  const match = matchPath({ path: "/:category/type=:type" }, pathname);

  // Cách 2
  let match1 = useMatch({ path: "/:category/type=:type", end: true });

  // console.log(match);
  // console.log(match1);

  // Nếu có match thì gán checkPath dạng /movie hoặc /tv
  if (match) {
    checkPath = `/${match.params.category}`;
  }
  // console.log({ checkPath });
  // Lấy index của path trùng checkPath trong danh sách headerNav
  const active = headerNav.findIndex((e) => e.path === checkPath);
  // console.log(active);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <Link to="/">tMovies</Link>
        </div>

        <ul className="header__nav">
          {headerNav.map((item, index) => {
            return (
              // nếu index của item = với index tìm được thì thêm class active
              <li key={index} className={`${index === active ? "active" : ""}`}>
                <Link to={item.path}>{item.display}</Link>
                {/* <Link data-content={item.display} to={item.path}>
                  {item.display}
                </Link> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
