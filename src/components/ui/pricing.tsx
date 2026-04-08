'use client';
import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for exploring Nova Ai capabilities.',
    features: ['500 AI Generations/mo', 'Standard Support', 'Basic Analytics', '1 Project'],
    cta: 'Start for Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'Advanced tools for growing businesses.',
    features: ['Unlimited Generations', 'Priority Support', 'Advanced Analytics', '10 Projects', 'Custom AI Models'],
    cta: 'Get Started Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale intelligence for large organizations.',
    features: ['Dedicated Infrastructure', '24/7 Premium Support', 'Custom Integrations', 'Unlimited Projects', 'SLA Guarantee'],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function Pricing() {
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative p-8 rounded-3xl border ${
                tier.popular ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/10 bg-white/5'
              } backdrop-blur-xl flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-neutral-500">/mo</span>}
                </div>
                <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="size-4 text-blue-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                  tier.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                    : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
