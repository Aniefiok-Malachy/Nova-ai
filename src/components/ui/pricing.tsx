'use client';
import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    description: 'Perfect for exploring Nova Ai capabilities.',
    features: ['500 AI Generations/mo', 'Standard Support', 'Basic Analytics', '1 Project'],
    cta: 'Start for Free',
    popular: false,
  },
  {
    name: 'Pro',
    monthlyPrice: '$49',
    yearlyPrice: '$39',
    description: 'Advanced tools for growing businesses.',
    features: ['Unlimited Generations', 'Priority Support', 'Advanced Analytics', '10 Projects', 'Custom AI Models'],
    cta: 'Get Started Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    description: 'Full-scale intelligence for large organizations.',
    features: ['Dedicated Infrastructure', '24/7 Premium Support', 'Custom Integrations', 'Unlimited Projects', 'SLA Guarantee'],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>('Pro');

  return (
    <section className="py-24 md:py-32 w-full relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 mr-2 text-white" />
            Pricing Plans
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Pricing</span>
          </h2>
          <p className="text-neutral-400 mt-6 text-lg font-light">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-neutral-500'} transition-colors`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-white/10 border border-white/10 p-1 transition-colors hover:bg-white/20"
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-5 h-5 rounded-full bg-white shadow-lg"
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-neutral-500'} transition-colors flex items-center gap-2`}>
              Yearly
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => {
            const isSelected = selectedTier === tier.name;
            const price = isAnnual ? tier.yearlyPrice : tier.monthlyPrice;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                onClick={() => setSelectedTier(tier.name)}
                className={`relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer group ${
                  isSelected 
                    ? 'border-blue-500 bg-blue-500/10 scale-[1.02] shadow-[0_0_40px_rgba(59,130,246,0.1)]' 
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                } backdrop-blur-xl flex flex-col`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-blue-600/20">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center"
                      >
                        <Check className="size-3 text-white stroke-[3]" />
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="flex items-baseline gap-1 overflow-hidden h-12">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={price}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl font-extrabold text-white"
                      >
                        {price}
                      </motion.span>
                    </AnimatePresence>
                    {price !== 'Custom' && (
                      <span className="text-neutral-500 text-sm">/mo</span>
                    )}
                  </div>
                  
                  <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-neutral-300">
                      <Check className={`size-4 shrink-0 transition-colors ${isSelected ? 'text-blue-400' : 'text-blue-500/50'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-700'
                      : 'bg-white/10 text-white hover:bg-white hover:text-black'
                  }`}
                >
                  {tier.cta}
                </button>

                {/* Selection Glow */}
                {isSelected && (
                  <div className="absolute inset-0 rounded-3xl bg-blue-500/5 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
