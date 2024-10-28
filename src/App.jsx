import React from "react";
import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    async function fetchCity() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=39ba6a79284b4aad8a723508242810&query=${city}`
        );
        if (!response.ok) {
          throw new Error("City not found or invalid API key");
        }
        const data = await response.json();
        setCityData(data);
        setLoading(false);
      } catch {
        alert("Failed to fetch weather data");
      }
    }
    fetchCity();
  };

  return (
    <div className="weather-container">
      <h1>XWeatherApp</h1>
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            value={city}
            placeholder="Enter City Name"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {loading ? (
        <p className="loading">Loading data...</p>
      ) : (
        <div className="data-container">
          {cityData.current && (
            <Card title="Temperature" temp={cityData.current.temp_c} />
          )}
          {cityData.current && (
            <Card title="Humidity" temp={cityData.current.humidity} />
          )}
          {cityData.current && (
            <Card title="Condition" temp={cityData.current.condition.text} />
          )}
          {cityData.current && (
            <Card title="Wind Speed" temp={cityData.current.wind_kph} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
