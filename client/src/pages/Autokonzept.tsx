import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Car, TrendingUp, Wallet, Briefcase, Phone, Mail } from "lucide-react";
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
      
      {/* Hero Section - B2B Focused */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Fuhrpark-Management 2.0</Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6 text-primary">
                Intelligente Mobilität <br />
                <span className="text-muted-foreground">für Ihr Unternehmen.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Warum marktübliche Leasingraten zahlen? Nutzen Sie unser Großkunden-Konzept als strategischen Wettbewerbsvorteil. 
                <strong>Keine Anzahlung. Sofort verfügbar.</strong>
              </p>
              <Button 
                className="h-14 px-8 text-lg font-bold shadow-lg shadow-primary/20"
                onClick={() => setIsContactOpen(true)}
              >
                Konditionen prüfen
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                alt="Premium Business Fleet" 
                className="relative rounded-2xl shadow-xl w-full h-auto border border-border bg-white p-2 object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hard Facts Section - Corrected per User Input */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Die Fakten für Entscheider</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Optimieren Sie Ihre Fixkosten durch Zugriff auf exklusive Rahmenverträge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <Wallet className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Keine Anzahlung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Schonen Sie Ihre Liquidität. Unsere Fahrzeuge bestellen Sie <strong>ohne Anzahlung</strong> und ohne Schlussrate. 
                  Volle Kostentransparenz ab dem ersten Kilometer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Einmalige Qualifikation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kein monatlicher Druck. Sie qualifizieren sich <strong>ein einziges Mal</strong> (z.B. durch Ihr Startpaket) und sind sofort bestellberechtigt.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Sofortiger Zugriff</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                 Mit Ihrem <strong>Profi Business Startpaket</strong> (2.000 PW) und nur <strong>zwei Empfehlungen</strong> erreichen Sie die nötigen 4.000 PW. Damit sind Sie sofort bestellberechtigt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Car Gallery */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-primary">Premium-Flotte</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 border border-border">
                <img src="/images/mercedes-a-class.jpg" alt="Mercedes A-Class" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  Sofort bestellbar
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Mercedes A-Klasse</h3>
              <p className="text-sm text-muted-foreground mb-2">Kompaktlimousine, Business-Ausstattung</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary">Top-Konditionen</span>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 border border-border">
                <img src="/images/vw-tiguan.jpg" alt="VW Tiguan" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  Sofort bestellbar
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">VW Golf Variant R-Line</h3>
              <p className="text-sm text-muted-foreground mb-2">Der ideale Firmenwagen</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary">Top-Konditionen</span>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 border border-border">
                <img src="/images/audi-q3.jpg" alt="Audi Q3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  Sofort bestellbar
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Audi Q3 Sportback</h3>
              <p className="text-sm text-muted-foreground mb-2">Repräsentativ & Sportlich</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary">Top-Konditionen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - B2B Oriented */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-primary">Häufige Fragen von Unternehmern</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Wie schnell kann ich ein Fahrzeug bestellen?</AccordionTrigger>
              <AccordionContent>
                Sobald Sie gesamt 4.000 Punktwerte erreicht haben. Das schaffen Sie einfach: Ihr eigenes Profi Business Paket bringt bereits 2.000 PW. Vermitteln Sie das Konzept an nur zwei weitere Partner (z.B. aus Ihrem Netzwerk), haben Sie die Qualifikation sofort erreicht.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wirklich keine Anzahlung?</AccordionTrigger>
              <AccordionContent>
                Ja. Unser Konzept sieht keine Anzahlung vor. Sie zahlen lediglich die monatliche Leasingrate, was Ihre Liquidität im Unternehmen schont.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Kann ich das Fahrzeug auch privat nutzen?</AccordionTrigger>
              <AccordionContent>
                Selbstverständlich. Die Nutzung ist nicht eingeschränkt. Sie entscheiden, ob das Fahrzeug als Firmenwagen oder privat genutzt wird.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Welche Marken stehen zur Verfügung?</AccordionTrigger>
              <AccordionContent>
                Wir kooperieren mit deutschen Premium-Herstellern: Mercedes-Benz, Audi, Volkswagen und BMW.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Optimieren Sie jetzt Ihren Fuhrpark</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 opacity-80" />
              <span className="text-lg">Business Hotline: +49 2382 / 7658–750</span>
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
            Angebot anfordern
          </Button>
        </div>
      </section>
    </div>
  );
}
