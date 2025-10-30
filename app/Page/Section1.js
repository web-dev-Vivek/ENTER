import React from "react";
import { ChevronRight } from "lucide-react";
import "../globals.css";

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
    ],
  },
];

function Section1() {
  return (
    <section className="w-full min-h-screen bg-[#b5beac] px-6 py-20">
      {/* SINGLE SCROLL CONTAINER */}
      <div className="flex w-full gap-20 overflow-x-auto no-scrollbar">
        {categories.map((category, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col shrink-0">
              {/* Title */}
              <h2 className="bbh-sans-bartle-regular text-5xl">
                {category.title}
              </h2>

              {/* Cards */}
              <div className="flex gap-6 mt-8">
                {category.cards.map((card, index) => (
                  <div
                    key={index}
                    className="relative w-[260px] h-[350px] group bg-gray-200 rounded-xl overflow-hidden transition-transform"
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
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="mt-12 text-start text-lg md:text-xl font-medium bbh-sans-bartle-regular">
        Already chasing innovation? Explore events, find teammates, and get
        inspired by student changemakers — all in one place with ENTER.
      </div>
    </section>
  );
}

export default Section1;
