import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCode, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaBook,
  FaTimes
} from "react-icons/fa";
import MyContainer from "./container/MyContainer";

const Education = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const educationData = [
    {
      id: 1,
      degree: "Complete Web Development Course",
      specialization: "Full-Stack Development",
      period: "2025",
      institution: "Programming Hero",
      location: "Remote",
      type: "Professional Course",
      icon: <FaCode className="text-xl" />,
      gradient: "from-green-500 to-emerald-500",
      description: "Comprehensive full-stack web development program covering MERN stack, modern JavaScript, and industry best practices.",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript ES6+"]
    },
    {
      id: 2,
      degree: "BSc in Computer Science & Engineering",
      specialization: "Software Engineering",
      period: "2024 - Present",
      institution: "Southern University Bangladesh",
      location: "Chattogram, Bangladesh",
      type: "Bachelor's Degree",
      icon: <FaUniversity className="text-xl" />,
      gradient: "from-blue-500 to-cyan-500",
      description: "Pursuing comprehensive computer science education with focus on software development, algorithms, and system design.",
      skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"]
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate (HSC)",
      specialization: "Science Group",
      period: "2021 - 2022",
      institution: "Panclaish S.M Nasir Uddin City Corporation Mohila College",
      location: "Chattogram, Bangladesh",
      type: "Higher Secondary",
      icon: <FaGraduationCap className="text-xl" />,
      gradient: "from-purple-500 to-pink-500",
      description: "Completed higher secondary education in Science group with strong foundation in mathematics and physics.",
      skills: ["Mathematics", "Physics", "Chemistry", "Biology"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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
    <section id="education" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400/10 dark:bg-green-500/10 rounded-full blur-3xl"
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
              className="inline-block px-6 py-2 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-500/30 rounded-full mb-8"
            >
              <span className="text-green-600 dark:text-green-400 text-sm font-medium tracking-wider">
                🎓 My Journey
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-enhanced"
            >
              Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Learning</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-enhanced"
            >
              My academic journey and continuous learning path in technology and computer science
            </motion.p>
          </motion.div>

          {/* Education Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {educationData.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              >
                <motion.div
                  className="glass backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/30 dark:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => setSelectedCard(edu)}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 lg:gap-4 mb-4">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${edu.gradient} rounded-lg lg:rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                          {edu.type}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-1 text-enhanced break-words hyphens-auto leading-tight overflow-wrap-anywhere">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  {/* Institution & Period */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <FaUniversity className="text-sm flex-shrink-0" />
                      <span className="font-medium text-sm text-enhanced truncate">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <FaMapMarkerAlt className="text-sm flex-shrink-0" />
                      <span className="text-sm text-enhanced truncate">{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <FaCalendarAlt className="text-sm flex-shrink-0" />
                      <span className="text-sm text-enhanced">{edu.period}</span>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-xs">+</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <div className="glass backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-enhanced">
                Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Philosophy</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <FaBook className="text-2xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-enhanced">Continuous Learning</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-enhanced">
                    Always staying updated with latest technologies and industry trends
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <FaCode className="text-2xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-enhanced">Practical Application</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-enhanced">
                    Applying theoretical knowledge through hands-on projects and real-world solutions
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <FaAward className="text-2xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-enhanced">Excellence</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-enhanced">
                    Striving for excellence in every project and maintaining high coding standards
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </MyContainer>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="glass backdrop-blur-xl rounded-3xl max-w-2xl w-full shadow-2xl border border-white/30 dark:border-white/20 overflow-hidden"
            >
              {/* Header */}
              <div className="relative p-8 pb-6">
                <motion.button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-6 right-6 w-10 h-10 glass backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-gray-100 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>

                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${selectedCard.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    <div className="text-2xl">{selectedCard.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                        {selectedCard.type}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-enhanced">
                      {selectedCard.degree}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-medium text-enhanced">
                      {selectedCard.specialization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8 space-y-6">
                {/* Institution Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <FaUniversity className="text-lg text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium text-enhanced">{selectedCard.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <FaMapMarkerAlt className="text-lg text-green-600 dark:text-green-400" />
                    <div>
                      <p className="text-enhanced">{selectedCard.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 md:col-span-2">
                    <FaCalendarAlt className="text-lg text-purple-600 dark:text-purple-400" />
                    <div>
                      <p className="text-enhanced">{selectedCard.period}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-enhanced">
                    Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-enhanced">
                    {selectedCard.description}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 text-enhanced">
                    <FaBook className="text-lg text-orange-600 dark:text-orange-400" />
                    Key Subjects/Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedCard.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 glass text-gray-800 dark:text-gray-100 rounded-xl font-medium text-sm border border-white/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;