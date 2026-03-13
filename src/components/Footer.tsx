import { Link } from 'react-router-dom';
import { Sparkles, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Sparkles className="w-6 h-6 text-brand-cyan" />
              <span className="glow-text">StartupSafari</span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              AI powered startup idea validation platform. Explore your startup idea before you build it with our panel of AI experts.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-brand-cyan transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-cyan transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-cyan transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/submit" className="hover:text-brand-cyan transition-colors">Validate Idea</Link></li>
              <li><Link to="/analysis" className="hover:text-brand-cyan transition-colors">How it Works</Link></li>
              <li><Link to="/dashboard" className="hover:text-brand-cyan transition-colors">Dashboard</Link></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:text-left text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} StartupSafari. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
