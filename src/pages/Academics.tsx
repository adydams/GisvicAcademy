import React from "react";
import GRE from "../assets/images/logos/GRE_logo.jpeg";
import TOEFL from "../assets/images/logos/ets_toefl_vector_logo.png";
import GMAT from "../assets/images/logos/GMAT_logo.jpeg";
import GCSE from "../assets/images/logos/GCSE_logo.png";
import IELTS from "../assets/images/logos/IELTS_logo.png";
import SAT from "../assets/images/logos/SAT_logo.png";
import cambridge from "../assets/images/logos/cambridge_logo.png";
import Ican from "../assets/images/logos/ican_logo.jpeg";

const AcademicPage = () => {
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
        {/* <a href="/academics" className="hover:underline">
          Academics
        </a> */}
        <a href="/contact-us" className="hover:underline">
          Contact
        </a>
        <a href="/gallery" className="hover:underline">
          Gallery
        </a>{" "}
        {/* new link */}
      </nav>

      <main className="max-w-5xl mx-auto py-4 px-4 md:px-0 bg-white mt-8 rounded-xl shadow space-y-12">
       
      <h1 className="text-4xl font-bold mb-6 text-center">Academic Information</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Academic Curriculum</h2>
        <p className="mb-4">
          Our academic curriculum is designed to foster intellectual growth, critical
          thinking, and a lifelong love for learning. We integrate core subjects such
          as Mathematics, Science, English, and Social Studies with hands-on
          activities and projects to ensure students receive a well-rounded education.
        </p>
        <p>
          The curriculum is aligned with national standards while incorporating global
          best practices to prepare students for local and international success.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Subjects Offered</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>English Language and Literature</li>
          <li>Mathematics</li>
          <li>Basic Science & Technology</li>
          <li>Social Studies</li>
          <li>Civic Education</li>
          <li>Computer Studies</li>
          <li>French</li>
          <li>Religious and Moral Education</li>
          <li>Business Studies</li>
          <li>Physical and Health Education</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">External Advanced Exams</h2>
        <p className="mb-2">
          We prepare our students for a variety of advanced external examinations to
          ensure global competitiveness:
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <img src={TOEFL} alt="TOEFL" className="w-8 h-8" />
            <span>TOEFL – Test of English as a Foreign Language</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={GMAT} alt="GMAT" className="w-8 h-8" />
            <span>GMAT – Graduate Management Admission Test</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={GCSE} alt="GCSE" className="w-8 h-8" />
            <span>GCSE – General Certificate of Secondary Education</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={Ican} alt="ICAN" className="w-8 h-8" />
            <span>ICAN – Institute of Chartered Accountants of Nigeria</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={IELTS} alt="IELTS" className="w-8 h-8" />
            <span>IELTS – International English Language Testing System</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={SAT} alt="SAT" className="w-8 h-8" />
            <span>SAT – Scholastic Assessment Test</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={GRE} alt="GRE" className="w-8 h-8" />
            <span>GRE – Graduate Record Examination</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={cambridge} alt="Cambridge A-Levels" className="w-8 h-8" />
            <span>CAMBRIDGE A-LEVELS – Advanced Level qualifications</span>
          </li>
        </ul>
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

export default AcademicPage;
