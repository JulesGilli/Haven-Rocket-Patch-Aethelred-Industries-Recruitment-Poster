import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
export function MissionBrief() {
  return <section className="relative py-20 px-4 bg-cream paper-texture overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Left Column: The Official Mission */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-navy opacity-50"></div>

            <h2 className="text-4xl md:text-5xl font-display text-navy mb-8 flex items-center gap-3">
              <span className="bg-navy text-cream px-3 py-1 text-2xl rounded-sm">
                01
              </span>
              VOTRE MISSION
            </h2>

            <div className="space-y-6 font-body text-vintage-text text-lg leading-relaxed">
              <p className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-navy mt-1 flex-shrink-0" />
                <span>
                  Atterrir sur une exoplanète classée{' '}
                  <strong className="bg-orange/20 px-1">"hostile"</strong>.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-navy mt-1 flex-shrink-0" />
                <span>
                  Construire une colonie de luxe en exactement{' '}
                  <strong className="border-b-2 border-navy">30 minutes</strong>
                  .
                </span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-navy mt-1 flex-shrink-0" />
                <span>
                  Collaborer avec trois autres "Spécialistes" (terme utilisé
                  vaguement).
                </span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-navy mt-1 flex-shrink-0" />
                <span>
                  Survivre assez longtemps pour valider votre rapport.
                </span>
              </p>
              <p className="mt-6 italic border-l-4 border-orange pl-4 text-navy">
                "Tout cela pour un client qui ne viendra absolument jamais."
              </p>
            </div>
          </motion.div>

          {/* Right Column: The Reality */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-orange-accent opacity-50"></div>

            <h2 className="text-4xl md:text-5xl font-display text-orange-accent mb-8 flex items-center gap-3">
              <span className="bg-orange-accent text-cream px-3 py-1 text-2xl rounded-sm">
                02
              </span>
              CE QU'ON NE VOUS DIT PAS
            </h2>

            <div className="space-y-6 font-body text-vintage-text text-lg leading-relaxed">
              <p className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-accent mt-1 flex-shrink-0" />
                <span>
                  Votre seul ami fidèle sera le{' '}
                  <strong className="text-orange-accent">
                    Chat Vocal de Proximité
                  </strong>
                  .
                </span>
              </p>
              <p className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-accent mt-1 flex-shrink-0" />
                <span>Budget équipement : Minimal. (Très minimal).</span>
              </p>
              <p className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-accent mt-1 flex-shrink-0" />
                <span>
                  L'assurance ne couvre pas le démembrement par entités
                  non-répertoriées.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-accent mt-1 flex-shrink-0" />
                <span>"Hostile" est un terme large. Très large.</span>
              </p>

              <div className="mt-8 p-4 border-2 border-dashed border-navy/30 bg-white/50 rotate-1">
                <p className="font-display text-xl text-navy mb-1">
                  PROBABILITÉ DE SURVIE :
                </p>
                <p className="font-body text-sm">
                  CALCUL EN COURS...{' '}
                  <span className="animate-pulse">ERREUR</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Stamp */}
      <div className="absolute top-10 right-10 opacity-10 rotate-12 pointer-events-none">
        <div className="w-32 h-32 rounded-full border-4 border-navy flex items-center justify-center">
          <span className="font-display text-2xl text-navy">CLASSIFIÉ</span>
        </div>
      </div>
    </section>;
}