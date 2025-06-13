import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundimage from "../assets/images/img_backgroundImage.jpeg";
import classroomone from "../assets/images/img_classroom1.jpeg";
import classroomtwo from "../assets/images/img_classroom2.jpeg";
import student1 from "../assets/images/img_students1.jpeg";
import student2 from "../assets/images/img_students2.jpeg";
import teacher1 from "../assets/images/img_teacher1.jpeg";
import teacher2 from "../assets/images/img_teacher2.jpeg";
import teacher3 from "../assets/images/img_teacher3.jpeg";
import teacher4 from "../assets/images/img_teacher4.jpeg";
import teacher5 from "../assets/images/img_teacher5.jpeg";
import teacher6 from "../assets/images/img_teacher6.jpeg";
import teacher7 from "../assets/images/img_teacher7.jpeg";
import sport from "../assets/images/img_sportActivity.jpeg";
import music from "../assets/images/img_musicActivity.jpeg";
import science from "../assets/images/img_laboratoryActivity.jpeg";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Gisvic Academy</h1>
        <p className="text-lg mt-2">
          Empowering Students for a Better Tomorrow
        </p>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-800 text-white flex justify-center space-x-8 py-4">
        {/* <a href="/" className="hover:underline">
          Home
        </a> */}
        <a href="about-us" className="hover:underline">
          About Us
        </a>
        <a href="/admission" className="hover:underline">
          Admissions
        </a>
        <a href="#" className="hover:underline">
          Academics
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
        <a href="/gallery" className="hover:underline">
          Gallery
        </a>{" "}
        {/* new link */}
      </nav>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-72 flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${backgroundimage})`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            WELCOME TO GISVIC ACADEMY
          </h2>
        </div>
      </section>

      {/* Carousel */}
      <section className="max-w-4xl mx-auto mt-10 px-4">
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
          <div>
            <img src={classroomone} alt="School View" />
            <p className="legend">Our Modern Classrooms</p>
          </div>
          <div>
            <img src={classroomtwo} alt="Students" />
            <p className="legend">Engaged and Happy Students</p>
          </div>
          <div>
            <img src={student1} alt="Teachers" />
            <p className="legend">Qualified Teachers</p>
          </div>
        </Carousel>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-4 px-4 md:px-0 bg-white mt-8 rounded-xl shadow space-y-12">
        <section className="p-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            About Our School
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Gisvic Academy is a place where students thrive academically and
            personally. Our dedicated staff and modern facilities provide an
            excellent environment for learning and growth.
          </p>
        </section>

        <section className="p-10">
          <h3 className="text-2xl font-semibold  text-blue-900 mb-4">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Qualified and caring teachers</li>
            <li>Modern classrooms and labs</li>
            <li>Focus on character development</li>
            <li>Affordable tuition</li>
          </ul>
        </section>

        {/* Pictures Sections */}
        <section className="p-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Meet Our School Owners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={teacher1}
              alt="School Owner"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
            <img
              src={teacher7}
              alt="School Owner 1"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
          </div>
        </section>

        <section className="p-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Our Teachers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src={teacher3}
              alt="Teacher 1"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
            <img
              src={teacher4}
              alt="Teacher 2"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
            <img
              src={teacher5}
              alt="Teacher 3"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
            <img
              src={teacher6}
              alt="Teacher 4"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
          </div>
        </section>

        <section className="p-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            School Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src={sport}
              alt="Sports"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
            <img
              src={science}
              alt="Music"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
            <img
              src={music}
              alt="Science Fair"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="p-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            What Parents Say
          </h3>
          <div className="space-y-4">
            <blockquote className="bg-blue-50 p-4 rounded shadow">
              "Gisvic Academy has completely transformed our child's attitude
              towards learning. We love the caring environment!"
              <footer className="mt-2 text-sm text-blue-900">
                — Mrs. Adeola, Parent
              </footer>
            </blockquote>
            <blockquote className="bg-blue-50 p-4 rounded shadow">
              "Excellent teaching staff and top-notch facilities. Highly
              recommended."
              <footer className="mt-2 text-sm text-blue-900">
                — Mr. Johnson, Parent
              </footer>
            </blockquote>
          </div>
        </section>

        {/* News and Events Section */}
        <section className="p-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            News and Events
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>June 20, 2025:</strong> End-of-term celebration and awards
              ceremony.
            </li>
            <li>
              <strong>July 5, 2025:</strong> Summer classes registration begins.
            </li>
            <li>
              <strong>August 15, 2025:</strong> Parent-teacher conference
              scheduled.
            </li>
          </ul>
        </section>

        {/* Resumption Date and Admission */}
        <section className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Next Resumption Date
          </h3>
          <p className="text-gray-700">
            Our next school term begins on{" "}
            <strong>Monday, September 9, 2025</strong>. We look forward to
            welcoming both new and returning students!
          </p>
        </section>

        <section className="bg-green-50 p-10 rounded-xl ">
          <h3 className="text-xl font-semibold text-green-900 mb-2">
            Admissions Now Open
          </h3>
          <p className="text-gray-700">
            We are currently accepting new students for the upcoming term. Click
            below to begin your admission process.
          </p>
          <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
            Apply Now
          </button>
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

export default Home;
