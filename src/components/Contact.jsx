import { useState } from 'react';
import MyContainer from './container/MyContainer';
import { 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaClock,
} from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      setAlertMessage("Please fill in all fields!");
      setShowAlert(true);
      setIsSubmitting(false);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const subject = encodeURIComponent(`Portfolio Contact: Message from ${name}`);
    const body = encodeURIComponent(
      `Hello Raikatun Naim Maimuna,\n\nYou have received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nBest regards,\n${name}`
    );

    // Open email client with pre-filled message
    window.open(`mailto:maimuna84333@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setAlertMessage(`Thank you ${name}! Your message has been sent successfully. Please check your email client to complete sending.`);
    setShowAlert(true);
    setIsSubmitting(false);
    e.target.reset();

    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "maimuna84333@gmail.com",
      link: "mailto:maimuna84333@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      description: "Send me an email anytime"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+880 1860-687868",
      link: "tel:+8801860687868",
      gradient: "from-green-500 to-emerald-500",
      description: "Call me for urgent matters"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      value: "+880 1860-687868",
      link: "https://wa.me/8801860687868",
      gradient: "from-green-600 to-green-500",
      description: "Quick chat on WhatsApp"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Chattogram, Bangladesh",
      link: null,
      gradient: "from-purple-500 to-pink-500",
      description: "Available for remote work"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/raikatun-naim",
      bgColor: "bg-blue-600",
      borderColor: "border-blue-600"
    },
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      url: "https://github.com/maimuna03134/",
      bgColor: "bg-gray-900 dark:bg-gray-700",
      borderColor: "border-gray-900 dark:border-gray-700"
    },
    {
      icon: <FaFacebook className="text-xl" />,
      name: "Facebook",
      url: "https://www.facebook.com/share/1EvtWr2QGL/",
      bgColor: "bg-blue-500",
      borderColor: "border-blue-500"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <section id="contact" className="relative py-20 overflow-hidden">
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
                📞 Get In Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-enhanced"
            >
              Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-enhanced"
            >
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid gap-4 lg:gap-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    {contact.link ? (
                      <a
                        href={contact.link}
                        target={contact.link.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center gap-4 lg:gap-6 p-4 lg:p-6 glass backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/30 dark:border-white/20 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2"
                      >
                        <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${contact.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-base lg:text-lg text-gray-900 dark:text-white mb-1 text-enhanced">
                            {contact.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-200 font-medium mb-1 text-sm lg:text-base text-enhanced">
                            {contact.value}
                          </p>
                          <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 text-enhanced">
                            {contact.description}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 lg:gap-6 p-4 lg:p-6 glass backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/30 dark:border-white/20">
                        <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${contact.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-base lg:text-lg text-gray-900 dark:text-white mb-1 text-enhanced">
                            {contact.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-200 font-medium mb-1 text-sm lg:text-base text-enhanced">
                            {contact.value}
                          </p>
                          <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 text-enhanced">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                variants={itemVariants}
                className="glass backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-white/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white text-enhanced">
                      Availability
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-600 dark:text-green-400 font-medium text-enhanced">
                        Available for new projects
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-enhanced">
                  I typically respond within 24 hours. Open to remote work and flexible with time zones.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="glass backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-white/20"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 text-enhanced">
                  Connect With Me
                </h3>
                <div className="flex gap-6">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="social-button">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-12 h-12 rounded-full group block"
                        title={social.name}
                      >
                        {/* Floating background */}
                        <div className={`floater w-full h-full absolute top-0 left-0 ${social.bgColor} rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl`}></div>
                        
                        {/* Icon container */}
                        <div className={`icon relative z-10 w-full h-full flex items-center justify-center border-2 ${social.borderColor} rounded-full transition-all duration-300 ${social.bgColor} group-hover:bg-white group-hover:dark:bg-gray-900`}>
                          <div className="transition-colors duration-300 text-white group-hover:text-gray-800 group-hover:dark:text-white">
                            {social.icon}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="glass backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-white/20 shadow-2xl"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-enhanced">
                  Send Message
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-enhanced">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 glass backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 text-enhanced"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-enhanced">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 glass backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 text-enhanced"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-enhanced">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-4 py-3 glass backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all duration-300 text-enhanced"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </MyContainer>

      {/* Success Alert */}
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="glass backdrop-blur-sm border border-white/30 dark:border-white/20 text-gray-900 dark:text-white px-8 py-4 rounded-2xl shadow-2xl font-medium flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-enhanced">{alertMessage}</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;