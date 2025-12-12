import { SunIcon } from "lucide-react";

export default function Forecast() {
  return (
    <div className="mt-10 w-full h-auto flex flex-row rounded-3xl items-center justify-between border border-gray-200">
      <div className="flex flex-col justify-between p-30 gap-4 rounded-3xl">
        <h3 className="text-2xl font-bold text-[#333333]">New York, Ny</h3>
        <h1 className="text-6xl font-bold text-[#333333]">25°C</h1>
        <div className="flex flex-row justify-between ">
          <p className="text-lg font-bold text-[#333333]">Partly Cloudy</p>
          <p className="text-lg font-bold text-[#333333]">Feels like 24°C </p>
        </div>
      </div>
      <SunIcon className="w-12 h-12 mr-30" />
    </div>
  );
}
