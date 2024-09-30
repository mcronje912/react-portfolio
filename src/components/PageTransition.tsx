import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  const location = useLocation();

  useEffect(() => {
    setTransitionStage("fadeOut");
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage("fadeIn");
    }, 300); // Match this with your CSS transition duration

    return () => clearTimeout(timer);
  }, [location, children]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        transitionStage === "fadeIn" ? "opacity-100" : "opacity-0"
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
