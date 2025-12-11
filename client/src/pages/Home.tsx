import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Zap, Shield, Globe, Cpu, ChevronRight, Play, Star, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BotpressChat from "@/components/BotpressChat";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactType, setContactType] = useState<'default' | 'consultation'>('default');

  const openContact = (type: 'default' | 'consultation' = 'default') => {
    setContactType(type);
    setIsContactOpen(true);
  };

  return (
    <div className="pb-20">
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} type={contactType} />
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-primary/30 text-primary font-medium text-sm mb-8 neon-border">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                ULTRAVOX v0.7 ENGINE ONLINE
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-foreground">
                Die KI, die für dich <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient bg-300%">ans Telefon geht.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Lina ist deine intelligente Telefon-Assistentin. Sie nimmt Anrufe an, vereinbart Termine und qualifiziert Leads – 24/7, mehrsprachig und in Echtzeit. <br/>
                <span className="text-primary font-medium">Verpasse nie wieder einen Kunden.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="glass-panel p-1 rounded-lg inline-block">
                  <a href="tel:+4951116653654" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md bg-primary/10 border border-primary/50 px-8 font-medium text-primary transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(196,155,255,0.3)]">
                    <Phone className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                    <span className="text-lg font-bold tracking-wide">+49 511 16653654</span>
                    <span className="ml-2 text-xs opacity-70 font-normal border-l border-primary/30 pl-2">TESTE LIVE</span>
                  </a>
                </div>
                <Button 
                  className="h-16 px-8 bg-white text-black hover:bg-white/90 text-lg font-bold rounded-md shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
                  onClick={() => openContact('consultation')}
                >
                  Unverbindlich anfragen <ArrowRight className="ml-2 w-5 h-5" />
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
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border glass-card group">
                <video 
                  src="/videos/lina-demo-optimized.mp4" 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  loop
                  muted={false}
                  playsInline
                  controls={true}
                />
                
                {/* Floating UI Elements - Futuristic Style */}
                <div className="absolute top-8 right-8 glass-panel p-4 rounded-lg shadow-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">System Active</span>
                  </div>
                  <div className="text-3xl font-heading font-bold text-white text-glow">300ms</div>
                  <div className="text-xs text-muted-foreground font-medium">Reaktionszeit (Ultravox v0.7)</div>
                </div>
              </div>
              
              {/* Decorative Elements - Neon Glow */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 blur-[80px] rounded-full opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Dein Sekretariat der <span className="text-gradient">Zukunft.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Lina übernimmt die Routineaufgaben, damit du dich zu 100% auf dein Kerngeschäft konzentrieren kannst.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8 text-secondary" />,
                title: "Nimmt alle Anrufe ab",
                desc: "Freundliche Begrüßung im Namen deiner Firma – egal ob du im Meeting, auf der Baustelle oder im Urlaub bist."
              },
              {
                icon: <Zap className="w-8 h-8 text-secondary" />,
                title: "Qualifiziert Leads",
                desc: "Lina filtert Anrufer vor, fragt Budget und Bedarf ab und bereitet das Gespräch perfekt für dich vor."
              },
              {
                icon: <Globe className="w-8 h-8 text-secondary" />,
                title: "Mehrsprachig Global",
                desc: "Lina spricht Deutsch und über 20 weitere Sprachen fließend. Perfekt für internationale Kunden."
              }
            ].map((feature, i) => (
              <Card key={i} className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LR Product Set Teaser */}
      <section className="py-24 border-y border-border/50 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Ihr Startpaket</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
                Mehr als nur Software. <br />
                <span className="text-gradient">Realer Warenwert inklusive.</span>
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

              <Button variant="outline" className="text-primary border-primary/20 hover:bg-primary/10 hover:text-primary" onClick={() => window.location.href = '/process'}>
                Details zum Ablauf ansehen <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 blur-xl" />
              <img 
                src="/images/lr-set-preview.png" 
                alt="LR Profi Business Pro Set" 
                className="relative rounded-2xl shadow-2xl w-full h-auto border border-border/50 bg-black/40 backdrop-blur-sm p-2"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=LR+Profi+Business+Pro+Set";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="glass-panel rounded-2xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-primary/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-white">Bereit für die Zukunft?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
              Sichern Sie sich jetzt Ihren Platz im Pilotprojekt und profitieren Sie von Konditionen, die es so nie wieder geben wird.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:+4951116653654" className="bg-white text-black hover:bg-white/90 px-10 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105">
                <Phone className="w-5 h-5" />
                +49 511 16653654
              </a>
              <Button 
                variant="outline" 
                className="px-10 py-8 border-white/20 hover:bg-white/10 text-lg text-white font-medium rounded-md backdrop-blur-sm"
                onClick={() => openContact('default')}
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
