import ScrollReveal from '../components/ScrollReveal';
import { NeonButton } from '../components/ui/NeonButton';
import { Check, Shield, Zap, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Autokonzept() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Wie schnell kann ich ein Fahrzeug bestellen?",
      answer: "Sobald Sie sich qualifiziert haben (z.B. durch das Profi Business Startpaket und 2 Empfehlungen), sind Sie sofort bestellberechtigt. Die Lieferzeit hängt vom jeweiligen Hersteller und Modell ab, viele Fahrzeuge sind jedoch kurzfristig verfügbar."
    },
    {
      question: "Wirklich keine Anzahlung?",
      answer: "Ja, korrekt. Bei unserem Autokonzept zahlen Sie keine Anzahlung und keine Schlussrate. Sie zahlen lediglich die monatliche Leasingrate, was Ihre Liquidität schont."
    },
    {
      question: "Kann ich das Fahrzeug auch privat nutzen?",
      answer: "Selbstverständlich. Die Fahrzeuge können sowohl geschäftlich als auch privat genutzt werden. Die Versteuerung erfolgt wie bei jedem Firmenwagen (z.B. 1%-Regelung)."
    },
    {
      question: "Welche Marken stehen zur Verfügung?",
      answer: "Wir arbeiten primär mit deutschen Premium-Herstellern wie Mercedes-Benz, Audi, VW und BMW zusammen, um Ihnen höchste Qualität und Zuverlässigkeit zu garantieren."
    }
  ];

  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1 rounded-full bg-electric-purple/20 border border-electric-purple/50 text-neon-cyan text-sm font-bold mb-6">
              Fuhrpark-Management 2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight text-white">
              Intelligente <span className="text-neon-cyan">Mobilität</span><br />
              für Ihr Unternehmen.
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Warum marktübliche Leasingraten zahlen? Nutzen Sie unser Großkunden-Konzept als strategischen Wettbewerbsvorteil.
              <br /><span className="text-white font-bold">Keine Anzahlung. Sofort verfügbar.</span>
            </p>
            <NeonButton href="tel:+491715060008">
              Konditionen prüfen
            </NeonButton>
          </div>
        </ScrollReveal>

        {/* Key Facts */}
        <ScrollReveal delay={0.2}>
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white">
                Warum marktübliche Leasingraten zahlen, wenn Sie von Großkunden-Konditionen profitieren können?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Unser Ansatz: Sie qualifizieren sich einmalig über Ihr LR Geschäftsvolumen und können anschließend auf eine Auswahl von Firmenfahrzeugen zurückgreifen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-colors">
                <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Einmalige Qualifikation</h3>
                <p className="text-gray-400">
                  Über ca. 4.000 Punktewert (PW) im LR-Vertriebssystem qualifizieren Sie sich für das Autokonzept. Die genaue Punktelogik ergibt sich aus den offiziellen LR-Unterlagen.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-colors">
                <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Deutlich reduzierte Leasingraten</h3>
                <p className="text-gray-400">
                  Durch die gebündelte Abnahme von Fahrzeugen kann LR Konditionen verhandeln, die im Vergleich zu üblichen Einzel-Leasingverträgen deutlich günstiger sind. In der Praxis können sich – je nach Modell und individueller Situation – Ersparnisse von rund 70–80 % gegenüber typischen Listenleasingraten ergeben.
                  <br /><br />
                  <span className="text-sm text-gray-500 italic">*Hinweis: Konkrete Konditionen hängen immer von Modell, Ausstattung und Ihrer persönlichen Situation ab.*</span>
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-colors">
                <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Keine Anzahlung, keine Schlussrate</h3>
                <p className="text-gray-400">
                  Das Konzept ist darauf ausgelegt, Ihre Liquidität zu schonen: Im Regelfall zahlen Sie lediglich die monatliche Leasingrate. Details klären wir gemeinsam im Gespräch auf Basis der offiziellen LR-Fahrzeugübersichten.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Fleet Showcase */}
        <div className="mb-32">
          <ScrollReveal>
            <h2 className="text-4xl font-playfair font-bold text-center mb-4 text-white">
              Fahrzeugbeispiele
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Aktuell stehen – je nach Verfügbarkeit – rund 20 verschiedene Modelle im LR Autokonzept zur Verfügung.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Business Limousinen */}
            <ScrollReveal delay={0.1}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-b from-gray-900 to-black border border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-purple/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/images/cars/audi-a4-avant.png" 
                  alt="Business Limousinen" 
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end z-20">
                  <h3 className="text-2xl font-bold mb-1 text-white">Business-Limousinen</h3>
                  <p className="text-gray-300 mb-4 text-sm">z.B. Audi A4, Mercedes C-Klasse</p>
                </div>
              </div>
            </ScrollReveal>

            {/* SUVs */}
            <ScrollReveal delay={0.2}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-b from-gray-900 to-black border border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-cyan/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/images/cars/audi-q8.png" 
                  alt="SUVs" 
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end z-20">
                  <h3 className="text-2xl font-bold mb-1 text-white">Kombis und SUVs</h3>
                  <p className="text-gray-300 mb-4 text-sm">Für Außendienst & Handwerk</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Sportliche Modelle */}
            <ScrollReveal delay={0.3}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-b from-gray-900 to-black border border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-purple/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/images/cars/mercedes-cla.png" 
                  alt="Sportliche Modelle" 
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110 relative z-10"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end z-20">
                  <h3 className="text-2xl font-bold mb-1 text-white">Sportliche Modelle</h3>
                  <p className="text-gray-300 mb-4 text-sm">Für repräsentative Einsätze</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="mt-12 p-6 bg-electric-purple/10 rounded-xl border border-electric-purple/20 text-center max-w-3xl mx-auto">
            <p className="text-gray-300">
              Konkrete Modelle, Ausstattungslinien und Beispielraten besprechen wir individuell und ausschließlich auf Grundlage der jeweils gültigen LR-Unterlagen. Preise und Verfügbarkeiten können sich ändern.
            </p>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mb-32 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-playfair font-bold mb-6 text-white">Wichtiger Hinweis (Transparenz & Compliance)</h2>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2.5 shrink-0" />
                  <span>Das Autokonzept richtet sich an <strong>selbständige LR-Partner</strong> bei Erreichen bestimmter Karrierestufen und Punktzahlen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2.5 shrink-0" />
                  <span>Es gibt <strong>keine Garantie</strong> für ein bestimmtes Fahrzeug oder eine bestimmte monatliche Rate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2.5 shrink-0" />
                  <span>Maßgeblich sind immer die offiziellen Konditionen von LR Health & Beauty sowie die Vertragsbedingungen des Leasingpartners.</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-400">
                Gerne erklären wir Ihnen im persönlichen Gespräch, wie Sie sich für das Autokonzept qualifizieren können und welche Fahrzeugoptionen aktuell verfügbar sind.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-32">
          <ScrollReveal>
            <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-white">Häufige Fragen von Unternehmern</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="glass-card rounded-xl border border-white/5 hover:border-neon-cyan/30 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className="font-semibold text-white text-lg">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-neon-cyan transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center bg-gradient-to-r from-electric-purple/20 to-neon-cyan/20 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h2 className="text-4xl font-playfair font-bold mb-6 text-white relative z-10">Optimieren Sie jetzt Ihren Fuhrpark</h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Business Hotline: <a href="tel:+491715060008" className="text-white font-bold hover:text-neon-cyan transition-colors">+49 171 5060008</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <NeonButton href="mailto:info@lr-lifestyle.info">
                Angebot anfordern
              </NeonButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
