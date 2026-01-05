import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobile,
  FaLaptopCode,
  FaGraduationCap,
  FaAward,
  FaCoffee,
  FaHeart
} from "react-icons/fa";
import myImage from "../assets/image averter.jpg";
import MyContainer from "./container/MyContainer";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    { name: "Frontend Development", percentage: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", percentage: 88, color: "from-green-500 to-emerald-500" },
    { name: "UI/UX Design", percentage: 82, color: "from-purple-500 to-pink-500" },
    { name: "Problem Solving", percentage: 92, color: "from-orange-500 to-red-500" },
  ];

  const services = [
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaServer className="text-4xl" />,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js, Express, and database management.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "Responsive Design",
      description: "Ensuring seamless user experience across all devices with mobile-first design principles.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development from concept to deployment and maintenance.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const achievements = [
    { number: "2+", label: "Years Experience", icon: <FaGraduationCap /> },
    { number: "15+", label: "Projects Completed", icon: <FaAward /> },
    { number: "100+", label: "Cups of Coffee", icon: <FaCoffee /> },
    { number: "∞", label: "Lines of Code", icon: <FaCode /> },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
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
              className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/30 rounded-full mb-8"
            >
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider">
                👨‍💻 About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-enhanced"
            >
              Know More <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">About Me</span>
            </motion.h2>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
            {/* Left - Image & Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-6 lg:space-y-8"
            >
              {/* Profile Image */}
              <motion.div
                variants={itemVariants}
                className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto"
              >
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl rotate-6" />
                    <div className="relative w-full h-full glass backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/30 dark:border-white/20">
                      <img
                        src={myImage}
                        alt="Raikatun Naim Maimuna"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity },
                    }}
                  >
                    <FaCode className="text-xl text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <FaHeart className="text-lg text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Achievement Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-3 sm:gap-4"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="glass backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center border border-white/30 dark:border-white/20"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 mb-2">
                      {achievement.icon}
                    </div>
                    <div className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-1 text-enhanced">
                      {achievement.number}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 text-enhanced">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-enhanced">
                  Passionate Frontend Developer
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed text-enhanced">
                  <p>
                    I’m Raikatun Naim Maimuna, a passionate Frontend Developer with hands-on experience in ReactJS, Node.js, Express.js, and MongoDB. I’m currently in my 2nd year of Honours at Southern University Bangladesh. My programming journey started with curiosity about how websites work, and over time it turned into a strong interest in building clean, user-friendly, and functional web applications.
                  </p>
                  <p>
                 I enjoy building real-world projects like KrishiLink, Winter Pet Care Service, FreshBite, and a Smart Home & Ceremony Decoration Booking System, and I’m always eager to learn new technologies to improve performance and user experience.
                  </p>

                  <p>
                    Outside of programming, I enjoy cooking, reading books, and researching different topics, which helps me stay creative, patient, and curious—qualities I also bring into my development work.
                  </p>

                  <p>I believe in continuous learning, clean code, and meaningful user experiences, and I’m excited to build products that make people’s lives easier.</p>
                </div>
              </motion.div>

              {/* Skills Progress */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white text-enhanced">
                  Technical Expertise
                </h4>
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-enhanced">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Services Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-enhanced">
                What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Offer</span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-enhanced">
                Comprehensive web development services to bring your ideas to life
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group glass backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/30 dark:border-white/20 hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h4 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-3 text-enhanced">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm leading-relaxed text-enhanced">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </MyContainer>
    </section>
  );
};

export default About;