import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import MyContainer from "./container/MyContainer";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "./Logo";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  
  // Transform navbar background based on scroll
  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  
  const navbarBgDark = useTransform(
    scrollY,
    [0, 100],
    ["rgba(17, 24, 39, 0)", "rgba(17, 24, 39, 0.95)"]
  );

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
    setActiveSection(id);
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/20 dark:border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <MyContainer>
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center"
            >
              <Logo />
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden md:flex items-center gap-8"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 text-enhanced ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                      layoutId="activeTab"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full glass text-gray-800 dark:text-gray-100 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.8 }}
              >
                {isDark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-600" />}
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full glass text-gray-800 dark:text-gray-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-600" />}
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-2xl text-gray-800 dark:text-gray-100 text-enhanced"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 glass backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10"
            >
              <div className="flex flex-col gap-2 p-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 text-enhanced ${
                      activeSection === item.id
                        ? "bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-800 dark:text-gray-100 hover:bg-white/20 dark:hover:bg-black/20"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </MyContainer>
    </motion.nav>
  );
};

export default Navbar;