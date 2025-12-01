import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RetroButton } from './RetroButton';
import { VintageBadge } from './VintageBadge';
export function RecruitmentSection() {
  return <section className="relative py-32 px-4 bg-cream paper-texture overflow-hidden flex flex-col items-center text-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <VintageBadge text="URGENT" className="hidden md:flex -top-12 -right-12 rotate-12" />

        <motion.h2 initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} className="text-5xl md:text-7xl lg:text-8xl font-display text-navy mb-12 leading-[0.9]">
          ÊTES-VOUS LE <br />
          <span className="text-orange-accent">CANDIDAT IDÉAL ?</span>
        </motion.h2>

        <div className="space-y-6 mb-12 font-body text-lg md:text-xl text-vintage-text max-w-2xl mx-auto">
          <motion.p initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            Fatigué du chômage galactique ?
          </motion.p>
          <motion.p initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.4
        }}>
            Hésitez encore avec ce poste de livreur d'eau sur Mars ?
          </motion.p>
          <motion.p initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.6
        }}>
            À l'aise avec les scénarios à haut risque et faible récompense ?
          </motion.p>
          <motion.p initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.8
        }} className="font-bold text-navy text-2xl">
            Alors vous êtes exactement ce que nous cherchons !
          </motion.p>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 1
      }}>
          <Link to="/apply">
            <RetroButton variant="primary" className="text-2xl px-12 py-4">
              Rejoindre le Programme
            </RetroButton>
          </Link>
          <p className="mt-4 text-xs font-body text-navy/60 uppercase tracking-widest">
            *Survie non garantie. Conditions applicables.
          </p>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-navy"></div>
      <div className="absolute top-2 left-0 w-full h-0.5 bg-orange"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-navy"></div>
      <div className="absolute bottom-2 left-0 w-full h-0.5 bg-orange"></div>
    </section>;
}