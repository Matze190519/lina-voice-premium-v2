import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Explicitly exclude onDrag to avoid type conflicts with framer-motion
interface NeonButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag'> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function NeonButton({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: NeonButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <button
        className={cn(
          "relative px-8 py-4 rounded-full font-bold transition-all duration-300",
          variant === 'primary' 
            ? "bg-transparent border-2 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] hover:bg-[#00f0ff]/10"
            : "bg-transparent border-2 border-[#c49bff] text-[#c49bff] shadow-[0_0_20px_rgba(196,155,255,0.3)] hover:shadow-[0_0_40px_rgba(196,155,255,0.6)] hover:bg-[#c49bff]/10",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
}

export default NeonButton;
