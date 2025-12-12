import { Phone, CheckCircle, Play, ArrowRight, Clock, Globe, Zap, Calendar } from 'lucide-react';
import { NeonButton } from '../components/ui/NeonButton';
import ScrollReveal from '../components/ScrollReveal';
import AICore from '../components/3d/AICore';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-24 lg:py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-60"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-[0.03] bg-repeat"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow delay-1000 mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap items-center gap-12 lg:gap-20">
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start shrink-0 relative z-50 pointer-events-none">
              <div className="pointer-events-auto w-full">
                <ScrollReveal>
                  <div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block px-4 py-2 rounded-full glass-panel border border-electric-purple/30 mb-6 bg-deep-navy/50 backdrop-blur-sm"
                    >
                      <span className="text-sm font-jetbrains text-neon-cyan flex items-center gap-2">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
                        ULTRAVOX v0.7 ENGINE ONLINE
                      </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8 leading-tight text-white tracking-tight">
                      Die KI, die für dich<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary animate-shimmer bg-[length:200%_100%]">
                        ans Telefon geht.
                      </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-xl font-light">
                      LINA läuft auf Ultravox v0.7 – einer der modernsten Voice-KI-Plattformen mit GLM 4.6, 26 Sprachen, RAG, Tool-Calling und extrem niedriger Latenz.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 relative z-50 pointer-events-auto">
                      <NeonButton href="tel:+4951116653654" className="w-full sm:w-auto justify-center group cursor-pointer relative z-50">
                        <Phone className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
                        +49 511 16653654
                      </NeonButton>
                      <NeonButton href="/kontakt" variant="secondary" className="w-full sm:w-auto justify-center group cursor-pointer relative z-50">
                        Unverbindlich anfragen
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </NeonButton>
                    </div>

                    <p className="text-xs text-gray-500 mb-6 max-w-md italic">
                      * Diese Nummer dient nur zu Testzwecken und demonstriert alle Branchen. 
                      Die KI wird später perfekt auf Ihr eigenes Unternehmen angepasst.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Right: Video / Visual */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end shrink-0 mt-8 lg:mt-0 relative z-20 pointer-events-none lg:pointer-events-auto">
              <div className="pointer-events-auto w-full flex justify-center lg:justify-end">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] opacity-60 pointer-events-none hidden lg:block z-0">
                   <AICore />
                </div>
              </div>
              <ScrollReveal delay={0.2} className="w-full max-w-lg relative z-10 pointer-events-auto">
                <div className="relative aspect-video glass-card rounded-2xl flex items-center justify-center border border-electric-purple/20 bg-deep-navy/30 backdrop-blur-md overflow-hidden group shadow-2xl shadow-electric-purple/20 transition-all duration-500 hover:shadow-neon-cyan/20 hover:border-neon-cyan/30">
                  <video 
                    className="w-full h-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    controls
                    poster="/images/video-poster.jpg"
                  >
                    <source src="/videos/lina-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-neon-cyan/20 backdrop-blur-md flex items-center justify-center border border-neon-cyan/50 animate-pulse">
                      <Play className="w-4 h-4 text-neon-cyan fill-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-neon-cyan font-bold tracking-wider">LIVE DEMO</p>
                      <p className="text-xs text-gray-300">Lina in Aktion</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-deep-navy/30 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-white">Das Problem mit dem klassischen Telefon-Alltag</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="glass-card p-6 rounded-xl border border-white/5">
                  <p className="text-gray-400 leading-relaxed">
                    <span className="text-red-500 font-bold mr-2">✕</span>
                    Das Telefon klingelt, während Sie mitten im Kundenkontakt sind.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-white/5">
                  <p className="text-gray-400 leading-relaxed">
                    <span className="text-red-500 font-bold mr-2">✕</span>
                    Mitarbeiter springen ständig zwischen Arbeit und Telefon hin und her.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-white/5">
                  <p className="text-gray-400 leading-relaxed">
                    <span className="text-red-500 font-bold mr-2">✕</span>
                    Wichtige Anrufe landen auf der Mailbox – und gehen manchmal ganz verloren.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-white/5">
                  <p className="text-gray-400 leading-relaxed">
                    <span className="text-red-500 font-bold mr-2">✕</span>
                    Termine werden über Zettel, Post-Its und „Ich rufe Sie gleich zurück“ organisiert.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-lg text-gray-300 font-medium">
                Das kostet Zeit, Nerven und im Zweifel auch Umsatz – und lässt sich mit heutigen Möglichkeiten deutlich besser lösen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 bg-deep-navy/30 relative border-b border-white/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1 rounded-full bg-electric-purple/20 border border-electric-purple/50 text-neon-cyan text-sm font-bold mb-6">
                Wer wir sind
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white">
                Wer hinter <span className="text-neon-cyan">LINA Voice</span> steckt
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                LINA Voice ist aus einem echten Geschäftsalltag entstanden – nicht im Labor.
              </p>
              <div className="glass-card p-8 rounded-2xl border border-white/10 bg-black/20 text-left mb-8">
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Ich bin <strong>Mathias Vinzing</strong>, Unternehmer im LR Umfeld. Zusammen mit einem IT-Partner aus Frankfurt habe ich LINA zuerst für mein eigenes Team entwickelt: als Telefon-KI, die Anrufe annimmt, Termine organisiert, Rückrufe vorbereitet und mit unseren Funnels, Webseiten und Automatisierungen zusammenarbeitet.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Nach Monaten im Echtbetrieb war klar: Diese Lösung ist zu wertvoll, um sie nur intern zu behalten. Heute stellen wir LINA Unternehmern zur Verfügung, die ein fertiges System wollen – statt sich von Agenturen für teure Einzelprojekte die Hose ausziehen zu lassen.
                </p>
              </div>
              <NeonButton href="/about" variant="secondary">
                Mehr über uns erfahren <ArrowRight className="w-4 h-4 ml-2" />
              </NeonButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-deep-navy/50 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan text-sm font-bold mb-6">
                Die Lösung
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
                LINA Voice als digitale <span className="text-neon-cyan">Telefonassistenz</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                LINA Voice nimmt Anrufe im Namen Ihres Unternehmens entgegen, beantwortet Standardfragen, bucht Termine, strukturiert Anfragen vor und organisiert Rückrufe.
              </p>
            </div>
          </ScrollReveal>

          {/* Latency Explanation Block */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-16 glass-card p-8 rounded-2xl border border-white/10 bg-black/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-neon-cyan" />
                Was bedeutet „Latenz“ – und warum ist sie so wichtig?
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Latenz ist die Zeitspanne zwischen "der Kunde sagt etwas" und "LINA reagiert hörbar".
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Liegt diese Verzögerung im Bereich von wenigen hundert Millisekunden (z. B. etwa 150 ms Modellreaktion), erlebt der Anrufer das Gespräch als flüssig und natürlich – ohne das typische „Roboter-Warten“. Gerade im Verkauf ist diese Dynamik entscheidend für Vertrauen.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Clock,
                title: '24/7 Erreichbar',
                description: 'Sie arbeitet rund um die Uhr, ohne Pause, Urlaub oder Krankheit.'
              },
              {
                icon: Globe,
                title: 'Mehrsprachig',
                description: 'Lina spricht Deutsch und über 20 weitere Sprachen fließend.'
              },
              {
                icon: Zap,
                title: 'Echtzeit',
                description: 'Keine Wartezeiten. Lina geht sofort ran und hilft weiter.'
              },
              {
                icon: Calendar,
                title: 'Terminbuchung',
                description: 'Direkte Anbindung an Ihren Kalender für automatische Termine.'
              }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-neon-cyan/50 transition-all hover:-translate-y-2 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-electric-purple/10 flex items-center justify-center mb-4 group-hover:bg-neon-cyan/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-electric-purple group-hover:text-neon-cyan transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional Highlights */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-playfair font-bold text-white mb-8 text-center">Zusätzliche Highlights von LINA Voice</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Import von Kontaktlisten (z. B. CSV) für Kampagnen</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Vollautomatisierte Outbound-Kampagnen</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Automatische Umwandlung von kalten Leads in warme Kontakte</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Pay-as-you-go-Abrechnung statt hoher Fixkosten</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Terminvereinbarung inkl. Gesprächszusammenfassung</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Qualifizierte Follow-Up-Termine mit Kontaktdaten</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>Echtzeit-Zugriff auf Ihr Unternehmenswissen (Vektordatenbanken)</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Offer Teaser */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto border border-electric-purple/30 bg-deep-navy/80 backdrop-blur-xl shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white">
                Starten Sie professionell ohne hohe Agenturkosten
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-1">Business Set Pro</p>
                  <p className="text-3xl font-bold text-white">ca. 720 €</p>
                  <p className="text-xs text-gray-500">einmalig (inkl. Warenwert)</p>
                </div>
                <div className="text-2xl font-bold text-neon-cyan">+</div>
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-1">Laufende Nutzung</p>
                  <p className="text-3xl font-bold text-white">0,20 €</p>
                  <p className="text-xs text-gray-500">pro Gesprächsminute</p>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <NeonButton href="/concept">
                  Mehr zum Konzept
                </NeonButton>
                <NeonButton href="/process" variant="secondary">
                  Zum Ablauf
                </NeonButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
