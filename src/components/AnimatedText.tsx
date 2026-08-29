import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
        {children}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charCount = 0;
  const totalLength = text.length;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] ${className}`}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const wordStartIndex = charCount;
        charCount += word.length + 1; // plus 1 for space

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {wordChars.map((char, charIndex) => {
              const globalIndex = wordStartIndex + charIndex;
              const start = globalIndex / totalLength;
              const end = Math.min(1, (globalIndex + 1) / totalLength);
              return (
                <Character key={charIndex} progress={scrollYProgress} range={[start, end]}>
                  {char}
                </Character>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
