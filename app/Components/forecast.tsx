'use client'
import { CloudIcon, CloudRainIcon, SnowflakeIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";
import {useState} from "react";
const fetchForecast = async (city: string) => {
  const res = await axios.get("/api/weather", {
        params: { city: city }
      });
  console.log(res.data);
  return res.data;
};

export default function Forecast() {
  const [forecast, setForecast] = useState<any>(null);
  const [icon, setIcon] = useState<any>(null);
  useEffect(() => {
  fetchForecast("New York").then((data) => setForecast(data));
  
  const setWeatherIcon = (weatherDesc:string) => {
  switch (weatherDesc) {
    case "Clear":
      setIcon(<SunIcon className="w-12 h-12" />);
      break;
    case "Cloudy":
      setIcon(<CloudIcon className="w-12 h-12" />);
      break;
    case "Rain":
      setIcon(<CloudRainIcon className="w-12 h-12" />);
      break;
    case "Snow":
      setIcon(<SnowflakeIcon className="w-12 h-12" />);
      break;
    case "Sunny":
      setIcon(<SunIcon className="w-12 h-12" />);
      break;
    default:
      setIcon(<SunIcon className="w-12 h-12" />);
      break;
  }
  useEffect(() => {
    const weather = forecast?.current?.weather_descriptions[0];
    setWeatherIcon(weather);
  }, [forecast]);
}
}, []);
  return (
    <div className="mt-10 w-full h-auto flex flex-row rounded-3xl items-center justify-between border border-gray-200">
      <div className="flex flex-col justify-between p-30 gap-4 rounded-3xl">
        <h3 className="text-2xl font-bold text-[#333333]">{forecast?.location?.name}, {forecast?.location?.country}</h3>
        <h1 className="text-6xl font-bold text-[#333333]">{forecast?.current?.temperature}°C</h1>
        <div className="flex flex-row justify-between ">
          <p className="text-lg font-bold text-[#333333]">{forecast?.current?.weather_descriptions[0]}</p>
          <p className="text-lg font-bold text-[#333333]">Feels like {forecast?.current?.feelslike}°C </p>
        </div>
      </div>
      <span className="w-12 h-12">
        {icon}
      </span>
    </div>
  );
}
