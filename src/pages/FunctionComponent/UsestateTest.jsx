import React, { useState } from "react";

const UsestateTest = () => {
  const [update, setUpdate] = useState("this is function ");
  const handleClick = () => {
    if (update === "this is function") {
      setUpdate("this is a usestate");
    } else setUpdate("this is function");
  };

  return (
    <div>
      {update}
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default UsestateTest;
