import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { socialLinks } from "../data/portfolioData";

const SocialIcons = ({ className = "" }) => {
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

  return (
    <div className={`flex gap-4 sm:gap-6 justify-center sm:justify-start flex-wrap ${className}`}>
      {socialIcons.map((socialIcon, index) => {
        const { Icon, href, bgColor, borderColor, label } = socialIcon;
        return (
          <div key={index} className="social-button">
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
          </div>
        );
      })}
    </div>
  );
};

export default SocialIcons;