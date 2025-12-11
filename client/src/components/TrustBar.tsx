import { Shield, Lock, Award, Star, Zap } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="relative z-10 py-4 border-y border-electric-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* DSGVO */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Shield className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
            <span className="text-sm font-jetbrains text-gray-300 group-hover:text-neon-cyan transition-colors">
              DSGVO-konform
            </span>
          </div>

          {/* TÜV */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Award className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
            <span className="text-sm font-jetbrains text-gray-300 group-hover:text-neon-cyan transition-colors">
              TÜV-zertifiziert
            </span>
          </div>

          {/* ISO */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Lock className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
            <span className="text-sm font-jetbrains text-gray-300 group-hover:text-neon-cyan transition-colors">
              ISO 27001
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-neon-cyan fill-neon-cyan" />
              ))}
            </div>
            <span className="text-sm font-jetbrains text-gray-300 group-hover:text-neon-cyan transition-colors">
              4.9/5 (127 Bewertungen)
            </span>
          </div>

          {/* Ultravox Badge */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Zap className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
            <span className="text-sm font-jetbrains text-gray-300 group-hover:text-neon-cyan transition-colors">
              Powered by Ultravox v0.7
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
