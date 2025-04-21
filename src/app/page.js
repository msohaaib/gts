"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useEffect } from "react";
import Obutton from "../components/OButton"; // Ensure ../components/OButton.js exists and exports a default component
import CountUp from "react-countup"; // Requires `npm install react-countup`

const images = [
  {
    src: "/HomeSection/home1.jpg",
    heading: "Welcome to Gafar Technical Services LLC",
    text: "Your trusted partner in construction excellence.",
    buttonLabel: "Learn More",
    buttonLink: "/about",
  },
  {
    src: "/HomeSection/Home2.jpg",
    heading: "Waterproofing",
    text: "We offer professional waterproofing solutions to protect your property from water damage.",
    buttonLabel: "Learn More",
    buttonLink: "/services",
  },
  {
    src: "/HomeSection/Home3.jpg",
    heading: "Core Cutting",
    text: "Our core cutting service is perfect for creating precise, circular holes in concrete, brick, or stone surfaces.",
    buttonLabel: "Learn More",
    buttonLink: "/designs",
  },
  {
    src: "/HomeSection/Home4.jpeg",
    heading: "Cable Pulling",
    text: "Our cable pulling services are designed to provide efficient and safe installation of electrical and communication cables for commercial, industrial, and residential projects.",
    buttonLabel: "Learn More",
    buttonLink: "/contact",
  },
];

const strengths = [
  {
    title: "Proven Expertise & Experience",
    description:
      "We bring years of hands-on experience in delivering top-notch technical services, with a team of certified professionals.",
    image: "/HomeSection/Home2.jpg",
  },
  {
    title: "Quality and Safety",
    description:
      "We don’t cut corners. Our work meets the highest quality and safety standards, ensuring long-term reliability and peace of mind.",
    image: "/HomeSection/home1.jpg",
  },
  {
    title: "Timely Delivery",
    description:
      "We pride ourselves on being responsive, efficient, and meeting deadlines without compromising quality.",
    image: "/HomeSection/Home3.jpg",
  },
  {
    title: "Trusted by Top Clients",
    description:
      "We’ve earned the trust of industry leaders and respected organizations – a testament to our quality and commitment.",
    image: "/HomeSection/home1.jpg",
  },
];

const clients = [
  {
    name: "A&M General Contracting",
    logo: "/HomeSection/home1.jpg",
  },
  { name: "AL Firas", logo: "/HomeSection/home1.jpg" },
  { name: "Baps Hindu Mandir", logo: "/HomeSection/home1.jpg" },
  {
    name: "AL Sahil General Contracting",
    logo: "/HomeSection/home1.jpg",
  },
  { name: "EHV", logo: "/HomeSection/home1.jpg" },
  { name: "Y&H", logo: "/HomeSection/home1.jpg" },
];

const getRandomTransform = () => {
  const rotation = Math.random() * 10 - 5;
  const offsetY = Math.random() * 20 - 10;
  const hoverRotation = Math.random() > 0.5 ? 3 : -3;
  return { rotation, offsetY, hoverRotation };
};

