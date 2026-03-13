import { motion } from 'framer-motion';

interface PersonaCardProps {
  name: string;
  role: string;
  description: string;
  color: string;
  delay?: number;
}

export default function PersonaCard({ name, role, description, color, delay = 0 }: PersonaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)` }}
      />
      
      <div className="relative z-10 flex items-start gap-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg"
          style={{ backgroundColor: `${color}20`, color: color, border: `1px solid ${color}40` }}
        >
          {name.charAt(0)}
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-sm font-medium mb-3" style={{ color }}>{role}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
