import React, { useState } from "react";

const IncreaseNum = () => {
  const [count, setCount] = useState(0);
  //   const handleCounter = () => {
  //     setCount("one");
  //   };

  const handleCountspeed = () => {
    setInterval(() => {
      setCount((cal) => {
        return cal + 1;
      });
    }, 2000);
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>Counter</h1>
      <h4>{count}</h4>
      <button onClick={handleCountspeed}>click me</button>
    </div>
  );
};

export default IncreaseNum;
