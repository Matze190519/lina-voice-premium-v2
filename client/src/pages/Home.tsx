import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Zap, Shield, Globe, Cpu, ChevronRight, Play, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import BotpressChat from "@/components/BotpressChat";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="pb-20">
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} />
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5 px-4 py-1 text-sm uppercase tracking-widest font-semibold">
                Exklusives Pilotprojekt - Jetzt Starten
              </Badge>
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 text-primary">
                Ihr 24/7 <br />
                <span className="text-muted-foreground">Geschäftsführer</span> <br />
                Assistent.
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed font-light">
                Wir starten jetzt das exklusive Pilotprojekt für ausgewählte Unternehmer. 
                Seien Sie einer der Ersten, der von dieser Technologie profitiert.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+4951116653654" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-sm bg-primary px-8 font-medium text-white transition-all duration-300 hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <span className="mr-2 text-lg font-bold">5 MIN LIVE DEMO</span>
                  <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </a>
                <Button variant="outline" className="h-14 px-8 border-border hover:bg-muted text-lg text-foreground font-medium rounded-sm">
                  <Play className="w-5 h-5 mr-2 text-primary" />
                  Video Ansehen
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="User" className="w-full h-full bg-muted" />
                    </div>
                  ))}
                </div>
                <p>Bereits <span className="text-primary font-bold">100+</span> Unternehmer auf der Warteliste</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border bg-white">
                <img src="/images/future-office.png" alt="Modern Office" className="w-full h-auto object-cover" />
                
                {/* Floating UI Elements - Clean Business Style */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md border border-border p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">System Active</span>
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary">300ms</div>
                  <div className="text-xs text-muted-foreground font-medium">Reaktionszeit (Ultravox v0.7)</div>
                </div>
              </div>
              
              {/* Decorative Elements - Subtle & Elegant */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/30 blur-[80px] rounded-full opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 blur-[80px] rounded-full opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>
        

        {/* Autokonzept Teaser */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Mobilität für Ihr Business</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                Fahren Sie Premium. <br />
                <span className="text-muted-foreground">Zu Großkunden-Konditionen.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Als Partner profitieren Sie von unserem exklusiven Autokonzept. Fahren Sie Mercedes-Benz, Audi oder Volkswagen zu Konditionen, die sonst nur Großkonzernen vorbehalten sind.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Ohne Anzahlung möglich</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Inklusive 10.000 km / Jahr</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Monatlicher Autobonus möglich</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Privat & geschäftlich nutzbar</span>
                </div>
              </div>

              <Button variant="outline" className="text-primary border-primary/20 hover:bg-primary/5" onClick={() => window.location.href = '/konzept'}>
                Mehr zum Autokonzept <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform -rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
                alt="Premium Business Car" 
                className="relative rounded-2xl shadow-xl w-full h-auto border border-border bg-white p-2 object-cover aspect-video"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-border flex gap-4">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground uppercase font-bold">Audi</div>
                  <div className="font-bold text-primary">Q3 / A3</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div className="text-xs text-muted-foreground uppercase font-bold">Mercedes</div>
                  <div className="font-bold text-primary">A / CLA / GLA</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div className="text-xs text-muted-foreground uppercase font-bold">VW</div>
                  <div className="font-bold text-primary">Golf / Tiguan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LR Product Set Teaser */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Ihr Startpaket</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                Mehr als nur Software. <br />
                <span className="text-muted-foreground">Physische Werte inklusive.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Mit dem LR Profi Business Pro Set erhalten Sie nicht nur Zugang zu Lina, sondern hochwertige Produkte im Wert von über 1.500€.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Zeitgard Pro Cosmetic Device</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Aloe Vera Special Care Box</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Mind Master & Pro Balance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Komplette Lina Voice Einrichtung</span>
                </div>
              </div>

              <Button variant="outline" className="text-primary border-primary/20 hover:bg-primary/5" onClick={() => window.location.href = '/process'}>
                Details zum Ablauf ansehen <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform rotate-3" />
              <img 
                src="/images/lr-set-preview.png" 
                alt="LR Profi Business Pro Set" 
                className="relative rounded-2xl shadow-xl w-full h-auto border border-border bg-white p-2"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=LR+Profi+Business+Pro+Set";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Exzellenz im Detail.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Lina ist keine Spielerei. Sie ist ein Hochleistungswerkzeug für Unternehmen, die wachsen wollen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Geschwindigkeit",
                desc: "Ultravox v0.7 Technologie ermöglicht Gespräche in Echtzeit. Keine peinlichen Pausen."
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Zuverlässigkeit",
                desc: "Deutsche Server-Infrastruktur. 99,9% Uptime. DSGVO-konform."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary" />,
                title: "Skalierbarkeit",
                desc: "Vom Einzelunternehmer zum Konzern. Lina wächst mit Ihren Anforderungen."
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-white border-border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-heading text-xl text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

        {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-primary rounded-2xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Bereit für den nächsten Schritt?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
              Sichern Sie sich jetzt Ihren Platz im Pilotprojekt und profitieren Sie von Konditionen, die es so nie wieder geben wird.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:+4951116653654" className="bg-white text-primary hover:bg-secondary px-10 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg">
                <Phone className="w-5 h-5" />
                +49 511 16653654
              </a>
              <Button 
                variant="outline" 
                className="px-10 py-8 border-white/30 hover:bg-white/10 text-lg text-white font-medium rounded-sm"
                onClick={() => setIsContactOpen(true)}
              >
                Jetzt anfragen
              </Button>
            </div>
          </div>
        </div>
      </section>

        </div>
  );
}
