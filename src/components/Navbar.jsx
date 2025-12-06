import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MyContainer from "./container/MyContainer";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const menuItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
    >
      <MyContainer>
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Logo/>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex gap-8"
            >
              {menuItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1, color: "#2563eb" }}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition capitalize"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl text-gray-700"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition text-left capitalize"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </MyContainer>
    </motion.nav>
  );
};

export default Navbar;
