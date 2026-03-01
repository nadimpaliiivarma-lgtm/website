import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  icon,
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const variants = {
    primary: "bg-[#0F3D3E] text-white hover:bg-[#0A2A2B] shadow-lg shadow-[#0F3D3E]/20 hover:shadow-[#0F3D3E]/40 hover:-translate-y-0.5",
    secondary: "bg-[#C6A969] text-white hover:bg-[#B09355] shadow-lg shadow-[#C6A969]/20 hover:shadow-[#C6A969]/40 hover:-translate-y-0.5",
    outline: "border-2 border-[#0F3D3E] text-[#0F3D3E] hover:bg-[#0F3D3E] hover:text-white",
    ghost: "text-[#0F3D3E] hover:bg-[#0F3D3E]/5",
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && <span className="w-4 h-4">{icon}</span>}
    </motion.button>
  );
}
