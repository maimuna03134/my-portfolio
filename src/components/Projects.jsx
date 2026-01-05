import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCode, FaEye } from "react-icons/fa";
import { projectsData } from "../data/portfolioData";
import MyContainer from "./container/MyContainer";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
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
              className="text-center mb-20"
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
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Projects</span>
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

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="group relative glass backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-white/20"
                >
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
                      {String(index + 1).padStart(2, '0')}
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </MyContainer>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="glass backdrop-blur-xl rounded-3xl max-w-4xl w-full my-8 shadow-2xl border border-white/30 dark:border-white/20 overflow-hidden"
            >
              {/* Header Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 glass backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-gray-100 hover:text-red-500 dark:hover:text-red-400 transition-colors shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="text-xl" />
                </motion.button>

                {/* Project Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProject.name}
                  </h2>
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 glass backdrop-blur-sm text-white rounded-full font-medium flex items-center gap-2 hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                    <motion.a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 glass backdrop-blur-sm text-white rounded-full font-medium flex items-center gap-2 hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> Source Code
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 text-enhanced">
                    <FaCode className="text-purple-600 dark:text-purple-400" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 glass text-purple-800 dark:text-purple-200 rounded-xl font-medium text-sm border border-purple-200/50 dark:border-purple-500/30"
                      >
                        {tech.trim()}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-enhanced">
                    Project Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg text-enhanced">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                      Challenges Faced
                    </h3>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-enhanced">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">
                      Future Enhancements
                    </h3>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-enhanced">
                      {selectedProject.improvements}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;