'use client';
import React from 'react';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'Neural Processing',
		icon: Cpu,
		description: 'Advanced neural networks that process data with unprecedented speed and accuracy.',
	},
	{
		title: 'Predictive Analytics',
		icon: Zap,
		description: 'Anticipate market trends and user behavior before they happen with our AI models.',
	},
	{
		title: 'Smart Automation',
		icon: Settings2,
		description: 'Automate repetitive tasks and complex workflows with intelligent decision-making.',
	},
	{
		title: 'Secure Intelligence',
		icon: Fingerprint,
		description: 'Enterprise-grade security for your AI models and sensitive business data.',
	},
	{
		title: 'Creative Co-pilot',
		icon: Pencil,
		description: 'Generate high-quality content, code, and designs with AI-assisted creativity.',
	},
	{
		title: 'Infinite Scalability',
		icon: Sparkles,
		description: 'Scale your AI operations from startup to enterprise without missing a beat.',
	},
];

export default function DemoOne() {
	return (
		<section className="py-24 md:py-32 w-full relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
			<div className="mx-auto w-full max-w-6xl space-y-16 px-4 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium mb-6 backdrop-blur-md">
						<Sparkles className="w-4 h-4 mr-2 text-white" />
						Intelligent Tools
					</div>
					<h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl text-white">
						Intelligence. Scale. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Precision.</span>
					</h2>
					<p className="text-neutral-400 mt-6 text-base md:text-lg tracking-wide text-balance max-w-2xl mx-auto font-light leading-relaxed">
						Nova Ai provides the most advanced suite of artificial intelligence tools designed to accelerate your business growth and innovation.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.2}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(10px)', y: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
