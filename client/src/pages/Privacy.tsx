import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Server, FileCheck, Check, Eye, Database, Globe } from "lucide-react";

export default function Privacy() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-background py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Datenschutz & Sicherheit</Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            Ihre Daten sind sicher. <br />
            <span className="text-muted-foreground">Ohne Kompromisse.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Wir wissen, dass Vertrauen die Währung der Zukunft ist. Deshalb setzen wir auf höchste Sicherheitsstandards und deutsche Partner.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Deutsche Infrastruktur & Partner</h3>
                  <p className="text-muted-foreground mb-2">
                    Die technische Einrichtung und Betreuung erfolgt durch unseren zertifizierten IT-Partner <strong>esagh-it.de</strong> aus Deutschland. 
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Serverstandorte in der EU</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Deutscher Ansprechpartner</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Strenge Auftragsverarbeitungsverträge (AVV)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Ultravox Enterprise Security</h3>
                  <p className="text-muted-foreground mb-2">
                    Wir nutzen die Enterprise-Infrastruktur von Ultravox v0.7. Dies garantiert nicht nur Geschwindigkeit, sondern auch Sicherheit.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> End-to-End Verschlüsselung (TLS 1.3)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Keine Nutzung Ihrer Daten zum Training öffentlicher Modelle</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> SOC 2 Type II zertifizierte Rechenzentren</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">DSGVO-Konformität</h3>
                  <p className="text-muted-foreground mb-2">
                    Unser System ist so konfiguriert, dass es den strengen Anforderungen der DSGVO entspricht.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Transparente Datenschutzerklärung inklusive</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Recht auf Löschung jederzeit umsetzbar</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Minimale Datenspeicherung (Privacy by Design)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-border shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary flex items-center gap-2">
                    <FileCheck className="w-6 h-6" />
                    Unser IT-Partner
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center border border-border p-8">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-primary mb-2">esagh-it.de</h4>
                      <p className="text-sm text-muted-foreground">IT-Systemhaus & Datenschutz-Experten</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Esagh-IT</strong> ist unser langjähriger Technologie-Partner für die Implementierung komplexer IT-Lösungen.
                    Sie sorgen für die reibungslose Integration von Lina in Ihre bestehende Infrastruktur und kümmern sich um die Einhaltung aller Datenschutzvorgaben.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Telefon-KI (LINA Voice)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Die Sprachverarbeitung erfolgt über die Plattform Ultravox Realtime (Drittlandverarbeitung möglich, z. B. USA).
                    Die Telefonie wird über einen Telefondienstleister (z. B. Twilio) abgewickelt.
                    Die Konfigurations- und Gesprächsdaten liegen primär in den Accounts des Unternehmers bei diesen Anbietern.
                    Unsere IT-Firma speichert auf eigenen Systemen keine Gesprächstranskripte, sondern nur Daten, die für Einrichtung, Konfiguration und minutengenaue Abrechnung nötig sind.
                    Wir vermeiden die Speicherung von Gesprächsinhalten und arbeiten mit Auftragsverarbeitungsverträgen und den jeweils erforderlichen rechtlichen Grundlagen (z. B. AVV, Standardvertragsklauseln).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Privacy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-primary">Häufige Fragen zum Datenschutz</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Hört Lina immer zu?</h3>
              <p className="text-muted-foreground">Nein. Lina wird nur aktiv, wenn ein Anruf eingeht oder getätigt wird. Es gibt kein permanentes "Mithören" wie bei Smart Speakern.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Werden Gespräche aufgezeichnet?</h3>
              <p className="text-muted-foreground">Standardmäßig nicht. Auf Wunsch können Aufzeichnungen aktiviert werden (z.B. zur Qualitätssicherung), dies erfordert jedoch die explizite Zustimmung des Anrufers.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Was passiert bei einer Auskunftsanfrage?</h3>
              <p className="text-muted-foreground">Wir stellen Ihnen alle gespeicherten Daten in einem maschinenlesbaren Format zur Verfügung, damit Sie Auskunftsanfragen Ihrer Kunden fristgerecht beantworten können.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Ist Ultravox sicher?</h3>
              <p className="text-muted-foreground">Ja. Ultravox ist ein Enterprise-Anbieter, der speziell für geschäftskritische Anwendungen entwickelt wurde. Sicherheit steht hier an erster Stelle, anders als bei Consumer-Modellen.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
