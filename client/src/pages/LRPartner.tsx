import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Globe, Package, Building2 } from "lucide-react";
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
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Unser Produkt-Partner</Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6 text-primary">
            LR Health & Beauty <br />
            <span className="text-muted-foreground">Der Lieferant Ihres Business-Pakets.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Warum LR? Wir nutzen die Infrastruktur und die hochwertigen Produkt-Bundles eines der größten deutschen Direktvertriebsunternehmen als Basis für unser Geschäftsmodell.
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
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Deutsches Unternehmen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gegründet 1985 in Ahlen (Westfalen). Ein seriöser Partner mit über 40 Jahren Marktbestandigkeit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Keine Verpflichtungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sie erwerben lediglich das Startpaket. Es bestehen keine Abnahmeverpflichtungen, keine Mindestumsätze und keine Tätigkeitspflichten.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">Logistik & Fulfillment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  LR liefert das physische "Profi Business Set" (Zeitgard Pro, etc.), das als physische Komponente Ihres Einstiegs dient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clarification Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary text-center">
              Das Prinzip: Produktwert statt Setup-Kosten
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-center">
              Anstatt einer hohen Einrichtungsgebühr für die KI-Integration erwerben Sie das <strong>LR Profi Business Set</strong>. 
              Dies dient als "Eintrittskarte" in unsere Plattform.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Check className="text-green-500" /> Was Sie bekommen
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">• Vollständige Einrichtung Ihrer Lina Voice KI</li>
                  <li className="flex items-start gap-2">• Das hochwertige LR Profi Business Set (Warenwert &gt; 1.500€)</li>
                  <li className="flex items-start gap-2">• Zugang zum LR Autokonzept (optionales Firmenleasing)</li>
                  <li className="flex items-start gap-2">• Einkaufskonditionen (-30%) für Eigenbedarf</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-red-500 flex items-center justify-center text-red-500 text-xs">✕</div>
                  Was Sie NICHT tun müssen
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">• Kein Strukturvertrieb oder Network Marketing</li>
                  <li className="flex items-start gap-2">• Kein Verkauf von Kosmetikprodukten</li>
                  <li className="flex items-start gap-2">• Keine Anwerbung von neuen Partnern</li>
                  <li className="flex items-start gap-2">• Keine monatlichen Pflichtkäufe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-primary">Häufige Fragen zum Partner LR</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Warum läuft die Abwicklung über LR?</AccordionTrigger>
              <AccordionContent>
                Wir nutzen das LR Profi Business Set als standardisiertes Business-Paket. Dies ermöglicht uns, die KI-Einrichtung ohne separate Agentur-Rechnung anzubieten. Sie erhalten für Ihr Geld also echten Warenwert statt nur einer Dienstleistung.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Bin ich dann LR-Vertreter?</AccordionTrigger>
              <AccordionContent>
                Formal werden Sie als Partner registriert, um das Set zu beziehen und Zugriff auf das Autokonzept zu erhalten. Praktisch nutzen Sie dies jedoch rein als Endkunde/Unternehmer für die KI-Lösung und ggf. das Firmenleasing. Sie müssen nicht als Vertriebspartner aktiv werden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Gibt es versteckte Kosten?</AccordionTrigger>
              <AccordionContent>
                Nein. Nach dem Kauf des Startsets zahlen Sie für die KI-Nutzung lediglich die reinen Verbrauchskosten (Minutenpreise für Telefonie/KI), die direkt abgerechnet werden. Es gibt keine LR-Abos oder versteckte Gebühren.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Fokus auf Ihr Business – mit starker Infrastruktur</h2>
          <Button 
            variant="secondary" 
            size="lg" 
            className="font-bold"
            onClick={() => setIsContactOpen(true)}
          >
            Jetzt Startpaket anfragen
          </Button>
        </div>
      </section>
    </div>
  );
}
