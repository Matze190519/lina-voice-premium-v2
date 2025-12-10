import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, TrendingUp, ShieldCheck, Globe, Package, Users, Award } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LRPartner() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="pb-20">
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Der Starke Partner</Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6 text-primary">
            LR Health & Beauty <br />
            <span className="text-muted-foreground">Der Überblick für Unternehmer.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Seit 1985 führend im Social Commerce. "More quality for your life" – gestützt auf über 40 Jahre Markterfahrung und "Made in Germany".
          </p>
        </div>
      </section>

      {/* Key Facts Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Marktführer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eines der führenden Direktvertriebsunternehmen Europas. Erfolgreich am Markt seit über 40 Jahren.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Made in Germany</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Produktion am Unternehmenssitz in Ahlen. Höchste Qualitätsstandards bei Aloe Vera, Parfüms und Nahrungsergänzung.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Social Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ein modernes Geschäftsmodell, das Flexibilität, geringes Risiko und Skalierbarkeit vereint.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Model Details */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                Finanzielle Anreize & Planbarkeit
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Für Unternehmer bietet das LR Geschäftsmodell entscheidende Vorteile:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Flexibilität & Geringes Risiko</h3>
                    <p className="text-muted-foreground">Kein hohes Startkapital, keine Lagerhaltung. Sie agieren selbstbestimmt und ortsunabhängig.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Direkter Verdienst & Marge</h3>
                    <p className="text-muted-foreground">Handelsspanne von ca. 30–40 % beim Produktverkauf.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Passives Einkommen</h3>
                    <p className="text-muted-foreground">Umsatzbeteiligung am Teamaufbau. Das Geschäft ist vererbbar.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Garantierte Boni (Fast Track)</h3>
                    <p className="text-muted-foreground">
                      Garantierter Mindestbonus für Neueinsteiger (bis zu 12 Monate), beginnend bei 300 € monatlich. 
                      Zusätzlich zur Handelsspanne und zum Autobonus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-heading font-bold mb-6 text-primary">Ihr Startvorteil</h3>
              <div className="space-y-6">
                <Card className="bg-white border-border shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Profi Business Set
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Umfangreiches Partner-Startset (Wert &gt; 1.500€) für Ihre Investition von <strong>712,50 €</strong>.
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Zeitgard Pro Device</li>
                      <li>• Aloe Vera All-in One</li>
                      <li>• Mind Master & ProBalance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground border-none shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Lina Voice (KI Coach)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm opacity-90 mb-2">
                      Ihr kostenloser 24/7 Coach für Onboarding, Produktfragen und Teamaufbau.
                    </p>
                    <p className="text-xs opacity-80 italic">
                      *Sie tragen lediglich die geringen Nutzungskosten für KI-Dienste (Ultravox/Twilio).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-primary">Wichtige Fragen für Unternehmer</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Gehe ich Verpflichtungen ein?</AccordionTrigger>
              <AccordionContent>
                Nein. Es gibt keine Abnahmeverpflichtung. Sie kaufen lediglich Ihr Startset und können danach Produkte zum Vorteilspreis erwerben. Keine Mindestmengen, keine Lagerpflicht.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Was passiert, wenn ich aufhöre?</AccordionTrigger>
              <AccordionContent>
                Das Geschäft basiert auf Freiwilligkeit. Sie können jederzeit beenden, ohne finanzielle Nachteile.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Muss ich das LR Autokonzept nutzen?</AccordionTrigger>
              <AccordionContent>
                Nein, das ist ein optionaler Anreiz. Es ist ein Leasingangebot zu Top-Konditionen, das Sie nutzen können, aber nicht müssen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Starten Sie jetzt mit einem starken Partner</h2>
          <Button 
            variant="secondary" 
            size="lg" 
            className="font-bold"
            onClick={() => setIsContactOpen(true)}
          >
            Jetzt informieren
          </Button>
        </div>
      </section>
    </div>
  );
}
