import React from "react";
import LenisProvider from "./LenisProvider";
import HomeSection from "./Page/Section";
import TeamDid from "./Page/Section1";
import Feature from "./Page/Section2";
import Recent from "./Page/Section3";

function page() {
  return (
    <LenisProvider>
      <div className="w-full overflow-x-hidden bg-[#aeb7a8]">
        <HomeSection />
        <TeamDid />
        <Feature />
        <Recent />
      </div>
    </LenisProvider>
  );
}

export default page;
