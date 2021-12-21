import React, { useState } from "react";
import "./DisplayCounter.css";
import SimpleCounter from "./Count/SimpleCounter";
import ComplexCounter from "./Count/ComplexCounter";

export default function DisplayCounter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <div className="DisplayCounter">
      <h2>This is my counter</h2>
      <div className="intro-text">
        <p>
          This counter app is created with the goal to create a simple yet
          dynamic React application consisting of multiple components. The
          counter application itself consists of two parts which will now be
          further explained.
        </p>
        <h3>The Simple Counter</h3>
        <p>
          The first part is a simple counter application in which the user can
          incremenet or decrement the displayed count by one by pressing one of
          the displayed buttons below.
        </p>
        <h3>The Complex Counter</h3>
        <p>
          The next part of the application consists a more complex counter where
          the user can either multiply or divide the counted number with any
          chosen value. This chosen value has to be typed into the displayed
          input field.
        </p>
      </div>
      <SimpleCounter count={count} setCount={setCount} />
      <ComplexCounter
        count={count}
        setCount={setCount}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}
