import React from "react";
import "./SimpleCounter.css";
import Button from "./Button";

export default function SimpleCounter({ count, setCount }) {
  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="simpleCounter">
        <h3>The Simple Counter</h3>
        <div className="DisplayCurrentCount">{count}</div>
        <Button onClick={incrementCount} buttonText="Increment" />
        <Button onClick={decrementCount} buttonText="Decrement" />
      </div>
    </>
  );
}
