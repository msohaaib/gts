import React from "react";
import Image from "next/image";
import Link from "next/link";
import Obutton from "../../components/OButton";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[50vh] md:min-h-[60vh]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: `url("/about/aboutus.jpg")`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Gafar Technical Services LLC
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl md:max-w-2xl">
            Discover our range of professional services designed to help your
            business thrive in today&apos;s competitive market.
          </p>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Company Overview
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold">GAFAR TECHNICAL SERVICES</span> has been
            at the forefront of the technical services industry for over 10
            years. We pride ourselves on providing innovative solutions,
            outstanding customer service, and a dedicated team of experts. Our
            mission is to ensure that every project, no matter the size, is
            completed with the highest level of professionalism and attention to
            detail.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                To be the trusted partner in solving complex technical
                challenges with precision, integrity, and excellence.
              </p>
            </div>
            <Image
              width={500}
              height={300}
              src="/about/mission.jpg"
              alt="Gafar Technical Services team collaborating on a project"
              className="object-cover rounded-lg shadow-md rounded-tl-3xl rounded-br-3xl"
              layout="responsive"
            />
          </div>
          {/* Vision */}
          <div className="grid grid-cols-1 md:grolsid-c-2 gap-8 items-center">
            <Image
              width={500}
              height={400}
              src="/about/ourvision.jpg"
              alt="Sustainable building solutions by Gafar Technical Services"
              className="object-cover rounded-lg shadow-md rounded-tl-3xl rounded-br-3xl"
              layout="responsive"
            />
            <div className="text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                To be a leading force in construction and MEP services,
                delivering smart, sustainable, and high-performance building
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section (Unchanged) */}
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

export default About;
