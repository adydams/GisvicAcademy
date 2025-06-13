import React, { useState } from "react";

import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded-md overflow-hidden">
      <button
        className="w-full text-left px-4 py-3 font-semibold bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>

      {isOpen && <div className="px-4 py-2 bg-white border-t">{answer}</div>}
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header */}

      <header className="bg-blue-900 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Gisvic Academy</h1>

        <p className="text-lg mt-2">
          Empowering Students for a Better Tomorrow
        </p>
      </header>
 {/* Navigation */}
      <nav className="bg-blue-800 text-white flex justify-center space-x-8 py-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/about-us" className="hover:underline">
          About Us
        </a>
        <a href="/admission" className="hover:underline">
          Admissions
        </a>
        <a href="/academics" className="hover:underline">
          Academics
        </a>
        {/* <a href="/contact-us" className="hover:underline">
          Contact
        </a> */}
        <a href="/gallery" className="hover:underline">
          Gallery
        </a>{" "}
        {/* new link */}
      </nav>

      <main className="max-w-5xl mx-auto py-4 px-4 md:px-0 bg-white mt-8 rounded-xl shadow space-y-12">
        
      

        {/* Contact Form */}

        <section className="p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          <form className="space-y-4 max-w-lg mx-auto">
            <div>
              <label className="block text-sm font-medium">Name</label>

              <input
                type="text"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>

              <input
                type="email"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>

              <textarea
                className="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Map Section */}

        <section className="p-6">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>

          <div className="w-full h-64">
            <iframe
              className="w-full h-full rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508497!2d144.9537353153169!3d-37.81627917975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f84f19%3A0xf6cb3caa4a64dcf!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510910127665"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

      </main>
       {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p>
          © 2025 Gisvic Academy | info@Gisvicacademy.edu | +234 800 000 0000
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;
