import React from 'react';
import { Rocket } from 'lucide-react';
export function Footer() {
  return <footer className="bg-navy-dark text-cream/60 py-16 px-4 border-t border-cream/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-6 opacity-80">
          <Rocket className="w-8 h-8 text-orange" />
          <span className="font-display text-2xl text-cream tracking-widest">
            AETHELRED INDUSTRIES
          </span>
        </div>

        <p className="font-body text-orange text-sm tracking-[0.2em] uppercase mb-12">
          "Nous Exploitons l'Impossible"
        </p>

        <div className="max-w-2xl space-y-4 text-[10px] md:text-xs font-body leading-relaxed opacity-50 mb-12">
          <p>
            L'échec de survie n'exonère pas le personnel de remplir la
            documentation post-mission. Aethelred Industries n'est pas
            responsable des anomalies temporelles, distorsions de réalité ou
            crises existentielles survenues pendant l'emploi.
          </p>
          <p>
            Toutes les missions sont définitives. Pas de remboursement. Pas
            d'exceptions. Pas de survivants garantis. Les frais de location
            d'équipement seront déduits de l'héritage des proches.
          </p>
        </div>

        <div className="w-full h-px bg-cream/10 mb-8"></div>

        <p className="text-xs font-body">
          © 2024 Aethelred Industries. Tous droits réservés. Tous risques
          assumés par l'employé.
        </p>
      </div>
    </footer>;
}