import React from 'react';
import { motion } from 'framer-motion';
import { Hand, Wrench, Ghost, Timer, MessageSquare, BoxIcon } from 'lucide-react';
const features = [{
  icon: Hand,
  title: 'INTERACTIONS PHYSIQUES',
  desc: 'Jetez, poussez, ou propulsez accidentellement vos coéquipiers en orbite.'
}, {
  icon: BoxIcon,
  title: 'GESTION DE RESSOURCES',
  desc: 'Récupérez des matériaux. Argumentez sur les priorités. Accumulez des déchets.'
}, {
  icon: Wrench,
  title: 'SYSTÈMES DE CONSTRUCTION',
  desc: "Construisez des murs. Regardez-les s'effondrer. Reconstruisez. Pleurez."
}, {
  icon: Ghost,
  title: 'ENTITÉS HOSTILES',
  desc: "Elles n'étaient pas là hier. Elles sont définitivement là maintenant."
}, {
  icon: Timer,
  title: 'MISSIONS DE 30 MINUTES',
  desc: 'Juste assez de temps pour paniquer efficacement.'
}, {
  icon: MessageSquare,
  title: 'CHAT VOCAL DE PROXIMITÉ',
  desc: "Votre seul ami. Nous déclinons toute responsabilité quant à ce qu'il pourrait dire."
}];
export function FeaturesGrid() {
  return <section className="py-24 px-4 bg-navy bg-noise">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-cream text-5xl md:text-7xl font-display mb-6">
            CE QUI VOUS ATTEND
          </h2>
          <div className="w-32 h-1 bg-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-cream paper-texture rounded-lg p-8 border-4 border-navy shadow-[8px_8px_0px_0px_rgba(244,162,97,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(244,162,97,1)] transition-all duration-300">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-6 border-2 border-orange">
                <feature.icon className="w-8 h-8 text-cream" />
              </div>

              <h3 className="text-2xl font-display text-navy mb-3">
                {feature.title}
              </h3>

              <p className="font-body text-vintage-text leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}