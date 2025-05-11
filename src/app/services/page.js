import React from "react";
import Image from "next/image";
import Link from "next/link";
import Obutton from "../../components/OButton";

const services = [
  {
    id: 1,
    title: "Cable Pulling",
    description:
      "Our cable pulling services are designed to provide efficient and safe installation of electrical and communication cables for commercial, industrial, and residential projects. Whether it’s trenching, underground, or overhead installation, we use the latest tools and techniques to ensure precise and timely execution, minimizing disruptions and ensuring long-lasting results.",
    image: "/Services/cablepulling.jpeg",
    dataAosImage: "fade-right",
    dataAosText: "fade-left",
  },
  {
    id: 2,
    title: "Gliding and Termination",
    description:
      "Our Gliding and Termination Services ensure the seamless routing and secure connection of electrical and communication cables in residential, commercial, and industrial projects. We specialize in precision cable gliding through conduits, trays, and hard-to-reach spaces, minimizing damage and ensuring safety. Our termination solutions guarantee reliable connectivity, whether it’s for power, data, or control systems. Using high-quality tools and standards-compliant practices, we deliver durable, efficient, and organized cable systems tailored to your project needs.",
    servicesIncluded: [
      "Cable gliding through ducts, trays, and conduits",
      "Cable termination for LV, ELV, and communication systems",
      "Labeling, testing, and documentation",
      "Compliance with safety and industry standards",
    ],
    image: "/Services/glidingtermination.jpeg",
    dataAosImage: "fade-left",
    dataAosText: "fade-right",
  },
  {
    id: 3,
    title: "Wall Cutting",
    description:
      "We specialize in wall cutting for both structural and non-structural walls. Using state-of-the-art equipment, our team can handle cutting through concrete, brick, and other materials for renovations, utility installations, or structural changes. Our precise, clean cuts ensure minimal disruption to your space and reduce the need for costly repairs.",
    image: "/Services/wallcutting.jpg",
    dataAosImage: "fade-right",
    dataAosText: "fade-left",
  },
  {
    id: 4,
    title: "Excavation Services",
    description:
      "Our excavation services are designed to support your construction and infrastructure projects, including site preparation, trenching, and grading. We also provide specialized services for drainage, foundation work, and utility installation.",
    image: "/Services/excavation.jpg",
    dataAosImage: "fade-left",
    dataAosText: "fade-right",
  },
  {
    id: 5,
    title: "Waterproofing",
    description:
      "We offer professional waterproofing solutions to protect your property from water damage. Our team specializes in interior and exterior waterproofing for kitchen, washrooms, balcony, basements, foundations, roofs, and walls. By using advanced materials and techniques, we provide long-term protection against leaks, moisture, and dampness, helping to preserve the integrity of your structure.",
    image: "/Services/waterproffing.jpg",
    dataAosImage: "fade-right",
    dataAosText: "fade-left",
  },
  {
    id: 6,
    title: "Core Cutting",
    description:
      "Our core cutting service is perfect for creating precise, circular holes in concrete, brick, or stone surfaces. Whether it's for plumbing, electrical, or HVAC installations, we provide clean and accurate cuts without compromising the integrity of your structure.",
    image: "/Services/corecutting.jpg",
    dataAosImage: "fade-left",
    dataAosText: "fade-right",
  },
];

const Services = () => {
  return (
    <>
      <div className="relative min-h-[50vh] md:min-h-[60vh]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center md:bg-fixed"
          style={{
            backgroundImage: `url("/Services/ourservices.svg")`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-xl md:max-w-2xl">
            Discover our range of professional services designed to help your
            business thrive in today&apos;s competitive market.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
              service.id % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Service Image */}
            <div className="flex-1 flex justify-center">
              <div
                data-aos={service.dataAosImage}
                data-aos-delay="100"
                data-aos-duration="1000"
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-48 sm:h-64 md:h-80 rounded-tl-3xl rounded-br-3xl shadow-lg ring-2 ring-[#F58634] ring-opacity-40"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} `}
                  fill
                  priority={service.id === 1} // Priority for first image only
                  className="object-cover rounded-lg shadow-md rounded-tl-3xl rounded-br-3xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Service Text */}
            <div
              data-aos={service.dataAosText}
              data-aos-delay="100"
              data-aos-duration="1000"
              className="flex-1 space-y-4 text-center md:text-left"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                {service.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
              {service.servicesIncluded && (
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2">
                  {service.servicesIncluded.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-base sm:text-lg text-gray-900 max-w-2xl mx-auto mb-6">
            Contact us today to discuss your project and discover how Gafar
            Technical Services can deliver exceptional results.
          </p>
          <Link href="/contact">
            <Obutton className="mt-4 text-white px-4 py-2 text-sm sm:text-base rounded-lg transition-transform duration-300 hover:scale-105">
              Get in Touch
            </Obutton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
