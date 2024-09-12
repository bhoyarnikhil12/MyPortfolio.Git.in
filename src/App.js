import React from "react";
import Banner from "./Componants/banner/Banner";
import Contact from "./Componants/contact/Contact";
import Features from "./Componants/features/Features";
import Footer from "./Componants/footer/Footer";
import FooterBottom from "./Componants/footer/FooterBottom";
import Navbar from "./Componants/navbar/Navbar";
import Projects from "./Componants/projects/Projects";
import Resume from "./Componants/resume/Resume";
// import Testimonial from "./Componants/tesimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        {/* <Testimonial/> */}
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;