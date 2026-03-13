import { motion } from 'framer-motion';

interface ScoreBarProps {
  score: number;
}

export default function ScoreBar({ score }: ScoreBarProps) {
  const getColor = (s: number) => {
    if (s >= 80) return '#22d3ee'; // cyan
    if (s >= 60) return '#8b5cf6'; // violet
    if (s >= 40) return '#fca311'; // orange
    return '#f72585'; // pink
  };

  const color = getColor(score);

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)` }}
      />
      
      <div className="text-center mb-6 relative z-10">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Startup Viability Score</p>
        <div className="flex items-baseline justify-center gap-2">
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="text-7xl font-extrabold"
            style={{ color, textShadow: `0 0 20px ${color}40` }}
          >
            {score}
          </motion.span>
          <span className="text-2xl font-bold text-gray-500">/ 100</span>
        </div>
      </div>

      <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden relative z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="h-full rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
        />
      </div>
    </div>
  );
}
