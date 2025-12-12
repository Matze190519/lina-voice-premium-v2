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
              LINA läuft auf Ultravox v0.7 – einer der modernsten Voice-KI-Plattformen mit GLM 4.6, 26 Sprachen, RAG, Tool-Calling und extrem niedriger Latenz.
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
                  Ultravox v0.7 ist bekannt für "lowest latency". Das bedeutet: Keine unangenehmen Pausen, sondern ein flüssiges Gesprächsgefühl wie mit einem echten Menschen.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-colors h-full">
                <Cpu className="w-10 h-10 text-electric-purple mb-6" />
                <h3 className="font-playfair font-bold text-2xl text-white mb-4">Audio Reasoning</h3>
                <p className="text-gray-400 leading-relaxed">
                  Basierend auf GLM 4.6 versteht LINA nicht nur Worte, sondern den Kontext. Sie kann komplexe Anfragen verarbeiten und logisch darauf reagieren.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-colors h-full">
                <Lock className="w-10 h-10 text-neon-pink mb-6" />
                <h3 className="font-playfair font-bold text-2xl text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-400 leading-relaxed">
                  Klare Trennung: Infrastruktur in Deutschland, Ultravox-USA mit DPA. Transparente Minute-für-Minute-Abrechnung ohne versteckte Datenverarbeitung.
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
    </div>
  );
}
