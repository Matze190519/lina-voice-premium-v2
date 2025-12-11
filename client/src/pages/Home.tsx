import { Phone, CheckCircle, Play } from 'lucide-react';
import { NeonButton } from '../components/ui/NeonButton';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <main className="relative z-10">
      {/* Hero Section - ROBUST FLEX LAYOUT */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 lg:py-20">
        <div className="container mx-auto px-4">
          {/* 
            Using flex-col for mobile and lg:flex-row for desktop.
            lg:flex-nowrap ensures side-by-side layout on large screens.
            items-center ensures vertical centering.
          */}
          <div className="flex flex-col lg:flex-row lg:flex-nowrap items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start shrink-0">
              <ScrollReveal>
                <div>
                  <div className="inline-block px-4 py-2 rounded-full glass-panel border border-electric-purple/30 mb-6 bg-deep-navy/50 backdrop-blur-sm">
                    <span className="text-sm font-jetbrains text-neon-cyan flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
                      ULTRAVOX v0.7 ENGINE ONLINE
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
                    Die KI, die für dich<br />
                    <span className="bg-gradient-to-r from-electric-purple to-neon-cyan bg-clip-text text-transparent">
                      ans Telefon geht.
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-xl">
                    Lina ist deine intelligente Telefon-Assistentin. Sie nimmt Anrufe an, 
                    vereinbart Termine und qualifiziert Leads – 24/7, mehrsprachig und in Echtzeit.
                  </p>

                  <p className="text-lg text-electric-purple mb-8 font-semibold">
                    Verpasse nie wieder einen Kunden.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <NeonButton onClick={() => window.location.href = 'tel:+4951116653654'} className="w-full sm:w-auto justify-center">
                      <Phone className="w-5 h-5 inline mr-2" />
                      +49 511 16653654
                    </NeonButton>
                    <NeonButton variant="secondary" className="w-full sm:w-auto justify-center">
                      Unverbindlich anfragen
                    </NeonButton>
                  </div>

                  <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i} 
                          className="rounded-full bg-gradient-to-br from-electric-purple to-neon-cyan border-2 border-deep-navy overflow-hidden shrink-0"
                          style={{ width: '40px', height: '40px' }} // HARD CONSTRAINT
                        >
                           <img 
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} 
                            alt="User" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span>Bereits <span className="text-neon-cyan font-bold">100+</span> Unternehmer auf der Warteliste</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Video / Visual */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end shrink-0 mt-8 lg:mt-0">
              <ScrollReveal delay={0.2} className="w-full max-w-lg">
                <div className="relative aspect-video glass-card rounded-2xl flex items-center justify-center border border-electric-purple/20 bg-deep-navy/30 backdrop-blur-md overflow-hidden group shadow-2xl shadow-electric-purple/20">
                  
                  {/* Video Element */}
                  <video 
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    poster="/images/video-poster.jpg" // Fallback
                  >
                    <source src="/videos/lina-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent pointer-events-none"></div>

                  {/* Play Button Overlay (Optional, for style) */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-neon-cyan/20 backdrop-blur-md flex items-center justify-center border border-neon-cyan/50">
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

      {/* Features Section */}
      <section className="py-20 bg-deep-navy/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Dein Sekretariat der <span className="text-neon-cyan">Zukunft</span>.
                </h2>
                <p className="text-gray-400 text-lg">
                Lina übernimmt die Routineaufgaben, damit du dich zu 100% auf dein Kerngeschäft konzentrieren kannst.
                </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '24/7 Anrufannahme',
                description: 'Freundliche Begrüßung im Namen deiner Firma – egal ob du im Meeting, auf der Baustelle oder im Urlaub bist.',
              },
              {
                title: 'Lead-Qualifizierung',
                description: 'Lina filtert Anrufer vor, fragt Budget und Bedarf ab und bereitet das Gespräch perfekt für dich vor.',
              },
              {
                title: 'Mehrsprachig',
                description: 'Lina spricht Deutsch und über 20 weitere Sprachen fließend. Perfekt für internationale Kunden.',
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-neon-cyan/50 transition-all hover:-translate-y-1 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-electric-purple/10 flex items-center justify-center mb-6 group-hover:bg-neon-cyan/10 transition-colors">
                    <CheckCircle className="w-8 h-8 text-electric-purple group-hover:text-neon-cyan transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-playfair">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-purple/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto border border-electric-purple/30 bg-deep-navy/80 backdrop-blur-xl shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
                Bereit für die <span className="text-electric-purple">Zukunft?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Sichern Sie sich jetzt Ihren Platz im Pilotprojekt und profitieren Sie von 
                Konditionen, die es so nie wieder geben wird.
              </p>
              <div className="flex justify-center">
                <NeonButton onClick={() => window.location.href = 'tel:+4951116653654'} className="text-lg px-10 py-4">
                    <Phone className="w-6 h-6 inline mr-3" />
                    +49 511 16653654
                </NeonButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
