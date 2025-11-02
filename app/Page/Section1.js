import React from "react";
import Whatwedid from "../components/Whatwedid";
import "../globals.css";

function Section1() {
  return (
    <section className="w-full md:min-h-screen border-l-2 border-[#222013] bg-[#aeb7a8]">
      <Whatwedid />
      <div className="w-full flex justify-between gap-5 items-center p-4 md:pr-36 h-[40vh] ">
        <div className="w-[60vw] h-[1px] bg-white"></div>
        <p className="md:w-[30vw] text-2xl text-end leading-tight ">
          Already part of the student hustle? Dive into this space for event
          updates, collaboration ideas, and stories from young innovators
          shaping the tech scene. Get Inspired with ENTER.
        </p>
      </div>
    </section>
  );
}

export default Section1;
