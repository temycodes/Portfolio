"use client";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "React Genius",
    image: "/images/projects/project1.png",
    projectUrl: "",
    description: "A simple interactive quiz application built for testing knowledge in react.",
    toolsUsed: ["React", "JavaScript", "CSS", "fakeAPI"],
  },
  {
    id: 2,
    title: "Pizza House",
    image: "/images/projects/project2.png",
    projectUrl: "",
    description: "A pizza ordering interface showcasing dynamic UI updates, cart logic, and menu rendering.",
    toolsUsed: ["React", "cssModules", "JavaScript"],
  },
  {
    id: 3,
    title: "The White Lotus",
    image: "/images/projects/project3.png",
    projectUrl: "",
    description: "A themed project inspired by the White Lotus series featuring clean layouts and structured content.",
    toolsUsed: ["NextJS", "CSS Components", "Supabase"],
  },
  {
    id: 4,
    title: "TravelBoxd",
    image: "/images/projects/project4.png",
    projectUrl: "",
    description: "An app for managing travel memories and destinations with basic CRUD interactions.",
    toolsUsed: ["React", "localStorage", "Context API"],
  },
  {
    id: 5,
    title: "Travel Lister",
    image: "/images/projects/project5.png",
    projectUrl: "",
    description: "A packing list tool that helps users organize items efficiently with add, remove, and sort options.",
    toolsUsed: ["React", "localStorage", "CSS"],
  },
  {
    id: 6,
    title: "Use Popcorn",
    image: "/images/projects/project6.png",
    projectUrl: "",
    description: "A movie discovery app using an external API to let users search, rate, and save films.",
    toolsUsed: ["React", "API Integration", "JavaScript", "Vercel"],
  },
];

function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref}>
      <h2 className='mt-4 text-3xl font-bold text-center text-(--violet-700) mb-2 underline'>Explore My Projects</h2>

      <ul className='grid gap-8 md:grid-cols-2 md:gap-12'>
        {projectData.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial='initial'
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.7, delay: index * 0.5 }}
            key={index}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              projectUrl={project.projectUrl}
              toolsUsed={project.toolsUsed}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectSection;
