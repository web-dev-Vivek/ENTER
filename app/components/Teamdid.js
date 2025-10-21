"use client";
import React, { useState, useEffect } from "react";

const events = [
  {
    id: 1,
    title: "DELHI DEVELOPER MEET TOUR",
    date: "Feb 2024",
    description: "Attended sessions, workshops, and networking events.",
    images: ["/event1-1.jpg", "/event1-2.jpg", "/event1-3.jpg"],
  },
  {
    id: 2,
    title: "GOOGLE DEV FEST",
    date: "May 2024",
    description: "Participated in coding challenges and tech talks.",
    images: ["/event2-1.jpg", "/event2-2.jpg"],
  },
  {
    id: 3,
    title: "MANAV RACHNA - HACKMOR",
    date: "Aug 2024",
    description: "Built prototype apps and attended mentoring sessions.",
    images: ["/event3-1.jpg", "/event3-2.jpg", "/event3-3.jpg"],
  },
  {
    id: 4,
    title: "IIT DELHI - UI/UX HACKATHON",
    date: "Nov 2024",
    description: "Worked on UI/UX projects and team competitions.",
    images: ["/event4-1.jpg", "/event4-2.jpg"],
  },
];

export default function VerticalTimeline() {
  const [activeIndex, setActiveIndex] = useState(events.map(() => 0));

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev.map((val, i) => (val + 1) % events[i].images.length)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto gap-8">
        {/* Heading */}
        <div className="md:w-full md:mb-12 ">
          <h2 className="text-3xl text-[#B3B3B3] font-bold bbh-sans-bartle-regular">
            WHAT OUR TEAM DID YET?
          </h2>
          <p className="mt-2 text-gray-600">
            Timeline of events we attended and contributed to.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="md:w-3/4 relative">
          {/* Vertical line */}
          <div className="absolute top-0 left-10 z-0 w-1 bg-gray-300 h-full"></div>

          <div className="flex flex-col space-y-12">
            {events.map((ev, i) => (
              <div
                key={ev.id}
                className="flex flex-col md:flex-row items-start md:items-center relative sm:z-20"
              >
                <div className="md:block flex items-center gap-2">
                  {/* Date */}
                  <div className="md:w-1/5 flex justify-end bg-[#2B2B2B] md:bg-transparent rounded-full md:rounded-none md:pr-6 p-2 md:text-gray-500 text-white font-semibold relative sm:z-20">
                    {ev.date}
                  </div>

                  {/* Marker */}
                  <div className="relative sm:z-20">
                    <span className="block w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white shadow-md"></span>
                  </div>
                </div>

                {/* Event card */}
                <div className="md:ml-6 mt-4 md:mt-0 bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-3/5 relative sm:z-20">
                  <div className="w-full h-48 relative overflow-hidden">
                    <img
                      src={ev.images[activeIndex[i]]}
                      alt={ev.title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{ev.title}</h3>
                    <p className="mt-1 text-gray-600">{ev.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
