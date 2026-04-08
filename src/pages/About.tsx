import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 flex flex-col items-center text-center"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
        About Nova Ai
      </h1>
      <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed font-light">
        Nova Ai was founded with a single mission: to democratize advanced artificial intelligence for businesses of all sizes. We believe that intelligence should be accessible, intuitive, and transformative.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
        {[
          { label: 'Founded', value: '2024' },
          { label: 'Active Users', value: '50k+' },
          { label: 'AI Models', value: '12' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="text-4xl font-bold text-white">{stat.value}</span>
            <span className="text-neutral-500 text-sm uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
