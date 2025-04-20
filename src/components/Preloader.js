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
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Preloader logo"
        width={96}
        height={96}
        className="animate-bounce"
      />
    </div>
  );
}
