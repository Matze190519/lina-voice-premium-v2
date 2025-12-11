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
import ScrollReveal from "@/components/ScrollReveal";

export default function LRPartner() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="pb-20 pt-20">
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} />
      {/* Fallback for mobile if dialog fails */}
      <div id="contact-fallback" className="hidden"></div>
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-deep-space border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-1 rounded-full bg-electric-purple/20 border border-electric-purple/50 text-neon-cyan text-sm font-bold mb-6">
              Das Fundament für Ihren Start
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight mb-6 text-white">
              Business Set Pro <br />
              <span className="text-gray-400">Ihr All-in-One Startpaket.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Nutzen Sie Ihr Budget intelligent: Statt Honorare für die Einrichtung zu zahlen, investieren Sie in das "Profi Business Pro" Set. Nutzen Sie die enthaltenen Gesundheits- und Pflegeprodukte als Mitarbeiter-Incentives, Kundengeschenke oder für den Eigenbedarf. Ihr Vorteil: Sie erhalten einen realen Gegenwert für Ihr Geld, die KI-Einrichtung ist inklusive.
              <br /><br />
              <span className="text-neon-cyan font-bold text-2xl">Investition: 712,50 € + 29,90 € Lizenz</span>
              <br />
              <span className="text-gray-400 text-lg">Gesamt: 742,40 € (ca. 2.000 PW)</span>
              <br /><br />
              <span className="text-white font-semibold">Ratenzahlung möglich:</span>
              <br />
              <span className="text-gray-300">1. Rate: 245,00 €</span>
              <br />
              <span className="text-gray-300">2.-4. Rate: 142,50 €</span>
            </p>
            <div className="mt-12 mb-12 relative max-w-xl mx-auto">
              <div className="absolute inset-0 bg-electric-purple/20 blur-3xl rounded-full opacity-30"></div>
              <img 
                src="/images/profi-business-pro.png" 
                alt="Profi Business Pro Set" 
                className="relative z-10 rounded-2xl border border-white/10 shadow-2xl w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Facts Grid */}
      <section className="py-24 bg-deep-navy/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-colors h-full">
                <div className="mb-6 p-4 w-fit rounded-xl bg-electric-purple/10">
                  <Building2 className="w-10 h-10 text-neon-cyan" />
                </div>
                <h3 className="font-playfair font-bold text-2xl text-white mb-4">Deutsches Unternehmen</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Gegründet 1985 in Ahlen (Westfalen). Ein seriöser Partner mit über 40 Jahren Marktbestandigkeit.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-colors h-full">
                <div className="mb-6 p-4 w-fit rounded-xl bg-electric-purple/10">
                  <ShieldCheck className="w-10 h-10 text-neon-cyan" />
                </div>
                <h3 className="font-playfair font-bold text-2xl text-white mb-4">Keine Verpflichtungen</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Sie erwerben lediglich das Startpaket. Es bestehen keine Abnahmeverpflichtungen, keine Mindestumsätze und keine Tätigkeitspflichten.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-colors h-full">
                <div className="mb-6 p-4 w-fit rounded-xl bg-electric-purple/10">
                  <Package className="w-10 h-10 text-neon-cyan" />
                </div>
                <h3 className="font-playfair font-bold text-2xl text-white mb-4">Logistik & Fulfillment</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Sie erhalten das "Business Set Pro" mit hochwertiger Hardware (Zeitgard Pro) als materiellen Gegenwert Ihrer Investition.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clarification Section */}
      <section className="py-24 bg-deep-space">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="glass-card p-10 rounded-3xl border border-electric-purple/30 bg-deep-navy/50">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-white text-center">
                Das Prinzip: Echter Wert statt Setup-Gebühren
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
                Anstatt 1.500€ - 2.500€ für die Einrichtung zu zahlen, investieren Sie in das <strong className="text-white">Business Set Pro</strong>. 
                Sie erhalten echte Ware und Hardware, die KI-Einrichtung ist inklusive.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="bg-black/20 p-8 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-2xl mb-6 flex items-center gap-3 text-white">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    Was Sie bekommen
                  </h3>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Vollständige Einrichtung Ihrer Lina Voice KI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">•</span>
                      <span>LR-Produktpaket im Wert von ca. 1.500 € (für Mitarbeiter, Kunden, Praxis, Empfang etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Zugang zum LR Autokonzept (optionales Firmenleasing)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Ca. 30 % Einkaufsvorteil bei LR auf zukünftige Bestellungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">•</span>
                      <span>LR-Partnerstatus (selbständige Tätigkeit, kein Arbeitsvertrag)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/20 p-8 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-2xl mb-6 flex items-center gap-3 text-white">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/50">
                      <span className="text-red-500 font-bold text-lg">✕</span>
                    </div>
                    Was Sie NICHT tun müssen
                  </h3>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Kein Strukturvertrieb oder Network Marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Kein Verkauf von Kosmetikprodukten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Keine Anwerbung von neuen Partnern</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Keine monatlichen Pflichtkäufe</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-deep-navy/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center text-white">Häufige Fragen zum Partner LR</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-white/10 rounded-xl bg-black/20 px-4">
                <AccordionTrigger className="text-xl font-medium text-white hover:text-neon-cyan hover:no-underline py-6">
                  Warum läuft die Abwicklung über LR?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-400 pb-6 leading-relaxed">
                  Wir nutzen das Business Set Pro von LR als Basis. Dies ermöglicht uns, die KI-Einrichtung ohne separate Agentur-Rechnung anzubieten. Sie erhalten für Ihr Geld also echten Warenwert (Hardware & Produkte) statt nur einer Dienstleistung. Mit dem Business Set Pro werden Sie LR-Partner. Sie bleiben selbständig, es ist kein Arbeitsverhältnis. Die Empfehlung des Systems an andere Unternehmer ist optional, kein Muss.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-white/10 rounded-xl bg-black/20 px-4">
                <AccordionTrigger className="text-xl font-medium text-white hover:text-neon-cyan hover:no-underline py-6">
                  Bin ich dann LR-Vertreter?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-400 pb-6 leading-relaxed">
                  Mit dem Business Set Pro werden Sie LR-Partner. Sie bleiben selbständig, es entsteht kein Arbeitsverhältnis. Die Nutzung als reiner Endkunde für die KI-Lösung ist problemlos möglich. Die Empfehlung des Systems an andere ist optional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-white/10 rounded-xl bg-black/20 px-4">
                <AccordionTrigger className="text-xl font-medium text-white hover:text-neon-cyan hover:no-underline py-6">
                  Gibt es versteckte Kosten?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-400 pb-6 leading-relaxed">
                  Nein. Nach dem Kauf des Startsets zahlen Sie für die KI-Nutzung lediglich die reinen Verbrauchskosten (Minutenpreise für Telefonie/KI), die direkt abgerechnet werden. Es gibt keine LR-Abos oder versteckte Gebühren.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/20 to-neon-blue/20 blur-3xl opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-white">Fokus auf Ihr Business – mit starker Infrastruktur</h2>
            <p className="text-gray-400 mb-6">
              Füllen Sie das Formular aus. Wir rufen Sie an und besprechen alle Einzelheiten persönlich.
            </p>
            <Button 
              className="bg-white text-black hover:bg-primary hover:text-white font-bold text-xl px-10 py-6 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(196,155,255,0.8)] transition-all transform hover:scale-105"
              onClick={() => setIsContactOpen(true)}
            >
              Jetzt Beratung anfordern
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
