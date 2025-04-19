"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  {
    src: "/HomeSection/home1.jpg",
    heading: "Empower Your Business",
    text: "Smart solutions for modern challenges.",
    buttonLabel: "Learn More",
    buttonLink: "/services",
  },
  {
    src: "/HomeSection/Home2.png",
    heading: "Innovate with GTS",
    text: "We bring ideas to life through tech.",
    buttonLabel: "Our Work",
    buttonLink: "/projects",
  },
  {
    src: "/HomeSection/Home3.jpg",
    heading: "Creative Design Studio",
    text: "Where aesthetics meet functionality.",
    buttonLabel: "Explore Designs",
    buttonLink: "/designs",
  },
  {
    src: "/HomeSection/Home4.jpg",
    heading: "Your Digital Partner",
    text: "Build, scale, and grow with confidence.",
    buttonLabel: "Get in Touch",
    buttonLink: "/contact",
  },
];



export default function Home() {
  return (
    <div className="relative w-screen h-[90vh]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        speed={1000}
        autoplay={{
          stopOnLastSlide: true
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh]">
              <Image
                src={item.src}
                alt={`Slide ${index + 1}`}
                width={100}
                height={500}
                className="object-cover z-50 w-full h-full"
                priority
                onError={(e) => console.error("Image failed to load:", e)}
              />

              <div className="absolute inset-0 bg-black bg-transparent flex flex-col items-center justify-center text-white text-center px-6 z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {item.heading}
                </h1>
                <p className="text-lg md:text-xl mb-6">{item.text}</p>
                <Link href={item.buttonLink}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition">
                    {item.buttonLabel}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
