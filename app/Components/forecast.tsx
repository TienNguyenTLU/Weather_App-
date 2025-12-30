"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  Snowflake, 
  CloudLightning, 
  CloudDrizzle,
  CloudFog,
  Moon
} from "lucide-react";

const fetchForecast = async (city: string) => {
  try {
    const res = await axios.get("/api/weather", {
      params: { city: city }
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    return null;
  }
};

export default function Forecast() {
  const [forecast, setForecast] = useState<any>(null);

  useEffect(() => {
    fetchForecast("New York").then((data) => {
      if (data) setForecast(data);
    });
  }, []);

  const getWeatherIcon = (weatherDesc: string) => {
    if (!weatherDesc) return <Sun className="w-16 h-16 text-yellow-500" />;
    
    const desc = weatherDesc.toLowerCase();
    if (desc.includes("sunny") || desc.includes("clear")) {
      return <Sun className="w-16 h-16 text-yellow-500" />;
    } else if (desc.includes("partly cloudy")) {
      return <Cloud className="w-16 h-16 text-gray-400" />;
    } else if (desc.includes("cloud")) {
      return <Cloud className="w-16 h-16 text-gray-500" />;
    } else if (desc.includes("rain") || desc.includes("shower")) {
      return <CloudRain className="w-16 h-16 text-blue-500" />;
    } else if (desc.includes("drizzle")) {
      return <CloudDrizzle className="w-16 h-16 text-blue-400" />;
    } else if (desc.includes("thunder") || desc.includes("storm")) {
      return <CloudLightning className="w-16 h-16 text-purple-500" />;
    } else if (desc.includes("snow") || desc.includes("ice") || desc.includes("blizzard")) {
      return <Snowflake className="w-16 h-16 text-cyan-500" />;
    } else if (desc.includes("fog") || desc.includes("mist") || desc.includes("haze")) {
      return <CloudFog className="w-16 h-16 text-gray-400" />;
    }
    
    return <Sun className="w-16 h-16 text-yellow-500" />;
  };

  if (!forecast) {
    return (
      <div className="mt-10 w-full h-48 flex items-center justify-center rounded-3xl border border-gray-200 dark:border-[#2D2D35] bg-white dark:bg-[#15161C]">
        <div className="text-gray-400">Loading weather data...</div>
      </div>
    );
  }

  const currentDesc = forecast?.current?.weather_descriptions?.[0] || "";

  return (
    <div className="mt-10 w-full h-auto flex flex-row rounded-3xl items-center justify-between border border-gray-200 dark:border-[#2D2D35] p-8 bg-white dark:bg-[#15161C] shadow-sm">
      <div className="flex flex-col justify-between gap-4">
        <h3 className="text-2xl font-bold text-[#333333] dark:text-white">
          {forecast?.location?.name}, {forecast?.location?.country}
        </h3>
        <h1 className="text-6xl font-bold text-[#333333] dark:text-white">
          {forecast?.current?.temperature}°C
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <p className="text-lg font-bold text-[#333333] dark:text-gray-200 capitalize">
            {currentDesc}
          </p>
          <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
            Feels like {forecast?.current?.feelslike}°C
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        {getWeatherIcon(currentDesc)}
      </div>
    </div>
  );
}
