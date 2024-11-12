// src/components/PlaceholderImage.tsx
import React from "react";

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 400,
  height = 300,
  text,
  className = "",
}) => {
  return (
    <img
      src={`https://via.placeholder.com/${width}x${height}?text=${text || "Placeholder"}`}
      alt={text || "Placeholder"}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default PlaceholderImage;

// Usage example in your components:
// <PlaceholderImage width={400} height={300} text="Web Development" />