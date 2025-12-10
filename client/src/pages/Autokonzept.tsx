import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Car, Star, TrendingUp, ShieldCheck, HelpCircle, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Autokonzept() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="pb-20">
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Exklusiv für Partner</Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6 text-primary">
                Das LR <br />
                <span className="text-muted-foreground">Autokonzept.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Mobilität als Belohnung. Fahren Sie Premium-Fahrzeuge zu Konditionen, die sonst nur Großkonzernen vorbehalten sind.
                Ein sichtbarer Beweis Ihres Erfolgs.
              </p>
              <Button 
                className="h-14 px-8 text-lg font-bold shadow-lg shadow-primary/20"
                onClick={() => setIsContactOpen(true)}
              >
                Jetzt informieren
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                alt="Premium Business Car" 
                className="relative rounded-2xl shadow-xl w-full h-auto border border-border bg-white p-2 object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Ihre Vorteile im Überblick</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Das LR Autokonzept ist mehr als nur Leasing. Es ist ein zentraler Baustein Ihres Erfolgs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Exklusive Konditionen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leasing zu besonders günstigen Konditionen, oft <strong>70–80 % günstiger</strong> als marktüblich.
                  Direkter Zugriff auf Großkunden-Rahmenverträge.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Finanzielle Vorteile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In der Regel <strong>keine Anzahlung</strong> und <strong>keine Schlussrate</strong> erforderlich.
                  Dies erleichtert den Einstieg enorm und sorgt für volle Kostentransparenz.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Markenvielfalt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Zugang zu Premiummarken wie <strong>Volkswagen, Audi, BMW, Mercedes-Benz</strong> oder Porsche.
                  Die Auswahl wächst mit Ihrer Karrierestufe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Car Gallery */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-primary">Fahrzeugbeispiele</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 border border-border">
                <img src="/images/mercedes-a-class.jpg" alt="Mercedes A-Class" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  Ab Junior Manager
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Mercedes A-Klasse</h3>
              <p className="text-sm text-muted-foreground mb-2">Kompaktlimousine, 163 PS, Automatik</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary">ab 185 €</span>
                <span className="text-xs text-muted-foreground">Netto / Monat*</span>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 border border-border">
                <img src="/images/vw-tiguan.jpg" alt="VW Tiguan" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  Ab Junior Manager
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">VW Golf Variant R-Line</h3>
              <p className="text-sm text-muted-foreground mb-2">1.5 l TSI (150 PS)</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary">ab 89 €</span>
                <span className="text-xs text-muted-foreground">Netto / Monat*</span>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 border border-border">
                <img src="/images/audi-q3.jpg" alt="Audi Q3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  Ab Junior Manager
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Audi Q3 Sportback</h3>
              <p className="text-sm text-muted-foreground mb-2">Premium SUV Coupé</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary">Individuell</span>
                <span className="text-xs text-muted-foreground">auf Anfrage</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-8">
            *Beispielrechnungen. Die tatsächliche Leasingrate und Verfügbarkeit können variieren. 
            Angebote freibleibend.
          </p>
        </div>
      </section>

      {/* Bonus Table */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-primary">Ihr Weg zum Traumauto</h2>
          <p className="text-center text-muted-foreground mb-12">
            Der Autobonus wächst mit Ihrem Erfolg. Er wird <strong>zusätzlich</strong> zu allen anderen Boni ausgezahlt.
          </p>

          <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-primary/5 p-4 font-bold text-primary border-b border-primary/10">
              <div>Karrierestufe</div>
              <div>Qualifikation (mtl.)</div>
              <div>Autobonus (mtl.)</div>
            </div>
            <div className="divide-y divide-border">
              <div className="grid grid-cols-3 p-4 hover:bg-muted/50 transition-colors">
                <div className="font-medium">Junior Manager</div>
                <div className="text-muted-foreground">ab 4.000 PW</div>
                <div className="font-bold text-primary">55 €</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-muted/50 transition-colors">
                <div className="font-medium">Manager</div>
                <div className="text-muted-foreground">ab 8.000 PW</div>
                <div className="font-bold text-primary">110 €</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-muted/50 transition-colors">
                <div className="font-medium">Junior Teamleiter</div>
                <div className="text-muted-foreground">ab 12.000 PW</div>
                <div className="font-bold text-primary">150 €</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-muted/50 transition-colors">
                <div className="font-medium">Orgaleiter</div>
                <div className="text-muted-foreground">ab 24.000 PW</div>
                <div className="font-bold text-primary">406 €</div>
              </div>
              <div className="grid grid-cols-3 p-4 hover:bg-muted/50 transition-colors bg-primary/5">
                <div className="font-medium">Platin Orgaleiter</div>
                <div className="text-muted-foreground">Höhere Anford.</div>
                <div className="font-bold text-primary">bis zu 1.300 €</div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-emerald-50 border border-emerald-100 rounded-xl p-8">
            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 fill-emerald-600 text-emerald-600" />
              Fast Track Bonus für Neueinsteiger
            </h3>
            <p className="text-emerald-700 mb-4">
              Der Fast Track Bonus garantiert Ihnen in den ersten 12 Monaten ein festes Mindesteinkommen.
              Als Junior Manager erhalten Sie z.B. <strong>300 € garantierten Bonus</strong> PLUS den <strong>55 € Autobonus</strong>.
            </p>
            <p className="text-sm text-emerald-600 font-medium">
              Das bedeutet maximale Sicherheit und Planbarkeit für Ihren Start.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-primary">Häufig gestellte Fragen</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Ab wann kann ich teilnehmen?</AccordionTrigger>
              <AccordionContent>
                Die Teilnahme ist bereits ab der Stufe Junior Manager möglich. Dafür ist das Erreichen eines monatlichen Gesamt-Umsatzes von 4.000 PW (Punktwerten) erforderlich.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Muss ich eine Anzahlung leisten?</AccordionTrigger>
              <AccordionContent>
                Nein, in der Regel sind weder eine Anzahlung noch eine Schlussrate erforderlich. Das macht den Einstieg besonders einfach.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Kann ich das Auto privat nutzen?</AccordionTrigger>
              <AccordionContent>
                Ja, die Fahrzeuge können in der Regel sowohl für geschäftliche als auch für private Fahrten genutzt werden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Sind Versicherung und Steuer enthalten?</AccordionTrigger>
              <AccordionContent>
                In der Regel sind Kfz-Versicherung und Steuern nicht in der Leasingrate enthalten und müssen separat getragen werden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Muss das Auto beklebt sein?</AccordionTrigger>
              <AccordionContent>
                Ja, die Fahrzeuge tragen das dezente LR-Logo. Sie dienen damit auch als Marketinginstrument und zeigen Ihren Erfolg nach außen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Noch Fragen zum Autokonzept?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 opacity-80" />
              <span className="text-lg">LR Auto Hotline: +49 2382 / 7658–750</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 opacity-80" />
              <span className="text-lg">incentives@LRworld.com</span>
            </div>
          </div>
          <Button 
            variant="secondary" 
            size="lg" 
            className="font-bold"
            onClick={() => setIsContactOpen(true)}
          >
            Jetzt Beratung anfordern
          </Button>
        </div>
      </section>
    </div>
  );
}
