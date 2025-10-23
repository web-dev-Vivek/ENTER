"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NAV from "./components/NAV";
import Teamdid from "./components/Teamdid";
import Link from "next/link";
import gsap from "gsap";
import TeamHere from "./components/teamhere";
import Ourgoal from "./components/Ourgoal";

export default function Home() {
  const [showPage, setShowPage] = useState(false);
  const enterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowPage(true),
    });

    tl.to(enterRef.current, {
      scale: 1,
      duration: 3,
      ease: "ease.inOut",
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Splash Overlay */}
      {!showPage && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
          <h1
            ref={enterRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bbh-sans-bartle-regular leading-tight"
            style={{ scale: 4 }}
          >
            ENTER
          </h1>
        </div>
      )}

      {/* Main Page Content */}
      {showPage && (
        <>
          <NAV />
          {/* Hero Section */}
          <div className="flex min-h-screen flex-col lg:flex-row bg-[#B3B3B3] items-center justify-center md:justify-evenly px-8 md:px-16 lg:px-24 py-16 text-white">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bbh-sans-bartle-regular leading-tight">
                ENTER
              </h1>
              <p className="text-lg sm:text-xl text-[#e6e6e6] leading-relaxed">
                A platform for students to{" "}
                <span className="text-white font-semibold">attend</span>,{" "}
                <span className="text-white font-semibold">collaborate</span>,
                and <span className="text-white font-semibold">team up</span> to
                create unforgettable experiences together.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/sign-up">
                  <button className="group cursor-pointer relative mt-6 px-8 py-3 overflow-hidden rounded-full bg-white text-black text-lg font-semibold transition-all duration-500 hover:text-white">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#B3B3B3] to-[#2B2B2B] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                    <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                      Explore Events
                    </span>
                  </button>
                </Link>
              </div>
            </div>

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
          <TeamHere />
          <Ourgoal />
        </>
      )}
    </div>
  );
}
