import ScrollReveal from '../components/ScrollReveal';
import { NeonButton } from '../components/ui/NeonButton';
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

              {/* Image Section */}
              <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-electric-purple/20">
                  <img 
                    src="/images/lr-profi-set.jpg" 
                    alt="LR Profi Business Pro Set" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-deep-navy/50 p-6 rounded-xl border border-white/5">
                  <Gift className="w-8 h-8 text-neon-cyan mb-3" />
                  <h3 className="font-bold mb-2 text-lg">Enthaltene Produkte:</h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                      <span>Zeitgard Pro Cosmetic Device</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                      <span>Aloe Vera Special Care Box</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                      <span>Mind Master & Pro Balance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-deep-navy/50 p-6 rounded-xl border border-white/5">
                  <Phone className="w-8 h-8 text-neon-cyan mb-3" />
                  <h3 className="font-bold mb-2 text-lg">Lina Voice Service:</h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                      <span>Komplette Einrichtung & Setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                      <span>30 Tage kostenloser Zugang</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                      <span>Persönlicher Onboarding-Call</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                      <span>24/7 Premium Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-10">
                <NeonButton 
                  className="text-xl px-12 py-4 w-full sm:w-auto"
                  onClick={() => window.location.href = 'tel:+4951116653654'}
                >
                  Jetzt Pilotprojekt-Platz sichern
                </NeonButton>
                <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
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
                className="text-neon-cyan hover:text-electric-purple transition-colors font-semibold flex items-center gap-2 justify-center text-lg"
              >
                <Phone className="w-5 h-5" />
                +49 511 16653654
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
