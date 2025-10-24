"use client";
import React, { useState, useEffect } from "react";

const events = [
  {
    id: 4,
    title: "IIT DELHI - UI/UX HACKATHON",
    date: "Nov 2024",
    description: "Worked on UI/UX projects and team competitions.",
    images: ["/ENTER.jpeg", "/hero.jpg", "/IIT.jpg", "/IIT1.jpg"],
  },
  {
    id: 1,
    title: "DELHI DEVELOPER MEET TOUR",
    date: "Feb 2024",
    description: "Attended sessions, workshops, and networking events.",
    images: ["/ENTER.jpeg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: 2,
    title: "GOOGLE DEV FEST",
    date: "May 2024",
    description: "Participated in coding challenges and tech talks.",
    images: ["/hero.jpg", "/ENTER.jpeg"],
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev.map((val, i) => (val + 1) % events[i].images.length)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 overflow-x-scroll py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="w-full mb-12">
          <h2 className="text-4xl text-[#B3B3B3] font-bold bbh-sans-bartle-regular">
            WHAT OUR TEAM DID YET?
          </h2>
          <p className="mt-2 text-gray-600">
            Timeline of events we attended and contributed to.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-10 w-[3px] bg-gray-300 h-[93%] md:h-[85vw] z-0"></div>

          <div className="flex flex-col space-y-16 relative">
            {events.map((ev, i) => (
              <div
                key={ev.id}
                className="flex flex-col md:flex-row items-start md:items-center relative z-10"
              >
                {/* Date + Marker */}
                <div className="flex items-center gap-4">
                  <div className="text-white font-semibold bg-[#2B2B2B] px-3 py-1 rounded-full ">
                    {ev.date}
                  </div>
                  <div className="relative">
                    <span className="block w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white shadow-md"></span>
                  </div>
                </div>

                {/* Event Card */}
                <div className="md:ml-10 mt-4 md:mt-0 flex items-stretch overflow-hidden w-full max-w-3xl">
                  {/* Fixed Image Container */}
                  <div className="w-1/2 h-[220px] overflow-hidden">
                    <img
                      src={ev.images[activeIndex[i]]}
                      alt={ev.title}
                      className="w-full h-full object-cover flex transition-all duration-500"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="w-1/2 p-4 flex flex-col ">
                    <h3 className="font-bold text-[#B3B3B3] bbh-sans-bartle-regular">
                      {ev.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{ev.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-4xl mt-24 text-[#B3B3B3] font-bold bbh-sans-bartle-regular">
            JOIN OUR TEAM
          </h1>
        </div>
      </div>
    </section>
  );
}
