import ScrollReveal from '../components/ScrollReveal';
import { Cpu, Zap, Shield, Globe } from 'lucide-react';

export default function Technologie() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-6">
            Die <span className="text-neon-cyan">Technologie</span> hinter Lina
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Powered by Ultravox v0.7 – die schnellste KI-Voice-Engine der Welt
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Zap,
              title: '200ms Latenz',
              description: 'Ultravox v0.7 reagiert schneller als ein Mensch. Natürliche Gespräche ohne merkbare Verzögerung.',
            },
            {
              icon: Cpu,
              title: 'Neurale Sprachverarbeitung',
              description: 'Modernste Transformer-Modelle verstehen Kontext, Emotionen und Absichten in Echtzeit.',
            },
            {
              icon: Shield,
              title: 'DSGVO-konform',
              description: 'Alle Daten werden in Europa gehostet. Höchste Sicherheitsstandards und vollständige Compliance.',
            },
            {
              icon: Globe,
              title: '20+ Sprachen',
              description: 'Von Deutsch über Englisch bis Mandarin – Lina kommuniziert mit deinen Kunden weltweit.',
            },
          ].map((tech, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card p-8 rounded-xl hover:border-neon-cyan/50 transition-all">
                <tech.icon className="w-16 h-16 text-neon-cyan mb-4" />
                <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 glass-card p-8 rounded-xl max-w-3xl mx-auto border-2 border-electric-purple/30">
            <h2 className="text-3xl font-playfair font-bold mb-4 text-center">
              Benchmark-Ergebnisse
            </h2>
            <div className="grid grid-cols-3 gap-8 text-center mt-8">
              <div>
                <p className="text-4xl font-bold text-neon-cyan mb-2">200ms</p>
                <p className="text-sm text-gray-400">Response Time</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-neon-cyan mb-2">99.8%</p>
                <p className="text-sm text-gray-400">Uptime</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-neon-cyan mb-2">20+</p>
                <p className="text-sm text-gray-400">Sprachen</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
