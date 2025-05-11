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
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] md:min-h-[65vh] text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Gafar Technical Services LLC
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl md:max-w-2xl">
            Discover our range of professional services designed to help your
            business thrive in today&apos;s competitive market.
          </p>
          <a href="/GTSProfile.pdf" download className="mx-4 w-full">
            <Obutton className="mt-4 text-white px-4 py-2 text-sm sm:text-base rounded-lg transition-transform duration-300 hover:scale-105">
              Company Profile
            </Obutton>
          </a>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Company Overview
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Established in 2014,{" "}
            <span className="font-bold">Gafa Technical Services LLC</span>. has
            built a strong reputation as a reliable and client-focused technical
            services provider. With over a decade of hands-on experience, we
            have become a trusted name in the industry, known for delivering
            precision-driven solutions that meet — and often exceed — client
            expectations. Our commitment to quality, safety, and customer
            satisfaction has earned us long-term partnerships and a solid
            presence in the market.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We specialize in a wide range of services including cable pulling
            and laying, gliding and termination, wall cutting and chasing,
            excavation works, core cutting, and professional waterproofing. Each
            project we undertake is handled with the highest level of care,
            efficiency, and technical expertise. Our skilled team works closely
            with clients, understanding their specific needs and tailoring our
            services accordingly to ensure flawless execution and long-lasting
            results.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold">Gafa Technical Services LLC</span> ,we
            don’t just complete tasks — we deliver solutions that support your
            project’s success from the ground up. Whether it’s a small technical
            job or a large-scale infrastructure task, our goal remains the same:
            to do the work exactly as you expect, with no compromises.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              width={500}
              height={300}
              src="/about/mission.jpg"
              alt="Gafar Technical Services team collaborating on a project"
              className="object-cover rounded-lg shadow-md rounded-tl-3xl rounded-br-3xl order-1 md:order-2"
              layout="responsive"
            />
            <div className="text-left order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Our mission is to deliver reliable, high-quality technical
                services that align perfectly with our clients’ expectations. We
                are committed to providing safe, precise, and efficient
                solutions through skilled craftsmanship, advanced techniques,
                and a client-first approach. Every project we handle reflects
                our dedication to excellence, integrity, and long-term value.
              </p>
            </div>
          </div>
          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
                To be recognized as a leading technical services company in the
                region — trusted for our expertise, valued for our reliability,
                and chosen for our unwavering commitment to client satisfaction.
                We aim to set industry standards by continually evolving,
                embracing innovation, and building enduring partnerships based
                on trust and performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
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
