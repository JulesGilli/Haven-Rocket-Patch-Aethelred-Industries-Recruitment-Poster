import React from 'react';
import { motion } from 'framer-motion';
interface VintageBadgeProps {
  text: string;
  className?: string;
  rotate?: number;
}
export function VintageBadge({
  text,
  className = '',
  rotate = -12
}: VintageBadgeProps) {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.8,
    rotate: rotate
  }} whileInView={{
    opacity: 1,
    scale: 1,
    rotate: rotate
  }} viewport={{
    once: true
  }} className={`absolute z-20 border-4 border-orange-accent rounded-full p-4 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-cream/90 backdrop-blur-sm shadow-lg ${className}`} style={{
    transform: `rotate(${rotate}deg)`
  }}>
      <div className="absolute inset-1 border border-orange-accent rounded-full border-dashed opacity-70"></div>
      <div className="text-center">
        <span className="block font-display text-orange-accent text-2xl md:text-3xl leading-none transform -rotate-6">
          {text}
        </span>
        <div className="mt-1 flex justify-center space-x-1 text-orange-accent">
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
    </motion.div>;
}