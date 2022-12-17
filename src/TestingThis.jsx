import React from "react";
import "./Testinthis.css";
import Jack from "./images/Jack.jpg";

const Items = [
  {
    name: "Tunde",
    age: "23",
    location: "Ibadan",
    Position: "staff",
    images:
      "https://unsplash.com/photos/GfQEdpIkkuw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3NzEzNTkx&force=true",
  },
  {
    name: "Samuel",
    age: "18",
    location: "Ogun state",
    Position: "Head boy/Terrorist",
    images: "https://unsplash.com/photos/AUgTvvQxDhg/download?force=true",
  },
  {
    name: "Samson",
    age: "25",
    location: "Yaba",
    Position: "Prof",
    images: { Jack },
  },
  {
    name: "Seyi",
    age: "10",
    location: "Ilorin",
    Position: "Dj",
  },
  {
    name: "Bashir",
    age: "27",
    location: "ojota",
    Position: "Politician",
  },
  {
    name: "Ubong",
    age: "26",
    location: "Sambisa",
    Position: "Boko haram",
  },
];

const TestingThis = () => {
  return (
    <div className="container">
      {Items.map((item) => {
        return (
          <div className="main-box">
            <div style={{ width: "150px", height: "150px" }}>
              <img
                src={item.images}
                style={{ width: "100%", height: "100%" }}
                alt="art"
              />
            </div>
            <div>
              <h1>Blessing</h1>
            </div>
            <div>
              <span>Lagos</span>
            </div>
            <div>
              <p>Teacher</p>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TestingThis;
