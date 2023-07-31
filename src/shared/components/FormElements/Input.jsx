import React, { useEffect, useReducer } from "react";
import "./Input.css";
import { validator } from "../../util/validator";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validator),
      };
    case "TOUCHED":
      return { ...state, isTouched: true };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validator: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCHED" });
  };

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const input =
    props.type === "text" ? (
      <input
        type="text"
        id={props.id}
        className={`input ${
          inputState.isTouched && !inputState.isValid && props.validators.length
            ? "input-required"
            : ""
        }`}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        rows={props.rows}
        id={props.id}
        className={`input ${
          inputState.isTouched && !inputState.isValid && props.validators.length
            ? "input-required"
            : ""
        }`}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    );

  return input;
};

export default Input;
