import ScrollReveal from '../components/ScrollReveal';
import { NeonButton } from '../components/ui/NeonButton';
import { Check, Shield, Zap, ChevronRight } from 'lucide-react';

export default function Autokonzept() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1 rounded-full bg-electric-purple/20 border border-electric-purple/50 text-neon-cyan text-sm font-bold mb-6">
              Fuhrpark-Management 2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
              Intelligente <span className="text-neon-cyan">Mobilität</span><br />
              für Ihr Unternehmen.
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Warum marktübliche Leasingraten zahlen? Nutzen Sie unser Großkunden-Konzept als strategischen Wettbewerbsvorteil.
              <br /><span className="text-white font-bold">Keine Anzahlung. Sofort verfügbar.</span>
            </p>
            <NeonButton onClick={() => window.location.href = 'tel:+4923827658750'}>
              Konditionen prüfen
            </NeonButton>
          </div>
        </ScrollReveal>

        {/* Key Facts */}
        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-colors">
              <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-4">Keine Anzahlung</h3>
              <p className="text-gray-400">
                Schonen Sie Ihre Liquidität. Unsere Fahrzeuge bestellen Sie <span className="text-white font-bold">ohne Anzahlung</span> und ohne Schlussrate. Volle Kostentransparenz ab dem ersten Kilometer.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-colors">
              <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-4">Einmalige Qualifikation</h3>
              <p className="text-gray-400">
                Kein monatlicher Druck. Sie qualifizieren sich <span className="text-white font-bold">ein einziges Mal</span> (z.B. durch Ihr Startpaket) und sind sofort bestellberechtigt.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-colors">
              <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sofortiger Zugriff</h3>
              <p className="text-gray-400">
                Mit Ihrem <span className="text-white font-bold">Profi Business Startpaket</span> (2.000 PW) und nur <span className="text-white font-bold">zwei Empfehlungen</span> erreichen Sie die nötigen 4.000 PW. Damit sind Sie sofort bestellberechtigt.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Fleet Showcase */}
        <div className="mb-32">
          <ScrollReveal>
            <h2 className="text-4xl font-playfair font-bold text-center mb-16">
              Premium-Flotte <span className="text-neon-cyan">Sofort bestellbar</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mercedes A-Class */}
            <ScrollReveal delay={0.1}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/mercedes-a-class.jpg" 
                  alt="Mercedes A-Klasse" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">Mercedes A-Klasse</h3>
                  <p className="text-gray-300 mb-4">Kompaktlimousine, Business-Ausstattung</p>
                  <div className="flex items-center text-neon-cyan font-bold">
                    Top-Konditionen <ChevronRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* VW Golf */}
            <ScrollReveal delay={0.2}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/vw-tiguan.jpg" 
                  alt="VW Golf Variant" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">VW Golf Variant R-Line</h3>
                  <p className="text-gray-300 mb-4">Der ideale Firmenwagen</p>
                  <div className="flex items-center text-neon-cyan font-bold">
                    Top-Konditionen <ChevronRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Audi Q3 */}
            <ScrollReveal delay={0.3}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/audi-q3.jpg" 
                  alt="Audi Q3 Sportback" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">Audi Q3 Sportback</h3>
                  <p className="text-gray-300 mb-4">Repräsentativ & Sportlich</p>
                  <div className="flex items-center text-neon-cyan font-bold">
                    Top-Konditionen <ChevronRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-32">
          <ScrollReveal>
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Häufige Fragen von Unternehmern</h2>
            <div className="space-y-4">
              {[
                "Wie schnell kann ich ein Fahrzeug bestellen?",
                "Wirklich keine Anzahlung?",
                "Kann ich das Fahrzeug auch privat nutzen?",
                "Welche Marken stehen zur Verfügung?"
              ].map((question, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/5 hover:border-neon-cyan/30 cursor-pointer transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{question}</span>
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center bg-gradient-to-r from-electric-purple/20 to-neon-cyan/20 rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-playfair font-bold mb-6">Optimieren Sie jetzt Ihren Fuhrpark</h2>
            <p className="text-xl text-gray-300 mb-8">
              Business Hotline: <a href="tel:+4923827658750" className="text-white font-bold hover:text-neon-cyan transition-colors">+49 2382 / 7658–750</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton onClick={() => window.location.href = 'mailto:incentives@LRworld.com'}>
                Angebot anfordern
              </NeonButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
