import React from "react";

function Button(props) {
  return (
    <button
      onClick={
        props.onClick
          ? () => {
              return props.onClick();
            }
          : null
      }
      className={`btn ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export const OutLineButton = (props) => {
  <Button
    className={`btn-outline ${props.className}`}
    onClick={
      props.onClick
        ? () => {
            return props.onClick();
          }
        : null
    }
  >
    {props.children}
  </Button>;
};

export default Button;
