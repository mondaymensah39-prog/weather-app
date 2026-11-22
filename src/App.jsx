
import { useState } from "react";
import { getCoordinates, getCurrentWeather } from "./api/weather.js";
import SearchForm from "./components/SearchForm.jsx";
import StatusMessage from "./components/StatusMessage.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

export default function App() {
  const [city, setCity] = useState("");
  const [units, setUnits] = useState("C");
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    const query = city.trim();
    if (!query) return;

    setWeather(null);
    setStatus({ type: "loading", message: "Loading weather..." });

    try {
      const place = await getCoordinates(query);
      const current = await getCurrentWeather(place.latitude, place.longitude);

      setWeather({ place, current });
      setStatus({ type: "idle", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  }

  return (
    <main>
      <h1>Weather-App</h1>

      <SearchForm
        city={city}
        units={units}
        isLoading={status.type === "loading"}
        onCityChange={setCity}
        onUnitsChange={setUnits}
        onSubmit={handleSubmit}
      />

      <StatusMessage type={status.type} message={status.message} />

      {weather && (
        <WeatherCard
          place={weather.place}
          current={weather.current}
          units={units}
        />
      )}
    </main>
  );
}