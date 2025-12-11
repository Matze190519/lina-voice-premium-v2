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
              <h2 className="text-xl font-bold text-primary mb-2">Anbieter</h2>
              <p>
                <strong>Online Network Vision S.L.</strong><br />
                Vertreten durch: Mathias Vinzing<br />
                Carrer de s'Aljub 34<br />
                07650 Santanyi, Spanien
              </p>
              <p className="text-sm mt-2 italic">
                Diese Website wird von selbständigen LR-Partnern betrieben und ist keine offizielle Seite der LR Health & Beauty SE & Co. KG.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Kontakt</h2>
              <p>
                Telefon: <a href="tel:+491715060008" className="hover:text-primary transition-colors">+49 171 5060008</a><br />
                E-Mail: <a href="mailto:info@lr-lifestyle.info" className="hover:text-primary transition-colors">info@lr-lifestyle.info</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br />
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">https://ec.europa.eu/consumers/odr/</a>
              </p>
              <p className="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Haftungsausschluss</h2>
              <p className="mb-4">
                <strong>Haftung für Inhalte</strong><br />
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              <p>
                <strong>Haftung für Links</strong><br />
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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
