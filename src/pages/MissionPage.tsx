import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Utensils, Thermometer, Wind, AlertTriangle, Skull, Clock, Wrench, Radio, Activity, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { RetroButton } from '../components/RetroButton';
import { Footer } from '../components/Footer';
import { VintageBadge } from '../components/VintageBadge';
export function MissionPage() {
  return <main className="min-h-screen w-full bg-navy text-cream overflow-x-hidden selection:bg-orange selection:text-navy font-body">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-cream hover:text-orange transition-colors">
          <ArrowLeft className="w-6 h-6" />
          <span className="font-display tracking-widest uppercase">
            Retour à l'accueil
          </span>
        </Link>
        <div className="hidden md:block text-xs uppercase tracking-[0.3em] opacity-50">
          Dossier Confidentiel #884-B
        </div>
      </nav>

      {/* 1. Hero Section: Classified Briefing */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-navy bg-noise pt-24 pb-12 px-4 border-b-4 border-orange">
        <VintageBadge text="CONFIDENTIEL" className="top-24 right-10 rotate-12 opacity-80" />

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center max-w-4xl mx-auto">
          <h2 className="text-orange text-sm md:text-lg tracking-[0.5em] uppercase font-bold mb-4">
            NIVEAU D'ACCÈS: SPÉCIALISTE
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-cream mb-6 text-shadow-retro leading-none">
            DOSSIER <br />
            <span className="text-orange-accent">MISSION</span>
          </h1>
          <div className="w-32 h-1 bg-cream mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-display tracking-wide text-cream/80">
            BRIEFING OPÉRATIONNEL COMPLET
          </p>
        </motion.div>
      </section>

      {/* 2. Mission Introduction */}
      <section className="py-20 px-4 bg-cream paper-texture text-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-8">
            PRÉSENTATION DE LA MISSION
          </h2>
          <p className="text-lg md:text-xl leading-relaxed font-body text-vintage-text mb-6">
            PROJECT: HAVEN représente l'initiative de colonisation la plus
            audacieuse de l'humanité (et la moins chère). Votre objectif est
            simple : transformer un environnement hostile, toxique et mortel en
            un paradis résidentiel de luxe.
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-body text-vintage-text italic border-l-4 border-orange pl-6 mx-auto max-w-2xl">
            "Nous fournissons le rêve. Vous fournissez la main-d'œuvre. Et
            potentiellement vos organes."
          </p>
        </div>
      </section>

      {/* 3. Four Mission Phases */}
      <section className="py-20 px-4 bg-navy bg-noise">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display text-cream text-center mb-16">
            PROTOCOLE D'INTERVENTION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            step: '01',
            title: 'DÉPLOIEMENT',
            items: ['Atterrissage (Crash)', 'Activation systèmes', 'Évaluation menaces']
          }, {
            step: '02',
            title: 'INSTALLATION',
            items: ['Construction vitale', 'Périmètre sécurité', 'Gestion pénurie']
          }, {
            step: '03',
            title: 'ESCALADE',
            items: ['Panique générale', 'Menaces accrues', 'Improvisation']
          }, {
            step: '04',
            title: 'EXTRACTION',
            items: ['Rapport final', 'Évacuation (si possible)', 'Débriefing']
          }].map((phase, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: idx * 0.1
          }} className="bg-navy-light border-2 border-cream/20 p-6 relative group hover:border-orange transition-colors">
                <div className="absolute -top-4 -left-4 bg-orange text-navy font-display text-2xl w-12 h-12 flex items-center justify-center border-2 border-cream shadow-lg">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-display text-cream mt-4 mb-4 tracking-wide group-hover:text-orange">
                  {phase.title}
                </h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-cream/80 font-body">
                      <span className="text-orange mt-1">►</span> {item}
                    </li>)}
                </ul>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* 4. Base Requirements */}
      <section className="py-20 px-4 bg-cream paper-texture">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display text-navy text-center mb-16">
            PARAMÈTRES DE SURVIE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: Zap,
            title: 'ÉNERGIE',
            items: ['Générateurs', 'Panneaux solaires', 'Prières'],
            val: 'CRITIQUE'
          }, {
            icon: Shield,
            title: 'DÉFENSE',
            items: ['Tourelles', 'Murs renforcés', 'Espoir'],
            val: 'MINIMALE'
          }, {
            icon: Utensils,
            title: 'SUBSISTANCE',
            items: ['Nourriture', 'Eau filtrée', 'Chat vocal'],
            val: 'RATIONNÉE'
          }].map((req, idx) => <div key={idx} className="border-4 border-navy p-6 bg-white/50 relative">
                <div className="flex items-center justify-between mb-6 border-b-2 border-navy pb-4">
                  <h3 className="text-3xl font-display text-navy">
                    {req.title}
                  </h3>
                  <req.icon className="w-8 h-8 text-orange-accent" />
                </div>
                <ul className="space-y-2 mb-6 font-body text-vintage-text">
                  {req.items.map((item, i) => <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-navy" /> {item}
                    </li>)}
                </ul>
                <div className="bg-navy/10 p-2 border border-navy text-center">
                  <span className="text-xs uppercase tracking-widest font-bold text-navy">
                    STATUT:
                  </span>
                  <span className="block text-xl font-display text-orange-accent animate-pulse">
                    {req.val}
                  </span>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* 5. Planet Description */}
      <section className="py-20 px-4 bg-navy-dark bg-noise border-y-8 border-orange-accent">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-display text-cream mb-2">
              ENVIRONNEMENT
            </h2>
            <div className="inline-block bg-orange-accent text-navy px-4 py-1 font-display text-xl mb-8 transform -rotate-2">
              CLASSÉ: EXTRÊMEMENT HOSTILE
            </div>

            <ul className="space-y-4 font-body text-cream/80">
              <li className="flex items-center gap-4 bg-navy p-3 border border-cream/10">
                <Thermometer className="text-orange" />
                <span>
                  Température:{' '}
                  <span className="text-orange">Variable (très variable)</span>
                </span>
              </li>
              <li className="flex items-center gap-4 bg-navy p-3 border border-cream/10">
                <Wind className="text-orange" />
                <span>
                  Atmosphère:{' '}
                  <span className="text-orange">
                    Respirable (techniquement)
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-4 bg-navy p-3 border border-cream/10">
                <Skull className="text-orange" />
                <span>
                  Faune:{' '}
                  <span className="text-orange">
                    Agressive (définitivement)
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-4 bg-navy p-3 border border-cream/10">
                <AlertTriangle className="text-orange" />
                <span>
                  Anomalies:{' '}
                  <span className="text-orange">
                    Fréquentes (malheureusement)
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex-1 relative">
            <div className="w-64 h-64 rounded-full bg-orange/20 animate-pulse absolute top-0 left-0 blur-xl"></div>
            <div className="relative z-10 border-4 border-cream rounded-full p-8 bg-navy text-center w-64 h-64 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(244,162,97,0.3)]">
              <span className="text-6xl mb-2">🪐</span>
              <span className="font-display text-2xl text-cream">PLANÈTE</span>
              <span className="font-display text-4xl text-orange">X-404</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tools & Equipment */}
      <section className="py-20 px-4 bg-cream paper-texture">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display text-navy text-center mb-16">
            ÉQUIPEMENT STANDARD
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            icon: Wrench,
            title: 'OUTIL MULTI-USAGE',
            desc: 'Construit, répare, ou casse tout.'
          }, {
            icon: Activity,
            title: 'SCANNER',
            desc: 'Détecte les menaces. Parfois.'
          }, {
            icon: Wind,
            title: 'JETPACK',
            desc: 'Vol limité. Chutes illimitées.'
          }, {
            icon: Radio,
            title: 'COMMUNICATEUR',
            desc: 'Portée: 50m. Insultes: illimitées.'
          }, {
            icon: Utensils,
            title: 'KIT MÉDICAL',
            desc: 'Contenu: espoir et pansements.'
          }, {
            icon: Radio,
            title: 'CHAT VOCAL DE PROXIMITÉ',
            desc: "Votre seul ami. Nous déclinons toute responsabilité quant à ce qu'il pourrait dire."
          }].map((item, idx) => <div key={idx} className="flex items-start gap-4 p-4 border-2 border-navy/20 hover:border-navy transition-colors bg-white/40">
                <div className="bg-navy text-cream p-3 rounded-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-navy mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-vintage-text">
                    {item.desc}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* 7. Enemy Creatures */}
      <section className="py-20 px-4 bg-navy bg-noise">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display text-cream text-center mb-16">
            FAUNE LOCALE (HOSTILE)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            name: 'LE RÔDEUR',
            desc: 'Rapide, affamé, rancunier.',
            risk: 'ÉLEVÉ'
          }, {
            name: 'LA SENTINELLE',
            desc: "Immobile jusqu'à ce qu'elle ne le soit plus.",
            risk: 'MOYEN'
          }, {
            name: "L'ESSAIM",
            desc: 'Un problème devient rapidement cent problèmes.',
            risk: 'EXTRÊME'
          }, {
            name: 'LE COLOSSE',
            desc: 'Lent mais déterminé. Très déterminé.',
            risk: 'MORTEL'
          }].map((mob, idx) => <div key={idx} className="bg-navy-dark border border-orange/30 p-6 text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange"></div>
                <div className="w-20 h-20 bg-navy-light rounded-full mx-auto mb-4 border-2 border-dashed border-cream/30 flex items-center justify-center text-3xl">
                  👾
                </div>
                <h3 className="text-2xl font-display text-orange mb-2">
                  {mob.name}
                </h3>
                <p className="text-cream/70 text-sm font-body mb-4 min-h-[3rem]">
                  {mob.desc}
                </p>
                <div className="inline-block border border-orange text-orange text-xs px-2 py-1 uppercase tracking-widest">
                  RISQUE: {mob.risk}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* 8. Why 30 Minutes? */}
      <section className="py-20 px-4 bg-cream paper-texture border-t-4 border-navy">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-navy text-cream p-4 rounded-full border-4 border-cream shadow-xl">
            <Clock className="w-12 h-12" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display text-navy mt-16 mb-8">
            POURQUOI 30 MINUTES ?
          </h2>

          <div className="space-y-4 text-left max-w-xl mx-auto bg-white/60 p-8 border-2 border-dashed border-navy/30">
            <p className="flex items-center gap-3 font-display text-xl text-navy">
              <span className="text-orange">01.</span> Optimisation des coûts
              opérationnels
            </p>
            <p className="flex items-center gap-3 font-display text-xl text-navy">
              <span className="text-orange">02.</span> Maximisation de
              l'efficacité temporelle
            </p>
            <p className="flex items-center gap-3 font-display text-xl text-navy">
              <span className="text-orange">03.</span> Minimisation de
              l'exposition aux risques
            </p>
            <p className="mt-8 text-xs font-body text-vintage-text/60 text-center uppercase tracking-widest">
              (Raison réelle : Plus longtemps = plus de morts = plus de
              paperasse)
            </p>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 px-4 bg-navy-dark bg-noise text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-cream mb-8">
            PRÊT À ACCEPTER LA MISSION ?
          </h2>
          <Link to="/apply">
            <RetroButton variant="primary" className="text-2xl px-12 py-6">
              POSTULER MAINTENANT
            </RetroButton>
          </Link>
          <p className="mt-6 text-orange font-body text-sm tracking-widest uppercase animate-pulse">
            Les postes se remplissent vite (littéralement)
          </p>
        </div>
      </section>

      <Footer />
    </main>;
}