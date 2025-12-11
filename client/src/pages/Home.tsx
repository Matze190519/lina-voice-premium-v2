import { Phone, ArrowRight, Zap, Globe, Check, ChevronRight } from 'lucide-react';
import VoiceOrb from '../components/VoiceOrb';
import ContactForm from '../components/ContactForm';
import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactType, setContactType] = useState<'default' | 'consultation'>('default');

  const openContact = (type: 'default' | 'consultation' = 'default') => {
    setContactType(type);
    setIsContactOpen(true);
  };

  return (
    <div className="bg-[#0b0e18] min-h-screen text-white overflow-x-hidden font-sans">
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} type={contactType} />
      
      {/* Hero Section - BRUTE FORCE LAYOUT FIX */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Background Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 
            BRUTE FORCE STYLE: 
            Using style tag to enforce flex-direction based on media query logic 
            because Tailwind classes seem to be failing or overridden.
          */}
          <div 
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8" style={{ flex: '1 1 500px' }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5 backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-mono text-[#00f0ff] tracking-wide">ULTRAVOX v0.7 ONLINE</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold leading-[1.1] tracking-tight text-left">
                Die KI, die für dich <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c49bff] to-[#00f0ff]">
                  ans Telefon geht.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl text-left">
                Lina ist deine intelligente Telefon-Assistentin. Sie nimmt Anrufe an, 
                vereinbart Termine und qualifiziert Leads – 24/7, mehrsprachig und in Echtzeit.
              </p>

              {/* Buttons - HARDCODED WIDTHS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto items-start sm:items-center">
                <a 
                  href="tel:+4951116653654" 
                  className="inline-flex items-center justify-center h-14 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/50 px-8 font-medium text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all whitespace-nowrap"
                  style={{ width: 'auto', minWidth: '220px', maxWidth: '300px' }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +49 511 16653654
                </a>
                
                <button 
                  onClick={() => openContact('consultation')} 
                  className="inline-flex items-center justify-center h-14 rounded-full bg-white/5 border border-white/10 px-8 font-medium text-white hover:bg-white/10 transition-all whitespace-nowrap"
                  style={{ width: 'auto', minWidth: '220px', maxWidth: '300px' }}
                >
                  Unverbindlich anfragen <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>

              {/* Avatars */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-8 w-full">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="rounded-full border-2 border-[#0b0e18] bg-gray-800 overflow-hidden shrink-0"
                      style={{ width: '40px', height: '40px' }}
                    >
                      <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+15}`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 whitespace-nowrap">
                  Bereits <span className="text-[#00f0ff] font-bold">100+</span> Unternehmer auf der Warteliste
                </p>
              </div>
            </div>

            {/* Right Column: Video */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0" style={{ flex: '1 1 500px' }}>
              <div className="relative w-full max-w-[600px] aspect-video rounded-2xl overflow-hidden border border-[#c49bff]/20 shadow-2xl bg-black/50 backdrop-blur-sm group">
                {/* Background Orb Animation */}
                <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                  <VoiceOrb />
                </div>
                
                {/* Video Element */}
                <video 
                  className="relative z-10 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  poster="/images/hero-core.png"
                  src="/videos/lina-demo.mp4" 
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-[#00f0ff]/30 px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none">
                  <div className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-[#00f0ff] uppercase">System Active</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0b0e18] relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Dein Sekretariat der <span className="text-[#00f0ff]">Zukunft</span>.
            </h2>
            <p className="text-gray-400 text-lg">
              Lina übernimmt die Routineaufgaben, damit du dich zu 100% auf dein Kerngeschäft konzentrieren kannst.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8 text-[#00f0ff]" />,
                title: '24/7 Anrufannahme',
                desc: 'Freundliche Begrüßung im Namen deiner Firma – egal ob du im Meeting, auf der Baustelle oder im Urlaub bist.'
              },
              {
                icon: <Zap className="w-8 h-8 text-[#00f0ff]" />,
                title: 'Lead-Qualifizierung',
                desc: 'Lina filtert Anrufer vor, fragt Budget und Bedarf ab und bereitet das Gespräch perfekt für dich vor.'
              },
              {
                icon: <Globe className="w-8 h-8 text-[#00f0ff]" />,
                title: 'Mehrsprachig',
                desc: 'Lina spricht Deutsch und über 20 weitere Sprachen fließend. Perfekt für internationale Kunden.'
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00f0ff]/30 transition-all hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center mb-6 text-[#00f0ff]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold font-playfair mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Set Section */}
      <section className="py-24 border-y border-white/5 bg-[#0b0e18]/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-[#c49bff]/10 border border-[#c49bff]/20 text-[#c49bff] text-sm font-medium mb-6">
                Ihr Startpaket
              </div>
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
                Mehr als nur Software. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c49bff] to-[#00f0ff]">
                  Realer Warenwert inklusive.
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Mit dem LR Profi Business Pro Set erhalten Sie nicht nur Zugang zu Lina, sondern hochwertige Produkte im Wert von über 1.500€.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Zeitgard Pro Cosmetic Device",
                  "Aloe Vera Special Care Box",
                  "Mind Master & Pro Balance",
                  "Komplette Lina Voice Einrichtung"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => window.location.href = '/process'} className="inline-flex h-12 items-center justify-center rounded-full bg-[#c49bff]/10 border border-[#c49bff]/50 px-6 font-medium text-[#c49bff] hover:bg-[#c49bff]/20 transition-all">
                Details zum Ablauf ansehen <ChevronRight className="w-4 h-4 ml-2 inline" />
              </button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#c49bff]/20 blur-[60px] rounded-full transform rotate-3"></div>
              <img 
                src="/images/lr-profi-set-final-v2.png" 
                alt="LR Profi Business Pro Set" 
                className="relative rounded-2xl shadow-2xl w-full h-auto border border-white/10 bg-black/20"
                onError={(e) => {
                  e.currentTarget.src = "/images/hero-core.png"; // Fallback
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
              Bereit für die <span className="text-[#c49bff]">Zukunft?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Sichern Sie sich jetzt Ihren Platz im Pilotprojekt und profitieren Sie von 
              Konditionen, die es so nie wieder geben wird.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+4951116653654" className="inline-flex h-14 items-center justify-center rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/50 px-8 font-medium text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all">
                <Phone className="w-5 h-5 mr-2" />
                +49 511 16653654
              </a>
              <button onClick={() => openContact('default')} className="inline-flex h-14 items-center justify-center rounded-full bg-white/5 border border-white/10 px-8 font-medium text-white hover:bg-white/10 transition-all">
                Jetzt anfragen
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
