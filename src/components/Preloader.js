"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={96} // same as w-24 in Tailwind (24 * 4 = 96px)
        height={96}
        className="animate-bounce"
      />
    </div>
  );
}
