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
    <main className="relative z-10 overflow-x-hidden">
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} type={contactType} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(196,155,255,0.1),_transparent_50%)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <ScrollReveal>
              <div>
                <div className="inline-block px-4 py-2 rounded-full glass-panel border border-[#c49bff]/30 mb-8 animate-fade-in">
                  <span className="text-sm font-mono text-[#00f0ff] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse"></span>
                    ULTRAVOX v0.7 ENGINE ONLINE
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold tracking-tight mb-8 leading-tight">
                  Die KI, die für dich<br />
                  <span className="bg-gradient-to-r from-[#c49bff] to-[#00f0ff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(196,155,255,0.3)]">
                    ans Telefon geht.
                  </span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl font-light leading-relaxed">
                  Lina ist deine intelligente Telefon-Assistentin. Sie nimmt Anrufe an, 
                  vereinbart Termine und qualifiziert Leads – 24/7, mehrsprachig und in Echtzeit.
                </p>

                <p className="text-lg text-[#c49bff] mb-10 font-semibold tracking-wide uppercase text-sm">
                  Verpasse nie wieder einen Kunden.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <div className="glass-panel p-1 rounded-full inline-block">
                    <a href="tel:+4951116653654" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/50 px-8 font-medium text-[#00f0ff] transition-all duration-300 hover:bg-[#00f0ff]/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                      <Phone className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                      <span className="text-lg font-bold tracking-wide">+49 511 16653654</span>
                      <span className="ml-2 text-xs opacity-70 font-mono border-l border-[#00f0ff]/30 pl-2">TESTE LIVE</span>
                    </a>
                  </div>
                  <NeonButton variant="secondary" onClick={() => openContact('consultation')}>
                    Unverbindlich anfragen <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </NeonButton>
                </div>

                <div className="mt-12 flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0b0e18] overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="User" className="w-full h-full bg-gray-800" />
                      </div>
                    ))}
                  </div>
                  <span>Bereits <span className="text-[#00f0ff] font-bold">100+</span> Unternehmer auf der Warteliste</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: 3D Orb & Video */}
            <ScrollReveal delay={0.2}>
              <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
                <div className="relative z-10 w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#c49bff]/20 glass-card group transform transition-transform hover:scale-[1.02] duration-500">
                  {/* Background Orb */}
                  <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                    <VoiceOrb />
                  </div>
                  
                  <video 
                    src="/videos/lina-demo.mp4" 
                    className="relative z-10 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 mix-blend-lighten"
                    loop
                    muted={false}
                    playsInline
                    controls={true}
                  />
                  
                  {/* Floating UI Elements */}
                  <div className="absolute top-4 right-4 glass-panel p-3 rounded-lg shadow-lg border border-[#00f0ff]/20 z-20 pointer-events-none">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                      <span className="text-[10px] font-mono font-bold text-[#00f0ff] uppercase tracking-wider">System Active</span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-white text-glow">200ms</div>
                    <div className="text-[10px] text-gray-400 font-mono">Reaktionszeit</div>
                  </div>
                </div>
                
                {/* Decorative Glows */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#c49bff]/20 blur-[100px] rounded-full opacity-40 pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#00f0ff]/20 blur-[100px] rounded-full opacity-40 pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
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
                <div className="glass-card p-8 rounded-2xl hover:border-[#00f0ff]/50 transition-all duration-300 h-full group">
                  <div className="mb-6 p-4 w-fit rounded-xl bg-[#00f0ff]/10 group-hover:bg-[#00f0ff]/20 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-playfair">{feature.title}</h3>
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
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
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
                    <div className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <NeonButton variant="secondary" onClick={() => window.location.href = '/process'}>
                Details zum Ablauf ansehen <ChevronRight className="w-4 h-4 ml-2 inline" />
              </NeonButton>
            </ScrollReveal>
            
            <ScrollReveal className="order-1 lg:order-2 relative" delay={0.2}>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c49bff]/20 to-transparent rounded-3xl transform rotate-3 blur-2xl" />
              <img 
                src="/images/lr-profi-set-final-v2.png" 
                alt="LR Profi Business Pro Set" 
                className="relative rounded-2xl shadow-2xl w-full h-auto border border-white/10 bg-black/40 backdrop-blur-sm p-2 hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                  // Fallback to the user uploaded image if the specific v2 name isn't found
                  e.currentTarget.src = "/images/pasted_file_c8HQ3O_image.png";
                }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(196,155,255,0.15),_transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="glass-card p-12 md:p-20 rounded-3xl text-center max-w-4xl mx-auto border border-[#c49bff]/30 shadow-[0_0_50px_rgba(196,155,255,0.1)]">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
                Bereit für die <span className="text-[#c49bff]">Zukunft?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Sichern Sie sich jetzt Ihren Platz im Pilotprojekt und profitieren Sie von 
                Konditionen, die es so nie wieder geben wird.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <NeonButton onClick={() => window.location.href = 'tel:+4951116653654'}>
                  <Phone className="w-5 h-5 inline mr-2" />
                  +49 511 16653654
                </NeonButton>
                <NeonButton variant="secondary" onClick={() => openContact('default')}>
                  Jetzt anfragen
                </NeonButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
