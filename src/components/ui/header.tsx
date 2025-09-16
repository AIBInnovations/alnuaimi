"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <motion.header
      className="fixed left-0 right-0 z-50 transition-all duration-700 ease-out"
      style={{
        top: isScrolled ? "1rem" : "0rem",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={cn(
          "transition-all duration-700 ease-out",
          isScrolled
            ? "mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl"
            : "mx-0 rounded-none bg-transparent"
        )}
        layout
      >
        <div className={cn(
          "mx-auto transition-all duration-700",
          isScrolled ? "px-4 sm:px-6 lg:px-8 max-w-none" : "px-8 sm:px-12 lg:px-16 xl:px-20 max-w-full"
        )}>
          <div className="flex items-center justify-between h-16 py-3 relative transition-all duration-700">
          {/* Logo - Far Left */}
          <motion.div
            className={cn(
              "flex-shrink-0 transition-all duration-700",
              isScrolled ? "translate-x-0" : "-translate-x-4 sm:-translate-x-6 lg:-translate-x-8"
            )}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1
              className="text-2xl font-bold text-white/80 transition-colors duration-500"
              whileHover={{ scale: 1.05 }}
            >
              AlNuaimi
            </motion.h1>
          </motion.div>

          {/* Navigation - Center */}
          <motion.nav
            className={cn(
              "hidden md:flex absolute left-1/2 transform -translate-x-1/2 transition-all duration-700",
              isScrolled ? "space-x-4" : "space-x-6 lg:space-x-8 xl:space-x-10"
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-white/70 hover:text-white/90 transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* CTA Button - Far Right */}
          <motion.div
            className={cn(
              "flex-shrink-0 transition-all duration-700",
              isScrolled ? "translate-x-0" : "translate-x-4 sm:translate-x-6 lg:translate-x-8"
            )}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="px-6 py-2 rounded-full font-medium text-sm bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className={cn(
                "p-2 rounded-md transition-all duration-300",
                isScrolled
                  ? "text-white/90 hover:bg-white/20"
                  : "text-white/70 hover:bg-white/10"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}