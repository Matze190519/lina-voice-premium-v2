import { Badge } from "@/components/ui/badge";

export default function Impressum() {
  return (
    <div className="pb-20">
      <section className="bg-background py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Rechtliches</Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                Lina Voice<br />
                [Musterstraße 1]<br />
                [12345 Musterstadt]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Kontakt</h2>
              <p>
                Telefon: +49 511 16653654<br />
                E-Mail: [info@ki-voice.net]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                [Vorname Nachname]<br />
                [Musterstraße 1]<br />
                [12345 Musterstadt]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Haftungsausschluss</h2>
              <p className="mb-4">
                <strong>Haftung für Inhalte</strong><br />
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                <strong>Haftung für Links</strong><br />
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
