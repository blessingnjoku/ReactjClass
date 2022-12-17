import React, { useState } from "react";
import { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const WindowWidth = () => {
  const [windowSize, setWindowSIze] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleSize = () => {
    setWindowSIze(window.innerWidth);
  };
  const handleHeight = () => {
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    console.log("hello class");
    window.addEventListener("resize", handleSize);
    console.log("checking useEffect");
  }, [windowSize]);

  useEffect(() => {
    console.log("hello world");
    window.addEventListener("resize", handleHeight);

    console.log("check now");
  });

  return (
    <div>
      <h1>Current windows size</h1>
      <h2>{windowSize}px</h2>
      <h1>Current Height</h1>
      <h2>{windowHeight}px</h2>
    </div>
  );
};

export default WindowWidth;
