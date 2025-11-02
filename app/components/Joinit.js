"use client";
import React from "react";

function Joinit() {
  return (
    <section className="relative w-full h-screen bg-[url('../public/Join.jpg')] bg-cover  bg-center flex items-center justify-center text-white">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col justify-between w-full h-full px-8 md:px-16 py-10">
        {/* Top-left heading */}
        <div>
          <p className="uppercase tracking-widest text-sm md:text-base font-semibold text-orange-400">
            connect & grow
          </p>
          <h1 className="text-[4rem] md:text-[8rem] font-extrabold leading-none">
            JOIN IT
          </h1>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center">
          {/* Left side description */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              GROW THE COMMUNITY
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-md">
              Share your experiences, ideas, and wins. Inspire others through
              your journey and become part of the growing student network.
            </p>
          </div>

          {/* Button at bottom-right */}
          <button className="mt-6 md:mt-0 px-8 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-full text-sm md:text-base font-semibold uppercase tracking-wider">
            Join The Network →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Joinit;
