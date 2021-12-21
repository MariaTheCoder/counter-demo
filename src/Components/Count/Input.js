import React from "react";
import "./Input.css";

export default function Input({ value, setValue }) {
  function getInput(val) {
    setValue(Number(val.target.value));
  }

  return (
    <>
      <input
        className="input"
        type="number"
        placeholder="Default value: 0"
        onChange={getInput}
      />
      <p>Current value is: {value} </p>
    </>
  );
}
