import React from "react";
import "./Button.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a href={props.href} className={`button ${props.class}`}>
        {props.children}
      </a>
    );
  }
  if (props.to) {
  }
  return (
    <button
      className={`button ${props.class} ${props.disabled ? "disabled" : ""}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
