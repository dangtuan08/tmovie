import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button
      onClick={
        props.onClick
          ? () => {
              return props.onClick();
            }
          : null
      }
      className={`btn ${props.className ? props.className : ""}`}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className ? props.className : ""}`}
      onClick={
        props.onClick
          ? () => {
              return props.onClick();
            }
          : null
      }
    >
      {props.children}
    </Button>
  );
};

export default Button;
