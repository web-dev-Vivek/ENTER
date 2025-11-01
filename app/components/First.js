"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/modern-equipped-computer-lab.jpg",
  "/group-people-sound-mixer-station.jpg",
  "/people-taking-part-high-protocol-event.jpg",
  "/woman-using-dj-station-stage.jpg",
];

function First() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}

export default First;
