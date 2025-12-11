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
    { href: "/partners", label: "Partner" },
    { href: "/konzept", label: "Konzept & Preise" },
    { href: "/autokonzept", label: "Autokonzept" },
    { href: "/lr-partner", label: "LR Partner" },
    { href: "/process", label: "Ablauf" },
    { href: "/ueber-uns", label: "Über Uns" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0e18] text-white font-sans selection:bg-[#00f0ff]/20 selection:text-[#00f0ff]">
      <BotpressChat />
      
      {/* Navigation - Fixed Header */}
      <nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent h-24 flex items-center",
          isScrolled 
            ? "bg-[#0b0e18]/95 backdrop-blur-md border-white/10 shadow-lg" 
            : "bg-[#0b0e18]/80 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-3 group z-50 relative">
            <div className="w-10 h-10 bg-transparent border border-[#00f0ff] text-[#00f0ff] flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all">
              <span className="font-playfair font-bold text-xl">L</span>
            </div>
            <span className="font-playfair font-bold text-xl tracking-tight text-white group-hover:text-[#00f0ff] transition-colors">
              LINA VOICE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-[#00f0ff] relative py-1",
                  location === link.href 
                    ? "text-[#00f0ff] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#00f0ff] after:shadow-[0_0_10px_#00f0ff]" 
                    : "text-gray-400"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+4951116653654" className="text-sm font-bold text-[#00f0ff] hover:text-white transition-colors">
              +49 511 16653654
            </a>
            <Button className="bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/50 hover:bg-[#00f0ff]/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] rounded-full px-6 transition-all">
              Live Demo Starten
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-white hover:text-[#00f0ff] transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0b0e18] z-40 flex flex-col pt-28 px-6 animate-in slide-in-from-top-5 duration-300 overflow-y-auto">
            <div className="flex flex-col gap-6 pb-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "text-2xl font-playfair font-bold py-2 border-b border-white/5",
                    location === link.href ? "text-[#00f0ff]" : "text-gray-400"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-8 bg-[#00f0ff] text-black hover:bg-[#00f0ff]/90 font-bold h-12 text-lg rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Jetzt Anrufen
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content - Significantly increased padding-top */}
      <main className="flex-grow pt-32 md:pt-40">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#05070c] text-white py-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-[#00f0ff] text-[#00f0ff] flex items-center justify-center rounded-full">
                  <span className="font-playfair font-bold text-lg">L</span>
                </div>
                <span className="font-playfair font-bold text-2xl">LINA VOICE</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Die fortschrittlichste KI-Sprachassistentin für den deutschen Mittelstand. 
                Entwickelt für höchste Ansprüche an Datenschutz, Latenz und Zuverlässigkeit.
              </p>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6 text-white">Unternehmen</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/ueber-uns" className="hover:text-[#00f0ff] transition-colors">Über Uns</Link></li>
                <li><Link href="/konzept" className="hover:text-[#00f0ff] transition-colors">Karriere</Link></li>
                <li><Link href="/kontakt" className="hover:text-[#00f0ff] transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-lg mb-6 text-white">Rechtliches</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/impressum" className="hover:text-[#00f0ff] transition-colors">Impressum</Link></li>
                <li><Link href="/privacy" className="hover:text-[#00f0ff] transition-colors">Datenschutz</Link></li>
                <li><a href="#" className="hover:text-[#00f0ff] transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2025 Lina Voice AI. Alle Rechte vorbehalten.</p>
            <p>Made with ❤️ in Mallorca & Germany.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
