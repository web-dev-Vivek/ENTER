"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

function Navbar() {
  const items = ["Search", "Events", "Teams", "Networks"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const currentItem = index === 0 ? items[0] : items[index];

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-[#222013] backdrop-blur-sm">
      {/* Left nav links */}
      <div className="hidden md:flex space-x-4 dm-serif-text">
        <a
          href="#"
          className="text-base md:text-xl font-medium hover:text-orange-400 transition"
        >
          Home
        </a>
        <a
          href="#"
          className="text-base md:text-xl font-medium hover:text-orange-400 transition"
        >
          About
        </a>
        <a
          href="#"
          className="text-base md:text-xl font-medium hover:text-orange-400 transition"
        >
          Contact
        </a>
      </div>

      {/* Center logo */}
      <div className="text-3xl sm:text-4xl md:text-5xl flex flex-col justify-center items-center ">
        <h1 className="font-bold fascinate">EnTer</h1>
        <p className="text-xs sm:text-sm md:text-base -mt-1 sm:-mt-2">
          faridabad
        </p>
      </div>

      {/* Right-side ticker + search */}
      <div className="flex items-center justify-center">
        <div className="w-20 sm:w-28 md:w-24 h-6 flex items-center md:justify-end overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentItem}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="text-sm sm:text-base md:text-xl flex items-center justify-center w-[100%] font-medium dm-serif-text"
            >
              {currentItem}
            </motion.h1>
          </AnimatePresence>
        </div>

        <button
          aria-label="Search"
          className="p-2 rounded-full flex justify-start hover:bg-white/10 transition"
          title="Search"
        >
          <Search size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
