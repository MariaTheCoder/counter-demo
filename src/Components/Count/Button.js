import React from "react";
import './Button.css'

export default function Button({ buttonText, onClick }) {

  return (
    <>
      <button className="buttons" onClick={onClick}>{buttonText}</button>
    </>
  );
}