import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RetroButton } from './RetroButton';

// 👉 IMPORT DE L'IMAGE
import rocketImg from '../assets/rocket.png';

export function HeroSection() {
    return (
        <section className="relative min-h-screen w-full bg-navy overflow-hidden flex flex-col items-center justify-center pt-20 pb-16 px-4 bg-noise">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-light/30 via-navy to-navy pointer-events-none"></div>

            {/* Stars */}
            <div className="absolute top-20 left-10 text-cream/20 text-4xl animate-pulse">
                ✦
            </div>
            <div className="absolute bottom-40 right-20 text-cream/20 text-6xl animate-pulse delay-700">
                ✦
            </div>
            <div className="absolute top-1/3 right-1/4 text-orange/20 text-2xl animate-pulse delay-300">
                ★
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
                {/* Corporate Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 flex flex-col items-center"
                >
                    <h2 className="text-cream/80 text-sm md:text-lg tracking-[0.3em] uppercase font-body font-bold mb-2">
                        Aethelred Industries — Division Haven
                    </h2>
                    <div className="w-24 h-0.5 bg-orange"></div>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-cream text-7xl md:text-9xl font-display tracking-tighter leading-none mb-4 text-shadow-retro"
                >
                    PROJECT: <span className="text-orange">HAVEN</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-cream/90 text-xl md:text-3xl font-body italic mb-12 max-w-2xl"
                >
                    "Construire le paradis. En enfer."
                </motion.p>

                {/* Rocket Illustration */}
                <motion.div
                    className="relative w-64 h-64 md:w-96 md:h-96 mb-12"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <div className="absolute inset-0 rounded-full border-2 border-cream/20 scale-110 animate-pulse-slow"></div>
                    <div className="absolute inset-0 rounded-full border border-orange/20 scale-125"></div>

                    {/* 👉 ICI on utilise l'import */}
                    <img
                        src={rocketImg}
                        alt="Project Haven Rocket"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 items-center"
                >
                    <Link to="/apply">
                        <RetroButton variant="primary">
                            Postuler comme Spécialiste
                        </RetroButton>
                    </Link>
                    <Link to="/mission">
                        <RetroButton variant="outline">Découvrir la Mission</RetroButton>
                    </Link>
                </motion.div>
            </div>

            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-accent"></div>
            <div className="absolute bottom-2 left-0 w-full h-1 bg-cream"></div>
        </section>
    );
}
