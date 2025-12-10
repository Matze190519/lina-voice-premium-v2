import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Package, ArrowRight, CreditCard, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Process() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-background py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Der Weg zu Ihrer Lina</Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            Einfach. Transparent. <br />
            <span className="text-muted-foreground">Sofort startklar.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Keine versteckten Kosten. Keine komplexe Einrichtung. Wir kümmern uns um alles.
          </p>
        </div>
      </section>

      {/* The Process Steps */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border z-0" />

            {/* Step 1 */}
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-background border-4 border-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <Card className="border-border shadow-md h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-primary">Bestellung</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>Sie bestellen das <strong>LR Profi Business Pro Set</strong> für einmalig 712,50€ (+ 29,90€ Startgebühr).</p>
                  <div className="mt-4 flex justify-center">
                    <Badge variant="outline" className="border-primary/30 text-primary">Ratenzahlung möglich</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-background border-4 border-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <Card className="border-border shadow-md h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-primary">Einrichtung</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>Unser deutsches IT-Team (esagh-it.de) kontaktiert Sie. Wir richten Ihre Nummer, das Dashboard und Lina komplett für Sie ein.</p>
                  <div className="mt-4 flex justify-center">
                    <Badge variant="outline" className="border-primary/30 text-primary">Dauer: ca. 48h</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-background border-4 border-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <Card className="border-border shadow-md h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-primary">Start</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>Lina geht live. Sie zahlen ab jetzt nur noch <strong>0,20€ pro Minute</strong>, wenn Lina tatsächlich arbeitet.</p>
                  <div className="mt-4 flex justify-center">
                    <Badge variant="outline" className="border-primary/30 text-primary">Keine Fixkosten</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Product Set Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Ihr Startpaket</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                Mehr als nur Software. <br />
                <span className="text-muted-foreground">Das LR Profi Business Pro Set.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sie investieren nicht in eine Lizenzgebühr, die verpufft. Sie erhalten physische Werte. 
                Hochwertige Health & Beauty Produkte im Wert von über 1.500€ (UVP).
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Zeitgard Pro Cosmetic Device</h4>
                    <p className="text-sm text-muted-foreground">Das prämierte High-Tech Device für professionelle Gesichtsreinigung & Anti-Aging.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Aloe Vera Special Care Box</h4>
                    <p className="text-sm text-muted-foreground">Die "Apotheke aus der Natur" für die ganze Familie.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Mind Master & Pro Balance</h4>
                    <p className="text-sm text-muted-foreground">Mikronährstoffe für mehr Energie und weniger Stress im Business-Alltag.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Lina Voice Setup inklusive</h4>
                    <p className="text-sm text-muted-foreground">Komplette technische Einrichtung im Wert von 2.500€ (Marktpreis) ist in diesem Paket enthalten.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-muted/30 rounded-xl border border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-lg">Einmalige Investition:</span>
                  <span className="text-2xl font-bold text-primary">712,50€</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <span>+ Startgebühr (einmalig)</span>
                  <span>29,90€</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-4 h-4 text-primary" />
                    <span className="font-bold">Ratenzahlung möglich:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-background p-3 rounded border border-border text-center">
                      <span className="block text-muted-foreground text-xs">1. Rate (sofort)</span>
                      <span className="font-bold text-primary">285,00€</span>
                    </div>
                    <div className="bg-background p-3 rounded border border-border text-center">
                      <span className="block text-muted-foreground text-xs">2.-4. Rate (monatl.)</span>
                      <span className="font-bold text-primary">142,50€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3" />
              <img 
                src="/images/lr-set-detail.png" 
                alt="LR Profi Business Pro Set" 
                className="relative rounded-2xl shadow-2xl w-full h-auto border border-border bg-white p-4"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x800?text=LR+Profi+Business+Pro+Set";
                }}
              />
              
              {/* Floating Badge */}
              <div className="absolute top-10 -left-6 bg-white p-4 rounded-xl shadow-lg border border-border animate-pulse-slow">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary">Gesamtwert &gt; 1.500€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Bereit für den nächsten Schritt?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Starten Sie jetzt mit Lina und sichern Sie sich Ihren Wettbewerbsvorteil.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto font-bold shadow-xl hover:scale-105 transition-transform">
            Jetzt Startpaket anfragen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
