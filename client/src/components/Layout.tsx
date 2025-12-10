import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import BotpressChat from "./BotpressChat";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Vision" },
    { href: "/technologie", label: "Technologie" },
    { href: "/konzept", label: "Konzept & Preise" },
    { href: "/process", label: "Ablauf" },
    { href: "/ueber-uns", label: "Über Uns" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      <BotpressChat />
      
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md border-border shadow-sm py-2" 
            : "bg-transparent border-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-sm shadow-lg group-hover:shadow-primary/20 transition-all">
                <span className="font-heading font-bold text-xl">L</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-primary">
                LINA VOICE
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  location === link.href 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                    : "text-muted-foreground"
                )}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+4951116653654" className="text-sm font-bold text-primary hover:underline">
              +49 511 16653654
            </a>
            <Button className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-sm px-6">
              Live Demo Starten
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={cn(
                    "text-lg font-medium py-2 border-b border-border/50",
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Button className="w-full mt-4 bg-primary text-white">
              <Phone className="w-4 h-4 mr-2" />
              Jetzt Anrufen
            </Button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white text-primary flex items-center justify-center rounded-sm">
                  <span className="font-heading font-bold text-lg">L</span>
                </div>
                <span className="font-heading font-bold text-2xl">LINA VOICE</span>
              </div>
              <p className="text-white/70 max-w-md leading-relaxed">
                Die fortschrittlichste KI-Sprachassistentin für den deutschen Mittelstand. 
                Entwickelt für höchste Ansprüche an Datenschutz, Latenz und Zuverlässigkeit.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Unternehmen</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link href="/ueber-uns"><a className="hover:text-white transition-colors">Über Uns</a></Link></li>
                <li><Link href="/konzept"><a className="hover:text-white transition-colors">Karriere</a></Link></li>
                <li><Link href="/kontakt"><a className="hover:text-white transition-colors">Kontakt</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Rechtliches</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link href="/impressum"><a className="hover:text-white transition-colors">Impressum</a></Link></li>
                <li><Link href="/privacy"><a className="hover:text-white transition-colors">Datenschutz</a></Link></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© 2025 Lina Voice AI. Alle Rechte vorbehalten.</p>
            <p>Made with ❤️ in Mallorca & Germany.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
