import { Phone, CheckCircle, Play, ArrowRight } from 'lucide-react';
import { NeonButton } from '../components/ui/NeonButton';
import ScrollReveal from '../components/ScrollReveal';
import AICore from '../components/3d/AICore';
import { motion } from 'framer-motion'; // Re-import framer-motion

export default function Home() {
  return (
    <main className="relative z-10">
      {/* Hero Section - IMMERSIVE FUTURISTIC DESIGN */}
      <section className="min-h-screen flex items-center justify-center py-24 lg:py-32 relative overflow-hidden bg-background">
        
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-60"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-[0.03] bg-repeat"></div>
          
          {/* Animated Orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow delay-1000 mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* 
            Using flex-col for mobile and lg:flex-row for desktop.
            lg:flex-nowrap ensures side-by-side layout on large screens.
            items-center ensures vertical centering.
          */}
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

                  <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight text-white tracking-tight">
                    Telefon-KI, die deine Anrufe wie ein Mitarbeiter annimmt – <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary animate-shimmer bg-[length:200%_100%]">
                      ohne 2.000 € Setup-Gebühr
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-xl font-light">
                    LINA nimmt Anrufe im Namen der Firma entgegen, beantwortet Standardfragen, bucht Termine, organisiert Rückrufe und leitet nur die wichtigen Gespräche weiter. Einrichtung durch einen IT-Partner in Frankfurt – der Unternehmer zahlt nur, wenn LINA wirklich telefoniert.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 relative z-50 pointer-events-auto">
                    <NeonButton href="/kontakt" className="w-full sm:w-auto justify-center group cursor-pointer relative z-50">
                      Kostenlose Kurz-Demo anfragen
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </NeonButton>
                    <NeonButton href="/preise" variant="secondary" className="w-full sm:w-auto justify-center group cursor-pointer relative z-50">
                      Technik & Kosten verstehen
                    </NeonButton>
                  </div>

                  <p className="text-xs text-gray-500 mb-6 max-w-md italic">
                    * Diese Nummer dient nur zu Testzwecken und demonstriert alle Branchen. 
                    Die KI wird später perfekt auf Ihr eigenes Unternehmen angepasst.
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 w-fit backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span>Hohe Nachfrage – <span className="text-neon-cyan font-semibold">Begrenzte Plätze für das Pilotprojekt</span></span>
                  </div>
                </div>
              </ScrollReveal>
              </div>
            </div>

            {/* Right: Video / Visual */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end shrink-0 mt-8 lg:mt-0 relative z-20 pointer-events-none lg:pointer-events-auto">
              {/* Re-enable pointer events for the video itself */}
              <div className="pointer-events-auto w-full flex justify-center lg:justify-end">
              {/* 3D AI Core Background Effect */}
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] opacity-60 pointer-events-none hidden lg:block z-0">
                 <AICore />
              </div>

              </div>
              <ScrollReveal delay={0.2} className="w-full max-w-lg relative z-10 pointer-events-auto">
                <div className="relative aspect-video glass-card rounded-2xl flex items-center justify-center border border-electric-purple/20 bg-deep-navy/30 backdrop-blur-md overflow-hidden group shadow-2xl shadow-electric-purple/20 transition-all duration-500 hover:shadow-neon-cyan/20 hover:border-neon-cyan/30">
                  
                  {/* Video Element */}
                  <video 
                    className="w-full h-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    controls
                    poster="/images/video-poster.jpg" // Fallback
                  >
                    <source src="/videos/lina-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent pointer-events-none"></div>

                  {/* Play Button Overlay (Optional, for style) */}
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

      {/* How it works */}
      <section className="py-24 bg-deep-navy/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center text-white">
              So funktioniert <span className="text-neon-cyan">Lina Voice.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-electric-purple/0 via-electric-purple/50 to-electric-purple/0 z-0" />

            {[
              {
                step: '01',
                title: 'Anruf kommt rein',
                description: 'Kunde ruft deine bestehende Firmennummer an. Die Nummer kann i.d.R. einfach weitergeleitet werden.',
                icon: Phone,
              },
              {
                step: '02',
                title: 'Lina begrüßt',
                description: 'Lina stellt sich als digitale Assistenz vor, beantwortet Fragen (Öffnungszeiten, Preise) und qualifiziert.',
                icon: CheckCircle,
              },
              {
                step: '03',
                title: 'Aktion',
                description: 'Lina bucht Termine direkt in deinen Kalender, plant Rückrufe oder verbindet wichtige Gespräche weiter.',
                icon: CheckCircle,
              },
              {
                step: '04',
                title: 'Abrechnung',
                description: 'Minutengenaue Abrechnung: Ultravox + Telefondienstleister direkt an Anbieter, plus 0,20 € pro Minute an IT-Firma für Setup & Betreuung.',
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative z-10 text-center group">
                  <div className="w-24 h-24 rounded-full bg-deep-navy border-4 border-electric-purple flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] group-hover:border-neon-cyan transition-all duration-500">
                    <item.icon className="w-10 h-10 text-white group-hover:text-neon-cyan transition-colors duration-300" />
                  </div>
                  <div className="glass-card p-6 rounded-xl border border-white/5 min-h-[200px] hover:border-neon-cyan/30 transition-colors">
                    <div className="text-electric-purple font-bold text-sm mb-2 group-hover:text-neon-cyan transition-colors">{item.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-deep-navy/50 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
                Was LINA wirklich kann
                </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Termine buchen & verschieben',
                description: 'Integration in Online-Kalender / Buchungssysteme (z. B. Praxis, Friseur, Coach).',
              },
              {
                title: 'Anfragen qualifizieren',
                description: 'Fragen stellen („Neupatient oder Bestandspatient?“, „Welche Leistung?“, „Wie dringend?“) und Infos strukturiert erfassen.',
              },
              {
                title: 'Rückrufe organisieren',
                description: 'Rückrufwunsch aufnehmen, Zeitfenster abstimmen und an das Team übergeben.',
              },
              {
                title: 'Weiterleitung an Mitarbeiter',
                description: 'Auf Wunsch direkte Verbindung zu einer Durchwahl, optional mit Kurz-Zusammenfassung des bisherigen Gesprächs.',
              },
              {
                title: 'Mehrsprachige Gespräche',
                description: 'Basiert auf Ultravox v0.7, unterstützt viele Sprachen (z. B. bis zu 26 Sprachen laut Ultravox-Doku).',
              },
              {
                title: 'Anbindung an Systeme',
                description: 'CRM, E-Mail, Ticketsysteme, Buchungssysteme über Tools/Function Calls.',
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-neon-cyan/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-neon-cyan/10 h-full group duration-300">
                  <div className="w-14 h-14 rounded-xl bg-electric-purple/10 flex items-center justify-center mb-6 group-hover:bg-neon-cyan/10 transition-colors duration-300">
                    <CheckCircle className="w-8 h-8 text-electric-purple group-hover:text-neon-cyan transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-playfair text-white group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-purple/10 blur-[100px] rounded-full pointer-events-none animate-pulse-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto border border-electric-purple/30 bg-deep-navy/80 backdrop-blur-xl shadow-2xl hover:shadow-electric-purple/20 transition-shadow duration-500">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-white">
                Bereit für die <span className="text-electric-purple">Zukunft?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Sichern Sie sich jetzt Ihren Platz im Pilotprojekt und profitieren Sie von 
                Konditionen, die es so nie wieder geben wird.
              </p>
              <div className="flex justify-center">
                <NeonButton href="tel:+491715060008" className="text-lg px-10 py-4 w-full sm:w-auto cursor-pointer">
                    <Phone className="w-6 h-6 inline mr-3" />
                    +49 171 5060008
                </NeonButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
