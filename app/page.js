import Image from "next/image";
import NAV from "./components/NAV";
import Teamdid from "./components/Teamdid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#B3B3B3] flex flex-col">
      <NAV />

      {/* Hero Section */}
      <div className="flex min-h-screen flex-col lg:flex-row items-center justify-center md:justify-evenly px-8 md:px-16 lg:px-24 py-16 text-white">
        {/* Left Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bbh-sans-bartle-regular leading-tight">
            ENTER
          </h1>
          <p className="text-lg sm:text-xl text-[#e6e6e6] leading-relaxed">
            A platform for students to{" "}
            <span className="text-white font-semibold">connect</span>,{" "}
            <span className="text-white font-semibold">collaborate</span>, and{" "}
            <span className="text-white font-semibold">team up</span> to create
            unforgettable experiences together.
          </p>

          {/* CTA Button */}
          <button className="mt-6 px-6 py-3 bg-white text-black text-lg font-semibold rounded-full hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300">
            Explore Events
          </button>
        </div>

        {/* Right Image Section */}
        <div className="mt-10 lg:mt-0 lg:w-[45%] w-full flex justify-center">
          <Image
            src="/hero1.jpg"
            alt="Event Collaboration"
            width={500}
            height={500}
            className="rounded-3xl shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>

      <Teamdid />
    </div>
  );
}
