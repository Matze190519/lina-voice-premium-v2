import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-purple to-neon-cyan flex items-center justify-center">
                <span className="text-xl font-bold text-deep-navy">L</span>
              </div>
              <span className="text-xl font-playfair font-bold">LINA VOICE</span>
            </div>
            <p className="text-gray-400 text-sm">
              Die KI-Sprachassistentin, die für dich ans Telefon geht.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-neon-cyan">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm cursor-pointer">Vision</Link></li>
              <li><Link href="/technologie" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm cursor-pointer">Technologie</Link></li>
              <li><Link href="/preise" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm cursor-pointer">Preise</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-neon-cyan">Rechtliches</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">Impressum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">Datenschutz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">AGB</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-neon-cyan">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-neon-cyan" />
                <a href="tel:+4951116653654" className="hover:text-neon-cyan transition-colors">
                  +49 511 16653654
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <a href="mailto:info@linavoice.de" className="hover:text-neon-cyan transition-colors">
                  info@linavoice.de
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                <span>Deutschland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Lina Voice. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
