"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_cmpc4ic", // Your Service ID
        "template_01faxzo", // Your Template ID
        formRef.current,
        "Zov-qaZ5FKpVh85Ut" // Your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="relative h-[40vh] sm:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: `url("/contact/contactus.avif")`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl md:max-w-2xl">
            Ready to start your next project with us? Get in touch today!
          </p>
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-gray-100 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="flex flex-col items-center text-center"
            >
              <svg
                className="w-8 h-8 text-indigo-600 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <a
                href="tel:+971561767178"
                className="text-gray-600 hover:underline"
              >
                +971 56 176 7178
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="flex flex-col items-center text-center"
            >
              <svg
                className="w-8 h-8 text-indigo-600 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <a
                href="mailto:info@gafartechnical.com"
                className="text-gray-600 hover:underline"
              >
                info@gafartechnical.com
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="flex flex-col items-center text-center"
            >
              <svg
                className="w-8 h-8 text-indigo-600 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600">
                Musaffah - M10 - Abu Dhabi - United Arab Emirates
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="flex flex-col items-center text-center"
            >
              <svg
                className="w-8 h-8 text-indigo-600 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">
                Business Hours
              </h3>
              <p className="text-gray-600">Mon-Fri: 9 AM - 5 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
            Send Us a Message
          </h2>
          <form
            ref={formRef}
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
              {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
            Our Location
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="relative w-full aspect-[16/9]"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.318462309794!2d54.501139976014755!3d24.370222564697787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4f1840fc0e1f%3A0x4a0b838666bbc680!2sGAFAR%20TECHNICAL%20SERVICES%20LLC!5e0!3m2!1sen!2s!4v1745916185500!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
