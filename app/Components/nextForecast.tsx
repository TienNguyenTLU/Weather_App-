"use client";

import React from "react";
import { Sun, Cloud, CloudRain, CloudLightning, Snowflake } from "lucide-react";

type DayForecast = {
  day: string;
  condition: "sunny" | "cloudy" | "rain" | "storm" | "snow";
  high: number;
  low: number;
};

const iconMap: Record<DayForecast["condition"], React.ComponentType<{ className?: string }>> = {
  sunny: Sun,
  cloudy: Cloud,
  rain: CloudRain,
  storm: CloudLightning,
  snow: Snowflake,
};

const colorMap: Record<DayForecast["condition"], { fg: string; bg: string }> = {
  sunny: { fg: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10" },
  cloudy: { fg: "text-gray-600 dark:text-gray-400", bg: "bg-gray-500/10" },
  rain: { fg: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10" },
  storm: { fg: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10" },
  snow: { fg: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10" },
};

export default function NextForecast() {
  const data: DayForecast[] = [
    { day: "Mon", condition: "sunny", high: 28, low: 19 },
    { day: "Tue", condition: "cloudy", high: 25, low: 18 },
    { day: "Wed", condition: "rain", high: 23, low: 17 },
    { day: "Thu", condition: "storm", high: 22, low: 16 },
    { day: "Fri", condition: "sunny", high: 27, low: 18 },
    { day: "Sat", condition: "cloudy", high: 24, low: 17 },
    { day: "Sun", condition: "snow", high: 5, low: -1 },
  ];

  return (
    <section className="w-full mt-10">
      <div className="rounded-2xl border border-gray-200 dark:border-[#2D2D35] bg-white dark:bg-[#15161C] shadow-sm">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-[#2D2D35]">
          <h3 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">7 days forecast</h3>
        </div>
        <div className="overflow-x-auto overflow-y-auto max-h-[420px]">
          <table className="min-w-full text-left">
            <thead className="bg-[#F3F4F6] dark:bg-[#0B0C10] sticky top-0 z-10">
              <tr>
                <th className="px-4 py-4 text-xs font-medium text-gray-600 dark:text-gray-400">Day</th>
                <th className="px-4 py-4 text-xs font-medium text-gray-600 dark:text-gray-400">Condition</th>
                <th className="px-4 py-4 text-xs font-medium text-gray-600 dark:text-gray-400">Temp</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ day, condition, high, low }) => {
                const Icon = iconMap[condition];
                const { fg } = colorMap[condition];
                return (
                  <tr key={day} className="border-t border-gray-200 dark:border-[#2D2D35] hover:bg-gray-50 dark:hover:bg-[#2D2D35]">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">{day}</td>
                    <td className="px-4 py-4">
                      <div className={`flex items-center gap-2 text-gray-700 dark:text-gray-300 ${fg}`}>
                        <Icon className="w-5 h-5" />
                        <span className="text-sm capitalize">{condition}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900 dark:text-white">{high}°/{low}°</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
