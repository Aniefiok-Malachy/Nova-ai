import DemoOne from "@/components/ui/feature-demo";
import { motion } from "framer-motion";

export function Features() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col items-center pt-32"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <DemoOne />
      </div>
    </motion.div>
  );
}
