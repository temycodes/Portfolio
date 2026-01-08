"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import aboutImage from "../../public/images/about-image.png";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiGit,
  SiFirebase,
  SiVercel,
  SiJest,
  SiHtml5,
  SiCss3,
  SiTypescript,
} from "react-icons/si";

//

const tabContent = [
  {
    title: "skills",
    id: "skills",
    content: (
      <div className='grid grid-cols-3 gap-6 mt-6 sm:grid-cols-4 md:grid-cols-6'>
        {/* Each skill */}
        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiJavascript className='text-5xl' />
          <p className='mt-2 text-sm'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiReact className='text-5xl' />
          <p className='mt-2 text-sm'>React</p>
        </div>

        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiTailwindcss className='text-5xl' />
          <p className='mt-2 text-sm'>TailwindCSS</p>
        </div>

        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiNextdotjs className='text-5xl' />
          <p className='mt-2 text-sm'>NextJS</p>
        </div>

        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiSupabase className='text-5xl' />
          <p className='mt-2 text-sm'>Supabase</p>
        </div>

        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiGit className='text-5xl' />
          <p className='mt-2 text-sm'>Git</p>
        </div>

        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiFirebase className='text-5xl' />
          <p className='mt-2 text-sm'>Firebase</p>
        </div>

        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiVercel className='text-5xl' />
          <p className='mt-2 text-sm'>Vercel</p>
        </div>

        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiJest className='text-5xl' />
          <p className='mt-2 text-sm'>Jest</p>
        </div>
        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiHtml5 className='text-5xl' />
          <p className='mt-2 text-sm'>Html</p>
        </div>
        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiCss3 className='text-5xl' />
          <p className='mt-2 text-sm'>CSS</p>
        </div>
        <div className='flex flex-col items-center transition-all duration-200 hover:scale-105'>
          <SiTypescript className='text-5xl' />
          <p className='mt-2 text-sm'>Typescript</p>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className='rounded-xl p-6 shadow-md  bg-violet-600/10  border border-violet-700/20 backdrop-blur-sm'>
        <ul className='space-y-1'>
          <li className='font-semibold text-lg text-violet-700'>Federal University of Technology Akure (FUTA)</li>
          <li>B.Tech, Computer Science / Software Engineering</li>
          <li>2019 — May 2024</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className='rounded-xl p-6 shadow-md  bg-violet-600/10  border border-violet-700/20 backdrop-blur-sm'>
        <ul className='space-y-4'>
          <li>
            <span className='font-semibold text-violet-700'>
              Lagos State Ministry of Innovation, Science and Technology — Web Developer (NYSC)
            </span>
            <br />
            <span className='opacity-80 '>Oct 2024 — Aug 2025</span>
          </li>
          <li>
            <span className='font-semibold text-violet-700'>T & Y Management Services — ICT Intern</span>
            <br />
            <span className='opacity-80'>Jan 2023 — Sep 2023</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className='rounded-xl p-6 shadow-md  bg-violet-600/10  border border-violet-700/20 backdrop-blur-sm'>
        <ul className='space-y-2'>
          <li>
            <span className='text-violet-700'>Udemy — The Ultimate React Course 2025:</span> React, Next.js, Redux &
            More (2025)
          </li>
          <li>
            <span className='text-violet-700'>Udemy — The Complete JavaScript Course:</span> From Zero to Expert! (2024)
          </li>
          <li>
            <span className='text-violet-700'>AWS Certified Cloud Practitioner (Foundational)</span> — Planned 2026
          </li>
        </ul>
      </div>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id) {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className='text-(--midnight-900)' id='#about'>
      <div className='flex items-center flex-col justify-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 sm:px-5'>
        <Image src={aboutImage} alt='about-image' width={300} height={300} />
        <div className='flex flex-col h-full mt-4 md:mt-0'>
          <h2 className='text-3xl font-bold text-(--midnight-900) mb-4'>who am I?</h2>

          <div className='lex flex-col justify-between h-full text-base md:text-lg leading-relaxed space-y-3'>
            <p className='text-(--midnight-900) opacity-90 first-letter:text-3xl first-letter:font-bold first-letter:text-(--violet-700)'>
              {` I am someone with a strong curiosity for both technology and the world around me. Learning new things
              excites me, and I enjoy taking ideas apart, understanding them fully, and shaping them into something real
              and usable.`}
            </p>
            <p className='text-(--midnight-900) opacity-90 indent-4 bg-(--violet-50)/10 rounded-lg'>
              {` Since my first year studying computer science, I've been drawn to building clean, functional web
              applications that solve practical problems. I like exploring, experimenting, and improving my approach
              with every project. Teaching others has also played a big role in my growth, and it pushed me to
              understand concepts in a clearer, deeper way.`}
            </p>
            <p className='indent-4 text-(--midnight-900) opacity-90 bg-(--violet-50)/10 rounded-lg'>
              {`  When I'm not coding, I'm watching movies or Formula One. It helps me relax, stay inspired, and recharge my
              creativity.`}
            </p>
          </div>

          {/* tabs */}
          <div className='flex flex-row justify-start mt-8' id='#skills'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
              experience
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>
          <AnimatePresence mode='wait'>
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className='mt-6'
            >
              {tabContent.find((obj) => obj.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
