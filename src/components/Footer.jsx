import { motion } from 'framer-motion';
import MyContainer from './container/MyContainer';
import Logo from './Logo';
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="relative bg-gray-900 dark:bg-gray-950 text-white py-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"
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
            {/* Logo Section */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Logo size="large" />
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a
                href="https://github.com/maimuna03134/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/raikatun-naim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/1EvtWr2QGL/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-500 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook className="text-xl" />
              </motion.a>
            </motion.div>

            {/* Divider */}
            <motion.div 
              className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Copyright */}
            <motion.div 
              className="text-center text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="flex items-center justify-center gap-2 text-sm">
                &copy; {currentYear} Raikatun Naim Maimuna. Made with 
                <FaHeart className="text-red-500 text-xs animate-pulse" /> 
                All rights reserved.
              </p>
              <p className="text-xs mt-2 text-gray-500">
                Frontend Developer | React.js Enthusiast
              </p>
            </motion.div>
          </div>
        </MyContainer>
      </footer>
    );
};

export default Footer;