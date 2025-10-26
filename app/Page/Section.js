import First from "../components/First";
import Navbar from "../components/Navbar";

export default function HomeSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* SEO text rendered server-side */}
      <Navbar />
      <div className="absolute z-10 w-full bbh-sans-bartle h-full flex justify-center items-end">
        <div className="text-white text-center leading-tight font-bold select-none">
          <h1 className="text-7xl uppercase flex pl-20 w-[100vw] h-[20vh] bbh-sans-bartle-regular">
            Find
          </h1>
          <h1 className="text-7xl uppercase flex pr-20 justify-end w-[100vw] h-[20vh] bbh-sans-bartle-regular">
            Your
          </h1>
          <h1 className="text-7xl uppercase flex w-[100vw] h-[20vh] justify-center items-end bbh-sans-bartle-regular opacity-95">
            Events
          </h1>
        </div>
      </div>

      {/* Background slideshow client-only */}
      <First />
    </section>
  );
}
