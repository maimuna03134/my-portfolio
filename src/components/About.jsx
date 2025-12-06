import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaHome,
  FaFileAlt,
  FaBriefcase,
  FaEnvelopeOpen,
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaUsers,
  FaWhatsapp,
  FaServer,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import myImage from "../assets/image averter.jpg";
import toast from "react-hot-toast";
import MyContainer from "./container/MyContainer";
import AnimatedCounter from "./animations/AnimatedCounter";

// AnimatedCounter Component
// const AnimatedCounter = ({ end, duration = 2 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (isInView) {
//       let startTime;
//       const animate = (currentTime) => {
//         if (!startTime) startTime = currentTime;
//         const progress = (currentTime - startTime) / (duration * 1000);

//         if (progress < 1) {
//           setCount(Math.floor(end * progress));
//           requestAnimationFrame(animate);
//         } else {
//           setCount(end);
//         }
//       };
//       requestAnimationFrame(animate);
//     }
//   }, [isInView, end, duration]);

//   return <span ref={ref}>{count}%</span>;
// };

// Social Links Data
const socialLinks = {
  github: "https://github.com/maimuna03134/",
  linkedin: "http://www.linkedin.com/in/raikatun-naim-webdev",
  facebook: "https://www.facebook.com/share/1EvtWr2QGL/",
  email: "maimuna84333@gmail.com",
  phone: "+8801860687868",
  whatsapp: "8801860687868",
};

