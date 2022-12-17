import React, { useParams } from "react";

const User = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>User </h1>
      <h1>User id is {id} </h1>
    </div>
  );
};
export default User;
