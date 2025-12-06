import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { projectsData } from "../data/portfolioData";
import MyContainer from "./container/MyContainer";



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <MyContainer>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-center mb-12 text-white"
          >
            My Projects
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.shortDescription}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition"
                  >
                    View Details <IoMdArrowForward />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MyContainer>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl"
          >
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <FaTimes className="text-2xl text-gray-700" />
              </motion.button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {selectedProject.name}
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-purple-600 mb-3">
                  Description:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-600 mb-3">
                  Challenges Faced:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.challenges}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-green-600 mb-3">
                  Future Improvements:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.improvements}
                </p>
              </div>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:shadow-xl transition"
                >
                  <FaExternalLinkAlt /> Live Preview
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:shadow-xl transition"
                >
                  <FaGithub /> GitHub Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;
