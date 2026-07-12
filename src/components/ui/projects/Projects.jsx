import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCode, FaEye } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Tilt (3D hover effect)
import Tilt from "react-parallax-tilt";

// GSAP (section entrance animation)
import gsap from "gsap";

import { projectsData } from "../../../data/portfolioData";
import MyContainer from "../../container/MyContainer";
import "./projects.css";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionRef = useRef(null);

  // GSAP entrance animation — fades in the whole section on mount
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    return () => tl.kill();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="py-20 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <MyContainer>
          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-6 py-2 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/30 rounded-full mb-8"
              >
                <span className="text-purple-600 dark:text-purple-400 text-sm font-medium tracking-wider">
                  💼 My Work
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-enhanced"
              >
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Projects
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto text-enhanced"
              >
                A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
              </motion.p>
            </motion.div>

            {/* Projects Coverflow Swiper */}
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="projectsSwiper !pb-16"
            >
              {projectsData.map((project, index) => (
                <SwiperSlide
                  key={project.id}
                  className="!w-[280px] sm:!w-[340px] md:!w-[380px]"
                >
                  {/* 3D Tilt wrapper — everything inside is your exact card, untouched */}
                  <Tilt
                    className="w-full h-full"
                    glareEnable={true}
                    glareMaxOpacity={0.15}
                    glareColor="#ffffff"
                    glarePosition="all"
                    scale={1.03}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    transitionSpeed={1200}
                  >
                    <div className="group relative glass backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-white/20">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Project Number */}
                        <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Quick Actions - Always visible */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 glass backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="Live Demo"
                          >
                            <FaEye />
                          </motion.a>
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 glass backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white transition-colors shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="Source Code"
                          >
                            <FaGithub />
                          </motion.a>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-enhanced">
                          {project.name}
                        </h3>

                        <p className="text-gray-700 dark:text-gray-200 text-sm mb-4 line-clamp-2 text-enhanced">
                          {project.shortDescription}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 glass text-gray-800 dark:text-gray-100 rounded-full text-xs font-medium border border-white/20"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-3 py-1 bg-purple-100/50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* View Details Button - Visible on Mobile/Tablet */}
                        <motion.button
                          onClick={() => setSelectedProject(project)}
                          className="lg:hidden w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Details
                        </motion.button>

                        {/* Clickable Hover Indicator - Desktop Only */}
                        <motion.button
                          onClick={() => setSelectedProject(project)}
                          className="hidden lg:flex absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          title="View Details"
                        >
                          <span className="text-sm font-bold">+</span>
                        </motion.button>
                      </div>
                    </div>
                  </Tilt>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </MyContainer>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;