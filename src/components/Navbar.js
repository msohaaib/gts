"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const pathname = usePathname();

  // Scroll Indicator Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { name: "Home", href: "/", visible: true },
    { name: "Services", href: "/services", visible: true },
    { name: "About", href: "/about", visible: true },
    { name: "Contact", href: "/contact", visible: true },
  ];

  const visibleLinks = navLinks.filter((link) => link.visible);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0, // Place at the very top of the viewport
          left: 0,
          right: 0,
          height: 4, // Slim bar for a sleek look
          originX: 0,
          backgroundColor: "#F58634", // Matches your theme
          zIndex: 60, // Above the Navbar (z-50) but below mobile menu (z-40 when open)
        }}
      />

      {/* Navbar */}
      <nav
        className={`w-full z-50 bg-white shadow-md px-4 transition-all duration-300 ${
          isOpen ? "py-4" : "py-1"
        } md:py-2`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-50" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={48}
              height={24}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {visibleLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#F58634]"
                    : "text-gray-800 hover:text-[#F58634]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            ref={buttonRef}
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={`fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 transition-transform duration-300 z-40 transform
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            md:hidden`}
          >
            {visibleLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-[#F58634]"
                    : "text-gray-800 hover:text-[#F58634]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
