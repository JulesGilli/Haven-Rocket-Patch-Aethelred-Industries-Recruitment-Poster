import React from 'react';
import { motion } from 'framer-motion';
interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}
export function RetroButton({
  variant = 'primary',
  children,
  className = '',
  ...props
}: RetroButtonProps) {
  const baseStyles = 'relative px-8 py-3 font-display text-xl tracking-widest uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95';
  const variants = {
    primary: 'bg-orange text-navy hover:bg-orange-accent shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px]',
    secondary: 'bg-navy-light text-cream border-2 border-cream hover:bg-navy hover:text-orange shadow-[4px_4px_0px_0px_rgba(245,230,211,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(245,230,211,0.3)] hover:translate-x-[2px] hover:translate-y-[2px]',
    outline: 'bg-transparent text-cream border-2 border-cream hover:bg-cream hover:text-navy shadow-[4px_4px_0px_0px_rgba(245,230,211,0.1)] hover:shadow-[2px_2px_0px_0px_rgba(245,230,211,0.1)] hover:translate-x-[2px] hover:translate-y-[2px]'
  };
  return <motion.button whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </motion.button>;
}