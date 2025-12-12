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
            <div className="col-span-2 space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Technische Infrastruktur & Datenflüsse</h3>
                <p className="text-muted-foreground mb-4">
                  Die technische Einrichtung und laufende Betreuung erfolgt durch unseren IT-Partner <strong>esagh-it.de</strong> aus Deutschland.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>Konfiguration, Routing und Dashboard-Zugriff werden auf Servern eines deutschen Rechenzentrums (z. B. Frankfurt am Main) betrieben.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>Die eigentliche Sprachverarbeitung (Echtzeit-KI) erfolgt über die Ultravox Realtime Plattform von Fixie.ai.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Ultravox Realtime (Voice-KI)</h3>
                <p className="text-muted-foreground mb-4">
                  Ultravox ist eine spezialisierte Voice-AI-Plattform. Laut offizieller Datenschutzerklärung werden dabei u. a. folgende Daten verarbeitet: Audio-Daten, Transkripte, Interaktionsdaten sowie hochgeladene Dokumente zur Wissensbasis.
                </p>
                <div className="bg-muted/50 p-6 rounded-lg border border-border">
                  <h4 className="font-bold text-primary mb-3">Wichtige Punkte:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span>Voice-Daten und Transkripte werden gespeichert, um die Dienstleistung bereitzustellen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span>Laut Ultravox werden Ihre Voice-Daten <strong>nicht</strong> zum Training der zugrunde liegenden KI-Modelle verwendet; Daten bleiben zwischen Accounts getrennt.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span>Die Plattform setzt auf Verschlüsselung und technische Schutzmaßnahmen, um unbefugten Zugriff zu verhindern.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Internationale Datenübertragung</h3>
                <p className="text-muted-foreground mb-4">
                  Die Services von Ultravox werden in den USA betrieben. Das bedeutet, dass im Rahmen der Nutzung von Lina Voice personenbezogene Daten in die USA übertragen und dort verarbeitet werden können.
                </p>
                <p className="text-muted-foreground">
                  Wir empfehlen und unterstützen den Abschluss geeigneter datenschutzrechtlicher Vereinbarungen (z. B. Auftragsverarbeitungsvertrag / DPA inkl. Standardvertragsklauseln) direkt zwischen Ihrem Unternehmen und Ultravox.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Speicher- & Löschkonzept</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>Standardmäßig konfigurieren wir Lina so, dass <strong>keine dauerhaften Gesprächsmitschnitte</strong> erstellt werden, sofern Ihr Use Case dies zulässt.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>Optionale Gesprächsaufzeichnungen (z. B. zu Schulungszwecken) werden nur aktiviert, wenn Sie als Verantwortlicher eine entsprechende Rechtsgrundlage (z. B. Einwilligung der Anrufenden) sicherstellen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>Ultravox bietet Funktionen, um Voice-Profile und Voice-Datensätze zu löschen bzw. zu exportieren. Auf Wunsch unterstützen wir Sie bei der Umsetzung Ihrer Löschkonzepte.</span>
                  </li>
                </ul>
              </div>
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
