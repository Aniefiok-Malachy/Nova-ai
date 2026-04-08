import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";

export function SignUp() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-md px-6 pt-40 pb-24 flex flex-col items-center"
    >
      <div className="w-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-neutral-400 text-sm font-light">Start your journey with Nova Ai today.</p>
        </div>

        <div className="space-y-4">
          <button className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors">
            <Github className="size-5" />
            Continue with GitHub
          </button>
          <button className="w-full py-3 px-4 rounded-xl border border-white/10 text-white font-semibold flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
            <Mail className="size-5" />
            Continue with Email
          </button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-black px-2 text-neutral-500">Or continue with</span>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">
            Create Account
            <ArrowRight className="size-4" />
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-neutral-500">
          By signing up, you agree to our <a href="#" className="text-white hover:underline">Terms of Service</a> and <a href="#" className="text-white hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </motion.div>
  );
}