const About = () => {


//   const [activeTab, setActiveTab] = useState("home");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const paragraphs = [
    {
      title: "My Programming Journey:",
      text: "I started my coding journey 2 years ago when I discovered the magic of building things on the web. What began as curiosity quickly turned into a passion. I dove deep into HTML, CSS, and JavaScript, and eventually mastered the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      icon: <FaRocket className="text-orange-500" />,
    },
    {
      title: "What I Love to Do:",
      text: "I enjoy building full-stack web applications that solve real-world problems. There's something incredibly satisfying about taking an idea from concept to deployment. I love working on both frontend and backend, creating seamless user experiences while ensuring robust server-side functionality.",
      icon: <FaCode className="text-red-500" />,
    },
    {
      title: "My Approach:",
      text: "I believe in writing clean, maintainable code and staying updated with the latest web technologies. I'm a strong advocate for responsive design and always ensure my applications work flawlessly across all devices.",
      icon: <FaPalette className="text-orange-500" />,
    },
    {
      title: "Beyond Coding:",
      text: "When I'm not coding, you'll find me playing cricket with friends, exploring new cafes in the city, or binge-watching tech tutorials on YouTube. I'm also passionate about photography and love capturing moments during my travels.",
      icon: <FaUsers className="text-red-500" />,
    },
  ];

  const services = [
    {
      icon: <FaCode className="text-3xl text-red-500" />,
      title: "Frontend Development",
      description:
        "Specializing in React.js and Next.js to build fast, responsive, and modern web applications. I create intuitive user interfaces with smooth animations and seamless interactions using the latest frontend technologies.",
      bgColor: "bg-orange-50 dark:bg-orange-900/30",
    },
    {
      icon: <FaServer className="text-3xl text-orange-500" />,
      title: "Backend Development",
      description:
        "Building robust server-side applications with Node.js and Express.js. I design RESTful APIs, handle authentication, and ensure your application's backend is secure, scalable, and efficient.",
      bgColor: "bg-gray-100 dark:bg-gray-900/40",
    },
    
    {
      icon: <FaRocket className="text-3xl text-red-500" />,
      title: "Full-Stack Solutions",
      description:
        "End-to-end web application development using the MERN stack. From initial concept to deployment, I handle every aspect of your project, delivering production-ready applications that solve real-world problems.",
      bgColor: "bg-orange-50 dark:bg-orange-900/30",
    },
  ];

  const skills = [
    { name: "React.js", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "MongoDB", level: 88 },
    { name: "Next.js", level: 85 },
  ];



  // Social media configuration with icons
  const socialMedia = [
    {
      icon: <FaFacebook />,
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-900/40",
      url: socialLinks.facebook,
    },
    {
      icon: <FaLinkedin />,
      color: "text-blue-700",
      bg: "bg-blue-50 dark:bg-blue-900/40",
      url: socialLinks.linkedin,
    },
    {
      icon: <FaWhatsapp />,
      color: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/40",
      url: `https://wa.me/${socialLinks.whatsapp}`,
    },
    {
      icon: <FaGithub />,
      color: "text-gray-800 dark:text-gray-200",
      bg: "bg-gray-100 dark:bg-gray-700",
      url: socialLinks.github,
    },
  ];

  return (
    <div
      id="about"
      className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-800 dark:text-gray-200 py-20"
    >
      <MyContainer className={"py-6"}>
        {/* Desktop & Tablet Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 mt-12">
          {/* Left Sidebar */}
          <motion.aside
            className="lg:col-span-4 space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Profile Card */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center -mt-20"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.img
                src={myImage}
                alt="Raikatun Naim Maimuna"
                className="w-40 h-40 rounded-2xl mx-auto ring-8 ring-white dark:ring-gray-800 object-cover"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h1 className="text-xl font-bold mt-6 text-gray-900 dark:text-white">
                Raikatun Naim Maimuna
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Full Stack Web Developer
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-6">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.bg} rounded-xl flex items-center justify-center ${social.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {React.cloneElement(social.icon, { className: "text-xl" })}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6"
              variants={itemVariants}
            >
              {[
                {
                  icon: <FaPhone />,
                  label: "Phone",
                  value: socialLinks.phone,
                  color: "red",
                  link: `tel:${socialLinks.phone}`,
                },
                {
                  icon: <FaEnvelope />,
                  label: "Email",
                  value: socialLinks.email,
                  color: "orange",
                  link: `mailto:${socialLinks.email}`,
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Location",
                  value: "Dhaka, Bangladesh",
                  color: "red",
                },
              ].map((contact, index) => (
                <motion.div
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  key={index}
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div
                    className={`w-12 h-12 bg-${contact.color}-100 dark:bg-${contact.color}-900/40 rounded-xl flex items-center justify-center`}
                  >
                    {React.cloneElement(contact.icon, {
                      className: `text-${contact.color}-500 text-xl`,
                    })}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{contact.label}</p>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="font-medium text-sm hover:text-orange-500 transition-colors break-all"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="font-medium text-sm">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.button
                className="w-full py-3 bg-linear-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById("home")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <FaDownload />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.aside>

          {/* Right Content */}
          <motion.main
            className="lg:col-span-8 space-y-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* About Me Section */}
            <motion.section
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                ABOUT ME
              </h2>
              <motion.div
                className="w-20 h-1 bg-linear-to-r from-orange-500 to-red-500 mt-3"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <div className="mt-8 space-y-6">
                {paragraphs.map((paragraph, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-10 h-10 bg-linear-to-br from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 rounded-lg flex items-center justify-center">
                      {paragraph.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                        {paragraph.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {paragraph.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills with AnimatedCounter */}
              <div
                id="skill"
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="font-bold text-orange-500">
                          <AnimatedCounter end={skill.level} duration={2} />
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-linear-to-r from-orange-500 to-red-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* What I Do Section */}
            <motion.section
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                What I do!
              </h2>
              <motion.div
                className="w-20 h-1 bg-linear-to-r from-orange-500 to-red-500 mt-3"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`${service.bgColor} p-6 rounded-2xl`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="font-bold text-lg flex items-center gap-3 text-gray-900 dark:text-white">
                      {service.icon}
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.main>
        </div>

        {/* Mobile Layout */}
        <motion.div
          className="lg:hidden space-y-6 mt-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Profile Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center"
            variants={itemVariants}
          >
            <img
              src={myImage}
              alt="Raikatun Naim Maimuna"
              className="w-32 h-32 rounded-2xl mx-auto object-cover"
            />
            <h1 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
              Raikatun Naim Maimuna
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Full Stack Web Developer
            </p>
            <div className="flex justify-center gap-3 mt-4">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 ${social.bg} rounded-lg flex items-center justify-center ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.cloneElement(social.icon, { className: "text-lg" })}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Download */}
          <motion.div
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-5"
            variants={itemVariants}
          >
            {[
              {
                icon: <FaPhone />,
                label: "Phone",
                value: socialLinks.phone,
                link: `tel:${socialLinks.phone}`,
              },
              {
                icon: <FaEnvelope />,
                label: "Email",
                value: socialLinks.email,
                link: `mailto:${socialLinks.email}`,
              },
              {
                icon: <FaMapMarkerAlt />,
                label: "Location",
                value: "Dhaka, Bangladesh",
              },
            ].map((contact, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-xl flex items-center justify-center">
                  {React.cloneElement(contact.icon, {
                    className: "text-orange-500",
                  })}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500">{contact.label}</p>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="font-medium text-sm hover:text-orange-500 transition-colors break-all"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="font-medium text-sm">{contact.value}</p>
                  )}
                </div>
              </div>
            ))}
            <motion.button
              className="w-full py-3 bg-linear-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.getElementById("home")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <FaDownload />
              Download Resume
            </motion.button>
          </motion.div>

          {/* About */}
          <motion.section
            id="about"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              ABOUT ME
            </h2>
            <div className="w-16 h-1 bg-linear-to-r from-orange-500 to-red-500 mt-2" />

            <div className="mt-6 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    {paragraph.icon}
                    {paragraph.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {paragraph.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills Mobile */}
            <div
              id="skill"
              className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="font-bold text-orange-500">
                        <AnimatedCounter end={skill.level} duration={2} />
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-linear-to-r from-orange-500 to-red-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Services */}
          <motion.section
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              What I do!
            </h2>
            <div className="w-16 h-1 bg-linear-to-r from-orange-500 to-red-500 mt-2" />
            <div className="space-y-4 mt-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`${service.bgColor} p-4 rounded-xl`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                    {service.icon}
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </MyContainer>
    </div>
  );
};

export default About;

