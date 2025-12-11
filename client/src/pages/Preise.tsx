import ScrollReveal from '../components/ScrollReveal';
import NeonButton from '../components/NeonButton';
import { Check, Gift, Package, Phone } from 'lucide-react';

export default function Preise() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-6">
            Ihr <span className="text-neon-cyan">Startpaket</span>
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Mehr als nur Software. Realer Warenwert inklusive.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-10 rounded-2xl border-2 border-electric-purple/50">
              <div className="text-center mb-8">
                <Package className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                <h2 className="text-3xl font-playfair font-bold mb-2">
                  LR Profi Business Pro Set
                </h2>
                <p className="text-gray-400">
                  Warenwert über <span className="text-neon-cyan font-bold">1.500€</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-deep-navy/50 p-6 rounded-xl">
                  <Gift className="w-8 h-8 text-neon-cyan mb-3" />
                  <h3 className="font-bold mb-2">Enthaltene Produkte:</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                      Zeitgard Pro Cosmetic Device
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                      Aloe Vera Special Care Box
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                      Mind Master & Pro Balance
                    </li>
                  </ul>
                </div>

                <div className="bg-deep-navy/50 p-6 rounded-xl">
                  <Phone className="w-8 h-8 text-neon-cyan mb-3" />
                  <h3 className="font-bold mb-2">Lina Voice:</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                      Komplette Einrichtung & Setup
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                      30 Tage kostenloser Zugang
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                      Persönlicher Onboarding-Call
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                      24/7 Support
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <NeonButton 
                  className="text-xl px-12 py-4"
                  onClick={() => window.location.href = 'tel:+4951116653654'}
                >
                  Jetzt Pilotprojekt-Platz sichern
                </NeonButton>
                <p className="text-sm text-gray-500 mt-4">
                  Nur noch 7 Plätze verfügbar • Keine versteckten Kosten
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center text-gray-400">
              <p className="mb-2">Haben Sie Fragen zum Angebot?</p>
              <a 
                href="tel:+4951116653654" 
                className="text-neon-cyan hover:underline font-semibold flex items-center gap-2 justify-center"
              >
                <Phone className="w-4 h-4" />
                +49 511 16653654
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
