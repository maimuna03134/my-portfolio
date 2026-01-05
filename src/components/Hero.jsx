import { useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDownload,
  FaCode,
  FaArrowDown,
  FaWhatsapp,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { socialLinks } from "../data/portfolioData";
import myImage from '../assets/image averter.jpg';
import MyContainer from "./container/MyContainer";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effects - Less aggressive
  const y = useTransform(scrollY, [0, 800], [0, 100]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  // Generate stable random positions for particles
  const particles = useMemo(() => {
    const generateParticles = () => {
      return [...Array(20)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }));
    };
    return generateParticles();
  }, []);

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    const driveLink = "https://drive.google.com/uc?export=download&id=1oezmBZSw2al-Ly7NVNRsOwuB-XmiS1eX";
    window.open(driveLink, "_blank");
    toast.success("Resume download started!");
  };
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialIcons = [
    { 
      Icon: FaGithub, 
      href: socialLinks.github, 
      bgColor: "bg-gray-900 dark:bg-gray-700", 
      borderColor: "border-gray-900 dark:border-gray-700",
      label: "GitHub" 
    },
    { 
      Icon: FaLinkedin, 
      href: socialLinks.linkedin, 
      bgColor: "bg-blue-600", 
      borderColor: "border-blue-600",
      label: "LinkedIn" 
    },
    { 
      Icon: FaFacebook, 
      href: socialLinks.facebook, 
      bgColor: "bg-blue-500", 
      borderColor: "border-blue-500",
      label: "Facebook" 
    },
    { 
      Icon: FaWhatsapp, 
      href: `https://wa.me/${socialLinks.whatsapp}`, 
      bgColor: "bg-green-500", 
      borderColor: "border-green-500",
      label: "WhatsApp" 
    },
  ];

  const typewriterText = "Frontend Developer";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + typewriterText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
          }}
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
          className="absolute w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
          style={{
            right: `${10 + mousePosition.x * 0.015}%`,
            bottom: `${20 + mousePosition.y * 0.015}%`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-blue-500/20 dark:bg-blue-400/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <MyContainer>
        <motion.div 
          className="relative z-10 pt-20 pb-20"
          style={{ y, opacity }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 mt-6"
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block "
              >
                <span className=" px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  👋 Hello, I'm
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight text-enhanced"
              >
                Raikatun Naim{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Maimuna
                </span>
              </motion.h1>
              {/* Role with Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-3xl text-gray-700 dark:text-gray-200 font-medium text-enhanced"
              >
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-blue-600 dark:text-blue-400"
                >
                  |
                </motion.span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl text-enhanced"
              >
                Crafting beautiful, responsive user interfaces with modern frontend technologies. 
                Specializing in React, JavaScript, and creating seamless user experiences that 
                bring ideas to life with pixel-perfect design.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  onClick={handleDownloadResume}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <FaDownload className="group-hover:animate-bounce" />
                    Download Resume
                  </span>
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 glass border-2 border-gray-400/30 dark:border-gray-500/30 text-gray-800 dark:text-gray-100 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 text-enhanced"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.button>
              </motion.div>
              {/* Social Links with Floating Hover Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 mb-16"
              >
                <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start flex-wrap">
                  {socialIcons.map((socialIcon, index) => {
                    const { Icon, href, bgColor, borderColor, label } = socialIcon;
                    return (
                      <motion.div
                        key={index}
                        className="social-button"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full group block"
                          title={label}
                        >
                          {/* Floating background */}
                          <div className={`floater w-full h-full absolute top-0 left-0 ${bgColor} rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl`}></div>
                          
                          {/* Icon container */}
                          <div className={`icon relative z-10 w-full h-full flex items-center justify-center border-2 ${borderColor} rounded-full transition-all duration-300 ${bgColor} group-hover:bg-white group-hover:dark:bg-gray-900`}>
                            <Icon className={`text-base sm:text-lg md:text-xl transition-colors duration-300 text-white group-hover:text-gray-800 group-hover:dark:text-white`} />
                          </div>
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end mt-12 lg:mt-0"
            >
              <div className="relative">
                {/* Main Circular Image */}
                <motion.div
                  className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full" />
                  
                  {/* Main Image Container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 dark:border-white/10">
                    <img
                      src={myImage}
                      alt="Raikatun Naim Maimuna"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Floating Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-400/30 dark:border-blue-500/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity },
                  }}
                >
                  <FaCode className="text-xl sm:text-2xl text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <span className="text-lg sm:text-xl">⚡</span>
                </motion.div>

                {/* Additional floating dots */}
                <motion.div
                  className="absolute top-1/4 -left-4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 -right-4 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 bg-pink-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
              </div>
            </motion.div>
          </div>
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-enhanced"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <FaArrowDown className="text-lg mb-10" />
            </motion.button>
          </motion.div>
        </motion.div>
      </MyContainer>
    </section>
  );
};

export default Hero;