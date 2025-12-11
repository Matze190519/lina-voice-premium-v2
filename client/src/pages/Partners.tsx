import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, TrendingUp, ShieldCheck, Rocket, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Partners() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="bg-white/10 text-white border-white/20 mb-6 hover:bg-white/20">Lina Partner Program</Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Wachsen Sie mit der <br />
            <span className="text-secondary">Stimme der Zukunft.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
            Erweitern Sie Ihr Portfolio um die fortschrittlichste Voice-AI am Markt. 
            Für Agenturen, Consultants und Integratoren, die ihren Kunden echten Vorsprung bieten wollen.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#apply" className="bg-white text-primary font-bold py-4 px-8 rounded-sm hover:bg-secondary transition-colors shadow-lg inline-flex items-center">
              <Rocket className="w-5 h-5 mr-2" />
              Partner werden
            </a>
            <Link href="/technology" className="bg-transparent border border-white/30 text-white font-bold py-4 px-8 rounded-sm hover:bg-white/10 transition-colors inline-flex items-center">
              Technologie ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Why Partner? */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Warum Lina Voice?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir bieten nicht nur Software, sondern ein komplettes Geschäftsmodell für Ihren Erfolg.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card border-border hover:border-primary/50 transition-all group">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">Attraktive Margen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Profitieren Sie von wiederkehrenden Einnahmen (Revenue Share) und attraktiven Setup-Gebühren. 
                  Unser Modell ist auf langfristiges, gemeinsames Wachstum ausgelegt.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border hover:border-primary/50 transition-all group">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">Exklusive Technologie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Bieten Sie Ihren Kunden etwas, das sie woanders nicht bekommen: 
                  Echte Echtzeit-Kommunikation mit &lt; 300ms Latenz dank Ultravox v0.7 Core.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border hover:border-primary/50 transition-all group">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">Full-Service Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Sie verkaufen, wir liefern. Unser technisches Team übernimmt auf Wunsch das komplette Onboarding 
                  und die Einrichtung für Ihre Kunden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Für wen ist das Partnerprogramm?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Digital- & Marketing-Agenturen</h3>
                    <p className="text-muted-foreground">
                      Erweitern Sie Ihr Service-Angebot. Helfen Sie Ihren Kunden nicht nur bei der Lead-Generierung, 
                      sondern auch bei der automatisierten Lead-Qualifizierung und Terminbuchung.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Unternehmensberater</h3>
                    <p className="text-muted-foreground">
                      Optimieren Sie die Prozesse Ihrer Mandanten. Implementieren Sie KI-Lösungen, die messbar 
                      Kosten senken und die Erreichbarkeit auf 24/7 erhöhen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Rocket className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">IT-Systemhäuser & Integratoren</h3>
                    <p className="text-muted-foreground">
                      Integrieren Sie Lina tief in die CRM- und ERP-Landschaften Ihrer Kunden. 
                      Nutzen Sie unsere API und Webhooks für maßgeschneiderte Lösungen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              <h3 className="text-2xl font-heading font-bold mb-6">Partner Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Attraktive Lifetime-Provisionen",
                  "White-Label Optionen verfügbar",
                  "Priorisierter technischer Support",
                  "Zugang zu Beta-Features",
                  "Co-Marketing Materialien",
                  "Persönlicher Partner Manager"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-green-500" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-muted-foreground mb-4">
                  "Durch die Partnerschaft mit Lina konnten wir unseren Kunden endlich eine funktionierende KI-Telefonie-Lösung anbieten. Die Einrichtung ist kinderleicht."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full" />
                  <div>
                    <p className="font-bold text-sm">Michael Weber</p>
                    <p className="text-xs text-muted-foreground">CEO, WebScale Agency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Application Form Placeholder */}
      <section id="apply" className="container mx-auto px-4 mt-24">
        <div className="bg-gradient-to-br from-primary/20 to-background border border-primary/20 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Werden Sie Teil der Revolution.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Die Nachfrage nach Voice AI explodiert. Positionieren Sie sich jetzt als Vorreiter. 
              Füllen Sie das Formular aus oder kontaktieren Sie unser Partner-Team direkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:partner@lina-voice.com" className="bg-primary text-white font-bold py-4 px-8 rounded-sm hover:bg-primary/90 transition-colors shadow-lg inline-flex items-center justify-center">
                Partner-Anfrage senden
              </a>
              <a href="tel:+4951116653654" className="bg-transparent border border-primary/30 text-primary font-bold py-4 px-8 rounded-sm hover:bg-primary/10 transition-colors inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Direkt sprechen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for the phone icon in the CTA
function Phone({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
