import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  glowColor?: string;
  children: React.ReactNode;
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", glowColor = "var(--primary)", children, ...props }, ref) => {
    
    const baseStyles = "relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden group";
    
    const variants = {
      // Enforce text-black/text-white explicitly to avoid theme variable issues
      primary: "bg-primary text-black hover:shadow-[0_0_30px_rgba(196,155,255,0.6)] border border-primary/50",
      secondary: "bg-secondary text-black hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] border border-secondary/50",
      outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(196,155,255,0.4)]"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], className)}
        {...(props as HTMLMotionProps<"button">)}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      </motion.button>
    );
  }
);

NeonButton.displayName = "NeonButton";
