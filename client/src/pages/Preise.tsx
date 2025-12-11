import ScrollReveal from '../components/ScrollReveal';
import { NeonButton } from '../components/ui/NeonButton';
import { Check, Gift, Package, Phone } from 'lucide-react';

export default function Preise() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-6">
            Transparent & <span className="text-neon-cyan">Fair</span>
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Keine Setup-Gebühr für die KI. Sie investieren lediglich in das Business Set Pro (Hardware & Produkte).
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Setup */}
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 rounded-3xl border border-neon-cyan/50 bg-deep-navy/50 hover:border-neon-cyan transition-all hover:-translate-y-2 relative group h-full flex flex-col shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-cyan text-black font-bold px-4 py-1 rounded-full text-sm">
                  Einmalig
                </div>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Setup & Einrichtung</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-neon-cyan">0€</span>
                    <span className="text-gray-400 text-xl">/Dienstleistung</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Sie zahlen nur das <strong>Business Set Pro</strong> (ca. 720€) direkt an den Lieferanten LR.
                  </p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span><strong>Komplette KI-Konfiguration</strong> (Prompting, Voice, Flow)</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span><strong>Hardware inklusive</strong> (Zeitgard Pro Set, Wert ca. 1.500€)</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Zugang zum Autokonzept</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Persönliches Onboarding</span>
                  </li>
                </ul>
                <NeonButton href="/lr-partner" className="w-full justify-center">
                  Business Set Pro anfordern
                </NeonButton>
              </div>
            </ScrollReveal>

            {/* Running Costs */}
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-neon-cyan/30 transition-all hover:-translate-y-2 relative group h-full flex flex-col">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Laufende Kosten</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-white">Nutzung</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Faire Abrechnung nach tatsächlichem Verbrauch.
                  </p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span><strong>Keine monatliche Grundgebühr</strong> für die KI-Software</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Ultravox-Realtime: ca. 0,05 $ pro Minute (Sprach-KI)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Telefondienstleister: ca. 0,01–0,02 $ pro Minute</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>IT-Service: 0,20 € pro Minute (Setup, Betreuung, Optimierung)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Volle Kostenkontrolle & Transparenz</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mb-4 italic text-center">
                  Preise können sich ändern. Es gelten stets die aktuellen Konditionen der jeweiligen Anbieter (Ultravox, Telefondienstleister).
                </p>
                <NeonButton href="/kontakt" variant="secondary" className="w-full justify-center">
                  Fragen zur Abrechnung?
                </NeonButton>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center text-gray-400">
              <p className="mb-2">Haben Sie Fragen zum Angebot?</p>
              <a 
                href="tel:+491715060008" 
                className="text-neon-cyan hover:text-electric-purple transition-colors font-semibold flex items-center gap-2 justify-center text-lg"
              >
                <Phone className="w-5 h-5" />
                +49 171 5060008
              </a>
            </div>
          </ScrollReveal>
      </div>
    </main>
  );
}
