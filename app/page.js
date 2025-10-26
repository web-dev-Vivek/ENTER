import React from "react";

import LenisProvider from "./LenisProvider";
import HomeSection from "./Page/Section";

function page() {
  return (
    <LenisProvider>
      <HomeSection />
    </LenisProvider>
  );
}

export default page;
