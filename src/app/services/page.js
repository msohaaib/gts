import React from "react";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
      <ul className="space-y-6">
        <li className="text-lg">
          <h3 className="text-2xl font-semibold">Service 1</h3>
          <p>Brief description of Service 1.</p>
        </li>
        <li className="text-lg">
          <h3 className="text-2xl font-semibold">Service 2</h3>
          <p>Brief description of Service 2.</p>
        </li>
        <li className="text-lg">
          <h3 className="text-2xl font-semibold">Service 3</h3>
          <p>Brief description of Service 3.</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
