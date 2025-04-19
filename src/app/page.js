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
    <div className="relative w-screen">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        speed={1000}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false,
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
                width={1920}
                height={1080}
                className="object-cover w-full h-full"
                priority
                onError={(e) => console.error("Image failed to load:", e)}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-10">
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

      <section className="py-12 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/HomeSection/Home4.jpg"
                alt="Technical Services"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left animate-fadeIn">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              Professional Technical Services for All Your Construction and
              Infrastructure Needs
            </h2>
            <div className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4">
              <p>
                Welcome to{" "}
                <span className="font-semibold">GAFAR TECHNICAL SERVICES</span>,
                your trusted partner for professional technical services. With
                years of experience, we specialize in Cable Pulling, Wall
                Cutting, Core cutting, Excavation, and Waterproofing, offering
                tailored solutions for both residential and commercial projects.
              </p>
              <p>
                Our skilled team utilizes the latest technology to deliver fast,
                reliable, and high-quality results, ensuring your projects are
                completed on time and within budget. At{" "}
                <span className="font-semibold">GAFAR TECHNICAL SERVICES</span>,
                we prioritize safety, clear communication, and client
                satisfaction.
              </p>
              <p>
                Let us handle your technical needs—contact us today for expert
                services you can trust!
              </p>
            </div>
            <Link href="/contact">
              <button className="mt-6 md:mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base md:text-lg transition-transform duration-300 hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:py-16 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left animate-fadeIn">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              About Us
            </h2>
            <div className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4">
              <p>
                At{" "}
                <span className="font-semibold">GAFAR TECHNICAL SERVICES</span>,
                we are committed to delivering excellence in every project we
                undertake. With a legacy of innovation and reliability, we have
                built a reputation as a leader in the construction and
                infrastructure industry.
              </p>
              <p>
                Our team of experts brings a wealth of knowledge and dedication
                to every job, ensuring that we meet the unique needs of our
                clients. From small-scale residential projects to large
                commercial developments, we approach every task with precision
                and care.
              </p>
            </div>
            <Link href="/about">
              <button className="mt-6 md:mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base md:text-lg transition-transform duration-300 hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/HomeSection/Home5.jpg"
                alt="About Gafar Technical Services"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
