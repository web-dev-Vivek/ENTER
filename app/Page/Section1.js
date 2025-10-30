import React from "react";
import { ChevronRight } from "lucide-react";
import "../globals.css";

const categories = [
  {
    title: "WHAT OUR TEAM DID??",
    cards: [
      { img: "/images/img1.jpg", text: "FIND YOUR RV MATCH" },
      { img: "/images/img2.jpg", text: "IT’S WORTH YOUR WILD" },
      { img: "/images/img3.jpg", text: "FIND A DEALER" },
      { img: "/images/img4.jpg", text: "PLAN A TRIP" },
      { img: "/images/img5.jpg", text: "GO BEYOND" },
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
                    className="relative w-[260px] h-[350px] bg-gray-200 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform"
                  >
                    <img
                      src={card.img}
                      alt={card.text}
                      className="w-full h-full object-cover"
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

            {/* ✅ Vertical Divider Between Categories */}
            {i !== categories.length - 1 && (
              <div className="w-[3px] bg-black/30 rounded-full"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Section1;
