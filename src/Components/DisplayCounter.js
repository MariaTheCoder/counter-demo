import React from "react";
import './DisplayCounter.css'
import Count from "./Count/Count";

export default function DisplayCounter() {
  return (
    <div className="DisplayCounter">
      <p>This is my counter</p>
      <Count />
    </div>
  );
}