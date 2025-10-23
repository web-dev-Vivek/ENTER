"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

function NAV() {
  const [isOpen, setIsOpen] = useState(false);

  // Parent + child animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-none text-white z-50 px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <a
        href="/"
        className="text-2xl font-bold bbh-sans-bartle-regular tracking-wide"
      >
        ENTER
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex p-2 bg-white/20 backdrop-blur-lg rounded-full space-x-7 w-auto justify-center md:w-[32%] text-lg font-medium">
        {["Home", "Events", "Team", "About", "Contact"].map((item) =>
          item === "Home" ? (
            <a key={item} href="/" className="hover:text-gray-300 transition">
              {item}
            </a>
          ) : (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-gray-300 transition"
            >
              {item}
            </a>
          )
        )}
      </div>
      <Link href="/sign-in">
        <button className="bg-white cursor-pointer md:block hidden text-black px-4 py-2 rounded-full font-medium hover:bg-black hover:text-white transition duration-300 ease-in">
          Sign In
        </button>
      </Link>

      {/* Mobile Hamburger */}
      <div className="md:hidden z-[70]">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu Toggle">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay + Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay background */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsOpen(false)} // close menu on click outside
            />

            {/* Slide-in Menu */}
            <motion.div
              key="mobile-menu"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-screen w-2/3 bg-black/90 backdrop-blur-xl text-white flex flex-col items-center pt-20 space-y-8 text-2xl shadow-lg md:hidden z-50"
            >
              {["Home", "Events", "Team", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  variants={itemVariants}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-400 transition"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NAV;
