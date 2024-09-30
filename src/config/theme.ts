// src/hooks/useTheme.ts
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if there's a saved theme in local storage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;

      localStorage.setItem("theme", newTheme ? "dark" : "light");

      return newTheme;
    });
  };

  return { isDark, toggleTheme };
};
