import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaExternalLinkAlt,
    FaGithub,
    FaTimes,
    FaCode,
    FaLightbulb,
    FaRocket,
} from "react-icons/fa";

// ---- Modal Component ----
const ProjectModal = ({ project, onClose }) => {
    const [activeTab, setActiveTab] = useState("overview");

    if (!project) return null; // ✅ safety

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "tech", label: "Technologies" },
        { id: "notes", label: "Challenges & Future" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="glass backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl border border-white/30 dark:border-white/20 overflow-hidden flex flex-col"
            >
                {/* Header Image */}
                <div className="relative h-40 md:h-52 shrink-0 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Close Button */}
                    <motion.button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-red-400 transition"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaTimes />
                    </motion.button>

                    {/* Title + Links */}
                    <div className="absolute bottom-3 left-5 right-5">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-1">
                            {project.name}
                        </h2>

                        <div className="flex gap-3">
                            {/* ✅ FIXED anchor */}
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1.5 glass text-white rounded-full text-sm flex items-center gap-2 hover:bg-white/30 transition"
                            >
                                <FaExternalLinkAlt size={12} /> Live Demo
                            </a>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1.5 glass text-white rounded-full text-sm flex items-center gap-2 hover:bg-white/30 transition"
                            >
                                <FaGithub size={12} /> Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/10 px-6 pt-4 gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-t-lg text-sm font-semibold ${activeTab === tab.id
                                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto flex-1 min-h-0">
                    {activeTab === "overview" && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <h3 className="text-lg font-bold text-white mb-3">
                                Project Overview
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </motion.div>
                    )}

                    {activeTab === "tech" && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <FaCode className="text-purple-400" />
                                Technologies
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {project.technologies?.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 glass text-purple-200 rounded-xl text-sm border border-purple-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "notes" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            <div>
                                <h3 className="text-base font-bold text-orange-400 mb-2 flex items-center gap-2">
                                    <FaLightbulb />
                                    Challenges
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    {project.challenges}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-green-400 mb-2 flex items-center gap-2">
                                    <FaRocket />
                                    Future Plans
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    {project.improvements}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;