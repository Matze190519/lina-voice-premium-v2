import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const activities = [
  { name: 'Max M.', city: 'München', action: 'hat Lina aktiviert' },
  { name: 'Sarah K.', city: 'Berlin', action: 'automatisiert 50+ Anrufe/Tag' },
  { name: 'Firma Schmidt GmbH', city: 'Hamburg', action: 'spart 8h/Woche' },
  { name: 'Tom L.', city: 'Frankfurt', action: 'hat einen Demo-Termin gebucht' },
  { name: 'Lisa W.', city: 'Köln', action: 'nutzt Lina seit 3 Monaten' },
  { name: 'Unternehmer aus Stuttgart', city: '', action: 'hat gerade die Warteliste beigetreten' }
];

export default function LiveTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ersten Ticker nach 3 Sekunden anzeigen
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Ticker alle 8 Sekunden wechseln
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // Ticker nach 5 Sekunden wieder ausblenden
  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isVisible]);

  const activity = activities[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-24 left-4 md:left-6 z-[9999]"
        >
          <div className="glass-panel backdrop-blur-xl border border-neon-cyan/30 rounded-xl p-4 shadow-2xl max-w-xs">
            <div className="flex items-start gap-3">
              {/* Icon mit Pulse-Animation */}
              <div className="relative">
                <TrendingUp className="w-6 h-6 text-neon-cyan" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-gray-200 leading-relaxed">
                  <span className="font-bold text-neon-cyan">{activity.name}</span>
                  {activity.city && (
                    <span className="text-gray-400"> aus {activity.city}</span>
                  )}
                  <br />
                  <span className="text-gray-300">{activity.action}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1 font-jetbrains">
                  vor {Math.floor(Math.random() * 5) + 1} Minuten
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
