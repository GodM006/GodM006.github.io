import { motion } from "motion/react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:rishimohapatra270806@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rishi-mohapatra27" },
    { icon: Github, label: "GitHub", href: "https://github.com/GodM006" },
    { icon: FileText, label: "CV", href: "https://drive.google.com/file/d/1Bu9J5SQi4X5uS2i5vzixnGc-YcMDABNa/view?usp=sharing" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-slate-800/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-blue-400 mb-4"
          >
            Hello, I'm
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Rishi Mohapatra
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Student & Researcher
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            B.E. Chemical Engineering + M.Sc. Mathematics | BITS Pilani, Hyderabad
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              >
                <link.icon className="w-5 h-5 text-gray-400" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              onClick={() => onNavigate("work")}
              className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Research Experience
            </motion.button>
            <motion.button
              onClick={() => onNavigate("publications")}
              className="px-8 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg border border-gray-700 hover:border-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Publications & Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}