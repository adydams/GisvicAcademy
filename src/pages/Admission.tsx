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

const Admisssion = () => {
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
        {/* <a href="/admission" className="hover:underline">
          Admissions
        </a> */}
        <a href="/academics" className="hover:underline">
          Academics
        </a>
        <a href="/contact-us" className="hover:underline">
          Contact
        </a>
        <a href="/gallery" className="hover:underline">
          Gallery
        </a>{" "}
        {/* new link */}
      </nav>
      <main className="max-w-5xl mx-auto py-4 px-4 md:px-0 bg-white mt-8 rounded-xl shadow space-y-12">
        {/* Admissions Section */}

        <section className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Admissions Open
          </h2>

          <p className="text-center text-lg mb-6">
            Enroll your child today and become part of a thriving learning
            community.
          </p>

          <div className="flex justify-center">
            <a
              href="/admissions"
              className="inline-block mt-4 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
            >
              Apply Now
            </a>
          </div>
        </section>

        {/* FAQ Section */}

        <section className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <FAQItem
              question="What are the school hours?"
              answer="Our school operates from 8:00 AM to 3:00 PM, Monday through Friday."
            />

            <FAQItem
              question="Is lunch provided?"
              answer="Yes, nutritious lunch and snacks are provided daily."
            />

            <FAQItem
              question="What curriculum do you follow?"
              answer="We follow the Nigerian National Curriculum with a blend of international best practices."
            />

            <FAQItem
              question="Is there provision for school bus?"
              answer="We have trust worthy school drivers, bus attendants and luxurious bus with full AC for students accross the state."
            />

            <FAQItem
              question="Is there after school service?"
              answer="We keep our students safe in our custody until parents' return"
            />
          </div>
        </section>

        {/* Student Registration Form */}

        <section className="p-6 bg-green-50">
          <h2 className="text-2xl font-bold mb-4">Register a New Student</h2>

          <form className="space-y-4 max-w-xl mx-auto">
            <div>
              <label className="block text-sm font-medium">Student Name</label>

              <input
                type="text"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Age</label>

              <input
                type="number"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Class</label>

              <input
                type="text"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Guardian Contact
              </label>

              <input
                type="tel"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded"
            >
              Submit Registration
            </button>
          </form>
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

export default Admisssion;
