"use client";

import React from "react";
import { Droplets, CloudRain, Wind, Gauge } from "lucide-react";

export default function WeatherComponent() {
  const stats = [
    { label: "Humidity", value: "72%", Icon: Droplets, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10" },
    { label: "Rain Probability", value: "40%", Icon: CloudRain, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10" },
    { label: "Wind Speed", value: "12 km/h", Icon: Wind, color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-500/10" },
    { label: "AQI", value: "42 • Good", Icon: Gauge, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10" },
  ];

  return (
    <section className="w-full">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map(({ label, value, Icon, color, bg }) => (
          <div
            key={label}
            className="rounded-2xl border border-gray-200 dark:border-[#2D2D35] bg-white dark:bg-[#15161C] p-5"
          >
            <div className="flex items-center justify-between">
              <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center ${color}`}>
                <Icon className="w-7 h-7" />
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white">{value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
