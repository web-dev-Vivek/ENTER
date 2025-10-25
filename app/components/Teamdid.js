"use client";
import React, { useState, useEffect, useRef } from "react";

const events = [
  {
    id: 4,
    title: "IIT DELHI - UI/UX HACKATHON",
    date: "Sept 2025",
    description: "Worked on UI/UX projects and team competitions.",
    images: [
      "/WhatsApp Image 2025-10-22 at 8.54.57 PM.jpeg",
      "/WhatsApp Image 2025-10-22 at 8.54.59 PM(1).jpeg",
      "/WhatsApp Image 2025-10-24 at 11.00.23 PM.jpeg",
      "/hero.jpg",
      "/ENTER.jpeg",
    ],
  },
  {
    id: 1,
    title: "DELHI DEVELOPER MEET TOUR",
    date: "JUNE 2025",
    description: "Attended sessions, workshops, and networking events.",
    images: [
      "/WhatsApp Video 2025-10-24 at 11.15.38 PM.mp4", // VIDEO!
      "/WhatsApp Image 2025-10-24 at 11.29.04 PM(1).jpeg",
      "/WhatsApp Image 2025-10-24 at 11.29.57 PM.jpeg",
    ],
  },
  {
    id: 2,
    title: "GOOGLE DEV FEST",
    date: "SEPT 2025",
    description: "Attended startups tech talks and also shared our ideas.",
    images: ["/WhatsApp Video 2025-10-22 at 8.51.32 PM.mp4"],
  },
  {
    id: 6,
    title: "Microsoft Azure - Web3 pe Charcha",
    date: "AUG 2025",
    description: "Worked on UI/UX projects and team competitions.",
    images: [
      "/WhatsApp Image 2025-10-22 at 8.54.59 PM(2).jpeg",
      "/WhatsApp Image 2025-10-22 at 8.54.59 PM.jpeg",
      "/yash.jpeg",
    ],
  },
  {
    id: 8,
    title: "IIT DEHLI - Adobe designing",
    date: "AUG 2025",
    description: "Worked on UI/UX projects and team competitions.",
    images: [
      "/WhatsApp Image 2025-10-22 at 8.55.14 PM(1).jpeg",
      "/WhatsApp Image 2025-10-22 at 8.55.18 PM.jpeg",
    ],
  },
  {
    id: 3,
    title: "MANAV RACHNA - HACKMOR",
    date: "OCT 2024",
    description: "Built prototype apps and presented to judges.",
    images: [
      "/Video-58.mp4",
      "SnapInsta.to_463597058_557964693393352_1870869404072298829_n.jpg",
      "SnapInsta.to_463720177_1537510687136852_373010303481400760_n.jpg",
      "SnapInsta.to_463769110_529910823330670_5386812848561762757_n.jpg",
      "SnapInsta.to_463800390_903023818135938_268998359787801868_n.jpg",
    ],
  },
  {
    id: 5,
    title: "YMCA - TECHNOVATE",
    date: "FEB 2025",
    description: "Worked on UI/UX projects and team competitions.",
    images: ["/Video-44.mp4"],
  },
  {
    id: 7,
    title: "IIIT DEHLI - E-Summit 2025",
    date: "JULY 2025",
    description: "Worked on UI/UX projects and team competitions.",
    images: [
      "/WhatsApp Image 2025-10-22 at 8.55.14 PM.jpeg",
      "/WhatsApp Image 2025-10-22 at 8.55.13 PM.jpeg",
      "/WhatsApp Image 2025-10-22 at 8.55.01 PM.jpeg",
    ],
  },
];

export default function VerticalTimeline() {
  const [activeIndex, setActiveIndex] = useState(events.map(() => 0));
  const videoRefs = useRef(events.map(() => []));

  useEffect(() => {
    const intervals = events.map((ev, i) => {
      return setInterval(() => {
        const current = ev.images[activeIndex[i]];
        const isVideo = current?.endsWith(".mp4");

        if (!isVideo) {
          setActiveIndex((prev) =>
            prev.map((val, index) =>
              index === i ? (val + 1) % ev.images.length : val
            )
          );
        }
      }, 2000);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, [activeIndex]);

  const handleNext = (i) => {
    setActiveIndex((prev) =>
      prev.map((val, idx) =>
        idx === i ? (val + 1) % events[i].images.length : val
      )
    );
  };

  const handlePrev = (i) => {
    setActiveIndex((prev) =>
      prev.map((val, idx) =>
        idx === i
          ? (val - 1 + events[i].images.length) % events[i].images.length
          : val
      )
    );
  };

  return (
    <section className="px-2 md:px-6 overflow-x-scroll py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="w-full mb-12">
          <h2 className="text-4xl bbh-sans-bartle-regular text-[#B3B3B3] font-bold">
            WHAT OUR TEAM DID YET?
          </h2>
        </div>

        <div className="relative ">
          <div className="absolute top-0 left-10 w-[3px] bg-gray-300 h-[93%] md:h-[95%]"></div>

          <div className="flex flex-col space-y-16 relative">
            {events.map((ev, i) => {
              const current = ev.images[activeIndex[i]];
              const isVideo = current.endsWith(".mp4");
              return (
                <div
                  key={ev.id}
                  className="flex flex-col md:flex-row items-start md:items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-white font-semibold bg-[#2B2B2B] px-3 py-1 rounded-full">
                      {ev.date}
                    </div>
                    <span className="block w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white shadow-md"></span>
                  </div>

                  <div className="md:ml-10 mt-4 md:mt-0 flex items-stretch overflow-hidden w-full max-w-3xl relative">
                    <div className="w-1/2 h-[220px] overflow-hidden relative">
                      {isVideo ? (
                        <video
                          ref={(el) => (videoRefs.current[i] = el)}
                          src={current}
                          className="w-full h-full object-center"
                          autoPlay
                          loop
                          muted
                        />
                      ) : (
                        <img
                          src={current}
                          alt={ev.title}
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                      )}

                      {/* Swipe Buttons */}
                      <button
                        onClick={() => handlePrev(i)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full"
                      >
                        ‹
                      </button>

                      <button
                        onClick={() => handleNext(i)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full"
                      >
                        ›
                      </button>
                    </div>

                    <div className="w-1/2 p-4 flex flex-col justify-center md:justify-start">
                      <h3 className="font-bold text-[10px] md:text-sm bbh-sans-bartle-regular text-[#B3B3B3]">
                        {ev.title}
                      </h3>
                      <p className="mt-2 text-[10px] md:text-[13px] text-gray-600">
                        {ev.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h1 className="text-4xl bbh-sans-bartle-regular mt-24 text-[#B3B3B3] font-bold">
            JOIN THESE FRAME...
          </h1>
        </div>
      </div>
    </section>
  );
}
