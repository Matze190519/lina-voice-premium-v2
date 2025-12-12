import ScrollReveal from '../components/ScrollReveal';
import { NeonButton } from '../components/ui/NeonButton';
import { User, Cpu, Code, MessageSquare, Rocket, Shield, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1 rounded-full bg-electric-purple/20 border border-electric-purple/50 text-neon-cyan text-sm font-bold mb-6">
              Die Geschichte hinter LINA
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight text-white">
              Wer hinter <span className="text-neon-cyan">LINA Voice</span> steht
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              LINA Voice ist nicht im Meetingraum entstanden, sondern im echten Geschäftsalltag.
            </p>
          </div>
        </ScrollReveal>

        {/* Founder Story */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-electric-purple to-neon-cyan opacity-20 blur-xl rounded-full"></div>
                <div className="relative glass-card p-8 rounded-2xl border border-white/10">
                  <User className="w-16 h-16 text-neon-cyan mb-6" />
                  <h2 className="text-3xl font-playfair font-bold text-white mb-6">Aus der Praxis für die Praxis</h2>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Mein Name ist <strong>Mathias Vinzing</strong>. Ich führe seit Jahren ein wachsendes Vertriebsteam im LR Umfeld und habe früh gemerkt: Telefon, Anfragen, Social Media, Schulung, Follow-ups – das alles frisst Zeit.
                  </p>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Statt darüber zu reden, „dass man mal KI ausprobieren müsste“, habe ich angefangen, sie konsequent einzusetzen:
                  </p>
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-neon-cyan" /> für mein eigenes LR Business</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-neon-cyan" /> für mein Team</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-neon-cyan" /> für unsere Prozesse, Funnels und Kundenkommunikation</li>
                  </ul>
                  <p className="text-gray-400 leading-relaxed">
                    Aus diesen Erfahrungen ist LINA entstanden – zuerst intern, dann als marktreife Lösung für Unternehmer.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-4">Von der Idee zur marktreifen KI-Lösung</h3>
                <p className="text-gray-400 leading-relaxed">
                  LINA Voice ist nicht das Ergebnis eines schnellen Tools oder eines Wochenend-Projekts. Sie ist das Ergebnis von:
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="glass-card p-4 rounded-xl border border-white/5 flex items-start gap-4">
                    <div className="bg-white/5 p-2 rounded-lg"><Cpu className="w-5 h-5 text-neon-cyan" /></div>
                    <div>
                      <strong className="text-white block">Monatelange Entwicklung</strong>
                      <span className="text-sm text-gray-400">Tausende Euro Invest in Technologie, Infrastruktur und Stimmen.</span>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-white/5 flex items-start gap-4">
                    <div className="bg-white/5 p-2 rounded-lg"><MessageSquare className="w-5 h-5 text-neon-cyan" /></div>
                    <div>
                      <strong className="text-white block">Hunderte echte Interaktionen</strong>
                      <span className="text-sm text-gray-400">Tests im realen LR Vertriebsalltag mit einem großen Team.</span>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-white/5 flex items-start gap-4">
                    <div className="bg-white/5 p-2 rounded-lg"><Rocket className="w-5 h-5 text-neon-cyan" /></div>
                    <div>
                      <strong className="text-white block">Optimierung bis zur Reife</strong>
                      <span className="text-sm text-gray-400">Erst als LINA stabil lief, haben wir sie für Unternehmer freigegeben.</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-white">Was wir heute für Unternehmer tun</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Unser Fokus ist klar: Wir bauen Systeme, mit denen Unternehmer weniger Chaos und mehr Struktur haben.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-6 rounded-2xl border border-white/10 h-full">
                <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">LINA Voice – die Telefon-KI</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Nimmt Anrufe entgegen, beantwortet Fragen, organisiert Termine. Läuft auf Ultravox v0.7 mit sehr niedriger Latenz.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card p-6 rounded-2xl border border-white/10 h-full">
                <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Webseiten & Funnels</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Wir bauen Seiten, die LINA flankieren: Landingpages, Formulare und Automatisierungen – abgestimmt auf dein Geschäft.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass-card p-6 rounded-2xl border border-white/10 h-full">
                <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Automatisierte Flows</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  LINA ist eingebunden in Kalender, CRM, WhatsApp und E-Mail. Ein durchdachtes System vom ersten Kontakt bis zum Termin.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="glass-card p-6 rounded-2xl border border-white/10 h-full">
                <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Social Media & Chat</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Automatisierter Content und Chatbots, die Fragen beantworten und Interessenten vorqualifizieren.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why LR & Business Set */}
        <section className="mb-32 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">Warum LR und das Business Set Pro?</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Die Idee, LINA Unternehmern zur Verfügung zu stellen, kommt direkt aus meinem LR Alltag. Ich habe gesehen, wie stark Unternehmer unter Telefon, Terminstress und Anfragen leiden.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Deshalb verknüpfen wir LINA mit dem Business Set Pro:
              </p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="bg-neon-cyan/20 p-1 rounded mt-1"><CheckCircle className="w-3 h-3 text-neon-cyan" /></div>
                  <span>Investition von ca. 720 € in ein LR-Produktpaket (Warenwert ~1.500 €)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-neon-cyan/20 p-1 rounded mt-1"><CheckCircle className="w-3 h-3 text-neon-cyan" /></div>
                  <span>Ca. 30 % Einkaufsvorteil und LR-Partnerstatus</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-neon-cyan/20 p-1 rounded mt-1"><CheckCircle className="w-3 h-3 text-neon-cyan" /></div>
                  <span><strong>Inklusive Einrichtung von LINA Voice</strong> für dein Unternehmen</span>
                </li>
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 rounded-2xl bg-black/40 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Wichtig zu wissen:</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Niemand muss Network Marketing machen. Aber wer zusätzlich zwei weitere Unternehmer mit LINA einführt, kann sich für weitere Vorteile wie das LR-Autokonzept qualifizieren.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white font-bold mb-2">Entscheidend:</p>
                  <p className="text-sm text-gray-400">
                    Das KI-System ist fertig, erprobt und produktionsbereit – und das zu Kosten, bei denen andere Agenturen erst ein Angebot schreiben.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Difference & Values */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">Was uns unterscheidet</h2>
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">Aus der Praxis</h3>
                  <p className="text-sm text-gray-400">Wir kommen nicht aus der reinen Beratung, sondern haben LINA in einem echten Team mit echten Kunden getestet.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">Ganzheitliches System</h3>
                  <p className="text-sm text-gray-400">Wir bauen Webseiten, Funnels, Flows und KI so, dass sie zusammen funktionieren.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">Keine langen Projekte</h3>
                  <p className="text-sm text-gray-400">Statt monatelanger Entwicklung bekommst du ein klares Startpaket und eine fertige Telefon-KI.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">Wofür wir stehen</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-neon-cyan shrink-0" />
                  <div>
                    <strong className="text-white block">Technologie, die entlastet</strong>
                    <span className="text-sm text-gray-400">Strukturen, die Effizienz schaffen – keine Frickel-Lösungen.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-neon-cyan shrink-0" />
                  <div>
                    <strong className="text-white block">Datenschutzbewusstsein</strong>
                    <span className="text-sm text-gray-400">Infrastruktur in Deutschland und transparente Partner.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-neon-cyan shrink-0" />
                  <div>
                    <strong className="text-white block">Schnelligkeit & Präzision</strong>
                    <span className="text-sm text-gray-400">Kurze Reaktionszeiten am Telefon, klare Abläufe dahinter.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-neon-cyan shrink-0" />
                  <div>
                    <strong className="text-white block">Ehrliche Kommunikation</strong>
                    <span className="text-sm text-gray-400">Keine Einkommensversprechen, keine Wunderformeln.</span>
                  </div>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto border border-electric-purple/30 bg-deep-navy/80 backdrop-blur-xl">
              <h2 className="text-3xl font-playfair font-bold mb-6 text-white">Blick nach vorne: LINA Light ab 2026</h2>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                LINA Voice ist erst der Anfang. Ab 2026 planen wir LINA Light – eine vereinfachte Version für alle Berufsgruppen, sowie noch tiefere Automatisierung von Social Media und Content.
              </p>
              <p className="text-lg text-white font-medium mb-8">
                Das Ziel bleibt immer gleich: Entlastung statt Überforderung, Struktur statt Chaos, echte Ergebnisse statt KI-Spielerei.
              </p>
              <NeonButton href="/kontakt">
                Jetzt Kontakt aufnehmen
              </NeonButton>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
}
