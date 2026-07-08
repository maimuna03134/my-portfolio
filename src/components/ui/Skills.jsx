import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub,
  FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiJavascript, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiVercel, 
  SiNetlify, 
  SiFirebase
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

const Skills = () => {
  // All skills as icons only - organized in circular pattern
  const allSkills = [
    // Frontend
    { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    
    // Backend & Tools
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
    { icon: <FaGithub className="text-white" />, name: "GitHub" },
    { icon: <FaCode className="text-blue-600" />, name: "VS Code" },
    
    // Deployment & Animation
    { icon: <SiVercel className="text-white" />, name: "Vercel" },
    { icon: <SiNetlify className="text-teal-500" />, name: "Netlify" },
    { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    { icon: <TbBrandFramerMotion className="text-pink-500" />, name: "Framer Motion" },
    
    // Custom icons for special tools
    { 
      icon: <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">G</div>, 
      name: "GSAP"
    },
    { 
      icon: <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">L</div>, 
      name: "Lenis"
    },
    { 
      icon: <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">UI</div>, 
      name: "Shadcn/ui"
    },
    { 
      icon: <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white text-xs font-bold">JWT</div>, 
      name: "JWT"
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 dark:bg-green-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Skills Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-green-500/20 dark:bg-green-500/20 border border-green-500/30 dark:border-green-500/30 rounded-full mb-8"
          >
            <span className="text-green-600 dark:text-green-400 text-sm font-medium tracking-wider">
              Skills & Tech Stack
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight text-enhanced"
          >
            MY TECH TOOLBOX
          </motion.h2>
        </motion.div>

        {/* Skills Constellation */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central Avatar/Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-20"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 dark:shadow-green-500/50">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-white text-4xl font-bold"
              >
                ⚡
              </motion.div>
            </div>
            
            {/* Pulsing rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute inset-0 border-2 border-green-400/20 dark:border-green-400/20 rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.5, 2],
                  opacity: [0.8, 0.4, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: ring * 0.5
                }}
              />
            ))}
          </motion.div>

          {/* Skills arranged in orbits */}
          {allSkills.map((skill, index) => {
            const angle = (index * 360) / allSkills.length;
            const radius = 200 + (index % 3) * 60; // Multiple orbit levels
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0,
                  opacity: 0 
                }}
                whileInView={{ 
                  x: x, 
                  y: y, 
                  scale: 1,
                  opacity: 1 
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7 + index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.3,
                  z: 10,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Connection line to center */}
                <motion.div
                  className="absolute w-px bg-gradient-to-r from-green-400/30 to-transparent"
                  style={{
                    height: Math.sqrt(x * x + y * y),
                    transformOrigin: 'top',
                    transform: `rotate(${Math.atan2(y, x) * 180 / Math.PI + 90}deg)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-0.5px',
                    marginTop: `-${Math.sqrt(x * x + y * y)}px`
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.02 }}
                />

                {/* Skill Icon */}
                <motion.div
                  className="relative group"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 glass backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-green-500/20 dark:hover:shadow-green-500/20 transition-all duration-300 group-hover:border-green-400/50 dark:group-hover:border-green-400/50">
                    <div className="text-3xl">
                      {skill.icon}
                    </div>
                  </div>
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 glass backdrop-blur-sm text-gray-900 dark:text-white text-xs px-3 py-1 rounded-lg border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-30 text-enhanced"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {skill.name}
                  </motion.div>

                  {/* Glowing effect */}
                  <motion.div
                    className="absolute inset-0 bg-green-400/20 dark:bg-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "20+", label: "Technologies" },
              { number: "4", label: "Categories" },
              { number: "2+", label: "Years Experience" },
              { number: "∞", label: "Learning" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;