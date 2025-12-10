import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-background py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Über Uns</Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary">
            Vom Handwerk <br />
            <span className="text-muted-foreground">zur High-Tech.</span>
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-primary">
            <p className="lead text-xl font-medium text-foreground">
              Mein Name ist Mathias. Ich bin kein typischer Tech-CEO aus dem Silicon Valley. 
              Ich komme aus Schwerin, Mecklenburg-Vorpommern. Ich habe Dachdecker gelernt.
            </p>
            
            <h3>Die Wurzeln</h3>
            <p>
              Auf dem Dach habe ich gelernt, was harte Arbeit bedeutet. Präzision. Verlässlichkeit. 
              Wenn es regnet, muss das Dach dicht sein. Keine Ausreden.
            </p>
            <p>
              Diese Mentalität hat mich mein Leben lang begleitet. Über Hannover führte mein Weg schließlich nach Mallorca, 
              wo ich seit 2023 mit meiner Frau und unserem Hund lebe.
            </p>

            <h3>Warum KI?</h3>
            <p>
              Als Unternehmer im LR-Business stand ich vor einem Problem: Mein Team wuchs, aber mein Tag hatte immer noch nur 24 Stunden. 
              Ich brauchte Unterstützung. Aber gute Mitarbeiter sind schwer zu finden und teuer.
            </p>
            <p>
              Ich habe mir den Markt angesehen. Chatbots, Voice-Bots, Automatisierung. 
              Alles war entweder zu teuer, zu kompliziert oder einfach schlecht. "Spielzeug", wie wir auf dem Bau sagen würden.
            </p>

            <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary rounded-r-xl">
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
              <p className="text-xl font-heading font-bold text-primary italic m-0">
                "Ich wollte keine Software kaufen. Ich wollte eine Lösung. Also habe ich sie selbst gebaut."
              </p>
            </div>

            <h3>Die Geburt von Lina</h3>
            <p>
              Lina war ursprünglich nur für mein eigenes Team gedacht. Sie sollte Fragen beantworten, Termine machen, Partner coachen. 
              Wir haben Monate damit verbracht, sie zu perfektionieren. Wir haben Ultravox v0.7 integriert, weil es das einzige Modell war, 
              das schnell genug für echte Gespräche war.
            </p>
            <p>
              Als andere Unternehmer Lina sahen (und hörten), war die Reaktion immer gleich: 
              <strong>"Wo kann ich das kaufen?"</strong>
            </p>

            <h3>Unsere Mission</h3>
            <p>
              Heute ist Lina Voice mehr als ein Tool. Es ist ein Statement. 
              Wir bringen High-End-KI in den deutschen Mittelstand. Zu Ärzten, Handwerkern, Dienstleistern.
            </p>
            <p>
              Wir machen das nicht mit Venture Capital Milliarden, sondern mit ehrlicher Arbeit und einem fairen Geschäftsmodell. 
              Weil ich weiß, dass am Ende nur eines zählt: <strong>Dass das Dach dicht ist.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
