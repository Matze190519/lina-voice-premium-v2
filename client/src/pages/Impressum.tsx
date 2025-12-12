import { Badge } from "@/components/ui/badge";

export default function Impressum() {
  return (
    <div className="pb-20 pt-20">
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
              <h2 className="text-xl font-bold text-primary mb-2">Angaben gemäß § 5 TMG / § 18 MStV</h2>
              <p className="mb-4">
                <strong>Diensteanbieter / Verantwortlich für die Inhalte dieser Website:</strong><br />
                Online Network Vision S.L.<br />
                Vertreten durch: Mathias Vinzing<br />
                Santanyi, Spanien
              </p>
              
              <p className="mb-4">
                <strong>Kontakt:</strong><br />
                Telefon: <a href="tel:+491715060008" className="hover:text-primary transition-colors">+49 171 5060008</a><br />
                E-Mail: <a href="mailto:info@lr-lifestyle.info" className="hover:text-primary transition-colors">info@lr-lifestyle.info</a>
              </p>

              <p className="mb-4">
                <strong>Rechtsform:</strong><br />
                Sociedad Limitada (S.L.)
              </p>

              <p className="mb-4">
                <strong>Vertreten durch:</strong><br />
                Mathias Vinzing (Geschäftsführer)
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [USt-IdNr. hier einfügen]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>
                Mathias Vinzing<br />
                Santanyi, Spanien
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Online-Streitbeilegung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br />
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">https://ec.europa.eu/consumers/odr/</a>
              </p>
              <p className="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Verbraucherstreitbeilegung</h2>
              <p>
                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="pt-8 border-t border-border mt-8 text-sm">
              <p>© 2025 Online Network Vision S.L. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
