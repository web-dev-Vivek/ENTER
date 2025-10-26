"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

function Navbar() {
  const items = ["Search", "Events", "Teams", "Networks"];

  // State to track the current ticker index
  const [index, setIndex] = useState(0);

  // Client-side ticker rotation (useEffect only runs on client)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 1500); // change every 2.5s
    return () => clearInterval(id);
  }, []);

  // Render the ticker separately so that the first item is visible server-side
  const currentItem = index === 0 ? items[0] : items[index];

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-4">
      {/* Left nav links */}
      <div className="space-x-4 dm-serif-text">
        <a href="#" className="text-xl font-medium">
          Home
        </a>
        <a href="#" className="text-xl font-medium">
          About
        </a>
        <a href="#" className="text-xl font-medium">
          Contact
        </a>
      </div>

      {/* Center logo */}
      <div className="text-5xl flex flex-col justify-center items-center font-bold fascinate">
        <h1>EnTer</h1>
        <p className="text-sm -mt-2">faridabad</p>
      </div>

      {/* Right-side ticker */}
      <div className="w-32 h-12 flex items-center gap-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentItem}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl flex items-center justify-center w-[120px]  font-medium dm-serif-text"
          >
            {currentItem}
          </motion.h1>
        </AnimatePresence>
        <button
          aria-label="Search"
          className=" p-2 rounded-full hover:bg-white/10 transition"
          title="Search"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
