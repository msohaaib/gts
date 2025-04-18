"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 transition-all duration-300 ${
        isOpen ? "py-6" : "py-2"
      } md:py-4`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-50" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={30}
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
              className="text-gray-800 hover:text-[#F58634] transition-colors font-medium"
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
            className="w-8 h-8 text-gray-800"
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
              className="text-2xl font-semibold hover:text-[#F58634] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
