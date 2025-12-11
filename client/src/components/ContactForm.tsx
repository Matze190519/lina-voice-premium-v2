import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type?: 'default' | 'consultation';
}

export default function ContactForm({ open, onOpenChange, type = 'default' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/80 backdrop-blur-sm z-[9999]" />
      <DialogContent className="sm:max-w-[500px] bg-card border-white/10 text-white z-[10000] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-white">
            {type === 'consultation' ? 'Beratungsgespräch anfordern' : 'Startpaket anfragen'}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Füllen Sie das Formular aus. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/50">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Anfrage gesendet!</h3>
            <p className="text-gray-400">Vielen Dank für Ihr Interesse. Wir haben Ihre Daten erhalten.</p>
          </div>
        ) : (
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit} 
            className="space-y-4 mt-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">Name *</Label>
                <Input id="name" name="name" required placeholder="Max Mustermann" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-neon-cyan/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-300">Firma (Optional)</Label>
                <Input id="company" name="company" placeholder="Muster GmbH" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-neon-cyan/50" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">E-Mail *</Label>
              <Input id="email" name="email" type="email" required placeholder="max@firma.de" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-neon-cyan/50" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="source" className="text-gray-300">Wie sind Sie auf uns aufmerksam geworden?</Label>
              <Select name="source">
                <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-neon-cyan/50">
                  <SelectValue placeholder="Bitte auswählen" />
                </SelectTrigger>
                <SelectContent className="bg-deep-navy border-white/10 text-white">
                  <SelectItem value="google">Google Suche</SelectItem>
                  <SelectItem value="social">Social Media (LinkedIn, Instagram, etc.)</SelectItem>
                  <SelectItem value="recommendation">Empfehlung</SelectItem>
                  <SelectItem value="advertisement">Werbeanzeige</SelectItem>
                  <SelectItem value="other">Sonstiges</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-300">Nachricht (Optional)</Label>
              <Textarea 
                id="message" 
                name="message"
                placeholder={type === 'consultation' 
                  ? "Ich möchte mehr darüber erfahren, wie Lina in meinem Unternehmen eingesetzt werden kann..." 
                  : "Ich interessiere mich für das LR Profi Business Pro Set..."} 
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-neon-cyan/50 min-h-[80px]"
              />
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox id="terms" name="privacy_consent" value="yes" required className="border-white/30 data-[state=checked]:bg-neon-cyan data-[state=checked]:text-black mt-1" />
              <Label htmlFor="terms" className="text-xs font-normal leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400">
                Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden. Hinweis: Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Weitere Informationen finden Sie in der <a href="/privacy" className="underline text-neon-cyan hover:text-neon-cyan/80">Datenschutzerklärung</a>.
              </Label>
            </div>

            <Button type="submit" className="w-full bg-electric-purple text-white hover:bg-electric-purple/90 font-bold py-6" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                "Jetzt unverbindlich anfragen"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
