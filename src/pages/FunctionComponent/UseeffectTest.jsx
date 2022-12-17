import React, { useState } from "react";
import { useEffect } from "react";

const UseeffectTest = () => {
  const [number, setNumber] = useState(0);
  const [myText, setMyText] = useState("this is a React class");

  //   const handleIncrease = () => {
  //     setNumber(number + 1);
  //   };

  useEffect(() => {
    console.log("nice");
    if (number == 4) {
      console.log("this is working");
    }
  });
  return (
    <div>
      <h1>{myText}</h1>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>click here</button>
    </div>
  );
};

export default UseeffectTest;
