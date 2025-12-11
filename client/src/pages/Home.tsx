import { Phone, CheckCircle, ArrowRight, Play, Star, Zap, Globe, ChevronRight, Check } from 'lucide-react';
import NeonButton from '../components/NeonButton';
import ScrollReveal from '../components/ScrollReveal';
import VoiceOrb from '../components/VoiceOrb';
import ContactForm from '../components/ContactForm';
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactType, setContactType] = useState<'default' | 'consultation'>('default');

  const openContact = (type: 'default' | 'consultation' = 'default') => {
    setContactType(type);
    setIsContactOpen(true);
  };

  return (
    <main className="relative z-10 overflow-x-hidden bg-[#0b0e18] text-white min-h-screen">
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} type={contactType} />
      
      {/* Hero Section - Simplified Layout */}
      <section className="min-h-[calc(100vh-80px)] flex items-center py-12 md:py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(196,155,255,0.1),_transparent_50%)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Content */}
            <div className="flex flex-col items-start space-y-8 w-full lg:w-1/2">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel border border-[#c49bff]/30 bg-[#c49bff]/5 backdrop-blur-md">
                <span className="text-sm font-mono text-[#00f0ff] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse"></span>
                  ULTRAVOX v0.7 ENGINE ONLINE
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold tracking-tight leading-[1.1]">
                Die KI, die für dich<br />
                <span className="bg-gradient-to-r from-[#c49bff] to-[#00f0ff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(196,155,255,0.3)]">
                  ans Telefon geht.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
                Lina ist deine intelligente Telefon-Assistentin. Sie nimmt Anrufe an, 
                vereinbart Termine und qualifiziert Leads – 24/7, mehrsprachig und in Echtzeit.
              </p>

              <p className="text-sm md:text-base text-[#c49bff] font-semibold tracking-wide uppercase">
                Verpasse nie wieder einen Kunden.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="tel:+4951116653654" className="inline-flex h-12 items-center justify-center rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/50 px-6 font-medium text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all group whitespace-nowrap">
                  <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  +49 511 16653654
                  <span className="ml-2 text-[10px] opacity-70 font-mono border-l border-[#00f0ff]/30 pl-2 uppercase">Teste Live</span>
                </a>
                
                <button onClick={() => openContact('consultation')} className="inline-flex h-12 items-center justify-center rounded-full bg-[#c49bff]/10 border border-[#c49bff]/50 px-6 font-medium text-[#c49bff] hover:bg-[#c49bff]/20 transition-all whitespace-nowrap">
                  Unverbindlich anfragen <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0b0e18] overflow-hidden bg-gray-800 shrink-0 relative z-10" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                      <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-medium">Bereits <span className="text-[#00f0ff] font-bold">100+</span> Unternehmer auf der Warteliste</span>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="flex justify-center items-center w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="w-full max-w-lg relative">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#c49bff]/20 glass-card bg-black/40 backdrop-blur-sm group">
                  <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                    <VoiceOrb />
                  </div>
                  <video 
                    src="/videos/lina-demo.mp4" 
                    className="relative z-10 w-full h-full object-cover opacity-90 mix-blend-lighten group-hover:opacity-100 transition-opacity"
                    loop
                    muted={false}
                    playsInline
                    controls={true}
                  />
                  
                  {/* Floating UI Elements */}
                  <div className="absolute top-4 right-4 glass-panel p-3 rounded-lg shadow-lg border border-[#00f0ff]/20 z-20 pointer-events-none bg-black/60 backdrop-blur-md">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                      <span className="text-[10px] font-mono font-bold text-[#00f0ff] uppercase tracking-wider">System Active</span>
                    </div>
                    <div className="text-xl font-mono font-bold text-white text-glow">200ms</div>
                    <div className="text-[10px] text-gray-400 font-mono">Reaktionszeit</div>
                  </div>
                </div>
                
                {/* Decorative Glows */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#c49bff]/20 blur-[80px] rounded-full opacity-40 pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00f0ff]/20 blur-[80px] rounded-full opacity-40 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative bg-[#0b0e18]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4 text-white">
              Dein Sekretariat der <span className="text-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">Zukunft</span>.
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
              Lina übernimmt die Routineaufgaben, damit du dich zu 100% auf dein Kerngeschäft konzentrieren kannst.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8 text-[#00f0ff]" />,
                title: '24/7 Anrufannahme',
                description: 'Freundliche Begrüßung im Namen deiner Firma – egal ob du im Meeting, auf der Baustelle oder im Urlaub bist.',
              },
              {
                icon: <Zap className="w-8 h-8 text-[#00f0ff]" />,
                title: 'Lead-Qualifizierung',
                description: 'Lina filtert Anrufer vor, fragt Budget und Bedarf ab und bereitet das Gespräch perfekt für dich vor.',
              },
              {
                icon: <Globe className="w-8 h-8 text-[#00f0ff]" />,
                title: 'Mehrsprachig',
                description: 'Lina spricht Deutsch und über 20 weitere Sprachen fließend. Perfekt für internationale Kunden.',
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass-card p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-[#00f0ff]/50 transition-all duration-300 h-full group">
                  <div className="mb-6 p-4 w-fit rounded-xl bg-[#00f0ff]/10 shadow-[0_0_20px_rgba(0,240,255,0.1)] group-hover:bg-[#00f0ff]/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-playfair text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Set Section */}
      <section className="py-24 relative overflow-hidden border-y border-white/5 bg-[#0b0e18]/50">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c49bff]/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-[#c49bff]/10 border border-[#c49bff]/20 text-[#c49bff] text-sm font-medium mb-6">
                Ihr Startpaket
              </div>
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-white">
                Mehr als nur Software. <br />
                <span className="bg-gradient-to-r from-[#c49bff] to-[#00f0ff] bg-clip-text text-transparent">
                  Realer Warenwert inklusive.
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Mit dem LR Profi Business Pro Set erhalten Sie nicht nur Zugang zu Lina, sondern hochwertige Produkte im Wert von über 1.500€.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Zeitgard Pro Cosmetic Device",
                  "Aloe Vera Special Care Box",
                  "Mind Master & Pro Balance",
                  "Komplette Lina Voice Einrichtung"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => window.location.href = '/process'} className="inline-flex h-12 items-center justify-center rounded-full bg-[#c49bff]/10 border border-[#c49bff]/50 px-6 font-medium text-[#c49bff] hover:bg-[#c49bff]/20 transition-all">
                Details zum Ablauf ansehen <ChevronRight className="w-4 h-4 ml-2 inline" />
              </button>
            </ScrollReveal>
            
            <ScrollReveal className="order-1 lg:order-2 relative" delay={0.2}>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c49bff]/20 to-transparent rounded-3xl transform rotate-3 blur-2xl" />
              <img 
                src="/images/lr-profi-set-final-v2.png" 
                alt="LR Profi Business Pro Set" 
                className="relative rounded-2xl shadow-2xl w-full h-auto border border-white/10 bg-black/40 backdrop-blur-sm p-2 hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/images/pasted_file_c8HQ3O_image.png";
                }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-[#0b0e18]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(196,155,255,0.15),_transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="glass-card p-12 md:p-20 rounded-3xl text-center max-w-4xl mx-auto border border-[#c49bff]/30 shadow-[0_0_50px_rgba(196,155,255,0.1)] bg-black/40 backdrop-blur-md">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8 text-white">
                Bereit für die <span className="text-[#c49bff]">Zukunft?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Sichern Sie sich jetzt Ihren Platz im Pilotprojekt und profitieren Sie von 
                Konditionen, die es so nie wieder geben wird.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+4951116653654" className="inline-flex h-12 items-center justify-center rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/50 px-6 font-medium text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all">
                  <Phone className="w-5 h-5 inline mr-2" />
                  +49 511 16653654
                </a>
                <button onClick={() => openContact('default')} className="inline-flex h-12 items-center justify-center rounded-full bg-[#c49bff]/10 border border-[#c49bff]/50 px-6 font-medium text-[#c49bff] hover:bg-[#c49bff]/20 transition-all">
                  Jetzt anfragen
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
