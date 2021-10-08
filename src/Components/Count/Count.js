import React, { useState } from "react";
import './Count.css'
import Input from "./Input";

export default function Count() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  return (
    <>
      <div className="Count">{count}</div>
      <button className="buttons" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="buttons" onClick={() => setCount(count - 1)}>Decrement</button>
      <Input setValue={setValue} value={value} />
      <button className="buttons" onClick={() => setCount(count * value)}>Multiply {count} and {value}</button>
      <button className="buttons" onClick={() => setCount(count / value)}>Divide {count} by {value}</button>
    </>
  );
}