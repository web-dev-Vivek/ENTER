"use client";
import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../globals.css";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "WHAT OUR TEAM DID??",
    cards: [
      { img: "hero1.jpg", text: "IIT DELHI" },
      {
        img: "/WhatsApp Video 2025-10-22 at 8.51.32 PM.mp4",
        text: "DEV FEST",
      },
      {
        img: "/Video-58.mp4",
        text: "HACKMOR",
      },
      {
        img: "/WhatsApp Image 2025-10-22 at 8.55.14 PM.jpeg",
        text: "IIIT DELHI",
      },
      {
        img: "/WhatsApp Video 2025-10-24 at 11.15.38 PM.mp4",
        text: "DELHI DEVELOPER MEETUP",
      },
      {
        img: "/WhatsApp Image 2025-10-22 at 8.55.01 PM.jpeg",
        text: "WEB3 PE CHARCHA",
      },
      {
        img: "/Video-44.mp4",
        text: "YMCA EVENT",
      },
      {
        img: "/WhatsApp Image 2025-10-22 at 8.54.59 PM(2).jpeg",
        text: "MICROSOFT OFFICE",
      },
      {
        img: "/WhatsApp Image 2025-10-22 at 8.55.13 PM.jpeg",
        text: "E-Summit",
      },
      {
        img: "/TeamIt.jpg",
        text: "PLAN A EVENT",
      },
    ],
  },
];

function Whatwedid() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!section || !scrollContainer) return;

    const totalScrollWidth = scrollContainer.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalScrollWidth - viewportWidth + 80;

    const tween = gsap.to(scrollContainer, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    ScrollTrigger.addEventListener("refreshInit", () => {
      gsap.set(scrollContainer, { clearProps: "all" });
    });
    ScrollTrigger.refresh();

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(scrollContainer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] dm-serif-text text-[#222013] bg-[#aeb7a8] overflow-hidden"
    >
      <div className="absolute top-15 right-0 rotate-90 pr-20 z-20">
        <svg
          className="o-ui-arrow mb-6 w-10 h-10 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.10162 3.10156L62.9999 62.9999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M63 1.00001L63 63L0.999989 63"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="md:h-[110vh] flex flex-col justify-center bg-[#aeb7a8]">
        <div
          ref={scrollContainerRef}
          className="sticky top-0 flex flex-col justify-center w-fit h-[100vh] px-5 md:px-20 py-16"
        >
          <div className="flex text-5xl md:text-8xl justify-between items-center w-full mb-2">
            <h2 className="font-bold text-[#222013]">Started - 2024</h2>
            <h2 className="font-bold text-[#222013]">Continued...</h2>
          </div>

          {categories.map((category, i) => (
            <div
              key={i}
              className="flex gap-8 border-l-2 border-[#222013] pl-8"
            >
              {category.cards.map((card, index) => {
                const isVideo = card.img.endsWith(".mp4"); // ✅ detect video

                return (
                  <div
                    key={index}
                    className="relative w-[300px] h-[400px] group bg-gray-200 rounded-xl overflow-hidden shrink-0"
                  >
                    {isVideo ? (
                      <video
                        src={card.img}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={card.img}
                        alt={card.text}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}

                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent p-4 flex items-end justify-between">
                      <p className="text-4xl font-semibold leading-tight">
                        {card.text}
                      </p>
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black/40 text-white ">
                        <ChevronRight size={22} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Whatwedid;
