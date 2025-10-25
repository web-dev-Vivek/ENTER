"use client";
import React, { useState, useEffect } from "react";

const events = [
  {
    id: 1,
    title: "Students from 50+ Colleges",
    date: "Feb 2024",
    description:
      "Discover teammates from different colleges and explore cross-campus collaborations.",
    images: ["/ENTER.jpeg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: 2,
    title: "Skill-based Matchmaking",
    date: "Mar 2024",
    description:
      "Choose team members by their technical expertise — frontend, backend, design, or management.",
    images: ["/hero.jpg", "/ENTER.jpeg"],
  },
  {
    id: 3,
    title: "Interest-Aligned Teams",
    date: "Jun 2024",
    description:
      "Join teams that share your passion — AI, web dev, design, or sustainability.",
    images: ["/hero.jpg", "/ENTER.jpeg", "/hero.jpg"],
  },
  {
    id: 4,
    title: "400+ Active Members",
    date: "Nov 2024",
    description:
      "Pick from hundreds of verified participants ready to collaborate on exciting projects.",
    images: ["/ENTER.jpeg", "/hero.jpg", "/IIT.jpg", "/IIT1.jpg"],
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
    <section className="px-6 overflow-x-scroll py-16 bg-[#B3B3B3]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="w-full mb-12">
          <h2 className="text-4xl text-gray-100 font-bold bbh-sans-bartle-regular">
            No team? No worries!
          </h2>
          <p className="mt-2 text-gray-600">
            Find your perfect teammates based on{" "}
            <span className="text-gray-800 font-medium">
              college, skills, interests,
            </span>
            and{" "}
            <span className="text-gray-800 font-medium">event category.</span>
            Connect, chat, and build your dream team before the event starts.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-10 w-[3px] bg-gray-300 h-[85%] md:h-[85vw] z-0"></div>

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
                  <div className="w-1/2 p-4 flex flex-col justify-center md:justify-start">
                    <h3 className="font-bold text-[10px] md:text-sm text-gray-100 bbh-sans-bartle-regular">
                      {ev.title}
                    </h3>
                    <p className="mt-2 text-[10px] md:text-[13px] text-gray-600">
                      {ev.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-4xl text-center mt-24 text-gray-100 font-bold bbh-sans-bartle-regular">
            So, what are you waiting for? Join us today!
          </h1>
        </div>
      </div>
    </section>
  );
}
