import React from "react";
import "./Button.css";

export default function Button({ buttonText, onClick, count }) {
  return (
    <>
      <button
        className="buttons"
        onClick={onClick}
        disabled={count > 999999 ? true : false}
      >
        {buttonText}
      </button>
    </>
  );
}
