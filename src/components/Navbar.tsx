import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-dark/80 backdrop-blur-md border-b border-white/10"
    >
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
        <Sparkles className="w-6 h-6 text-brand-cyan" />
        <span className="glow-text">StartupSafari</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
        <Link to="/analysis" className="hover:text-white transition-colors">Analysis</Link>
      </div>
      
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Log in
        </Link>
        <Link 
          to="/submit" 
          className="px-4 py-2 text-sm font-medium text-white bg-brand-purple rounded-lg hover:bg-brand-violet transition-colors glow-box"
        >
          Validate Idea
        </Link>
      </div>
    </motion.nav>
  );
}
