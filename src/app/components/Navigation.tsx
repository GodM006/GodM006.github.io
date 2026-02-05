import { motion } from "motion/react";
import { Home, Briefcase, FlaskConical, FileText, User } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "work", label: "Research", icon: FlaskConical },
    { id: "publications", label: "Publications", icon: FileText },
    { id: "about", label: "About", icon: User },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => onNavigate("home")}
            className="text-xl bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rishi's Space
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative text-sm transition-colors ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`p-2 ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-400"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}