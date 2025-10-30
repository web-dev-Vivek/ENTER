"use client";
import { motion } from "framer-motion";

export default function AnimatedArrow() {
  return (
    <motion.div
      className="h-12 w-12 md:h-16 md:w-16 rounded-md bg-red-200 flex items-center justify-center ml-2"
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5 md:h-6 md:w-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    </motion.div>
  );
}
