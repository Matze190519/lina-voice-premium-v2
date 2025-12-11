import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Zap, Cpu, Lock, Activity, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function Technology() {
  return (
    <div className="pb-20 pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="inline-block px-4 py-1 rounded-full bg-electric-purple/20 border border-electric-purple/50 text-neon-cyan text-sm font-bold mb-6">
              Ultravox v0.7 Core
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight text-white">
              Technologie, die <br />
              <span className="text-neon-cyan">versteht.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Lina basiert auf dem weltweit fortschrittlichsten Speech-Language-Model (SLM). 
              Keine Transkription. Keine Verzögerung. Reines Verstehen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-colors h-full">
                <Zap className="w-10 h-10 text-neon-cyan mb-6" />
                <h3 className="font-playfair font-bold text-2xl text-white mb-4">Echtzeit-Latenz</h3>
                <p className="text-gray-400 leading-relaxed">
                  Mit unter <strong className="text-white">200ms Reaktionszeit</strong> ist Lina schneller als ein menschlicher Gedanke. 
                  Herkömmliche Systeme (Bland AI, Retell) benötigen oft 800ms+, was zu unangenehmen Pausen führt.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-colors h-full">
                <Cpu className="w-10 h-10 text-electric-purple mb-6" />
                <h3 className="font-playfair font-bold text-2xl text-white mb-4">Multimodal Native</h3>
                <p className="text-gray-400 leading-relaxed">
                  Lina "hört" Audio direkt, statt es erst in Text umzuwandeln. 
                  Dadurch erkennt sie <strong className="text-white">Emotionen, Zögern und Unterbrechungen</strong> sofort und reagiert natürlich.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-colors h-full">
                <Lock className="w-10 h-10 text-neon-pink mb-6" />
                <h3 className="font-playfair font-bold text-2xl text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-400 leading-relaxed">
                  DSGVO-konforme Verarbeitung. Ihre Daten bleiben Ihre Daten. 
                  Kein Training an Ihren Kundengesprächen ohne explizite Zustimmung.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Integration & Requirements */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-white">Einfache Integration</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Lina integriert sich nahtlos in Ihre bestehende Infrastruktur. Keine komplexe IT-Umstellung nötig.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center shrink-0 border border-electric-purple/30">
                    <span className="font-bold text-xl text-neon-cyan">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Rufnummern-Weiterleitung</h3>
                    <p className="text-gray-400">
                      Sie erhalten eine dedizierte Lina-Rufnummer. Richten Sie einfach eine Anrufweiterschaltung (AWS) 
                      von Ihrer Hauptnummer ein – bei Besetzt, nach Zeit oder sofort.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center shrink-0 border border-electric-purple/30">
                    <span className="font-bold text-xl text-neon-cyan">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Kalender-Synchronisation</h3>
                    <p className="text-gray-400">
                      Verbinden Sie Ihren Google Calendar, Outlook oder Calendly. Lina bucht Termine nur dann, 
                      wenn Sie wirklich frei sind. Echtzeit-Abgleich verhindert Doppelbuchungen.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center shrink-0 border border-electric-purple/30">
                    <span className="font-bold text-xl text-neon-cyan">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">CRM & Benachrichtigungen</h3>
                    <p className="text-gray-400">
                      Nach jedem Gespräch erhalten Sie eine Zusammenfassung per E-Mail, SMS oder direkt in Ihr CRM 
                      (HubSpot, Salesforce, Pipedrive, etc.) via Webhook oder Zapier.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
              <div className="glass-card p-8 rounded-xl border border-white/10 bg-black/40">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-neon-cyan" />
                  Technische Voraussetzungen
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">Aktive Telefonnummer (Festnetz oder Mobil) mit Weiterleitungsfunktion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">Digitaler Kalender (optional, für Terminbuchung)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">Keine spezielle Hardware nötig – läuft in der Cloud</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">Internetverbindung für Dashboard-Zugriff</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-white">Der Marktvergleich</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Warum wir uns für Ultravox v0.7 entschieden haben – und warum Sie das auch tun sollten.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                      <th className="p-6 font-playfair font-bold text-white text-lg">Feature</th>
                      <th className="p-6 font-playfair font-bold text-neon-cyan bg-electric-purple/10 border-x border-white/10 w-1/4 text-lg">LINA VOICE</th>
                      <th className="p-6 font-playfair font-bold text-gray-300 w-1/5">Bland AI</th>
                      <th className="p-6 font-playfair font-bold text-gray-300 w-1/5">Vapi AI</th>
                      <th className="p-6 font-playfair font-bold text-gray-300 w-1/5">Retell AI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-gray-300">KI-Architektur</td>
                      <td className="p-6 font-bold text-white bg-electric-purple/5 border-x border-white/10">End-to-End SLM</td>
                      <td className="p-6 text-gray-400">STT + LLM + TTS</td>
                      <td className="p-6 text-gray-400">Wrapper (GPT-4)</td>
                      <td className="p-6 text-gray-400">Wrapper</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-gray-300">Latenzzeit (Ø)</td>
                      <td className="p-6 font-bold text-neon-green bg-electric-purple/5 border-x border-white/10">~200 ms ⚡</td>
                      <td className="p-6 text-gray-400">~800 ms</td>
                      <td className="p-6 text-gray-400">~500 ms</td>
                      <td className="p-6 text-gray-400">~600 ms</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-gray-300">Unterbrechbarkeit</td>
                      <td className="p-6 font-bold text-white bg-electric-purple/5 border-x border-white/10">Sofort (Native)</td>
                      <td className="p-6 text-gray-400">Verzögert</td>
                      <td className="p-6 text-gray-400">Gut</td>
                      <td className="p-6 text-gray-400">Mittel</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-gray-300">Emotionale Intelligenz</td>
                      <td className="p-6 font-bold text-white bg-electric-purple/5 border-x border-white/10">Sehr Hoch</td>
                      <td className="p-6 text-gray-400">Niedrig</td>
                      <td className="p-6 text-gray-400">Mittel</td>
                      <td className="p-6 text-gray-400">Mittel</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-gray-300">Setup-Aufwand</td>
                      <td className="p-6 font-bold text-white bg-electric-purple/5 border-x border-white/10">Full Service</td>
                      <td className="p-6 text-gray-400">Self-Service</td>
                      <td className="p-6 text-gray-400">Developer</td>
                      <td className="p-6 text-gray-400">Developer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mt-24">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-electric-purple to-neon-blue rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-[0_0_50px_rgba(124,58,237,0.3)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Erleben Sie den Unterschied.</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Technische Daten sind gut. Ein echtes Gespräch ist besser. 
                Rufen Sie Lina jetzt an und versuchen Sie, sie aus dem Konzept zu bringen.
              </p>
              <a href="tel:+4951116653654" className="inline-flex items-center justify-center bg-white text-electric-purple font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-electric-purple">+49 511 16653654 anrufen</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
