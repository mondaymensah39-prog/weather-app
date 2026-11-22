
export default function SearchForm({
  city,
  units,
  isLoading,
  onCityChange,
  onUnitsChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="city-input">City</label>
      <input
        id="city-input"
        type="text"
        placeholder="e.g. Accra"
        value={city}
        onChange={(event) => onCityChange(event.target.value)}
      />

      <label htmlFor="units-select">Units</label>
      <select
        id="units-select"
        value={units}
        onChange={(event) => onUnitsChange(event.target.value)}
      >
        <option value="C">Celsius (°C)</option>
        <option value="F">Fahrenheit (°F)</option>
      </select>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}