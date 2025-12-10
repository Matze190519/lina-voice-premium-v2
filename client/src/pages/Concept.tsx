import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Package, Sparkles, CreditCard } from "lucide-react";

export default function Concept() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-background py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Das Geschäftsmodell</Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary">
            Fair. Transparent. <br />
            <span className="text-muted-foreground">Skalierbar.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Wir glauben nicht an teure Software-Abos. Wir glauben an Partnerschaft.
            Deshalb zahlen Sie nur für das, was Sie wirklich nutzen.
          </p>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Warum ein Startset?</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Lina Voice ist ein exklusives Pilotprojekt. Normalerweise kostet die Einrichtung einer solchen KI-Lösung 
                  zwischen <strong>2.500 € und 5.000 €</strong>.
                </p>
                <p>
                  Wir schenken Ihnen diese Einrichtungskosten. Im Gegenzug werden Sie Teil unseres Partner-Netzwerks (LR Health & Beauty).
                  Das Startset ist Ihre Eintrittskarte – und Sie erhalten dafür echte, physische Werte.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm mt-8">
                  <h3 className="font-heading font-bold text-primary mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Was Sie bekommen (Profi Business Pro):
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span><strong>Zeitgard Pro Cosmetic Device</strong> (Das Highlight!)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>Zeitgard Face Cleansing Tool & Brush</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>Zeitgard Face Smoothing, Peeling & Body Skincare Tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>Aloe Vera All-in One Set (inkl. Special Care Bag)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>Mind Master Formula Gold & 5in1 Beauty Elixir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>LR Discovery Box & ProBalance</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            
            <div className="relative sticky top-24">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
              <Card className="relative bg-white shadow-xl border-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">LR Profi Business Pro</CardTitle>
                  <Badge variant="secondary" className="w-fit mt-2">Artikel-Nr. 96726101</Badge>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden relative group">
                    <img 
                      src="/images/lr-set-product.png" 
                      alt="LR Profi Business Set" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <p className="text-white font-medium">Inkl. Zeitgard Pro Device</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Regulärer Preis</p>
                      <p className="text-lg line-through decoration-destructive">855,40 €</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-primary font-bold">Ihr Partner-Preis</p>
                      <p className="text-4xl font-bold text-primary">712,50 €</p>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg mb-6 border border-primary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span className="font-bold text-primary text-sm">Bequeme Ratenzahlung möglich:</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1. Rate (sofort):</span>
                      <span className="font-medium text-foreground">285,00 €</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>2.-4. Rate (monatlich):</span>
                      <span className="font-medium text-foreground">142,50 €</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground text-center mb-6">+ 29,90 € einmalige Admin-Gebühr</p>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-lg shadow-lg shadow-primary/20">
                    Jetzt Partner werden & Lina sichern
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Laufende Kosten</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Keine versteckten Gebühren. Keine Mindestlaufzeit. Volle Kontrolle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-muted-foreground">Basis</CardTitle>
                <div className="text-4xl font-bold text-primary mt-2">0,00 €</div>
                <p className="text-sm text-muted-foreground">Monatliche Fixkosten</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Keine Grundgebühr</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Server inklusive</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Wartung inklusive</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg scale-105 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <CardHeader>
                <CardTitle className="font-heading text-xl text-primary">Nutzung</CardTitle>
                <div className="text-4xl font-bold text-primary mt-2">0,20 €</div>
                <p className="text-sm text-muted-foreground">pro Minute (Pay-as-you-go)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Sekundengenaue Abrechnung</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Nur bei echten Gesprächen</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Volle Kostenkontrolle im Dashboard</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-muted-foreground">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-primary mt-2">Individuell</div>
                <p className="text-sm text-muted-foreground">ab 3.000 Min / Monat</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Volumen-Rabatte</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Priorisierter Support</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Custom Integrations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculation */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">Rechnet sich das?</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left max-w-4xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">12 €</div>
              <h3 className="font-bold text-xl mb-2">Kosten pro Stunde</h3>
              <p className="text-white/70">Eine Stunde reine Gesprächszeit mit Lina kostet Sie nur 12 €. Ein Mitarbeiter kostet 25-40 €.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">24/7</div>
              <h3 className="font-bold text-xl mb-2">Verfügbarkeit</h3>
              <p className="text-white/70">Lina nimmt Anrufe an, wenn Sie schlafen, im Meeting sind oder auf der Baustelle stehen.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">100%</div>
              <h3 className="font-bold text-xl mb-2">Erreichbarkeit</h3>
              <p className="text-white/70">Nie wieder "Besetzt". Lina kann 10.000 Anrufe gleichzeitig annehmen.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
