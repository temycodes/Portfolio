import HeroSection from "./components/HeroSection";
import React from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";



function page() {
  return (
    <main className='flex min-h-screen flex-col bg-(--sky-200) overflow-x-hidden'>
      <Navbar />
      <div className='container px-8 py-4 mx-auto mt-25'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

export default page;
