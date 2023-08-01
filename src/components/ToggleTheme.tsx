"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleTheme = () =>
    setTheme(currentTheme === "light" ? "dark" : "light");
  const Icon = currentTheme === "light" ? MoonIcon : SunIcon;

  return (
    <button
      title="Toggle Theme"
      onClick={toggleTheme}
      type="button"
      className="rounded outline outline-1 p-1 dark:hover:bg-gray-700 hover:bg-gray-100"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
};
