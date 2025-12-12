"use client";

import React from "react";
import { Sun, Cloud, CloudRain, CloudLightning, Snowflake } from "lucide-react";

type LocationItem = {
  name: string;
  condition: "sunny" | "cloudy" | "rain" | "storm" | "snow";
  temp: number;
};

const iconMap: Record<LocationItem["condition"], React.ComponentType<{ className?: string }>> = {
  sunny: Sun,
  cloudy: Cloud,
  rain: CloudRain,
  storm: CloudLightning,
  snow: Snowflake,
};

const colorMap: Record<LocationItem["condition"], { fg: string; bg: string }> = {
  sunny: { fg: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10" },
  cloudy: { fg: "text-gray-600 dark:text-gray-400", bg: "bg-gray-500/10" },
  rain: { fg: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10" },
  storm: { fg: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10" },
  snow: { fg: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10" },
};

export default function LocationList() {
  const favorites: LocationItem[] = [
    { name: "New York, NY", condition: "cloudy", temp: 25 },
    { name: "San Francisco, CA", condition: "rain", temp: 18 },
    { name: "Miami, FL", condition: "sunny", temp: 30 },
    { name: "Seattle, WA", condition: "storm", temp: 16 },
    { name: "Denver, CO", condition: "snow", temp: -2 },
  ];

  return (
    <section className="w-full">
      <div className="rounded-2xl border border-gray-200 dark:border-[#2D2D35] bg-white dark:bg-[#15161C] divide-y divide-gray-200 dark:divide-[#2D2D35]">
        {favorites.map(({ name, condition, temp }) => {
          const Icon = iconMap[condition];
          const { fg } = colorMap[condition];
          return (
            <div key={name} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#2D2D35]">
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 ${fg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{condition}</div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">{temp}°</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

