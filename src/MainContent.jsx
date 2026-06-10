"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import App from "./App"; // your Home section
import Menu from "./menu/Menu"; // your second section

export default function MainContent() {
  const [currentPage, setCurrentPage] = useState("home");

  const goToSecondSection = () => setCurrentPage("menu");
  const goToHome = () => setCurrentPage("home");

  // Define slide directions
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  // direction: +1 means moving forward (to menu), -1 means back (to home)
  const direction = currentPage === "menu" ? 1 : -1;

  return (
    <div className="relative w-screen h-screen overflow-x-hidden bg-black">
      <AnimatePresence custom={direction} mode="wait">
        {currentPage === "home" && (
          <motion.div
            key="home"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute top-0 left-0 w-full h-full"
          >
            <App goToSecondSection={goToSecondSection} />
          </motion.div>
        )}

        {currentPage === "menu" && (
          <motion.div
            key="menu"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute top-0 left-0 w-full h-full"
          >
            <Menu goToHome={goToHome} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
