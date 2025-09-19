"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "Service", href: "#" },
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
            ? "mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 rounded-2xl backdrop-blur-md bg-white/10 shadow-2xl"
            : "mx-0 rounded-none bg-transparent"
        )}
        layout
      >
        <div className={cn(
          "mx-auto transition-all duration-700",
          isScrolled ? "px-4 sm:px-6 lg:px-8 max-w-none" : "px-8 sm:px-12 lg:px-16 xl:px-20 max-w-full"
        )}>
          <div className="flex items-center justify-between h-16 py-3 relative transition-all duration-700">
          {/* Navigation - Left side */}
          <motion.nav
            className="hidden md:flex flex-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 mr-8 text-sm font-medium text-white/70 hover:text-white/90 transition-colors duration-300"
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

          {/* Logo - Center (visible when scrolled on desktop, always centered on mobile when scrolled) */}
          <motion.div
            className={cn(
              "absolute left-1/2 transform -translate-x-1/2 transition-all duration-700",
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none md:opacity-0"
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isScrolled ? 1 : 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/logo.png"
                alt="AlNuaimi"
                width={160}
                height={53}
                className="object-contain md:w-[180px] md:h-[60px]"
                priority
              />
            </motion.div>
          </motion.div>

          {/* CTA Buttons - Far Right (hidden on mobile) */}
          <motion.div
            className={cn(
              "hidden md:flex flex-shrink-0 items-center gap-4 transition-all duration-700",
              isScrolled ? "translate-x-0" : "translate-x-4 sm:translate-x-6 lg:translate-x-8"
            )}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="px-6 py-2 rounded-full font-medium text-sm bg-[#00FFFF] text-[#1F3130] hover:bg-[#00FFFF]/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Audit
            </motion.button>
            <motion.button
              className="px-6 py-2 rounded-full font-medium text-sm bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-[#1F3130]/95 backdrop-blur-md border-l border-white/10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full p-6 pt-20">
              {/* Navigation Items */}
              <nav className="flex flex-col space-y-6 mb-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-white/80 hover:text-white transition-colors duration-300 py-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              {/* CTA Buttons */}
              <div className="flex flex-col space-y-4 mt-auto">
                <motion.button
                  className="w-full px-6 py-3 rounded-full font-medium text-sm bg-[#00FFFF] text-[#1F3130] hover:bg-[#00FFFF]/90 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Audit
                </motion.button>
                <motion.button
                  className="w-full px-6 py-3 rounded-full font-medium text-sm bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}