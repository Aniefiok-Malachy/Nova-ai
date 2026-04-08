import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

export function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 flex flex-col items-center"
    >
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
          Get in Touch
        </h1>
        <p className="text-neutral-400 text-lg font-light">
          Have questions about our AI tools? Our team is here to help you navigate the future of intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {[
          { icon: Mail, title: 'Email', value: 'hello@nova-ai.com' },
          { icon: MessageSquare, title: 'Chat', value: 'Live Support 24/7' },
          { icon: Phone, title: 'Phone', value: '+1 (555) 000-0000' },
        ].map((item) => (
          <div key={item.title} className="p-8 rounded-3xl border border-white/10 bg-white/5 flex flex-col items-center text-center group hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <item.icon className="size-6 text-blue-500" />
            </div>
            <h3 className="text-white font-bold mb-2">{item.title}</h3>
            <p className="text-neutral-400 font-light">{item.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
