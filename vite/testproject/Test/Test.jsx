import "./Test.css";
import React from "react";

function template() {
   alert("hello world")
  return (
    <div className="test">
      <h1>Test</h1>
       <button onClick={template}>click</button>
    </div>
  );
};

export default template;
