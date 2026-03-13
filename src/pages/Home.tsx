import { motion } from 'framer-motion';
import { Lightbulb, BrainCircuit, Rocket, CheckCircle2, Zap, Target, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PersonaCard from '../components/PersonaCard';
import FeatureCard from '../components/FeatureCard';
import ScoreBar from '../components/ScoreBar';
import Footer from '../components/Footer';

const EXPERTS = [
  { name: 'Fox', role: 'Idea logic analyst', description: 'Analyzes the core logic and feasibility of your idea, finding loopholes before you build.', color: '#ff7b00' },
  { name: 'Owl', role: 'Market intelligence', description: 'Provides deep insights into market trends, target audience demographics, and growth potential.', color: '#4cc9f0' },
  { name: 'Shark', role: 'Business model strength', description: 'Evaluates revenue streams, pricing strategies, and overall financial viability.', color: '#3a0ca3' },
  { name: 'Bee', role: 'Demand validation', description: 'Assesses real-world demand, search volume, and customer pain points to ensure product-market fit.', color: '#fca311' },
  { name: 'Wolf', role: 'Competitive strategy', description: 'Analyzes competitors, identifies market gaps, and helps build a strong defensive moat.', color: '#7209b7' },
  { name: 'Cheetah', role: 'Speed to market', description: 'Focuses on MVP development strategies, quick wins, and rapid iteration cycles.', color: '#f72585' },
  { name: 'Peacock', role: 'Branding and storytelling', description: 'Helps craft a compelling narrative, brand identity, and marketing hook for your startup.', color: '#4361ee' },
  { name: 'Eagle', role: 'Long term vision', description: 'Looks at the big picture, scalability, and alignment with future technological shifts.', color: '#48cae4' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-purple/50">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* How It Works Section */}
        <section className="py-32 relative z-10 bg-brand-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">How StartupSafari Works</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">A simple 3-step process to validate your startup idea using advanced AI expert personas.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Lightbulb className="w-8 h-8" />}
                title="Step 1: Submit your idea"
                description="Describe your startup idea, target audience, and proposed solution in plain English."
                delay={0.1}
              />
              <FeatureCard 
                icon={<BrainCircuit className="w-8 h-8" />}
                title="Step 2: AI experts analyze"
                description="Our panel of 8 specialized AI animal personas dissect your idea from every business angle."
                delay={0.2}
              />
              <FeatureCard 
                icon={<Rocket className="w-8 h-8" />}
                title="Step 3: Receive insights"
                description="Get a comprehensive viability score and actionable feedback to improve your concept."
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* AI Expert Panel Section */}
        <section className="py-32 relative z-10 bg-gradient-to-b from-brand-dark via-[#0d071f] to-brand-dark border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Your AI Expert Panel</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Each persona brings a unique perspective to ensure your idea is bulletproof.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPERTS.map((expert, index) => (
                <PersonaCard 
                  key={expert.name}
                  {...expert}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Score Demo Section */}
        <section className="py-32 relative z-10 bg-brand-dark overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">See What You Get</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Actionable insights and a clear score to guide your next steps.</p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="mb-16">
                <ScoreBar score={78} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#fca311]/20 text-[#fca311] flex items-center justify-center font-bold border border-[#fca311]/40">B</div>
                    <h4 className="text-lg font-bold">Bee (Demand)</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">"Search volume for 'AI pet sitters' has increased 400% YoY. The demand is validated, but the willingness to pay needs testing."</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#3a0ca3]/20 text-[#3a0ca3] flex items-center justify-center font-bold border border-[#3a0ca3]/40">S</div>
                    <h4 className="text-lg font-bold">Shark (Business Model)</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">"A one-time fee won't sustain the server costs. Pivot to a freemium subscription model to ensure long-term viability."</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why StartupSafari Section */}
        <section className="py-32 relative z-10 bg-brand-dark border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Why validate with StartupSafari?</h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  90% of startups fail because they build products nobody wants. Don't waste months of development time on an unvalidated idea.
                </p>
                
                <ul className="space-y-6">
                  {[
                    { icon: <CheckCircle2 className="text-brand-cyan" />, text: "Avoid building ideas nobody wants" },
                    { icon: <Zap className="text-brand-cyan" />, text: "Instant AI validation in minutes, not weeks" },
                    { icon: <Target className="text-brand-cyan" />, text: "Clear, actionable startup insights" },
                    { icon: <BarChart3 className="text-brand-cyan" />, text: "Improve your idea before building MVP" }
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 text-lg font-medium text-gray-200"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                      {item.text}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-cyan rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="aspect-video rounded-xl bg-black/50 border border-white/5 flex items-center justify-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="w-20 h-20 rounded-full bg-brand-cyan/20 flex items-center justify-center backdrop-blur-md border border-brand-cyan/50 cursor-pointer group-hover:scale-110 transition-transform duration-300 z-10">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
