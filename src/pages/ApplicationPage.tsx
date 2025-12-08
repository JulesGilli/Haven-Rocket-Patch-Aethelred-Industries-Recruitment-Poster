import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Sparkles, Zap, Award } from 'lucide-react';
import { RetroButton } from '../components/RetroButton';
import { Footer } from '../components/Footer';
import { VintageBadge } from '../components/VintageBadge';
import emailjs from 'emailjs-com';

export function ApplicationPage() {
    const [formStatus, setFormStatus] = useState('idle');
    const [buttonClicks, setButtonClicks] = useState({
        vote: 0,
        share: 0,
        loyalty: 0
    });

    const handleFakeButtonClick = (type) => {
        setButtonClicks(prev => ({
            ...prev,
            [type]: prev[type] + 1
        }));
    };

    // ---------------------------
    //         FIX EMAILJS
    // ---------------------------
    const handleSubmit = (e) => {
        e.preventDefault();

        setFormStatus('submitting');

        emailjs
            .sendForm(
                "service_8j9g8bg",     // <-- TON SERVICE ID
                "template_o2xmctp",    // <-- TON TEMPLATE ID
                e.target,              // <-- on envoie le form DIRECTEMENT
                "v5rRCc-4yqjGIbi5f"    // <-- TA PUBLIC KEY
            )
            .then(() => {
                setFormStatus('submitted');
            })
            .catch((err) => {
                console.error(err);
                setFormStatus('idle');
                alert("Erreur EmailJS : vérifie le dashboard.");
            });
    };

    return (
        <main className="min-h-screen w-full bg-cream paper-texture overflow-x-hidden font-body text-vintage-text selection:bg-navy selection:text-cream">

            {/* Navigation */}
            <nav className="absolute top-0 left-0 w-full p-6 z-50">
                <Link to="/" className="flex items-center gap-2 text-navy hover:text-orange-accent transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                    <span className="font-display tracking-widest uppercase">
            Retour à la réalité
          </span>
                </Link>
            </nav>

            {/* SECTION 1 */}
            <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', bounce: 0.5 }}>
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

            {/* SECTION 2 */}
            <section className="py-12 px-4 bg-navy text-cream bg-noise transform -skew-y-1">
                <div className="max-w-3xl mx-auto text-center transform skew-y-1">
                    <h2 className="text-3xl md:text-5xl font-display text-orange mb-6">
                        SOUTENIR PROJECT: HAVEN
                    </h2>

                    <p className="text-lg leading-relaxed opacity-90 mb-6">
                        Si vous souhaitez obtenir des informations supplémentaires ou contribuer au développement de PROJECT: HAVEN, vous pouvez nous contacter directement via ce formulaire.
                    </p>
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="py-20 px-4 max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-display text-navy text-center mb-4">
                    ACTIONS DE SOUTIEN (FICTIVES)
                </h3>

                <p className="text-center text-sm opacity-60 mb-12 italic">
                    Ces boutons ne servent à rien. Littéralement.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* VOTE */}
                    <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-navy p-6 text-center shadow-[4px_4px_0px_0px_rgba(30,58,95,1)]">
                        <div className="w-12 h-12 bg-orange-accent rounded-full mx-auto mb-4 flex items-center justify-center text-cream">
                            <Sparkles className="w-6 h-6" />
                        </div>

                        <h3 className="font-display text-2xl text-navy mb-2">SIMULER UN VOTE</h3>
                        <p className="text-sm mb-6">Faites semblant de voter</p>

                        <RetroButton
                            variant="outline"
                            className="w-full text-sm py-2 !text-navy !border-navy hover:!bg-navy hover:!text-cream"
                            onClick={() => handleFakeButtonClick('vote')}
                        >
                            Cliquer ici
                        </RetroButton>

                        {buttonClicks.vote > 0 && <p className="text-xs mt-2 text-orange-accent">Clics : {buttonClicks.vote}</p>}
                    </motion.div>

                    {/* SHARE */}
                    <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-navy p-6 text-center shadow-[4px_4px_0px_0px_rgba(30,58,95,1)]">
                        <div className="w-12 h-12 bg-orange-accent rounded-full mx-auto mb-4 flex items-center justify-center text-cream">
                            <Zap className="w-6 h-6" />
                        </div>

                        <h3 className="font-display text-2xl text-navy mb-2">PARTAGE INTERGALACTIQUE</h3>

                        <RetroButton
                            variant="outline"
                            className="w-full text-sm py-2 !text-navy !border-navy hover:!bg-navy hover:!text-cream"
                            onClick={() => handleFakeButtonClick('share')}
                        >
                            Partager (faux)
                        </RetroButton>

                        {buttonClicks.share > 0 && <p className="text-xs mt-2 text-orange-accent">Partagé {buttonClicks.share} fois</p>}
                    </motion.div>

                    {/* LOYALTY */}
                    <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-navy p-6 text-center shadow-[4px_4px_0px_0px_rgba(30,58,95,1)]">
                        <div className="w-12 h-12 bg-orange-accent rounded-full mx-auto mb-4 flex items-center justify-center text-cream">
                            <Award className="w-6 h-6" />
                        </div>

                        <h3 className="font-display text-2xl text-navy mb-2">LOYAUTÉ CORPORATIVE</h3>

                        <RetroButton
                            variant="outline"
                            className="w-full text-sm py-2 !text-navy !border-navy hover:!bg-navy hover:!text-cream"
                            onClick={() => handleFakeButtonClick('loyalty')}
                        >
                            Je suis loyal
                        </RetroButton>

                        {buttonClicks.loyalty > 0 && <p className="text-xs mt-2 text-orange-accent">Loyauté : {buttonClicks.loyalty}%</p>}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 4 — FORMULAIRE */}
            <section className="py-16 px-4 max-w-2xl mx-auto">
                <div className="border-4 border-navy p-8 md:p-12 bg-white relative">

                    {formStatus === 'submitted' ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                                <Check className="w-10 h-10" />
                            </div>

                            <h3 className="text-3xl font-display text-navy mb-4">CANDIDATURE REÇUE</h3>
                        </div>
                    ) : (

                        <form onSubmit={handleSubmit} className="space-y-6 mt-6">

                            {/* NAME */}
                            <div>
                                <label className="block font-display text-xl text-navy mb-2">NOM DU CANDIDAT</label>

                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Votre nom"
                                    className="w-full bg-cream border-2 border-navy p-3 font-body"
                                    required
                                />
                            </div>

                            {/* EXPERIENCE */}
                            <div>
                                <label className="block font-display text-xl text-navy mb-2">EXPÉRIENCE</label>

                                <select
                                    name="experience"
                                    className="w-full bg-cream border-2 border-navy p-3 font-body"
                                >
                                    <option>Déchet Spatial Non-Qualifié (Débutant total)</option>
                                    <option>Technicien du Bouton Rouge (Intermédiaire)</option>
                                    <option>Opérateur Semi-Stabilisé de Production (Autonome)</option>
                                    <option>Ingénieur Senior en Chaos Ludique (Expérimenté)</option>
                                </select>
                            </div>

                            {/* MOTIVATION */}
                            <div>
                                <label className="block font-display text-xl text-navy mb-2">MOTIVATION</label>

                                <textarea
                                    name="motivation"
                                    rows={4}
                                    placeholder="Pourquoi voulez-vous risquer votre vie ?"
                                    className="w-full bg-cream border-2 border-navy p-3 font-body"
                                ></textarea>
                            </div>

                            {/* RISK */}
                            <div className="flex items-start gap-3 pt-2">
                                <input
                                    name="risk"
                                    type="checkbox"
                                    id="risk"
                                    className="mt-1 w-5 h-5 accent-orange"
                                />
                                <label htmlFor="risk" className="text-sm leading-tight cursor-pointer">
                                    J’accepte les risques.
                                </label>
                            </div>

                            {/* TIME (hidden) */}
                            <input type="hidden" name="time" value={new Date().toLocaleString()} />

                            {/* SUBMIT */}
                            <RetroButton
                                type="submit"
                                variant="primary"
                                className="w-full mt-8"
                                disabled={formStatus === 'submitting'}
                            >
                                {formStatus === 'submitting' ? 'TRANSMISSION...' : 'SOUMETTRE'}
                            </RetroButton>

                        </form>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
