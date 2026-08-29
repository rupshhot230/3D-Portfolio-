import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ onClick, className = '', href }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
  };

  const buttonContent = (
    <span className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer inline-flex items-center justify-center ${className}`}>
      Live Project
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={handleClick} type="button">
      {buttonContent}
    </button>
  );
};
