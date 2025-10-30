import React from "react";
import LenisProvider from "./LenisProvider";
import HomeSection from "./Page/Section";
import TeamDid from "./Page/Section1";

function page() {
  return (
    <LenisProvider>
      <HomeSection />
      <TeamDid />
    </LenisProvider>
  );
}

export default page;
