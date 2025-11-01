import React from "react";
import Whatwedid from "../components/Whatwedid";
import "../globals.css";

function Section1() {
  return (
    <section className="w-full min-h-screen border-l-2 border-[#222013] bg-[#aeb7a8]">
      <Whatwedid />
      <div className="w-full h-[100vh] bg-[#aeb7a8]"></div>
    </section>
  );
}

export default Section1;
