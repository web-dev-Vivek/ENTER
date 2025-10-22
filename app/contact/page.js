"use client";

import NAV from "../components/NAV";
import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <NAV />

      {/* Contact Hero */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200"
          >
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-blue-50 py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Other Ways to Reach Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3 text-blue-600">Email</h3>
              <p className="text-gray-700 text-lg">contact@enter.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3 text-blue-600">Phone</h3>
              <p className="text-gray-700 text-lg">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3 text-blue-600">
                Follow Us
              </h3>
              <p className="text-gray-700 text-lg">@enterstudents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
