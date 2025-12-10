import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Zap, Shield, Globe, Cpu, ChevronRight, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import BotpressChat from "@/components/BotpressChat";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <BotpressChat />
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-30" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 blur-[100px] rounded-full opacity-20" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
              LINA VOICE
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#comparison" className="hover:text-primary transition-colors">Vergleich</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Preise</a>
            <a href="#story" className="hover:text-primary transition-colors">Story</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all">
            <Phone className="w-4 h-4 mr-2" />
            Jetzt Anrufen
          </Button>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10 px-4 py-1 text-sm uppercase tracking-widest">
                Ultravox v0.7 Powered
              </Badge>
              <h1 className="text-5xl md:text-7xl font-orbitron font-black leading-tight mb-6">
                DEIN 24/7 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                  GESCHÄFTSFÜHRER
                </span> <br />
                ASSISTENT
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Die Zukunft der Unternehmenskommunikation ist hier. Lina telefoniert für dich, vereinbart Termine und schließt Verkäufe ab – rund um die Uhr, ohne Pause, ohne Ausreden.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+4951116653654" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-black transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(0,240,255,0.6)]">
                  <span className="mr-2 text-lg font-bold">5 MIN LIVE DEMO</span>
                  <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shimmer group-hover:opacity-100" />
                </a>
                <Button variant="outline" className="h-14 px-8 border-white/20 hover:bg-white/5 text-lg">
                  <Play className="w-5 h-5 mr-2 text-secondary" />
                  Video Ansehen
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/10 border border-background flex items-center justify-center text-xs">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" className="w-full h-full rounded-full" />
                    </div>
                  ))}
                </div>
                <p>Bereits <span className="text-white font-bold">500+</span> Unternehmer nutzen Lina</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] bg-black/40 backdrop-blur-sm">
                <img src="/images/hero-core.png" alt="Lina Voice Core" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating UI Elements */}
                <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-xl animate-pulse">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    <span className="text-xs font-bold text-green-400 uppercase">System Online</span>
                  </div>
                  <div className="text-2xl font-mono font-bold text-white">340ms</div>
                  <div className="text-xs text-muted-foreground">Latenzzeit (Ultra-Low)</div>
                </div>

                <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Eingehender Anruf</div>
                      <div className="text-xs text-primary">Lina übernimmt...</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 blur-[60px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 blur-[60px] rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="container mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
              NICHT NUR EIN BOT. <br />
              <span className="text-primary">DEINE BESTE MITARBEITERIN.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lina wurde entwickelt, um echte menschliche Interaktionen zu simulieren. Sie versteht Kontext, Emotionen und Nuancen besser als jeder andere Bot am Markt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Ultra-Low Latency",
                desc: "Mit 300-500ms Reaktionszeit fühlt sich das Gespräch absolut natürlich an. Kein 'Roboter-Pause', kein Warten."
              },
              {
                icon: <Globe className="w-8 h-8 text-secondary" />,
                title: "24/7 Erreichbarkeit",
                desc: "Lina schläft nicht. Sie nimmt Anrufe um 3 Uhr morgens genauso freundlich entgegen wie um 14 Uhr."
              },
              {
                icon: <Cpu className="w-8 h-8 text-green-400" />,
                title: "Unendliches Gedächtnis",
                desc: "Lina erinnert sich an jedes Detail aus jedem Gespräch. Sie weiß, was dein Kunde letzte Woche gesagt hat."
              },
              {
                icon: <Shield className="w-8 h-8 text-yellow-400" />,
                title: "Perfekter Vertrieb",
                desc: "Lina qualifiziert Leads, vereinbart Termine und kann sogar Verkäufe abschließen. Ohne Provisionsforderung."
              },
              {
                icon: <Phone className="w-8 h-8 text-red-400" />,
                title: "Skalierbar auf Knopfdruck",
                desc: "Ob 10 oder 10.000 Anrufe gleichzeitig – Lina skaliert sofort. Du verpasst nie wieder einen Lead."
              },
              {
                icon: <Star className="w-8 h-8 text-purple-400" />,
                title: "Deutsches Qualitäts-Setup",
                desc: "Entwickelt und gehostet mit deutschen Standards. DSGVO-konform und sicher."
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-card/40 border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="mb-4 p-3 w-fit rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-orbitron text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Market Comparison */}
        <section id="comparison" className="container mx-auto px-4 mb-32">
          <div className="bg-gradient-to-b from-white/5 to-transparent rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-secondary/50 text-secondary">Marktanalyse 2025</Badge>
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">WARUM LINA GEWINNT</h2>
              <p className="text-muted-foreground">Der direkte Vergleich mit den größten US-Anbietern.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-muted-foreground font-normal">Feature</th>
                    <th className="p-4 text-primary font-bold text-xl bg-primary/5 rounded-t-lg border-t border-x border-primary/20">LINA VOICE</th>
                    <th className="p-4 text-muted-foreground font-bold">Bland AI</th>
                    <th className="p-4 text-muted-foreground font-bold">Vapi AI</th>
                    <th className="p-4 text-muted-foreground font-bold">Retell AI</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-white font-bold">Latenzzeit</td>
                    <td className="p-4 text-primary font-bold bg-primary/5 border-x border-primary/20">300-500ms ⚡</td>
                    <td className="p-4 text-muted-foreground">~800ms</td>
                    <td className="p-4 text-muted-foreground">~500ms</td>
                    <td className="p-4 text-muted-foreground">~600ms</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-white font-bold">Preis pro Minute</td>
                    <td className="p-4 text-primary font-bold bg-primary/5 border-x border-primary/20">0,20 € ✅</td>
                    <td className="p-4 text-muted-foreground">0,18 € + Fixkosten</td>
                    <td className="p-4 text-muted-foreground">0,18 € + Dev</td>
                    <td className="p-4 text-muted-foreground">0,19 € + Dev</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-white font-bold">Developer Nötig?</td>
                    <td className="p-4 text-primary font-bold bg-primary/5 border-x border-primary/20">NEIN (Full Service)</td>
                    <td className="p-4 text-muted-foreground">JA</td>
                    <td className="p-4 text-muted-foreground">JA</td>
                    <td className="p-4 text-muted-foreground">JA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-white font-bold">Setup Kosten</td>
                    <td className="p-4 text-primary font-bold bg-primary/5 border-x border-primary/20">712,50 € (Einmalig)</td>
                    <td className="p-4 text-muted-foreground">280 € / Monat</td>
                    <td className="p-4 text-muted-foreground">1.500 € +</td>
                    <td className="p-4 text-muted-foreground">Variabel</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white font-bold">Modell</td>
                    <td className="p-4 text-primary font-bold bg-primary/5 rounded-b-lg border-b border-x border-primary/20">Ultravox v0.7 🚀</td>
                    <td className="p-4 text-muted-foreground">Standard</td>
                    <td className="p-4 text-muted-foreground">GPT-4o</td>
                    <td className="p-4 text-muted-foreground">Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">TRANSPARENT & FAIR</h2>
            <p className="text-muted-foreground">Keine versteckten Kosten. Du zahlst nur für Leistung.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Kit */}
            <Card className="bg-card/40 border-white/10 relative overflow-hidden">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl">LINA START-SET</CardTitle>
                <div className="text-4xl font-bold mt-4 text-white">712,50 € <span className="text-lg text-muted-foreground font-normal">+ 29,90 €</span></div>
                <p className="text-sm text-muted-foreground">Einmalige Investition</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> <span>Komplettes LR Business Setup</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> <span>Lina Voice Einrichtung</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> <span>Eigene Telefonnummer</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> <span>Zugang zum Dashboard</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> <span>Produkte im Wert von 855 €</span></li>
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white">Jetzt Starten</Button>
              </CardContent>
            </Card>

            {/* Usage */}
            <Card className="bg-gradient-to-b from-primary/10 to-card/40 border-primary/50 relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1">BEST VALUE</div>
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl text-primary">PAY-AS-YOU-GO</CardTitle>
                <div className="text-5xl font-bold mt-4 text-white">0,20 € <span className="text-lg text-muted-foreground font-normal">/ Min</span></div>
                <p className="text-sm text-muted-foreground">Volle Kostenkontrolle</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> <span>Keine monatlichen Fixkosten</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> <span>Sekundengenaue Abrechnung</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> <span>Jederzeit kündbar</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> <span>Volumen-Rabatte ab 3.000 Min</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> <span>Inklusive Server & Wartung</span></li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold">Anfrage Senden</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="container mx-auto px-4 mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-[50px] rounded-full" />
              <img src="/images/future-office.png" alt="Vision" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl" />
            </div>
            <div>
              <Badge variant="outline" className="mb-4 border-white/20">Die Vision</Badge>
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">VOM DACHDECKER ZUM <br /><span className="text-secondary">KI-PIONIER</span></h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mein Weg begann in Schwerin, Mecklenburg-Vorpommern. Als gelernter Dachdecker wusste ich, was harte Arbeit bedeutet. Aber ich wusste auch: Die Welt verändert sich.
                </p>
                <p>
                  Über Hannover führte mein Weg schließlich nach Mallorca. Seit 2023 lebe ich hier mit meiner Frau und unserem Hund. Aber ich habe mich nicht zur Ruhe gesetzt. Im Gegenteil.
                </p>
                <p>
                  Ich habe erkannt, dass KI die größte Chance unserer Zeit ist. Nicht für Konzerne, sondern für uns – die Macher. Ich habe Lina ursprünglich für mein eigenes Team gebaut. Als ich sah, wie sie unser Business revolutionierte, wusste ich: Das muss jeder Unternehmer haben.
                </p>
                <p className="text-white font-bold border-l-4 border-primary pl-4 mt-6">
                  "Lina ist nicht nur Software. Sie ist das Ergebnis aus echter Praxis, Frustration über schlechte Lösungen und dem Willen, es besser zu machen."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="container mx-auto px-4 text-center pb-20">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-10" />
            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-8 relative z-10">BEREIT FÜR DIE ZUKUNFT?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
              Lass uns sprechen. Teste Lina jetzt live und erlebe, was möglich ist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <a href="tel:+4951116653654" className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                +49 511 16653654
              </a>
              <Button variant="outline" className="px-10 py-8 border-white/20 hover:bg-white/10 text-lg">
                WhatsApp Chat Starten
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/50 backdrop-blur-md py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-orbitron font-bold">LINA VOICE</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Lina Voice AI. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">AGB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
