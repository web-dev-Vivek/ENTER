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
      {
        img: "/WhatsApp Image 2025-10-24 at 11.29.04 PM(1).jpeg",
        text: "FIND YOUR RV MATCH",
      },
      {
        img: "/WhatsApp Image 2025-10-24 at 11.00.23 PM.jpeg",
        text: "IT’S WORTH YOUR WILD",
      },
      {
        img: "/SnapInsta.to_463769110_529910823330670_5386812848561762757_n.jpg",
        text: "FIND A DEALER",
      },
      {
        img: "/WhatsApp Image 2025-10-22 at 8.55.14 PM.jpeg",
        text: "PLAN A TRIP",
      },
      {
        img: "/WhatsApp Image 2025-10-22 at 8.54.59 PM(1).jpeg",
        text: "GO BEYOND",
      },
      {
        img: "/WhatsApp Image 2025-10-24 at 11.00.23 PM.jpeg",
        text: "IT’S WORTH YOUR WILD",
      },
      {
        img: "/SnapInsta.to_463769110_529910823330670_5386812848561762757_n.jpg",
        text: "FIND A DEALER",
      },
      {
        img: "/WhatsApp Image 2025-10-22 at 8.55.14 PM.jpeg",
        text: "PLAN A TRIP",
      },
      {
        img: "/WhatsApp Image 2025-10-24 at 11.00.23 PM.jpeg",
        text: "IT’S WORTH YOUR WILD",
      },
      {
        img: "/SnapInsta.to_463769110_529910823330670_5386812848561762757_n.jpg",
        text: "FIND A DEALER",
      },
      {
        img: "/WhatsApp Image 2025-10-22 at 8.55.14 PM.jpeg",
        text: "PLAN A TRIP",
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
    const scrollDistance = totalScrollWidth - viewportWidth + 80; // ✅ ensure right padding visible

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
      className="relative w-full h-[100vh] bg-[#b5beac] overflow-hidden"
    >
      {/* Spacer gives vertical scroll */}
      <div className="h-[200vh]">
        <div
          ref={scrollContainerRef}
          className="sticky top-0 flex flex-col justify-end w-fit h-[100vh] px-20 py-16"
        >
          <div className="flex justify-between items-center w-full mb-12">
            <h2 className="text-6xl font-bold text-[#222013]">
              Started - 2024
            </h2>
            <h2 className="text-6xl font-bold text-[#222013]">Continued...</h2>
          </div>

          {categories.map((category, i) => (
            <div
              key={i}
              className="flex gap-8 border-l-2 border-[#222013] pl-8"
            >
              {category.cards.map((card, index) => (
                <div
                  key={index}
                  className="relative w-[260px] h-[350px] group bg-gray-200 rounded-xl overflow-hidden shrink-0"
                >
                  <img
                    src={card.img}
                    alt={card.text}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-4 flex items-center justify-between">
                    <p className="text-lg font-semibold leading-tight">
                      {card.text}
                    </p>
                    <ChevronRight size={22} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Whatwedid;
