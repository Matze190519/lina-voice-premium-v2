import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Zap, Cpu, Lock, Activity, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Technology() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="bg-white/10 text-white border-white/20 mb-6 hover:bg-white/20">Ultravox v0.7 Core</Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Technologie, die <br />
            <span className="text-secondary">versteht.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Lina basiert auf dem weltweit fortschrittlichsten Speech-Language-Model (SLM). 
            Keine Transkription. Keine Verzögerung. Reines Verstehen.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="font-heading text-2xl">Echtzeit-Latenz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Mit unter <strong>300ms Reaktionszeit</strong> ist Lina schneller als ein menschlicher Gedanke. 
                  Herkömmliche Systeme (Bland AI, Retell) benötigen oft 800ms+, was zu unangenehmen Pausen führt.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <Cpu className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="font-heading text-2xl">Multimodal Native</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Lina "hört" Audio direkt, statt es erst in Text umzuwandeln. 
                  Dadurch erkennt sie <strong>Emotionen, Zögern und Unterbrechungen</strong> sofort und reagiert natürlich.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <Lock className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="font-heading text-2xl">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  DSGVO-konforme Verarbeitung. Ihre Daten bleiben Ihre Daten. 
                  Kein Training an Ihren Kundengesprächen ohne explizite Zustimmung.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Der Marktvergleich</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Warum wir uns für Ultravox v0.7 entschieden haben – und warum Sie das auch tun sollten.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="p-6 font-heading font-bold text-primary">Feature</th>
                    <th className="p-6 font-heading font-bold text-primary bg-primary/10 border-x border-primary/10 w-1/4">LINA VOICE</th>
                    <th className="p-6 font-heading font-bold text-muted-foreground w-1/5">Bland AI</th>
                    <th className="p-6 font-heading font-bold text-muted-foreground w-1/5">Vapi AI</th>
                    <th className="p-6 font-heading font-bold text-muted-foreground w-1/5">Retell AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-6 font-medium">KI-Architektur</td>
                    <td className="p-6 font-bold text-primary bg-primary/5 border-x border-primary/10">End-to-End SLM</td>
                    <td className="p-6 text-muted-foreground">STT + LLM + TTS</td>
                    <td className="p-6 text-muted-foreground">Wrapper (GPT-4)</td>
                    <td className="p-6 text-muted-foreground">Wrapper</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Latenzzeit (Durchschnitt)</td>
                    <td className="p-6 font-bold text-primary bg-primary/5 border-x border-primary/10">~300 ms ⚡</td>
                    <td className="p-6 text-muted-foreground">~800 ms</td>
                    <td className="p-6 text-muted-foreground">~500 ms</td>
                    <td className="p-6 text-muted-foreground">~600 ms</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Unterbrechbarkeit</td>
                    <td className="p-6 font-bold text-primary bg-primary/5 border-x border-primary/10">Sofort (Native)</td>
                    <td className="p-6 text-muted-foreground">Verzögert</td>
                    <td className="p-6 text-muted-foreground">Gut</td>
                    <td className="p-6 text-muted-foreground">Mittel</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Emotionale Intelligenz</td>
                    <td className="p-6 font-bold text-primary bg-primary/5 border-x border-primary/10">Sehr Hoch</td>
                    <td className="p-6 text-muted-foreground">Niedrig</td>
                    <td className="p-6 text-muted-foreground">Mittel</td>
                    <td className="p-6 text-muted-foreground">Mittel</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Setup-Aufwand</td>
                    <td className="p-6 font-bold text-primary bg-primary/5 border-x border-primary/10">Full Service</td>
                    <td className="p-6 text-muted-foreground">Self-Service</td>
                    <td className="p-6 text-muted-foreground">Developer</td>
                    <td className="p-6 text-muted-foreground">Developer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mt-24">
        <div className="bg-primary rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Erleben Sie den Unterschied.</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Technische Daten sind gut. Ein echtes Gespräch ist besser. 
              Rufen Sie Lina jetzt an und versuchen Sie, sie aus dem Konzept zu bringen.
            </p>
            <a href="tel:+4951116653654" className="inline-flex items-center justify-center bg-white text-primary font-bold py-4 px-8 rounded-sm hover:bg-secondary transition-colors shadow-lg">
              <Phone className="w-5 h-5 mr-2" />
              +49 511 16653654 anrufen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
