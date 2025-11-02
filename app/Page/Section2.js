import React from "react";
import Findit from "../components/Findit";
import TeamIt from "../components/TeamIt";
import Joinit from "../components/Joinit";

function Section2() {
  return (
    <section className="w-full flex flex-col md:min-h-screen pt-20 border-l-2 border-[#222013] bg-[#aeb7a8]">
      <div className="p-5">
        <svg
          className="o-ui-arrow mb-6 w-10 h-10 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.10162 3.10156L62.9999 62.9999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M63 1.00001L63 63L0.999989 63"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Findit />
      <div className="flex justify-end p-5 ">
        <svg
          className="o-ui-arrow mb-6 w-10 rotate-90 h-10 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.10162 3.10156L62.9999 62.9999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M63 1.00001L63 63L0.999989 63"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <TeamIt />
      <div className="p-5">
        <svg
          className="o-ui-arrow mb-6 w-10 h-10 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.10162 3.10156L62.9999 62.9999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M63 1.00001L63 63L0.999989 63"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Joinit />
    </section>
  );
}

export default Section2;