export default function Home() {
  const [clientTransforms, setClientTransforms] = useState(
    clients.map(() => ({
      rotation: 0,
      offsetY: 0,
      hoverRotation: 0,
    }))
  );

  useEffect(() => {
    const transforms = clients.map(() => getRandomTransform());
    setClientTransforms(transforms);
  }, []);

  return (
    <div className="relative w-screen">
      {/* Swiper Slider */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-10">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
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
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                  priority
                  onError={(e) => console.error("Image failed to load:", e)}
                />
                <div className="bg-black bg-opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-20">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    <span className="relative bottom-5">Welcome to</span> <br />
                    <span className="text-[#F58634]">
                      Gafar Technical Services LLC
                    </span>
                  </h1>
                  <p className="text-lg md:text-2xl italic mb-6 drop-shadow-lg">
                    {item.text}
                  </p>
                  <Link href={item.buttonLink} className="mt-6">
                    <Obutton className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition drop-shadow-md">
                      {item.buttonLabel}
                    </Obutton>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="h-[100vh]" />

      {/* Introduction Section */}
      <section className="bg-lines-pattern mb-28">
        <div className="my-12">
          <div className="">
            <h1 className="pl-96 text-left text-3xl md:text-5xl font-bold text-gray-800 relative animate-fadeIn my-2">
              WHO WE ARE
            </h1>
          </div>
          <div className="w-32 h-1 bg-[#F58634] rounded-full mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 py-8 bg-white rounded-lg relative z-20 animate-fadeIn">
          <div className="space-y-4 text-lg md:text-xl text-gray-600">
            <p>
              Welcome to{" "}
              <span className="font-semibold text-[#F58634]">
                GAFAR TECHNICAL SERVICES
              </span>
              , your go-to provider for top-tier construction support and
              technical expertise.
            </p>
            <p>
              From Cable Pulling and Core Cutting to Excavation and
              Waterproofing, we deliver smart, safe, and scalable solutions
              tailored to your needs.
            </p>
            <p>
              Trust our skilled professionals to handle your project with
              precision, speed, and full commitment to quality.
            </p>
            <Link href="/contact">
              <Obutton className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-transform duration-300 hover:scale-105">
                Contact Us
              </Obutton>
            </Link>
          </div>
          <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-lg ring-2 ring-[#F58634] ring-opacity-40">
            <Image
              src="/HomeSection/Home3.jpg"
              alt="Technical Services"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-tl-3xl rounded-br-3xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="mt-12">
        <div className="mb-3">
          <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800 relative animate-fadeIn my-2">
            WHY CHOOSE US
          </h1>
        </div>
        <div className="w-32 h-1 bg-[#F58634] rounded-full mx-auto"></div>
      </div>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8 justify-items-center">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="w-full max-w-[18rem] flex flex-col rounded-xl bg-white text-gray-700 shadow-lg animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={strength.image || "/HomeSection/home1.jpg"}
                    alt={strength.title}
                    fill
                    className="object-cover rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out"
                    onError={(e) =>
                      console.error(
                        `Failed to load image for ${strength.title}`
                      )
                    }
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-3 block text-xl font-semibold text-gray-900">
                    {strength.title}
                  </h5>
                  <p className="block text-base font-light leading-relaxed text-gray-600">
                    {strength.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valued Clients Section */}
      <section className="py-16 px-6 bg-gray-50 relative z-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12 relative animate-fadeIn">
            Our Valued Clients
            <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#F58634] rounded-full"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => {
              const { rotation, offsetY, hoverRotation } =
                clientTransforms[index];
              return (
                <div
                  key={index}
                  className="relative bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out animate-bounceIn flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-3 border border-[gradient-to-r from-blue-500 to-blue-300]"
                  style={{
                    transform: `rotate(${rotation}deg) translateY(${offsetY}px)`,
                    animationDelay: `${(0.1 * (index + 1)).toFixed(1)}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `rotate(${
                      rotation + hoverRotation
                    }deg) translateY(${offsetY}px) scale(1.05)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${rotation}deg) translateY(${offsetY}px)`;
                  }}
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 p-1">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="rounded-full hover:scale-110 hover:rotate-6 transition-transform duration-300"
                      onError={(e) =>
                        console.error(`Failed to load logo for ${client.name}`)
                      }
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-sm md:text-base font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {client.name}
                    </p>
                    <span className="block w-16 h-0.5 mx-auto md:mx-0 mt-2 bg-[#F58634] rounded-full"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-100 to-gray-200 relative z-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12 relative animate-fadeIn">
            Our Achievements
            <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#F58634] rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="relative bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeIn"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex justify-center mb-4">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a2 2 0 00-2-2h-3m-4 4H7a2 2 0 01-2-2v-2m12-6a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                <CountUp
                  end={100}
                  duration={2}
                  delay={0.2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h3>
              <p className="text-lg font-medium text-gray-700 text-center">
                Satisfied Clients
              </p>
            </div>
            <div
              className="relative bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex justify-center mb-4">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-2">
                <CountUp
                  end={500}
                  duration={2}
                  delay={0.4}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h3>
              <p className="text-lg font-medium text-gray-700 text-center">
                Completed Projects
              </p>
            </div>
            <div
              className="relative bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex justify-center mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-2">
                <CountUp
                  end={10}
                  duration={2}
                  delay={0.6}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h3>
              <p className="text-lg font-medium text-gray-700 text-center">
                Ongoing Projects
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
