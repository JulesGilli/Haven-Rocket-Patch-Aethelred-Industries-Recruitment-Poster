import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Hammer, Skull, CloudLightning, Clock } from 'lucide-react';
const features = [{
  icon: Users,
  title: 'COOPÉRATION 4 JOUEURS',
  desc: 'Coordonnez-vous ou effondrez-vous ensemble.'
}, {
  icon: Zap,
  title: 'PHYSIQUE CHAOTIQUE',
  desc: 'La gravité est une suggestion, pas une loi.'
}, {
  icon: Hammer,
  title: 'CONSTRUCTION RAPIDE',
  desc: 'Bâtissez sous une pression extrême.'
}, {
  icon: Skull,
  title: 'FAUNE HOSTILE',
  desc: 'Ils étaient là avant. Et ils ont faim.'
}, {
  icon: CloudLightning,
  title: 'ÉVÉNEMENTS ALÉATOIRES',
  desc: 'Tempêtes, pannes, et mauvaises surprises.'
}, {
  icon: Clock,
  title: 'FENÊTRES DE 30 MINUTES',
  desc: 'Entrez. Construisez. Sortez. Peut-être.'
}];
export function GameOverview() {
  return <section className="py-24 px-4 bg-navy-dark bg-noise border-t-8 border-orange">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-cream text-5xl md:text-7xl font-display mb-4 tracking-tight">
            PARAMÈTRES OPÉRATIONNELS
          </h2>
          <p className="text-orange font-body tracking-widest uppercase text-sm md:text-base">
            // Lire attentivement avant déploiement //
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group relative bg-navy border border-cream/20 p-6 hover:border-orange transition-colors duration-300">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cream group-hover:border-orange"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cream group-hover:border-orange"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cream group-hover:border-orange"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cream group-hover:border-orange"></div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-light border border-cream/10 group-hover:border-orange/50 transition-colors">
                  <feature.icon className="w-8 h-8 text-cream group-hover:text-orange transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-display text-cream mb-2 tracking-wide group-hover:text-orange transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-cream/60 font-body text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}