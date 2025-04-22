"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          top: 0,
          left: 0,
          right: 0,
          height: "0.25rem",
          originX: 0,
          backgroundColor: "#F58634",
          zIndex: 60,
        }}
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        } ${isOpen ? "py-4" : "py-2 sm:py-3"}`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-end justify-between">
          {/* Logo and Title */}
          <div className="flex items-end space-x-2 sm:space-x-3 lg:space-x-4">
            <Link href="/" className="z-50" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={60}
                height={30}
                priority
                className="object-contain drop-shadow-md w-12 sm:w-16 lg:w-20 mb-2"
              />
            </Link>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight flex flex-col ">
              <span className="text-[#F58634]">Gafar Technical</span>
              <span className="text-[#373435]">Services LLC</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6 items-center mb-4">
            {visibleLinks.map((link) => (
              <Button
                key={link.name}
                href={link.href}
                isActive={pathname === link.href}
                className="font-medium text-sm lg:text-base drop-shadow-md hover:text-[#F58634] transition-colors"
              >
                {link.name}
              </Button>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            ref={buttonRef}
            className="lg:hidden z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6 text-[#373435] drop-shadow-md"
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
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 transition-transform duration-300 z-40 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Title in Mobile Menu */}
        {visibleLinks.map((link) => (
          <Button
            key={link.name}
            href={link.href}
            isActive={pathname === link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl sm:text-3xl font-semibold drop-shadow-md text-[#373435] hover:text-[#F58634] transition-colors"
          >
            {link.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
