import { SplineSceneBasic } from "@/components/ui/demo";
import DemoOne from "@/components/ui/feature-demo";
import { Pricing } from "@/components/ui/pricing";
import { motion } from "framer-motion";

export function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col items-center"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
        <SplineSceneBasic />
      </div>
      
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <DemoOne />
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Pricing />
      </div>
    </motion.div>
  );
}
