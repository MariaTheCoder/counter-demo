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
        <div className="displayCurrentCount">
          {count > 999999 ? count.toExponential(4) : count.toLocaleString()}
        </div>
        <Button onClick={incrementCount} buttonText="Increment" count={count} />
        <Button onClick={decrementCount} buttonText="Decrement" count={count} />
      </div>
    </>
  );
}
