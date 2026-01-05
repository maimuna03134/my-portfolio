import { motion } from "framer-motion";

const Logo = ({ className = "", size = "default" }) => {
  const sizes = {
    small: {
      container: "w-8 h-8",
      text: "text-lg",
      icon: "w-8 h-8"
    },
    default: {
      container: "w-10 h-10",
      text: "text-xl",
      icon: "w-10 h-10"
    },
    large: {
      container: "w-12 h-12",
      text: "text-2xl",
      icon: "w-12 h-12"
    }
  };

  const currentSize = sizes[size];

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Modern Logo Icon */}
      <div className={`${currentSize.container} relative`}>
        {/* Gradient Background Circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl shadow-lg"></div>
        
        {/* Inner Design */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Letter R with modern styling */}
          <div className="text-white font-bold text-sm leading-none">
            <svg 
              viewBox="0 0 24 24" 
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 4h7c2.21 0 4 1.79 4 4 0 1.5-.83 2.81-2.06 3.5L18 16h-2.5l-2.94-4H8v4H6V4zm2 2v4h5c1.1 0 2-.9 2-2s-.9-2-2-2H8z"/>
            </svg>
          </div>
          
          {/* Decorative dot */}
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></div>
        </div>
      </div>

      {/* Name Text */}
      <div className="flex flex-col leading-tight">
        <span className={`${currentSize.text} font-bold text-gray-900 dark:text-white text-enhanced`}>
          maimuna.
        </span>
        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium -mt-1">
          Frontend Dev
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
