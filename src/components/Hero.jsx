import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDownload,
  FaCode,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { socialLinks } from "../data/portfolioData";

import myImage from '../assets/image averter.jpg'
import MyContainer from "./container/MyContainer";

const Hero = () => {
  const handleDownloadResume = () => {
    // Google Drive direct download link
    const driveLink =
      "https://drive.google.com/uc?export=download&id=1oezmBZSw2al-Ly7NVNRsOwuB-XmiS1eX";

    // Open in new tab
    window.open(driveLink, "_blank");

    toast.success("Resume download started!");
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialIcons = [
    { Icon: FaGithub, href: socialLinks.github, bg: "bg-gray-900" },
    { Icon: FaLinkedin, href: socialLinks.linkedin, bg: "bg-blue-600" },
    { Icon: FaFacebook, href: socialLinks.facebook, bg: "bg-blue-500" },
    { Icon: FaTwitter, href: socialLinks.twitter, bg: "bg-sky-500" },
  ];

  return (
    <section
      id="home"
      className="pt-24 pb-20 px-4 bg-gray-800 min-h-screen flex items-center "
    >
      <MyContainer>
        <div className="w-full ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-lg text-blue-100 font-semibold mb-2"
              >
                Hello, I'm
              </motion.h2>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-black text-white mb-4"
              >
                Raikatun Naim Maimuna
              </motion.h1>
              <motion.h3
                variants={fadeInUp}
                className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6"
              >
                Full Stack Web Developer
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-gray-400 mb-8 text-lg"
              >
                Crafting beautiful, functional web experiences with modern
                technologies. Specializing in MERN stack development.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadResume}
                  className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:shadow-xl transition"
                >
                  <FaDownload /> Download Resume
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition"
                >
                  Contact Me
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInUp} className="flex gap-4">
                {socialIcons.map(({ Icon, href, bg }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 ${bg} text-white rounded-full flex items-center justify-center transition`}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-linear-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={myImage}
                    alt="Raikatun Naim Maimuna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{
                    scale: { delay: 0.5, type: "spring", stiffness: 200 },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center text-white shadow-xl"
                >
                  <FaCode className="text-4xl" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default Hero;
