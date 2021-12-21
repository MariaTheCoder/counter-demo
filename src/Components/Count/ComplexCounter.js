import React from "react";
import "./ComplexCounter.css";
import Button from "./Button";
import Input from "./Input";

export default function ComplexCounter({ count, value, setCount, setValue }) {
  function multiplyCount() {
    if (count === 0 || value === 0)
      return console.warn("Anything multiplied with 0 is 0");

    setCount(count * value);
  }

  function divideCount() {
    if (Math.abs(value) === 0) {
      return console.warn("Cannot divide by 0");
    }

    setCount(count / value);
  }

  return (
    <>
      <div className="complexCounter">
        <h3>The Complex Counter</h3>
        <Input setValue={setValue} value={value} />
        <Button
          onClick={multiplyCount}
          buttonText={"Multiply " + count + " and " + value}
        />
        <Button
          onClick={divideCount}
          buttonText={"Divide " + count + " by " + value}
        />
      </div>
    </>
  );
}
