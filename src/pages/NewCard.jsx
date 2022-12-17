import React from "react";
import { useState } from "react";
import "./Newcard.css";

const cardContent = [
  {
    id: 1,
    name: "Samuel",
    age: "20yrs",
    location: "iyana-paja",
    hobby: "stuborn boy",
    message: "this is good",
  },
  {
    id: 2,
    name: "Bashir",
    age: "20yrs",
    location: "Osun",
    hobby: "politician",
  },
  {
    id: 3,
    name: "Seyi",
    age: "18yrs",
    location: "ibadan",
    hobby: "youngboy",
  },
  {
    id: 4,
    name: "Tunde",
    age: "20yrs",
    location: "Bariga",
    hobby: "late night texting",
  },
  {
    id: 5,
    name: "Seyi",
    age: "18yrs",
    location: "ibadan",
    hobby: "youngboy",
  },
  {
    id: 6,
    name: "Tunde",
    age: "20yrs",
    location: "Bariga",
    hobby: "late night texting",
  },
  {
    id: 7,
    name: "Samuel",
    age: "20yrs",
    location: "iyana-paja",
    hobby: "stuborn boy",
  },
];

const NewCard = (props) => {
  const [items, setItems] = useState(cardContent);
  const handleDelete = () => {
    setItems([]);
  };

  return (
    <div className="container">
      {items.map((dataInfo) => {
        return (
          <div className="main-box">
            <h1>{dataInfo.name}</h1>
            <span>{dataInfo.age}</span>
            <p>{dataInfo.location}</p>
            <a>{dataInfo.hobby}</a>
            <p>{dataInfo.message}</p>
          </div>
        );
      })}
      <button onClick={handleDelete}>Delete all</button>
    </div>
  );
};

export default NewCard;
