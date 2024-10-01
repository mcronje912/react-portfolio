import React, { ReactNode } from "react";

interface GlassmorphicCardProps {
  children: ReactNode;
  isChildCard?: boolean;
  className?: string;
  bgOpacity?: number;
  blurStrength?: number;
  borderOpacity?: number;
  shadowOpacity?: number;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  isChildCard = false,
  className = "",
  bgOpacity = 0.2,
  blurStrength = 5,
  borderOpacity = 0.1,
  shadowOpacity = 0.1,
}) => {
  const baseStyles = `
    backdrop-filter backdrop-blur-[${blurStrength}px]
    bg-white bg-opacity-${bgOpacity * 100}
    dark:bg-gray-800 dark:bg-opacity-${bgOpacity * 100}
    border border-gray-200 border-opacity-${borderOpacity * 100}
    dark:border-gray-700 dark:border-opacity-${borderOpacity * 100}
    shadow-lg shadow-black/[${shadowOpacity}]
    rounded-lg
  `;

  const childStyles = isChildCard
    ? `
    bg-opacity-${(bgOpacity + 0.1) * 100}
    dark:bg-opacity-${(bgOpacity + 0.1) * 100}
    border-opacity-${(borderOpacity + 0.05) * 100}
    dark:border-opacity-${(borderOpacity + 0.05) * 100}
  `
    : "";

  return (
    <div className={`${baseStyles} ${childStyles} ${className}`}>
      {children}
    </div>
  );
};

export default GlassmorphicCard;
