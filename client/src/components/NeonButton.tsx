import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface NeonButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onTransitionEnd'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function NeonButton({ 
  children, 
  variant = 'primary',
  className = '',
  ...props 
}: NeonButtonProps) {
  const baseClasses = "relative px-8 py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden";
  
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-electric-purple to-neon-cyan text-deep-navy"
    : "bg-transparent border-2 border-neon-cyan text-neon-cyan";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...(props as HTMLMotionProps<"button">)}
    >
      {/* Shimmer Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
            style={{ 
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s linear infinite'
            }} 
      />
      
      {/* Glow Effect */}
      <span className="absolute inset-0 blur-xl bg-neon-cyan/30 group-hover:bg-neon-cyan/50 transition-all duration-300" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
