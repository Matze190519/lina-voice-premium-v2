import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, MapPin, Briefcase, Heart, Cpu, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-background py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Die Geschichte hinter Lina</Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            Vom Dachdecker zum <br />
            <span className="text-muted-foreground">KI-Pionier.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Eine Reise von Schwerin über Hannover nach Mallorca. Und wie aus einem persönlichen Bedürfnis eine Vision für den deutschen Mittelstand wurde.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative sticky top-24">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -rotate-3" />
              <img 
                src="/images/founder-story.png" 
                alt="Gründer Story" 
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover border border-border"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop";
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-border max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary">Mallorca, Spanien</span>
                </div>
                <p className="text-sm text-muted-foreground">Seit 2023 mein Zuhause. Mit Frau, Hund und dem Blick aufs Meer.</p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Meine Wurzeln.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Ich bin in Schwerin geboren und aufgewachsen. Dort habe ich ganz klassisch eine Ausbildung zum Dachdecker gemacht. 
                  Harte Arbeit, bei Wind und Wetter draußen. Das prägt. Man lernt, dass Ergebnisse zählen, nicht schöne Worte.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Später zog es mich nach Hannover, wo ich bis 2023 lebte. In dieser Zeit veränderte sich mein berufliches Leben komplett. 
                  Ich entdeckte den Vertrieb für mich und baute mir ein erfolgreiches Online-Business mit LR Health & Beauty auf.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-4">Das Problem im Business</h3>
                <p className="text-muted-foreground mb-4">
                  Als Führungskraft mit tausenden Partnern im Team kannte ich die täglichen Herausforderungen nur zu gut:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> Ständige Erreichbarkeit wird erwartet</li>
                  <li className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> Wiederkehrende Fragen rauben Zeit</li>
                  <li className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> Mitarbeiter sind teuer und schwer zu finden</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Der Weg zur KI.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  2023 erfüllten meine Frau und ich uns einen Traum: Wir wanderten mit unserem Hund nach Mallorca aus. 
                  Mein Sohn (Jahrgang 1999) ist mittlerweile erwachsen und geht seinen eigenen Weg.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Hier auf der Insel hatte ich die Ruhe, mich tief in ein neues Thema einzuarbeiten: Künstliche Intelligenz. 
                  Ich bin kein studierter Informatiker. Ich bin Autodidakt. Ich habe mir alles selbst beigebracht – mit Hilfe von KI.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ich baute Landingpages, Websites, Funnels und erstellte Social Media Content – alles KI-gestützt. 
                  Dann entwickelte ich den ersten Lina Chatbot für mein LR-Team. Er läuft seit März 2025 stabil und entlastet uns täglich.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Warum Lina Voice?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Ich sah, wie viele Unternehmer – vom Friseur bis zum Handwerker – mit der Digitalisierung kämpfen. 
                  Sie haben keine Zeit, sich monatelang einzuarbeiten wie ich. Sie brauchen eine Lösung, die einfach funktioniert.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Deshalb habe ich Lina Voice gegründet. Nicht als Tech-Startup aus dem Silicon Valley, sondern als Lösung von einem Unternehmer für Unternehmer. 
                  Ehrlich, transparent und bodenständig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary">Wofür wir stehen.</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border shadow-sm hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Bodenständigkeit</h3>
                <p className="text-muted-foreground text-sm">
                  Wir versprechen keine Wunder. Wir liefern Werkzeuge, die funktionieren.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-sm hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <Cpu className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Wir nutzen die beste Technologie (Ultravox v0.7), machen sie aber für jeden nutzbar.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-sm hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Familie & Freiheit</h3>
                <p className="text-muted-foreground text-sm">
                  Technologie soll uns nicht fesseln, sondern frei machen für das, was wirklich zählt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
