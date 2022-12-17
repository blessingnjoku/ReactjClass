import React from "react";

function clickme() {
  console.log("you clicked it");
}

const index = () => {
  return (
    <React.Fragment>
      <div onClick={clickme}> this a footer</div>
      <div>this is the companies contact page</div>
    </React.Fragment>
  );
};

export default index;
