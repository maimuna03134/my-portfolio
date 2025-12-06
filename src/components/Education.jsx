import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import MyContainer from "./container/MyContainer";


const Education = () => {
    const educationData = [
      {
        degree: "Complete Web Development Course With Programming Hero",
        period: "2025-2025",
        institution: "Programming Hero | Remote",
        side: "left",
      },
      {
        degree: "BSc in CSE",
        period: "2024 - Present",
        institution: "Southern University Bangladesh",
        side: "right",
      },
      {
        degree: "HSC",
        period: "2021-2022",
        institution:
          "Panclaish S.M Nasir Uddin City Corporation Mohila Collage",
        side: "left",
      },
    ];

  return (
    <section className="py-20 px-4 bg-gray-800">
      <MyContainer>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-center mb-16 text-teal-400 uppercase tracking-wider"
        >
          Education
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-500 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: edu.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative md:flex ${
                  edu.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                {/* Content Box */}
                <div
                  className={`md:w-5/12 ${
                    edu.side === "left"
                      ? "md:text-right md:pr-12"
                      : "md:text-left md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700 p-6 rounded-lg shadow-xl"
                  >
                    <h3 className="text-teal-400 font-bold text-xl mb-2 uppercase">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-300 font-semibold mb-3">
                      {edu.institution} | {edu.period}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-lg"
                  >
                    <FaGraduationCap className="text-white text-xl" />
                  </motion.div>
                </div>

                {/* Empty Space on Other Side */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Circle */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 bg-teal-500 rounded-full border-4 border-gray-800 hidden md:block"
          ></motion.div>
        </div>
      </MyContainer>
    </section>
  );
};

export default Education;
