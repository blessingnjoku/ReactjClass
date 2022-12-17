import React from "react";

const Button = ({ clickNow, Register, children }) => {
  return (
    <div>
      <div
        style={{
          width: "380px",
          height: "225px",
          borderRadius: "10px",
          color: "#fff",
          marginBottom: "30px",
          backgroundColor: "blue",
        }}
      >
        {clickNow}
        {children}
      </div>
      <button>{Register}</button>
    </div>
  );
};
export default Button;
