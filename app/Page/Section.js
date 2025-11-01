import First from "../components/First";
import Navbar from "../components/Navbar";
import AnimatedArrow from "../components/AnimatedArrow";

export default function HomeSection() {
  return (
    <section className="relative w-full h-screen overflow-x-hidden">
      {/* SEO text rendered server-side */}
      <Navbar />
      <div className="absolute z-10 w-full bbh-sans-bartle h-full flex justify-center items-end">
        <div className="text-white text-center leading-tight font-bold select-none">
          <h1 className="text-4xl md:text-7xl uppercase flex pl-4 md:pl-20 w-[100vw] h-[20vh] bbh-sans-bartle-regular">
            Find
          </h1>
          <h1 className="text-4xl md:text-7xl uppercase flex pr-4 md:pr-20 items-center md:items-start justify-end w-[100vw] h-[20vh] bbh-sans-bartle-regular">
            Your
          </h1>
          <h1 className="text-4xl  md:text-7xl uppercase flex w-[100vw] h-[20vh] justify-center items-end bbh-sans-bartle-regular opacity-95">
            <div className="flex pb-10 flex-row justify-center items-center">
              Events
              <AnimatedArrow />
            </div>
          </h1>
        </div>
      </div>

      {/* Background slideshow client-only */}
      <First />
    </section>
  );
}
