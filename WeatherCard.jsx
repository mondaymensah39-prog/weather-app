const weatherLabels = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light drizzle",
  61: "Rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  95: "Thunderstorm",
};

// The API always returns Celsius, so we convert only for display.
function convertTemp(celsius, units) {
  return units === "F" ? (celsius * 9) / 5 + 32 : celsius;
}

export default function WeatherCard({ place, current, units }) {
  const temp = Math.round(convertTemp(current.temperature_2m, units));
  const label = weatherLabels[current.weather_code] ?? "Other weather";

  return (
    <section className="weather-card">
      <h2>
        {place.name}, {place.country}
      </h2>
      <p className="temperature">
        {temp}°{units}
      </p>
      <p>{label}</p>
      <ul>
        <li>Humidity: {current.relative_humidity_2m}%</li>
        <li>Wind: {current.wind_speed_10m} km/h</li>
      </ul>
    </section>
  );
}