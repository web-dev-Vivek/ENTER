"use client";

import NAV from "../components/NAV";
import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <NAV />

      {/* About Hero Section */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
            About ENTER
          </h1>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            ENTER is a revolutionary platform designed to bring students
            together. We believe in the power of community, collaboration, and
            shared experiences.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-blue-50 py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To empower students by providing a centralized platform where they
            can discover events, build teams, and create unforgettable memories
            together. We connect like-minded individuals and foster a vibrant
            community of innovation and collaboration.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border-2 border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-blue-600">
                Community
              </h3>
              <p className="text-gray-700">
                Building strong connections between students and fostering a
                supportive environment.
              </p>
            </div>
            <div className="p-6 bg-white border-2 border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-blue-600">
                Collaboration
              </h3>
              <p className="text-gray-700">
                Enabling students to work together, share ideas, and achieve
                common goals.
              </p>
            </div>
            <div className="p-6 bg-white border-2 border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-blue-600">
                Experience
              </h3>
              <p className="text-gray-700">
                Creating memorable moments through engaging events and
                meaningful interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
