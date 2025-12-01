import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Sparkles, Zap, Award } from 'lucide-react';
import { RetroButton } from '../components/RetroButton';
import { Footer } from '../components/Footer';
import { VintageBadge } from '../components/VintageBadge';
export function ApplicationPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [buttonClicks, setButtonClicks] = useState({
    vote: 0,
    share: 0,
    loyalty: 0
  });
  const handleFakeButtonClick = (type: 'vote' | 'share' | 'loyalty') => {
    setButtonClicks(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('submitted');
    }, 1500);
  };
  return <main className="min-h-screen w-full bg-cream paper-texture overflow-x-hidden font-body text-vintage-text selection:bg-navy selection:text-cream">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 z-50">
        <Link to="/" className="flex items-center gap-2 text-navy hover:text-orange-accent transition-colors">
          <ArrowLeft className="w-6 h-6" />
          <span className="font-display tracking-widest uppercase">
            Retour à la réalité
          </span>
        </Link>
      </nav>

      {/* 1. Hero: Pre-approved */}
      <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          type: 'spring',
          bounce: 0.5
        }}>
            <VintageBadge text="ACCEPTÉ" className="top-0 right-0 md:-right-10 rotate-12" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-navy mb-6 leading-[0.9]">
            VOTRE CANDIDATURE A ÉTÉ <br />
            <span className="text-orange-accent">PRÉ-APPROUVÉE !</span>
          </h1>

          <p className="text-xl md:text-2xl font-display text-navy/60 uppercase tracking-widest mb-12">
            (Évidemment. Nous prenons tout le monde.)
          </p>
        </div>
      </section>

      {/* 2. Meta Explanation */}
      <section className="py-12 px-4 bg-navy text-cream bg-noise transform -skew-y-1">
        <div className="max-w-3xl mx-auto text-center transform skew-y-1">
          <h2 className="text-3xl md:text-5xl font-display text-orange mb-6">
            SOUTENIR PROJECT: HAVEN
          </h2>
          <p className="text-lg leading-relaxed opacity-90 mb-6">
            En réalité, ceci n'est pas vraiment un formulaire de recrutement
            (désolé). C'est une page destinée aux étudiants pour montrer leur
            soutien à <strong>PROJECT: HAVEN</strong>, notre jeu de survie
            coopératif chaotique.
          </p>
          <p className="text-lg leading-relaxed italic text-orange-accent mb-4">
            "Aethelred Industries n'existe pas (encore). Mais le jeu, lui, est
            bien réel."
          </p>
          <p className="text-base leading-relaxed opacity-75 border-t border-cream/20 pt-4 mt-4">
            Nous n'avons pas encore de liens réels vers des plateformes de vote
            ou de partage. Mais vous pouvez quand même cliquer sur les boutons
            ci-dessous pour simuler votre soutien. C'est purement symbolique. Et
            totalement inutile. Mais ça fait plaisir.
          </p>
        </div>
      </section>

      {/* 3. Fake Support Actions */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-display text-navy text-center mb-4">
          ACTIONS DE SOUTIEN (FICTIVES)
        </h3>
        <p className="text-center text-sm opacity-60 mb-12 italic">
          Ces boutons ne mènent nulle part. Mais ils sont très officiels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{
          y: -5
        }} className="bg-white border-2 border-navy p-6 text-center shadow-[4px_4px_0px_0px_rgba(30,58,95,1)]">
            <div className="w-12 h-12 bg-orange-accent rounded-full mx-auto mb-4 flex items-center justify-center text-cream">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-navy mb-2">
              SIMULER UN VOTE
            </h3>
            <p className="text-sm mb-6 min-h-[2.5rem]">
              Faites semblant de voter pour nous
            </p>
            <RetroButton variant="outline" className="w-full text-sm py-2 !text-navy !border-navy hover:!bg-navy hover:!text-cream" onClick={() => handleFakeButtonClick('vote')}>
              Cliquer ici
            </RetroButton>
            {buttonClicks.vote > 0 && <p className="text-xs mt-2 text-orange-accent">
                Clics: {buttonClicks.vote} (Merci !)
              </p>}
          </motion.div>

          <motion.div whileHover={{
          y: -5
        }} className="bg-white border-2 border-navy p-6 text-center shadow-[4px_4px_0px_0px_rgba(30,58,95,1)]">
            <div className="w-12 h-12 bg-orange-accent rounded-full mx-auto mb-4 flex items-center justify-center text-cream">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-navy mb-2">
              PARTAGE INTERGALACTIQUE
            </h3>
            <p className="text-sm mb-6 min-h-[2.5rem]">
              Simulez un partage cosmique
            </p>
            <RetroButton variant="outline" className="w-full text-sm py-2 !text-navy !border-navy hover:!bg-navy hover:!text-cream" onClick={() => handleFakeButtonClick('share')}>
              Partager (faux)
            </RetroButton>
            {buttonClicks.share > 0 && <p className="text-xs mt-2 text-orange-accent">
                Partagé {buttonClicks.share} fois (dans le vide)
              </p>}
          </motion.div>

          <motion.div whileHover={{
          y: -5
        }} className="bg-white border-2 border-navy p-6 text-center shadow-[4px_4px_0px_0px_rgba(30,58,95,1)]">
            <div className="w-12 h-12 bg-orange-accent rounded-full mx-auto mb-4 flex items-center justify-center text-cream">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-navy mb-2">
              LOYAUTÉ CORPORATIVE
            </h3>
            <p className="text-sm mb-6 min-h-[2.5rem]">
              Validez votre allégeance
            </p>
            <RetroButton variant="outline" className="w-full text-sm py-2 !text-navy !border-navy hover:!bg-navy hover:!text-cream" onClick={() => handleFakeButtonClick('loyalty')}>
              Je suis loyal
            </RetroButton>
            {buttonClicks.loyalty > 0 && <p className="text-xs mt-2 text-orange-accent">
                Loyauté: {buttonClicks.loyalty}% (Insuffisant)
              </p>}
          </motion.div>
        </div>
      </section>

      {/* 4. Fake Application Form */}
      <section className="py-16 px-4 max-w-2xl mx-auto">
        <div className="border-4 border-navy p-8 md:p-12 bg-white relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-navy text-cream px-6 py-2 font-display text-xl tracking-widest border-2 border-orange">
            FORMULAIRE OFFICIEL
          </div>

          <div className="mb-6 p-4 border-2 border-dashed border-orange/50 bg-orange/5 text-center">
            <p className="text-sm font-display text-navy mb-2">
              ⚠️ AVERTISSEMENT LÉGAL ⚠️
            </p>
            <p className="text-xs leading-relaxed">
              Ce formulaire n'a{' '}
              <strong>absolument aucune valeur officielle</strong>. Il ne sert{' '}
              <strong>strictement à rien</strong>, mais il fait très sérieux.
              Aethelred Industries lit <strong>0% des candidatures</strong>{' '}
              envoyées.
            </p>
          </div>

          {formStatus === 'submitted' ? <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display text-navy mb-4">
                CANDIDATURE REÇUE
              </h3>
              <p className="text-lg">
                Nos recruteurs (robots) vous contacteront peut-être.
              </p>
              <p className="text-sm mt-4 opacity-60">
                Temps d'attente estimé : 3 à 400 ans.
              </p>
              <p className="text-xs mt-6 italic text-orange-accent">
                (Ce message est aussi inutile que le formulaire)
              </p>
            </div> : <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div>
                <label className="block font-display text-xl text-navy mb-2">
                  NOM DU CANDIDAT
                </label>
                <input type="text" placeholder="Votre nom (ou pseudonyme de survie)" className="w-full bg-cream border-2 border-navy p-3 font-body focus:outline-none focus:border-orange transition-colors" required />
              </div>

              <div>
                <label className="block font-display text-xl text-navy mb-2">
                  EXPÉRIENCE
                </label>
                <select className="w-full bg-cream border-2 border-navy p-3 font-body focus:outline-none focus:border-orange transition-colors">
                  <option>Aucune (Idéal)</option>
                  <option>Minimale</option>
                  <option>J'ai survécu à pire</option>
                  <option>Je maîtrise le chat vocal</option>
                </select>
              </div>

              <div>
                <label className="block font-display text-xl text-navy mb-2">
                  MOTIVATION
                </label>
                <textarea rows={4} placeholder="Pourquoi voulez-vous risquer votre vie ?" className="w-full bg-cream border-2 border-navy p-3 font-body focus:outline-none focus:border-orange transition-colors"></textarea>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="risk" required className="mt-1 w-5 h-5 accent-orange" />
                <label htmlFor="risk" className="text-sm leading-tight cursor-pointer">
                  Je confirme accepter les risques de mort, démembrement, et de
                  café tiède. (Obligatoire mais sans conséquence)
                </label>
              </div>

              <RetroButton type="submit" variant="primary" className="w-full mt-8" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'TRANSMISSION...' : 'SOUMETTRE CANDIDATURE (INUTILE)'}
              </RetroButton>

              <p className="text-xs text-center opacity-50 italic mt-4">
                Rappel : Ce bouton ne fait rien d'important. Mais cliquez quand
                même.
              </p>
            </form>}
        </div>
      </section>

      {/* 5. Corporate Disclaimer */}
      <section className="py-12 px-4 text-center opacity-60 max-w-3xl mx-auto text-[10px] md:text-xs leading-relaxed">
        <p className="mb-2">
          Aethelred Industries décline toute responsabilité en cas de : mort,
          démembrement, disparition temporelle, ou regrets existentiels.
        </p>
        <p className="mb-2">
          Le chat vocal de proximité n'est pas garanti. Les résultats peuvent
          varier. L'équipement fourni peut contenir des traces de l'utilisateur
          précédent.
        </p>
        <p>
          En postulant, vous acceptez que votre survie n'est pas notre priorité.
          Merci de votre compréhension.
        </p>
      </section>

      <Footer />
    </main>;
}