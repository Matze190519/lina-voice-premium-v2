import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Clock, Gift } from 'lucide-react';
import NeonButton from './NeonButton';

export default function ExitIntent() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check localStorage ob Popup schon gezeigt wurde
    const exitShown = localStorage.getItem('exitIntentShown');
    if (exitShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Nur triggern wenn Maus nach oben aus dem Viewport geht
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        localStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Delay um false-positives zu vermeiden
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="glass-card border-2 border-electric-purple/50 p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-neon-cyan transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Sparkles className="w-16 h-16 text-neon-cyan" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border-2 border-electric-purple/30 rounded-full"
                />
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-bold text-center mb-4">
              ⚡ Warte noch kurz!
            </h2>

            <p className="text-gray-300 text-center mb-6 text-lg">
              Sichere dir jetzt <span className="text-neon-cyan font-bold">30 Tage kostenlosen Zugang</span> zu Lina und erlebe, wie dein Business auf Autopilot läuft.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 bg-deep-navy/50 p-3 rounded-lg">
                <Clock className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                <span className="text-sm text-gray-300">Keine Kreditkarte erforderlich</span>
              </div>
              <div className="flex items-center gap-3 bg-deep-navy/50 p-3 rounded-lg">
                <Gift className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                <span className="text-sm text-gray-300">Über 1.500€ Warenwert inklusive</span>
              </div>
              <div className="flex items-center gap-3 bg-deep-navy/50 p-3 rounded-lg">
                <Sparkles className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                <span className="text-sm text-gray-300">Jederzeit kündbar</span>
              </div>
            </div>

            {/* CTA */}
            <NeonButton 
              className="w-full text-lg py-4"
              onClick={() => {
                window.open('tel:+4951116653654', '_self');
                handleClose();
              }}
            >
              Jetzt 30 Tage kostenlos starten
            </NeonButton>

            <p className="text-center text-xs text-gray-500 mt-4">
              Nur noch 7 Plätze im Pilotprojekt verfügbar
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
