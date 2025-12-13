import React from 'react';
import { cn } from '@/lib/utils';

interface ShimmerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShimmerCard = ({ children, className, ...props }: ShimmerCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden group",
        className
      )}
      {...props}
    >
      {/* 1. The Moving Border Light (Brighter) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Increased opacity from 0.5 to 0.8 for the light beam */}
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(56,189,248,0.9)_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Mobile: Always visible, increased opacity */}
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(56,189,248,0.7)_360deg)] animate-[spin_5s_linear_infinite] opacity-100 md:hidden" />
      </div>

      {/* 2. Inner Mask */}
      <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-2xl z-0" />

      {/* 3. Surface Sheen (Brighter) */}
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none overflow-hidden rounded-2xl">
        <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
};
