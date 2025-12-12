import ScrollReveal from '../components/ScrollReveal';
import { NeonButton } from '../components/ui/NeonButton';
import { Check, Phone, Users, Clock, Calendar, ShieldCheck, Car } from 'lucide-react';

export default function Concept() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1 rounded-full bg-electric-purple/20 border border-electric-purple/50 text-neon-cyan text-sm font-bold mb-6">
              Das Geschäftsmodell
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight text-white">
              Das Konzept hinter <br />
              <span className="text-neon-cyan">LINA Voice</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              LINA Voice ist eine Telefon-KI für Unternehmen, die echte Mitarbeiter am Telefon entlastet – ohne klassische Agentur-Setups für 1.500–2.500 €.
            </p>
          </div>
        </ScrollReveal>

        {/* Block 1: Einfache Erklärung */}
        <ScrollReveal delay={0.1}>
          <div className="mb-32">
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10">
              <h2 className="text-3xl font-playfair font-bold mb-8 text-white">Unser Modell verbindet drei Bausteine:</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Telefon-KI auf Ultravox-Basis</h3>
                  <p className="text-gray-400 leading-relaxed">
                    LINA versteht natürliche Sprache in Echtzeit, kann Fragen beantworten, Termine buchen, Rückrufe planen und Anrufer an Menschen weiterleiten.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Business Set Pro als Einstieg</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Unternehmer investieren einmalig ca. 720 € in ein hochwertiges LR-Produktpaket. Damit sichern sie sich Produkte im Wert von ca. 1.500 €, ca. 30 % Einkaufsvorteil, den LR-Partnerstatus und das Setup von LINA Voice.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Klare, nutzungsbasierte Kosten</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Die technischen Plattformkosten (Ultravox + Telefondienstleister) zahlt der Unternehmer direkt. Für Einrichtung, Betreuung und laufende Optimierung von LINA fällt nur 0,20 € pro Gesprächsminute an.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Block 2: Was bekommt der Unternehmer konkret? */}
        <ScrollReveal delay={0.2}>
          <div className="mb-32">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center text-white">Was Sie mit LINA Voice konkret bekommen</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm">1</span>
                  Individuelles Onboarding
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Analyse Ihrer aktuellen Telefon-Situation</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Festlegung der Ziele (z. B. mehr Termine, weniger Unterbrechungen)</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Auswahl eines Branchen-Templates (z. B. Praxis, Friseur, Handwerk)</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm">2</span>
                  Technische Einrichtung
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Anbindung Ihrer Telefonnummer über einen Telefondienstleister</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Einrichtung eines Ultravox-Agents für Ihr Unternehmen</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Begrüßung, Erkennung typischer Themen, sinnvolle Rückfragen</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Anbindung an Kalender, Buchungs-Tool oder CRM – je nach Bedarf</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm">3</span>
                  Praxis-Dialoge statt Spielerei
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Terminvereinbarung und -verschiebung</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Rückruforganisation mit Wunschzeitfenstern</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Qualifizierung von Anfragen (z. B. Art des Projekts, Dringlichkeit)</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Weiterleitung an einen Mitarbeitenden, wenn sinnvoll</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm">4</span>
                  Laufende Betreuung
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Anpassung der Dialoge, wenn sich Abläufe ändern</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Monitoring und Optimierung von Verständnis & Trefferquote</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-neon-cyan mt-1 shrink-0" /> Unterstützung bei Fragen zu Technik, Datenschutz und Weiterentwicklung</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Block 3: Für wen lohnt sich das? */}
        <ScrollReveal delay={0.3}>
          <div className="mb-32 bg-deep-navy/30 rounded-3xl p-8 md:p-12 border border-white/5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6 text-white">Für welche Unternehmen lohnt sich LINA Voice?</h2>
                <p className="text-gray-400 mb-6">
                  LINA Voice ist ideal für Unternehmen, in denen das Telefon regelmäßig klingelt, Mitarbeiter ständig zwischen Kunden vor Ort und Telefon hin- und hergerissen sind, Anfragen verloren gehen oder Termine koordiniert werden müssen.
                </p>
                <p className="text-white font-medium italic border-l-4 border-neon-cyan pl-4">
                  LINA ersetzt keine Mitarbeiter – sie sorgt dafür, dass Ihre Mitarbeiter sich um die wichtigen Gespräche kümmern können, statt in Endlosschleifen aus Standardfragen zu hängen.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Typische Beispiele:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-neon-cyan" />
                    <span className="text-gray-300">Arzt- & Zahnarztpraxen</span>
                  </div>
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                    <Users className="w-5 h-5 text-neon-cyan" />
                    <span className="text-gray-300">Friseure & Kosmetik</span>
                  </div>
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-neon-cyan" />
                    <span className="text-gray-300">Handwerk & Bau</span>
                  </div>
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                    <Phone className="w-5 h-5 text-neon-cyan" />
                    <span className="text-gray-300">Agenturen & Beratung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Block 4: Hinweis zu LR & Autokonzept */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-electric-purple/10 to-transparent">
              <div className="w-12 h-12 bg-electric-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-6 h-6 text-neon-cyan" />
              </div>
              <h2 className="text-2xl font-playfair font-bold mb-4 text-white">Zusatzvorteile durch LR-Partnerschaft</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Mit dem Business Set Pro werden Sie LR-Partner. Dadurch haben Sie – zusätzlich zur Telefon-KI – Zugang zu vergünstigten Produktkonditionen und optionalen Vorteilen wie dem LR-Autokonzept, bei dem Sie sich bei entsprechender Qualifikation für besonders günstige Leasingkonditionen auf ausgewählte Fahrzeuge bewerben können.
              </p>
              <p className="text-sm text-gray-500 italic">
                Details zu diesen Vorteilen klären wir gemeinsam im Gespräch – immer auf Basis der aktuellen offiziellen LR-Unterlagen.
              </p>
              <div className="mt-8">
                <NeonButton href="/autokonzept">
                  Mehr zum Autokonzept
                </NeonButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
