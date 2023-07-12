import React, { useReducer } from "react";
import "./Input.css";

const Input = (props) => {

  useReducer({
    
  })  
  const input =
    props.type === "text" ? (
      <input
        type="text"
        id={props.id}
        className="input"
        placeholder={props.placeholder}
      />
    ) : (
      <textarea rows={props.rows} id={props.id} className="input" />
    );

  return input;
};

export default Input;
