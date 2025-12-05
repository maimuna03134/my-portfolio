import React, { useState } from "react";

import toast from "react-hot-toast";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import MyContainer from "../component/MyContainer";

const MyPortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Skills data
  const skills = {
    frontend: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "RESTful APIs", level: 85 },
    ],
    tools: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 80 },
    ],
  };

  // Projects data
  const projects = [
    {
      id: 1,
      name: "WarmPaws Pet Care Platform",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600",
      shortDescription:
        "Complete pet care service platform with booking system",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
      ],
      fullDescription:
        "WarmPaws is a comprehensive pet care service platform that connects pet owners with professional groomers, veterinarians, and pet care specialists. The platform features a modern UI with service booking, user authentication, and real-time availability tracking.",
      liveLink: "https://warmpaws-demo.com",
      githubLink: "https://github.com/yourusername/warmpaws",
      challenges:
        "Implementing real-time slot availability was challenging. I solved it by using MongoDB change streams and WebSocket connections to update availability across all clients instantly.",
      improvements:
        "Planning to add payment gateway integration, pet health record tracking, and a mobile app version for better accessibility.",
    },
    {
      id: 2,
      name: "E-Commerce Dashboard",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      shortDescription: "Admin dashboard for managing online store operations",
      technologies: [
        "React.js",
        "Express.js",
        "MongoDB",
        "Chart.js",
        "Material-UI",
      ],
      fullDescription:
        "A comprehensive admin dashboard for e-commerce platforms featuring sales analytics, inventory management, order tracking, and customer management. Built with responsive design and interactive data visualizations.",
      liveLink: "https://ecommerce-dashboard-demo.com",
      githubLink: "https://github.com/yourusername/ecommerce-dashboard",
      challenges:
        "Creating dynamic, interactive charts that update in real-time required careful state management. I used React Context API combined with Chart.js for smooth data visualization.",
      improvements:
        "Future plans include adding AI-powered sales predictions, automated inventory alerts, and multi-vendor support.",
    },
    {
      id: 3,
      name: "Task Management App",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600",
      shortDescription: "Collaborative task management tool for teams",
      technologies: ["React.js", "Firebase", "Tailwind CSS", "Redux"],
      fullDescription:
        "A modern task management application that helps teams organize projects, assign tasks, track progress, and collaborate effectively. Features include drag-and-drop task boards, real-time updates, and team chat.",
      liveLink: "https://taskmanager-demo.com",
      githubLink: "https://github.com/yourusername/task-manager",
      challenges:
        "Implementing drag-and-drop functionality across different boards while maintaining data consistency was complex. I used React DnD library with optimistic UI updates.",
      improvements:
        "Planning to add calendar integration, time tracking features, and Gantt chart visualization for better project planning.",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    // For now, just an alert. Replace with actual resume download
    toast.success(
      "Resume download will be implemented with your actual resume file."
    );
  };

  return (
    <>
      <div className=" bg-gray-50">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <MyContainer>
            <div className="px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  YourName.dev
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition"
                  >
                    Contact
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden text-2xl text-gray-700"
                >
                  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition text-left"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition text-left"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition text-left"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition text-left"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition text-left"
                  >
                    Contact
                  </button>
                </div>
              )}
            </div>
          </MyContainer>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-24 pb-20 px-4 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen flex items-center"
        >
          <MyContainer>
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-lg text-blue-600 font-semibold mb-2">
                    Hello, I'm
                  </h2>
                  <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                    Your Full Name
                  </h1>
                  <h3 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">
                    Full Stack Web Developer
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Crafting beautiful, functional web experiences with modern
                    technologies. Specializing in MERN stack development.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <button
                      onClick={handleDownloadResume}
                      className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:shadow-xl transition"
                    >
                      <FaDownload /> Download Resume
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition"
                    >
                      Contact Me
                    </button>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a
                      href="https://facebook.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                    >
                      <FaFacebook className="text-xl" />
                    </a>
                    <a
                      href="https://twitter.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-linear-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden shadow-2xl">
                      <img
                        src="https://i.ibb.co.com/4ZvhXWtk/OIP.webp"
                        alt="Your Name"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold shadow-xl">
                      <FaCode className="text-4xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MyContainer>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white">
          <MyContainer>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              About Me
            </h2>
            <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-blue-600">
                    My Programming Journey:
                  </strong>{" "}
                  I started my coding journey 2 years ago when I discovered the
                  magic of building things on the web. What began as curiosity
                  quickly turned into a passion. I dove deep into HTML, CSS, and
                  JavaScript, and eventually mastered the MERN stack (MongoDB,
                  Express.js, React.js, Node.js).
                </p>
                <p className="text-lg">
                  <strong className="text-blue-600">What I Love to Do:</strong>{" "}
                  I enjoy building full-stack web applications that solve
                  real-world problems. There's something incredibly satisfying
                  about taking an idea from concept to deployment. I love
                  working on both frontend and backend, creating seamless user
                  experiences while ensuring robust server-side functionality.
                </p>
                <p className="text-lg">
                  <strong className="text-blue-600">My Approach:</strong> I
                  believe in writing clean, maintainable code and staying
                  updated with the latest web technologies. I'm a strong
                  advocate for responsive design and always ensure my
                  applications work flawlessly across all devices.
                </p>
                <p className="text-lg">
                  <strong className="text-blue-600">Beyond Coding:</strong> When
                  I'm not coding, you'll find me playing cricket with friends,
                  exploring new cafes in the city, or binge-watching tech
                  tutorials on YouTube. I'm also passionate about photography
                  and love capturing moments during my travels.
                </p>
              </div>
            </div>
          </MyContainer>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 px-4 bg-linear-to-br from-gray-50 to-blue-50"
        >
          <MyContainer>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              My Skills
            </h2>

            <div className="space-y-12">
              {/* Frontend Skills */}
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-blue-600 rounded"></span>
                  Frontend Development
                </h3>
                <div className="space-y-4">
                  {skills.frontend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          {skill.name}
                        </span>
                        <span className="font-bold text-blue-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h3 className="text-2xl font-bold text-purple-600 mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-purple-600 rounded"></span>
                  Backend Development
                </h3>
                <div className="space-y-4">
                  {skills.backend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          {skill.name}
                        </span>
                        <span className="font-bold text-purple-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-orange-600 rounded"></span>
                  Tools & Technologies
                </h3>
                <div className="space-y-4">
                  {skills.tools.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          {skill.name}
                        </span>
                        <span className="font-bold text-orange-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MyContainer>
        </section>

        {/* Education Section */}
        <section className="py-20 px-4 bg-white">
          <MyContainer>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              Education
            </h2>
            <div className="space-y-6">
              <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Science in Computer Science & Engineering
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  University Name | 2020 - 2024
                </p>
                <p className="text-gray-700">CGPA: 3.75/4.00</p>
                <p className="text-gray-600 mt-4">
                  Specialized in Software Engineering and Web Development.
                  Completed coursework in Data Structures, Algorithms, Database
                  Management Systems, and Software Engineering.
                </p>
              </div>

              <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-purple-600 font-semibold mb-2">
                  College Name | 2018 - 2020
                </p>
                <p className="text-gray-700">GPA: 5.00/5.00</p>
                <p className="text-gray-600 mt-4">
                  Science Group with focus on Mathematics and Physics
                </p>
              </div>
            </div>
          </MyContainer>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-4 bg-linear-to-br from-gray-50 to-purple-50"
        >
          <MyContainer>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              My Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.shortDescription}
                    </p>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition"
                    >
                      View Details <IoMdArrowForward />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </MyContainer>
        </section>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl">
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <FaTimes className="text-2xl text-gray-700" />
                </button>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  {selectedProject.name}
                </h2>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">
                    Description:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-orange-600 mb-3">
                    Challenges Faced:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-green-600 mb-3">
                    Future Improvements:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.improvements}
                  </p>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:shadow-xl transition"
                  >
                    <FaExternalLinkAlt /> Live Preview
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:shadow-xl transition"
                  >
                    <FaGithub /> GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-white">
          <MyContainer className={"text-center"}>
            <h2 className="text-4xl font-black mb-12 text-gray-900">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:your.email@example.com"
                className="bg-linear-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <FaEnvelope className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">your.email@example.com</p>
              </a>

              <a
                href="tel:+8801712345678"
                className="bg-linear-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <FaPhone className="text-5xl text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+880 1712-345678</p>
              </a>

              <a
                href="https://wa.me/8801712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-linear-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <FaWhatsapp className="text-5xl text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600">+880 1712-345678</p>
              </a>
            </div>

            <p className="text-xl text-gray-600 mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block bg-linear-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition"
            >
              Send Message
            </a>
          </MyContainer>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-4">
          <MyContainer className={"text-center"}>
            <p className="mb-4">&copy; 2024 Your Name. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                Twitter
              </a>
            </div>
          </MyContainer>
        </footer>
      </div>
    </>
  );
};

export default MyPortfolio;
