import React, { useState } from 'react';
import MyContainer from './container/MyContainer';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";
const Contact = () => {
    
const [showAlert, setShowAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  if (!name || !email || !message) {
    setAlertMessage("Please fill in all fields!");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    return;
  }

  const subject = encodeURIComponent(`Portfolio Message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:maimuna84333@gmail.com?subject=${subject}&body=${body}`;

  setAlertMessage(`Thank you, ${name}! Your message was sent successfully!`);
  setShowAlert(true);
  e.target.reset();

  // Auto hide after 4 seconds
  setTimeout(() => setShowAlert(false), 4000);
};
    
    return (
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <MyContainer className={"px-6"}>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16"
          >
            Get In Touch
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* LEFT SIDE – Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <div className="grid gap-6">
                {/* Email */}
                <a
                  href="mailto:maimuna84333@gmail.com"
                  className="group flex items-center gap-5 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-xl group-hover:scale-110 transition">
                    <FaEnvelope className="text-3xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      maimuna84333@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+8801712345678"
                  className="group flex items-center gap-5 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-xl group-hover:scale-110 transition">
                    <FaPhone className="text-3xl text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Phone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +880 1712-345678
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-xl group-hover:scale-110 transition">
                    <FaWhatsapp className="text-3xl text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +880 1712-345678
                    </p>
                  </div>
                </a>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </motion.div>

            {/* RIGHT SIDE – Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 rounded-3xl shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-white text-center mb-6 relative inline-block mx-auto">
                LET'S TALK
                <span className="block w-24 h-1 bg-cyan-500 mx-auto mt-2"></span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500 text-lg transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500 text-lg transition"
                  />
                </div>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="How can we help you?"
                  required
                  className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500 text-lg resize-none transition"
                ></textarea>

                <div className="text-center">
                  <a >
                    {" "}
                    <button
                      type="submit"
                      className="block w-full text-center py-5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                    >
                      Send Message
                    </button>
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        </MyContainer>
        {/* Beautiful Custom Alert */}
        {showAlert && (
          <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-bounce">
            <div className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-2xl shadow-2xl font-bold text-lg flex items-center gap-3">
              <span className="text-2xl">Success</span>
              <span>{alertMessage}</span>
            </div>
          </div>
        )}
      </section>
    );
};

export default Contact;