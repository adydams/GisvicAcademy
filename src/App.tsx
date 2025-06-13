import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import GalleryPage from "./pages/Gallery.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Admisssion from "./pages/Admission.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import AcademicPage from "./pages/Academics.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/admission" element={<Admisssion />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/academics" element={<AcademicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
