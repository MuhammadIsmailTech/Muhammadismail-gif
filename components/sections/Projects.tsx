"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

const Projects = () => {
  const projects = [
    {
      title: "Basic Website Projects",
      subtitle: "Frontend Practice",
      period: "2025 – Present",
      description:
        "Created multiple small websites to practice HTML, CSS, and JavaScript concepts.",
      features: [
        "Built responsive layouts for different screen sizes",
        "Practiced UI design and structure for real-world websites",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MuhammadIsmailTech/My-Js-Projects",
      live: "https://my-js-projects-dun.vercel.app/",
      featured: true,
    },
      {
      title: "React Projects",
      subtitle: "Combine React Projects in Repository",
      period: "2026",
      description:
        "Designed and developed a React Projects to showcase my skills, projects, and learning journey.",
      features: [
        "Responsive UI design using modern frontend tools",
        "Clean layout to present projects.",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS"],
      github: "https://github.com/MuhammadIsmailTech/React-projects",
      live: "https://ismail-react-projects.vercel.app/",
      featured: true,
    },

    {
      title: "C++ Programming Projects",
      subtitle: "University Work",
      period: "2024 – 2025",
      description:
        "Developed multiple programs using C++ to understand programming logic and data structures.",
      features: [
        "Implemented basic data structures like stack, queue, and linked list",
        "Improved problem-solving and logic-building skills",
      ],
      technologies: ["C++", "Data Structures", "OOP", "Algorithms", "Problem Solving",],
      github: "https://github.com/MuhammadIsmailTech/MyCppProject",
      featured: false,
    },
    {
      title: "Student Management System",
      subtitle: "University Project",
      period: "2025",
      description:
        "Built a system to manage student records, courses, and data efficiently using programming and database concepts.",
      features: [
        "Implemented CRUD operations for managing student data",
        "Connected system with database for storing and retrieving records",
      ],
      technologies: ["Python", "MySQL", "OOP"],
      github: "https://github.com/MuhammadIsmailTech/Python-projects/tree/main/P-11-Student%20Mangement%20System",
      featured: true,
      isCompanyProject: true,
    },
    {
      title: "Database Practice Project",
      subtitle: "SQL Learning",
      period: "2025",
      description:
        "Worked on database design, normalization, and queries to understand how data is stored and managed.",
      features: [
        "Created tables, relationships, and queries using SQL",
        "Practiced normalization and database optimization concepts",
      ],
      technologies: ["SQL", "MySQL"],
      github: "#",
      featured: false,
    },
    {
  title: "HTML Projects",
  subtitle: "Collection of Pure HTML Projects",
  period: "2024",
  description:
    "Created multiple HTML-only projects to practice webpage structure, layouts, and frontend fundamentals.",
  features: [
    "Built using only HTML",
    "Simple and clean webpage structures",
  ],
  technologies: ["HTML"],
  github: "https://github.com/MuhammadIsmailTech/My-HTML-Projects",
  live: "https://my-html-projects-two.vercel.app/",
  featured: true,
  },
  {
  title: "CSS Projects",
  subtitle: "Collection of Styling and UI Projects",
  period: "2026",
  description:
    "Developed multiple CSS projects to practice styling, layouts, animations, and responsive design techniques.",
  features: [
    "Creative UI designs using pure CSS",
    "Responsive layouts and modern styling practice",
  ],
  technologies: ["HTML", "CSS"],
  github: "https://github.com/MuhammadIsmailTech/My-CSS-Project",
  live: "https://my-css-project-lovat.vercel.app/",
  featured: true,
  },
  ];

  return (
    <SectionWrapper id="projects" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 overflow-x-hidden w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-2xl border-2 border-gray-700 hover:border-cyan-400 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-2 flex flex-col group h-full relative overflow-hidden w-full max-w-full"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>

              {/* Project Header */}
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-b-2 border-gray-700 group-hover:border-cyan-400/50 transition-all duration-500 relative z-10 backdrop-blur-sm">
                <div className="flex flex-wrap items-start gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent flex-1 min-w-0 group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-500">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2.5 py-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 text-xs font-bold rounded-full border-2 border-cyan-400/60 whitespace-nowrap animate-pulse shadow-lg shadow-cyan-500/50 backdrop-blur-sm">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Body */}
              <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col relative z-10">
                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-3 flex items-center gap-2">
                    <span className="w-1 sm:w-1.5 h-4 sm:h-5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-xs sm:text-sm md:text-base flex items-start gap-2 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <span className="text-cyan-400 text-base sm:text-lg font-bold mt-0.5 flex-shrink-0 group-hover:text-cyan-300 transition-colors">
                          ▹
                        </span>
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex-grow mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-gray-900/80 to-gray-800/80 text-cyan-400 text-xs sm:text-sm md:text-base font-semibold rounded-lg border-2 border-gray-700 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 border-t-2 border-gray-700 group-hover:border-cyan-400/30 transition-colors duration-500">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold hover:gap-3"
                    >
                      <FiGithub className="text-lg sm:text-xl md:text-2xl" />{" "}
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold hover:gap-3"
                    >
                      <FiExternalLink className="text-lg sm:text-xl md:text-2xl" />{" "}
                      {project.isCompanyProject ? "View Platform" : "Live Demo"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mt-12 md:mt-16">
            <motion.a
              href="https://github.com/MuhammadismailTech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-500"></div>
              <FiGithub className="text-xl sm:text-2xl md:text-3xl relative z-10" />
              <span className="relative z-10">View More on GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
