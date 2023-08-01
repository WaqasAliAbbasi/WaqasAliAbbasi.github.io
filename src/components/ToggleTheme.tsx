"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const Icon = theme === "light" ? MoonIcon : SunIcon;
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      title="Toggle Theme"
      onClick={toggleTheme}
      type="button"
      className="rounded outline outline-1 p-1 dark:hover:bg-gray-700 hover:bg-gray-100 "
      suppressHydrationWarning
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
};
