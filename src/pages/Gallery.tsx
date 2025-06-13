import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundimage from "../assets/images/img_backgroundImage.jpeg";
import classroomone from "../assets/images/img_classroom1.jpeg";
import classroomtwo from "../assets/images/img_classroom2.jpeg";
import robotics from "../assets/images/img_robotics.jpeg";
import robotics1 from "../assets/images/img_robotics.jpeg";
import robotics2 from "../assets/images/img_robotics2.jpeg";
import robotics3 from "../assets/images/img_robotics3.jpeg";
import robotics4 from "../assets/images/img_robotics43.jpeg";
import robotics5 from "../assets/images/img_robotics5.jpeg";
import sport from "../assets/images/img_sportActivity.jpeg";
import music from "../assets/images/img_musicActivity.jpeg";
import science from "../assets/images/img_laboratoryActivity.jpeg";
import teacher1 from "../assets/images/img_teacher1.jpeg";
import teacher2 from "../assets/images/img_teacher2.jpeg";
import teacher3 from "../assets/images/img_teacher3.jpeg";
import teacher4 from "../assets/images/img_teacher4.jpeg";
import teacher5 from "../assets/images/img_teacher5.jpeg";
import teacher6 from "../assets/images/img_teacher6.jpeg";
import teacher7 from "../assets/images/img_teacher7.jpeg";
const Gallery = () => {
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
        <a href="/contact-us" className="hover:underline">
          Contact
        </a>
        {/* <a href="/gallery" className="hover:underline">
          Gallery
        </a>{" "} */}
        {/* new link */}
      </nav>

       <div className=" bg-blue-800 bg-opacity-50 p-8 mt-4 ">
          <h2 className="text-3xl text-white md:text-4xl font-bold">
           GALLERY
          </h2>
        </div>
        
        <section className="max-w-4xl mx-auto mt-10 px-4">

                  <Carousel className="relative" showThumbs={false} infiniteLoop autoPlay interval={3000}>
                    <div>
                      <img src={robotics} alt="School View" />
                      <p className="legend">Robotics</p>
                    </div>
                    <div>
                      <img src={science} alt="Students" />
                      <p className="legend">Students in laboratory</p>
                    </div>
                    <div>
                      <img src={music} alt="Teachers" />
                      <p className="legend">Orchetra</p>
                    </div>
                  </Carousel>
                  
                </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-4 px-4 md:px-0 bg-white mt-8 rounded-xl shadow space-y-12">
           

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

        <section className="p-10" >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Sport Activities
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
       <section className="p-10" >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Debate and Mathematic Competition
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

        <section className="p-10" >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          Our Students' Robotics and Artificial Inteligence Innovations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src={robotics1}
              alt="Sports"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
            <img
              src={robotics2}
              alt="Music"
              className="rounded shadow w-full aspect-[4/3] object-cover"
            />
            <img
              src={robotics5}
              alt="Science Fair"
             className="rounded shadow w-full aspect-[4/3] object-cover"
            />
          </div>
        </section>
        {/* News and Events Section */}
        <section className="p-10" >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">News and Events</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>June 20, 2025:</strong> End-of-term celebration and awards ceremony.</li>
            <li><strong>July 5, 2025:</strong> Summer classes registration begins.</li>
            <li><strong>August 15, 2025:</strong> Parent-teacher conference scheduled.</li>
          </ul>
        </section>

        
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p>
          © 2025 Gisvic Academy | info@Gisvicacademy.edu | +234 800 000
          0000
        </p>
      </footer>
    </div>
  );
};

export default Gallery;
