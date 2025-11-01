"use client";
import React from "react";
import Whatwedid from "../components/Whatwedid";
import "../globals.css";

function Section1() {
  return (
    <section className="w-full min-h-screen bg-[#aeb7a8]">
      <Whatwedid />
      <div className="w-[100vw] h-[100vh] bg-red-600"></div>
    </section>
  );
}

export default Section1;
