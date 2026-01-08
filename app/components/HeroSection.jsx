"use client";

import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";

const TextBanner = () => {
  const styles = useSpring({
    from: { transform: "translateY(-400%)" },
    to: { transform: "translateY(0%)" },
    config: { duration: 800 },
  });
  return (
    <animated.div style={{ ...styles, fontSize: "4rem", fontWeight: "bold", textAlign: "center" }}>
      {`Hi I'm`} <span className='text-(--violet-700) limelight'> temy</span>
    </animated.div>
  );
};

function HeroSection() {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-2'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='col-span-8 text-center place-self-center sm:text-left'
        >
          <h1 className='text-(--midnight-900) lg:text-8xl text-4xl mb-4 font-bold sm:text-5xl'>
            <TextBanner />
          </h1>
          <p className='text-(--midnight-900) text-lg sm:text-base lg:text-xl mb-6'>
            Frontend Engineer specializing in React, TypeScript, and accessible interfaces. I build fast, responsive
            products with clean architecture and production-ready code. I focus on performance, scalability, and smooth
            user experiences.
          </p>
          <div>
            <button
              className='w-full px-6 py-3 mr-3 font-semibold rounded-full sm:w-fit border border-(--midnight-800) text-(--midnight-900) cursor-pointer'
              onClick={() => {
                document.getElementById("#contact").scrollIntoView({ behavior: "smooth" });
              }}
            >
              {`Let's Talk`}
            </button>
            <a href='/temiloluwaFrontendEngineer.pdf' download>
              <button className='px-6 py-3 rounded-full bg-(--violet-700) hover:bg-(--violet-800)  mt-3 w-full sm:w-fit text-white'>
                Résumé
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='flex justify-center col-span-4 mt-4 lg:mt-0'
        >
          <div className='relative rounded-full bg-(--sky-500) w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] shadow-2xl flex items-center justify-center overflow-hidden'>
            <Image src='/images/hero-image.png' alt='hero-image' width={300} height={300} className='object-contain' />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
