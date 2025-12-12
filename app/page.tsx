import Image from "next/image";
import LoginPage from "./Components/loginPage";
import Forecast from "./Components/forecast";
import TopBar from "./Components/topBar";
import WeatherComponent from "./Components/weatherComponent";
import NextForecast from "./Components/nextForecast";
import LocationList from "./Components/location";
import Chart from "./Components/chart";
export default function Home() {
  return (
    <div>
      <TopBar />
      <main className="flex flex-row gap-5 justify-center mt-16">
        <div className="flex w-[50%] h-auto flex-col gap-5">
          <Forecast />
          <WeatherComponent />
          <Chart />
        </div>
        <div className="w-[20%] h-auto flex flex-col gap-5">
          <NextForecast />
          <LocationList/>
        </div>
      </main>
    </div>
  );
}
