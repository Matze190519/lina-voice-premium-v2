import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import NeonButton from './NeonButton';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Vision', path: '/' },
    { name: 'Technologie', path: '/technologie' },
    { name: 'Preise', path: '/preise' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-purple to-neon-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-deep-navy">L</span>
            </div>
            <span className="text-2xl font-playfair font-bold">LINA VOICE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-300 hover:text-neon-cyan transition-colors font-medium cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+4951116653654" className="text-gray-300 hover:text-neon-cyan transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +49 511 16653654
            </a>
            <NeonButton onClick={() => window.location.href = 'tel:+4951116653654'}>
              Live Demo Starten
            </NeonButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-neon-cyan transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-neon-cyan transition-colors py-2 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:+4951116653654" className="text-gray-300 hover:text-neon-cyan transition-colors py-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +49 511 16653654
              </a>
              <NeonButton className="w-full" onClick={() => window.location.href = 'tel:+4951116653654'}>
                Live Demo Starten
              </NeonButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
