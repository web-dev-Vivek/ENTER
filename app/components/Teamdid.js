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
    date: "Feb 2024",
    description: "Attended sessions, workshops, and networking events.",
    images: [
      "/WhatsApp Video 2025-10-24 at 11.15.38 PM.mp4", // VIDEO!
      "/WhatsApp Image 2025-10-24 at 11.15.14 PM.jpeg",
      "/WhatsApp Image 2025-10-24 at 11.15.13 PM.jpeg",
    ],
  },
  {
    id: 2,
    title: "GOOGLE DEV FEST",
    date: "May 2024",
    description: "Participated in coding challenges and tech talks.",
    images: ["/WhatsApp Video 2025-10-22 at 8.51.32 PM.mp4", "/ENTER.jpeg"],
  },
  {
    id: 3,
    title: "MANAV RACHNA - HACKMOR",
    date: "Aug 2024",
    description: "Built prototype apps and attended mentoring sessions.",
    images: ["/hero.jpg", "/ENTER.jpeg", "/hero.jpg"],
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
      }, 1000);
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
    <section className="px-6 overflow-x-scroll py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="w-full mb-12">
          <h2 className="text-4xl bbh-sans-bartle-regular text-[#B3B3B3] font-bold">
            WHAT OUR TEAM DID YET?
          </h2>
        </div>

        <div className="relative ">
          <div className="absolute top-0 left-10 w-[3px] bg-gray-300 h-full"></div>

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
                          className="w-full h-full object-cover"
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

                    <div className="w-1/2 p-4 flex flex-col">
                      <h3 className="font-bold bbh-sans-bartle-regular text-[#B3B3B3]">
                        {ev.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{ev.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h1 className="text-4xl mt-24 text-[#B3B3B3] font-bold">
            JOIN OUR TEAM
          </h1>
        </div>
      </div>
    </section>
  );
}
