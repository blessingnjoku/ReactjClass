import React, { useState } from "react";

function Tunde() {
  const [firstN, setfirstN] = useState(0);

  const handleCount = () => {
    setInterval(() => {
      setfirstN((cal) => {
        return cal + 1;
      });
    }, 2000);
  };

  return (
    <div>
      {firstN}
      <button onClick={handleCount}>count</button>
    </div>
  );
}

export default Tunde;
