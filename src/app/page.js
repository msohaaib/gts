"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import Obutton from "../components/OButton";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    src: "/HomeSection/home1.jpg",
    heading: "Welcome to Gafar Technical Services LLC",
    text: "Your trusted partner in construction excellence.",
    buttonLabel: "Learn More",
    buttonLink: "/about",
  },
  {
    src: "/HomeSection/waterproffing.jpg",
    heading: "Waterproofing",
    text: "We offer professional waterproofing solutions to protect your property from water damage.",
    buttonLabel: "Learn More",
    buttonLink: "/services",
  },
  {
    src: "/HomeSection/corecutting.jpg",
    heading: "Core Cutting",
    text: "Our core cutting service is perfect for creating precise, circular holes in concrete, brick, or stone surfaces.",
    buttonLabel: "Learn More",
    buttonLink: "/designs",
  },
  {
    src: "/HomeSection/cablepulling.jpeg",
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
    image: "/WhychooseUs/customer-satisfaction.png",
  },
  {
    title: "Quality and Safety",
    description:
      "We don’t cut corners. Our work meets the highest quality and safety standards, ensuring long-term reliability and peace of mind.",
    image: "/WhychooseUs/safetyquality.gif",
  },
  {
    title: "Timely Delivery",
    description:
      "We pride ourselves on being responsive, efficient, and meeting deadlines without compromising quality.",
    image: "/WhychooseUs/timedelivery.jpeg",
  },
  {
    title: "Trusted by Top Clients",
    description:
      "We’ve earned the trust of industry leaders and respected organizations – a testament to our quality and commitment.",
    image: "/WhychooseUs/trust.png",
  },
  {
    title: "Customized Services",
    description:
      "We understand every project is unique. Our team works closely with you to provide tailored solutions that match your exact requirements.",
    image: "/WhychooseUs/customized.avif",
  },
];

