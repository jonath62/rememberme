"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export function RememberMeButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center justify-center mx-auto"
    >
      Get Started <FiArrowRight className="ml-2" />
    </motion.button>
  );
}