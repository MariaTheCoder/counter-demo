import React from "react";
import './Input.css'

export default function Input({ value, setValue }) {

  function getInput(val) {
    setValue(val.target.value);
  }

  return (
    <>
      <input className="input" type="number" onChange={getInput} />
      <p>Current value is: {value} </p>
    </>
  );
}