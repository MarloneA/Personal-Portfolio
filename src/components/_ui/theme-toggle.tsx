"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"; // Assuming you are using next-themes
import { Button } from "./button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-4">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
          theme === "dark" ? "dark:-rotate-90 dark:scale-0" : ""
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
          theme === "dark" ? "dark:rotate-0 dark:scale-100" : ""
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
