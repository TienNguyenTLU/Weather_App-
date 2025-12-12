"use client";

import React, { useEffect, useState } from "react";
import { ThermometerSun, Search, Sun, Moon, User, ChevronDown } from "lucide-react";

export default function TopBar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 w-full border-b border-gray-200 dark:border-[#2D2D35] bg-white dark:bg-[#15161C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <ThermometerSun className="w-5 h-5" />
          </div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">Weather Dashboard</span>
        </div>

        <div className="flex-1 flex justify-center px-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a city"
              className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 dark:border-[#2D2D35] bg-[#F3F4F6] dark:bg-[#0B0C10] text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-white dark:bg-[#15161C] border border-gray-200 dark:border-[#2D2D35] text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="flex items-center gap-2 px-2 py-1.5 rounded-xl border border-gray-200 dark:border-[#2D2D35] bg-white dark:bg-[#15161C] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2D2D35]">
            <div className="w-8 h-8 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <span className="hidden sm:inline text-sm font-medium">Profile</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
