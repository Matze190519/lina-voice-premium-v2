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
    <main style={{ backgroundColor: '#0b0e18', color: 'white', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} type={contactType} />
      
      {/* Hero Section - RAW STYLE OVERRIDE */}
      <section style={{ 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '120px', 
        paddingBottom: '80px', 
        position: 'relative', 
        minHeight: '100vh' 
      }}>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(196,155,255,0.1),_transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Left Column: Content */}
            <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel border border-[#c49bff]/30 mb-8 bg-[#c49bff]/5 backdrop-blur-md">
                <span className="text-sm font-mono text-[#00f0ff] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse"></span>
                  ULTRAVOX v0.7 ENGINE ONLINE
                </span>
              </div>

              <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', fontFamily: 'Playfair Display, serif', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Die KI, die für dich<br />
                <span style={{ background: 'linear-gradient(to right, #c49bff, #00f0ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                  ans Telefon geht.
                </span>
              </h1>

              <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2rem', lineHeight: '1.6' }}>
                Lina ist deine intelligente Telefon-Assistentin. Sie nimmt Anrufe an, 
                vereinbart Termine und qualifiziert Leads – 24/7, mehrsprachig und in Echtzeit.
              </p>

              <p style={{ color: '#c49bff', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>
                Verpasse nie wieder einen Kunden.
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                <a href="tel:+4951116653654" style={{ display: 'inline-flex', height: '3rem', alignItems: 'center', justifyContent: 'center', borderRadius: '9999px', backgroundColor: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.5)', paddingLeft: '1.5rem', paddingRight: '1.5rem', color: '#00f0ff', fontWeight: '500', textDecoration: 'none' }}>
                  <Phone className="w-4 h-4 mr-2" />
                  +49 511 16653654
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', opacity: 0.7, borderLeft: '1px solid rgba(0, 240, 255, 0.3)', paddingLeft: '0.5rem', textTransform: 'uppercase' }}>Teste Live</span>
                </a>
                
                <button onClick={() => openContact('consultation')} style={{ display: 'inline-flex', height: '3rem', alignItems: 'center', justifyContent: 'center', borderRadius: '9999px', backgroundColor: 'rgba(196, 155, 255, 0.1)', border: '1px solid rgba(196, 155, 255, 0.5)', paddingLeft: '1.5rem', paddingRight: '1.5rem', color: '#c49bff', fontWeight: '500', cursor: 'pointer' }}>
                  Unverbindlich anfragen <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', marginLeft: '10px' }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #0b0e18', overflow: 'hidden', marginLeft: '-10px', position: 'relative', zIndex: 10 }}>
                      <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} 
                        alt="User" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500' }}>Bereits <span style={{ color: '#00f0ff', fontWeight: 'bold' }}>100+</span> Unternehmer auf der Warteliste</span>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '600px', aspectRatio: '16/9', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid rgba(196, 155, 255, 0.2)', background: 'rgba(0,0,0,0.4)' }}>
                <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                  <VoiceOrb />
                </div>
                <video 
                  src="/videos/lina-demo.mp4" 
                  style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, mixBlendMode: 'lighten' }}
                  loop
                  muted={false}
                  playsInline
                  controls={true}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative bg-[#0b0e18]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4 text-white">
              Dein Sekretariat der <span className="text-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">Zukunft</span>.
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
              Lina übernimmt die Routineaufgaben, damit du dich zu 100% auf dein Kerngeschäft konzentrieren kannst.
            </p>
          </div>

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
              <div key={index} className="glass-card p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="mb-6 p-4 w-fit rounded-xl bg-[#00f0ff]/10 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 font-playfair text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Set Section */}
      <section className="py-24 relative overflow-hidden border-y border-white/5 bg-[#0b0e18]/50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
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
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c49bff]/20 to-transparent rounded-3xl transform rotate-3 blur-2xl" />
              <img 
                src="/images/lr-profi-set-final-v2.png" 
                alt="LR Profi Business Pro Set" 
                className="relative rounded-2xl shadow-2xl w-full h-auto border border-white/10 bg-black/40 backdrop-blur-sm p-2"
                onError={(e) => {
                  e.currentTarget.src = "/images/pasted_file_c8HQ3O_image.png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-[#0b0e18]">
        <div className="container mx-auto px-4 relative z-10">
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
        </div>
      </section>
    </main>
  );
}
