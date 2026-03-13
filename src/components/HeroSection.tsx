import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroScene from '../three/HeroScene';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-20">
      {/* Content Overlay */}
      <div className="container mx-auto px-6 relative z-10 w-full lg:w-1/2 pt-10 lg:pt-0">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-brand-cyan text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            AI Powered Startup Validation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Explore your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet glow-text">
              startup idea
            </span> <br />
            before you build it
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            StartupSafari sends your idea through a panel of AI startup experts that analyze market opportunity, demand, competition, business model, and scalability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/submit" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-brand-purple hover:bg-brand-violet text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors glow-box"
              >
                Start Idea Analysis
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link to="/analysis" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 3D Background / Right Side */}
      <div className="relative lg:absolute lg:inset-0 lg:left-1/2 z-0 w-full h-[500px] lg:h-full mt-10 lg:mt-0">
        <HeroScene />
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
