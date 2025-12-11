import ScrollReveal from '../components/ScrollReveal';
import { NeonButton } from '../components/ui/NeonButton';
import { Check, Sparkles, CreditCard, Car, ShieldCheck } from 'lucide-react';

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
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
              Produktwert statt <br />
              <span className="text-neon-cyan">Setup-Kosten.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Statt hoher Setup-Kosten erwerben Sie einen realen Warenwert. Die KI-Einrichtung ist inklusive.
              Ein transparentes Modell für Unternehmer.
            </p>
          </div>
        </ScrollReveal>

        {/* The Concept & Autokonzept */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Warum dieses Modell?</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-4">
                  Marktübliche KI-Lösungen verlangen hohe Setup-Gebühren (2.500€ - 5.000€) ohne materiellen Gegenwert. 
                  Bei uns ist das anders.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Wir nutzen die Infrastruktur von LR Health & Beauty als Produkt-Partner. 
                  Sie erwerben das <strong className="text-white">LR Profi Business Pro Set</strong> als Produktgegenwert. 
                  Die KI-Technologie Lina Voice erhalten Sie im Rahmen dieses Produkt-Investition <strong className="text-neon-cyan">kostenfrei</strong> dazu.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-electric-purple/20 rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">Das LR Autokonzept</h3>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-400 mb-4">
                    Seit über 40 Jahren erfolgreich: Über 50.000 Firmenwagen wurden bereits übergeben. 
                    Als Unternehmer profitieren Sie von Großkunden-Konditionen, die sonst nur Konzernen vorbehalten sind.
                  </p>
                </div>
                
                {/* Car Gallery */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]">
                    <img src="/images/cars/audi-q8.png" alt="Audi Q8" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                      <span className="text-white text-xs font-bold">Audi Q8</span>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]">
                    <img src="/images/cars/audi-a4-avant.png" alt="Audi A4 Avant" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                      <span className="text-white text-xs font-bold">Audi A4</span>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]">
                    <img src="/images/cars/mercedes-cla.png" alt="Mercedes CLA" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                      <span className="text-white text-xs font-bold">Mercedes CLA</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-bold text-xs">AUDI</div>
                    <div>
                      <p className="font-bold text-white text-sm">Audi Q8 & A4 Avant</p>
                      <p className="text-xs text-gray-400">Premium-Fahrzeuge ab 249 € monatlich.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-bold text-xs">MB</div>
                    <div>
                      <p className="font-bold text-white text-sm">Mercedes-Benz CLA</p>
                      <p className="text-xs text-gray-400">Sportliches Coupé ab 199 € monatlich.</p>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm border-t border-white/10 pt-4 text-gray-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-neon-cyan" /> <strong>Keine Anzahlung</strong> (Liquiditätsschonend)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-neon-cyan" /> <strong>Sofort bestellbar</strong> (ab 4.000 PW Gesamtumsatz)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-neon-cyan" /> Privat & geschäftlich nutzbar</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass-card p-6 rounded-xl border border-white/10">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-neon-pink" />
                  Inhalt des Profi Business Pro Sets:
                </h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-neon-cyan shrink-0 mt-1" />
                    <span><strong>Zeitgard Pro Cosmetic Device</strong> (Patentierte Technologie)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-neon-cyan shrink-0 mt-1" />
                    <span>Zeitgard Face Cleansing Tool & Brush</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-neon-cyan shrink-0 mt-1" />
                    <span>Anti-Aging System (Smoothing & Peeling Tools)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-neon-cyan shrink-0 mt-1" />
                    <span>Aloe Vera Special Care Box (Die "Hausapotheke")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-neon-cyan shrink-0 mt-1" />
                    <span>Mind Master & ProBalance (Mikronährstoffe für Leistungsträger)</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="relative sticky top-32">
            <ScrollReveal delay={0.4}>
              <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/20 to-neon-blue/20 rounded-3xl transform rotate-3 blur-xl" />
              <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="p-6 border-b border-white/10 flex justify-between items-start bg-black/40">
                  <div>
                    <h3 className="font-playfair font-bold text-2xl">LR Profi Business Pro</h3>
                    <p className="text-sm text-gray-400 mt-1">Ihr Einstieg in die Lina-Welt</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono border border-white/20">
                    Art.-Nr. 96726101
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="aspect-[4/3] bg-black/50 rounded-lg mb-6 overflow-hidden relative group border border-white/10">
                    <img 
                      src="/images/lr-profi-set-gold.png" 
                      alt="LR Profi Business Set Inhalt" 
                      className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-6">
                    <div>
                      <p className="text-sm text-gray-400">Warenwert (UVP)</p>
                      <p className="text-lg line-through decoration-red-500/50 text-gray-500">ca. 1.500,00 €</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neon-cyan font-bold">Ihr Investitions-Preis</p>
                      <p className="text-4xl font-bold text-white">712,50 €</p>
                    </div>
                  </div>

                  <div className="bg-white/5 p-5 rounded-lg mb-6 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <CreditCard className="w-5 h-5 text-neon-cyan" />
                      <span className="font-bold text-white">Flexible Ratenzahlung</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/40 p-3 rounded border border-white/10 text-center">
                        <span className="block text-xs text-gray-400 mb-1">1. Rate (Sofort)</span>
                        <span className="font-bold text-white">285,00 €</span>
                      </div>
                      <div className="bg-black/40 p-3 rounded border border-white/10 text-center">
                        <span className="block text-xs text-gray-400 mb-1">2.-4. Rate</span>
                        <span className="font-bold text-white">142,50 €</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Admin-Gebühr (einmalig)</span>
                      <span className="font-medium text-white">29,90 €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Lina Voice Setup</span>
                      <span className="font-bold text-neon-green">INKLUSIVE</span>
                    </div>
                  </div>

                  <NeonButton className="w-full justify-center py-4 text-lg" onClick={() => window.location.href = 'mailto:start@lina-voice.de'}>
                    Jetzt Starten & Lina sichern
                  </NeonButton>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Alle Preise zzgl. MwSt. Angebot richtet sich an Gewerbetreibende.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
