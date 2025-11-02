import React from "react";
import LenisProvider from "./LenisProvider";
import HomeSection from "./Page/Section";
import TeamDid from "./Page/Section1";
import Feature from "./Page/Section2";
import Recent from "./Page/Section3";

function page() {
  return (
    <LenisProvider>
      <HomeSection />
      <TeamDid />
      <Feature />
      <Recent />
    </LenisProvider>
  );
}

export default page;
