"use client";

import { useTheme } from "next-themes";
import { Toggle } from "./ui/toggle";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      className="w-12 h-12 rounded-xl group hidden md:flex"
      pressed={theme === "light"}
      onPressedChange={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      variant="outline"
    >
      <Sun className="w-4 h-4 group-data-[state=off]:hidden" />
      <Moon className="w-4 h-4 group-data-[state=on]:hidden" />
    </Toggle>
  );
};