const servicesData = [
  {
    id: 1,
    image: "/ServicesSection/cablepulling.jpeg",
    title: "Cable Pulling",
    description:
      "Our cable pulling services are designed to provide efficient and safe installation of electrical and communication cables for commercial, industrial, and residential projects.",
    animate: 200,
  },
  {
    id: 2,
    image: "/ServicesSection/excavation.jpg",
    title: "Excavation Services",
    description:
      "Our excavation services are designed to support your construction and infrastructure projects, including site preparation, trenching, and grading. We also provide specialized services for drainage, foundation work, and utility installation.",
    animate: 400,
  },
  {
    id: 3,
    image: "/ServicesSection/corecutting.jpg",
    title: "Core Cutting",
    description:
      "Our core cutting service is perfect for creating precise, circular holes in concrete, brick, or stone surfaces. Whether it's for plumbing, electrical, or HVAC installations, we provide clean and accurate cuts without compromising the integrity of your structure.",
    animate: 600,
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
  if (typeof window === "undefined") {
    return { rotation: 0, offsetY: 0, hoverRotation: 0 };
  }
  const rotation = Math.random() * 10 - 5;
  const offsetY = Math.random() * 20 - 10;
  const hoverRotation = Math.random() > 0.5 ? 3 : -3;
  return { rotation, offsetY, hoverRotation };
};

export default function Home() {
  const defaultTransforms = clients.map(() => ({
    rotation: 0,
    offsetY: 0,
    hoverRotation: 0,
  }));
  const [clientTransforms, setClientTransforms] = useState(defaultTransforms);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const transforms = clients.map(() => getRandomTransform());
      setClientTransforms(transforms);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 100,
      once: false,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Swiper Slider */}
      <div className="absolute top-0 left-0 w-full h-screen z-10">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            stopOnLastSlide: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-hero",
            prevEl: ".swiper-button-prev-hero",
          }}
          modules={[Autoplay, Navigation]}
          className="w-full h-full"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover w-full h-full"
                  priority
                  onError={(e) => console.error("Image failed to load:", e)}
                />
                <div className="bg-opacity-40 absolute inset-0" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-20">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg">
                    {index === 0 ? (
                      <>
                        <span className="text-[#F58634]">
                          {item.heading.split(" ").slice(0, 2).join(" ")}
                        </span>{" "}
                        <br />
                        {item.heading.split(" ").slice(2).join(" ")}{" "}
                      </>
                    ) : (
                      item.heading
                    )}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl italic mb-4 max-w-3xl">
                    {item.text}
                  </p>
                  <Link href={item.buttonLink} className="mt-4">
                    <Obutton className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm sm:text-base rounded-lg transition drop-shadow-md">
                      {item.buttonLabel}
                    </Obutton>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Navigation Buttons for Hero Slider */}
          <div className="swiper-button-prev-hero hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-30 group bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:from-white hover:to-white hover:text-orange-500 cursor-pointer">
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </div>
          <div className="swiper-button-next-hero hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-30 group bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:from-white hover:to-white hover:text-orange-500 cursor-pointer">
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </Swiper>
      </div>

      <div className="h-screen" />

      {/* Introduction Section */}
      <section className="bg-lines-pattern my-12 sm:my-16">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center max-w-6xl mx-auto px-4 py-8 bg-white rounded-lg relative z-20">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-600"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              WHO WE ARE
            </h1>
            <div className="w-20 h-1 bg-[#F58634] rounded-full"></div>
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
              <Obutton className="mt-4 text-white px-4 py-2 text-sm sm:text-base rounded-lg transition-transform duration-300 hover:scale-105">
                Contact Us
              </Obutton>
            </Link>
            <a href="/8719 DBMS lab 10.pdf" download className="mx-4 w-full">
              <Obutton className="mt-4 text-white px-4 py-2 text-sm sm:text-base rounded-lg transition-transform duration-300 hover:scale-105">
                Download Brochure
              </Obutton>
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-lg ring-2 ring-[#F58634] ring-opacity-40"
          >
            <Image
              src="/IntroductionSection/whoweare.jpg"
              alt="Technical Services"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-tl-3xl rounded-br-3xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="mt-8">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          WHY CHOOSE US
        </h1>
        <div className="w-20 h-1 bg-[#F58634] rounded-full mx-auto mt-2"></div>
      </div>

      <section className="py-8 px-4 relative mb-28">
        <div className="max-w-7xl mx-auto">
          <Swiper
            spaceBetween={16}
            slidesPerView={4}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              stopOnLastSlide: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-strengths",
              prevEl: ".swiper-button-prev-strengths",
            }}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 8 },
              480: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="relative h-full w-full overflow-visible"
          >
            {strengths.map((strength, index) => (
              <SwiperSlide key={index} className="h-full">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="w-full max-w-xs h-full flex flex-col rounded-xl bg-white text-gray-700 shadow-md border border-[#F58634]/30 hover:shadow-lg hover:scale-105 transition-all duration-300 mx-auto"
                >
                  <div className="relative mx-auto -mt-6 w-[calc(100%-1rem)] h-40 overflow-hidden rounded-xl shadow-sm">
                    <Image
                      src={strength.image}
                      alt={strength.title}
                      fill
                      className="object-contain rounded-xl hover:scale-110 transition-transform duration-500 ease-in-out"
                      onError={(e) =>
                        console.error(
                          `Failed to load image for ${strength.title}`
                        )
                      }
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow min-h-[12rem]">
                    <h5 className="mb-2 text-base sm:text-lg font-semibold text-gray-900">
                      {strength.title}
                    </h5>
                    <p className="text-sm sm:text-base font-light leading-relaxed text-gray-600 flex-grow">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 px-4 bg-gradient-to-b from-gray-100 to-gray-200 relative z-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 relative">
            Our Services
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#F58634] rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <div
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay={service.animate}
                key={service.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col items-center text-center max-w-sm mx-auto"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-t-xl"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 tracking-wide px-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 px-4 pb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Obutton>
              <Link href="/services">View All Services</Link>
            </Obutton>
          </div>
        </div>
      </section>

      {/* Valued Clients Section */}
      <section
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="py-12 px-4 bg-gray-50 relative z-30"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 relative">
            Our Valued Clients
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#F58634] rounded-full"></span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => {
              const { rotation, offsetY, hoverRotation } =
                clientTransforms[index];
              return (
                <div
                  key={index}
                  className="relative bg-white bg-opacity-20 backdrop-blur-lg p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 border border-blue-300"
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
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 p-1">
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
                  <div className="text-center sm:text-left">
                    <p className="text-xs sm:text-sm font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {client.name}
                    </p>
                    <span className="block w-12 h-0.5 mx-auto sm:mx-0 mt-1 bg-[#F58634] rounded-full"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-gray-100 to-gray-200 relative z-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 relative">
            Our Achievements
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#F58634] rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="relative bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex justify-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              <h3 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                <CountUp
                  end={100}
                  duration={2}
                  delay={0.2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h3>
              <p className="text-base font-medium text-gray-700 text-center">
                Satisfied Clients
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="relative bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex justify-center mb-3">
                <svg
                  className="w-8 h-8 text-green-600"
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
              <h3 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-2">
                <CountUp
                  end={500}
                  duration={2}
                  delay={0.4}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h3>
              <p className="text-base font-medium text-gray-700 text-center">
                Completed Projects
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="relative bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex justify-center mb-3">
                <svg
                  className="w-8 h-8 text-orange-500"
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
              <h3 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-2">
                <CountUp
                  end={10}
                  duration={2}
                  delay={0.6}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h3>
              <p className="text-base font-medium text-gray-700 text-center">
                Ongoing Projects
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
