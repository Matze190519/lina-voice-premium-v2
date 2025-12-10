import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, CreditCard, Car, Star, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

export default function Concept() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="pb-20">
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} />
      
      {/* Hero */}
      <section className="bg-background py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Das Geschäftsmodell</Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary">
            Investition in <br />
            <span className="text-muted-foreground">echte Werte.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Keine Lizenzgebühren für "Luft". Sie investieren in physische Produkte und erhalten die Technologie als Bonus.
            Ein Modell, das sich für Unternehmer rechnet.
          </p>
        </div>
      </section>

      {/* The Concept & Autokonzept */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Warum dieses Modell?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Marktübliche KI-Lösungen verlangen hohe Setup-Gebühren (2.500€ - 5.000€) ohne materiellen Gegenwert. 
                  Bei uns ist das anders.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Durch unsere Partnerschaft mit LR Health & Beauty refinanzieren wir die Technologie-Entwicklung. 
                  Sie erwerben das <strong>LR Profi Business Pro Set</strong> – hochwertige Produkte für Ihre Gesundheit und Ästhetik – 
                  und erhalten den Zugang zu Lina Voice <strong>kostenfrei</strong> dazu.
                </p>
              </div>

              <Card className="bg-white border-border shadow-sm overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary flex items-center gap-2">
                    <Car className="w-6 h-6" />
                    Das LR Autokonzept
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground p-0">
                  <div className="px-6 pb-4">
                    <p className="mb-4">
                      Seit über 40 Jahren erfolgreich: Über 50.000 Firmenwagen wurden bereits übergeben. 
                      Als Unternehmer profitieren Sie von Großkunden-Konditionen, die sonst nur Konzernen vorbehalten sind.
                    </p>
                  </div>
                  
                  {/* Car Gallery */}
                  <div className="grid grid-cols-3 gap-1 px-1 mb-4">
                    <div className="relative group cursor-pointer overflow-hidden rounded-sm aspect-[4/3]">
                      <img src="/images/mercedes-a-class.jpg" alt="Mercedes A-Class" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                        <span className="text-white text-xs font-bold">Mercedes-Benz</span>
                      </div>
                    </div>
                    <div className="relative group cursor-pointer overflow-hidden rounded-sm aspect-[4/3]">
                      <img src="/images/audi-q3.jpg" alt="Audi Q3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                        <span className="text-white text-xs font-bold">Audi Q3</span>
                      </div>
                    </div>
                    <div className="relative group cursor-pointer overflow-hidden rounded-sm aspect-[4/3]">
                      <img src="/images/vw-tiguan.jpg" alt="VW Tiguan" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                        <span className="text-white text-xs font-bold">VW Tiguan</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="space-y-4 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-xs">VW</div>
                        <div>
                          <p className="font-bold text-foreground text-sm">Volkswagen & Audi</p>
                          <p className="text-xs">Attraktive Leasingraten für Einsteiger und Profis.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-xs">MB</div>
                        <div>
                          <p className="font-bold text-foreground text-sm">Mercedes-Benz</p>
                          <p className="text-xs">Premium-Fahrzeuge zu Sonderkonditionen.</p>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm border-t border-border pt-4">
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> <strong>Keine Anzahlung</strong> (Liquiditätsschonend)</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> <strong>Sofort bestellbar</strong> (ab 4.000 PW Gesamtumsatz)</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Privat & geschäftlich nutzbar</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-heading font-bold text-primary mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Inhalt des Profi Business Pro Sets:
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span><strong>Zeitgard Pro Cosmetic Device</strong> (Patentierte Technologie)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Zeitgard Face Cleansing Tool & Brush</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Anti-Aging System (Smoothing & Peeling Tools)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Aloe Vera Special Care Box (Die "Hausapotheke")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Mind Master & ProBalance (Mikronährstoffe für Leistungsträger)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative sticky top-24">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
              <Card className="relative bg-white shadow-xl border-border overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-heading text-2xl">LR Profi Business Pro</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Ihr Einstieg in die Lina-Welt</p>
                    </div>
                    <Badge variant="secondary">Art.-Nr. 96726101</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-6 overflow-hidden relative group border border-border">
                    <img 
                      src="/images/lr-set-user.png" 
                      alt="LR Profi Business Set Inhalt" 
                      className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105 bg-white"
                    />
                  </div>
                  
                  <div className="flex justify-between items-end mb-6 border-b border-border pb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Warenwert (UVP)</p>
                      <p className="text-lg line-through decoration-destructive/50 text-muted-foreground">ca. 1.500,00 €</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-primary font-bold">Ihr Investitions-Preis</p>
                      <p className="text-4xl font-bold text-primary">712,50 €</p>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-5 rounded-lg mb-6 border border-primary/10">
                    <div className="flex items-center gap-2 mb-3">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <span className="font-bold text-primary">Flexible Ratenzahlung</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded border border-primary/10 text-center">
                        <span className="block text-xs text-muted-foreground mb-1">1. Rate (Sofort)</span>
                        <span className="font-bold text-foreground">285,00 €</span>
                      </div>
                      <div className="bg-white p-3 rounded border border-primary/10 text-center">
                        <span className="block text-xs text-muted-foreground mb-1">2.-4. Rate</span>
                        <span className="font-bold text-foreground">142,50 €</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Admin-Gebühr (einmalig)</span>
                      <span className="font-medium">29,90 €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lina Voice Setup</span>
                      <span className="font-bold text-emerald-600">INKLUSIVE</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                    onClick={() => setIsContactOpen(true)}
                  >
                    Jetzt Startpaket anfragen
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Transparente Betriebskosten</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nach dem Start zahlen Sie nur für Leistung. Keine versteckten Abos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border shadow-sm hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-muted-foreground">Grundgebühr</CardTitle>
                <div className="text-4xl font-bold text-primary mt-2">0,00 €</div>
                <p className="text-sm text-muted-foreground">Monatliche Fixkosten</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Keine Lizenzkosten</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Server & Updates inklusive</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Dashboard Zugang inklusive</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg scale-105 relative bg-primary/5">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <CardHeader>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">Bestseller</Badge>
                </div>
                <CardTitle className="font-heading text-xl text-primary">Nutzung</CardTitle>
                <div className="text-4xl font-bold text-primary mt-2">0,20 €</div>
                <p className="text-sm text-muted-foreground">pro Minute (Pay-as-you-go)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Sekundengenaue Abrechnung</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Nur bei aktiven Gesprächen</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Volle Kostenkontrolle</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-muted-foreground">Telekommunikation</CardTitle>
                <div className="text-4xl font-bold text-primary mt-2">~1 Cent</div>
                <p className="text-sm text-muted-foreground">pro Minute (an Provider)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Direktabrechnung (z.B. Twilio)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Eigene Rufnummer</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Weltweite Erreichbarkeit</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculation */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">Die Rechnung geht auf.</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left max-w-4xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">12 €</div>
              <h3 className="font-bold text-xl mb-2">Kosten pro Stunde</h3>
              <p className="text-white/70">Eine Stunde reine Gesprächszeit mit Lina kostet Sie nur 12 €. Ein qualifizierter Mitarbeiter kostet Sie inkl. Lohnnebenkosten 25-40 €.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">24/7</div>
              <h3 className="font-bold text-xl mb-2">Verfügbarkeit</h3>
              <p className="text-white/70">Lina nimmt Anrufe an, wenn Sie schlafen, im Meeting sind oder auf der Baustelle stehen. Kein Urlaub, keine Krankheit.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">100%</div>
              <h3 className="font-bold text-xl mb-2">Erreichbarkeit</h3>
              <p className="text-white/70">Nie wieder "Besetzt". Lina kann theoretisch 10.000 Anrufe gleichzeitig annehmen und bearbeiten.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
