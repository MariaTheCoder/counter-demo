import React from "react";
import "./ComplexCounter.css";
import Button from "./Button";
import Input from "./Input";

export default function ComplexCounter({ count, value, setCount, setValue }) {
  function multiplyCount() {
    if (count === 0 || value === 0 || !value)
      return alert("Anything multiplied with 0 is 0");

    setCount(count * value);
  }

  function divideCount() {
    if (Math.abs(value) === 0) {
      return alert("Cannot divide by 0");
    }

    setCount(count / value);
  }

  return (
    <>
      <div className="complexCounter">
        <h3>The Complex Counter</h3>
        <Input
          setValue={setValue}
          value={
            value > 999999 ? value.toExponential(4) : value.toLocaleString()
          }
        />
        <Button
          onClick={multiplyCount}
          buttonText={`Multiply ${
            count > 999999 ? count.toExponential(4) : count.toLocaleString()
          } and ${
            value > 999999 ? value.toExponential(4) : value.toLocaleString()
          }`}
        />
        <Button
          onClick={divideCount}
          buttonText={`Divide ${
            count > 999999 ? count.toExponential(4) : count.toLocaleString()
          } by ${
            value > 999999 ? value.toExponential(4) : value.toLocaleString()
          }`}
        />
      </div>
    </>
  );
}
