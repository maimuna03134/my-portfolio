import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export const skillsData = {
  frontend: [
    {
      name: "HTML5",
      level: 95,
      icon: <FaHtml5 className="text-4xl drop-shadow-lg text-orange-600  " />,
    },
    {
      name: "CSS3",
      level: 90,
      icon: <FaCss3Alt className="text-blue-600 text-4xl drop-shadow-lg " />,
    },
    {
      name: "JavaScript",
      level: 88,
      icon: (
        <IoLogoJavascript className="text-yellow-500 bg-black rounded text-4xl drop-shadow-lg " />
      ),
    },
    {
      name: "React.js",
      level: 85,
      icon: <FaReact className="text-cyan-500 text-4xl drop-shadow-lg " />,
    },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: (
        <SiTailwindcss className="text-cyan-500 text-4xl drop-shadow-lg " />
      ),
    },
  ],
  backend: [
    {
      name: "Node.js",
      level: 82,
      icon: <FaNodeJs className="text-green-600 text-4xl drop-shadow-lg " />,
    },
    {
      name: "Express.js",
      level: 80,
      icon: (
        <SiExpress className="text-gray-800 dark:text-white text-4xl drop-shadow-lg " />
      ),
    },
    {
      name: "MongoDB",
      level: 78,
      icon: <SiMongodb className="text-green-500 text-4xl drop-shadow-lg " />,
    },
  ],
};

export const projectsData = [
  {
    id: 1,
    name: "WarmPaws – Pet Care in Winter",
    image:
      "https://i.ibb.co.com/Qj9xSZnK/Whats-App-Image-2025-12-06-at-5-06-41-AM.jpg",
    shortDescription: "Complete pet care service platform with booking system",
    technologies: ["React", " JavaScript", "Firebase"],
    fullDescription:
      "WarmPaws – Pet Care in Winter is a responsive SPA that helps pet owners explore winter care services, expert tips, and book appointments easily.",
    liveLink: "https://cozy-winter-companion.web.app",
    githubLink: "https://github.com/maimuna03134/Winter-Pet-Care-Services.git",
    challenges:
      "Implementing real-time slot availability was challenging. I solved it by using MongoDB change streams and WebSocket connections.",
    improvements:
      "Planning to add payment gateway integration, pet health record tracking, and a mobile app version.",
  },
  {
    id: 2,
    name: "KrishiLink – Farmer's Growth & Connection Platform",
    image:
      "https://i.ibb.co.com/355dPM6t/Whats-App-Image-2025-12-06-at-5-14-29-AM.jpg",
    shortDescription:
      "KrishiLink connects farmers, traders, and consumers to share crops and collaborate easily.",
    technologies: ["React", " Node.js", "Express.js", "Mongodb"],
    fullDescription:
      "KrishiLink is a web platform that connects farmers, traders, and consumers where users can share crops, browse posts, and collaborate directly.",
    liveLink: "https://crop-trading-platform-design.web.app/",
    githubLink:
      "https://github.com/maimuna03134/KrishiLink--Farmer-s-Growth-Connection-Platform.git",
    challenges:
      "Creating dynamic, interactive charts that update in real-time required careful state management.",
    improvements:
      "Future plans include adding AI-powered sales predictions and automated inventory alerts.",
  },
  {
    id: 3,
    name: "FreshBite – Food Ordering Website ",
    image:
      "https://i.ibb.co.com/qLQPxqSf/Whats-App-Image-2025-12-06-at-5-12-11-AM.jpg ",
    shortDescription:
      "FreshBite is a seamless and engaging food ordering platform with a vibrant, responsive design.",
    technologies: ["React", "Firebase", "tailwindcss"],
    fullDescription:
      "FreshBite is a modern food ordering platform with a vibrant interface, smooth animations, and interactive features. It makes browsing and ordering dishes effortless across all devices with a fully responsive design and persistent cart.",
    liveLink: "https://freshbite---food-delivery.web.app",
    githubLink: "https://github.com/maimuna03134/My-Fresh-bite.git",
    challenges:
      "FreshBite is a fast, modern food ordering platform that offers a vibrant, smooth, and responsive experience from browsing to checkout.",
    improvements:
      "Planning to add calendar integration, time tracking features, and Gantt chart visualization.",
  },
];

export const socialLinks = {
  github: "https://github.com/maimuna03134/",
  linkedin: "http://www.linkedin.com/in/raikatun-naim-webdev",
  facebook: "https://www.facebook.com/share/1EvtWr2QGL/",
  email: "maimuna84333@gmail.com",
  phone: "+8801860687868",
  whatsapp: "8801860687868",
};
