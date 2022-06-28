import React, { useEffect, useState } from "react";
import { OutlineButton } from "../button/Button";
import "./buttonToTop.scss";
const ButtonToTop = () => {
  const [toTop, setToTop] = useState(false);
  // console.log("to top");
  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY > 100) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`btn-to-top ${toTop && "show"}`}>
      <OutlineButton onClick={scrollUp}>^</OutlineButton>
    </div>
  );
};

export default ButtonToTop;
