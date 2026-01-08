import HeroSection from "./components/HeroSection";
import React from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export const metadata = {
  title: "Temy's Portfolio",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐦</text></svg>",
  },
};

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
