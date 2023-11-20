import React, { useState } from "react";
import axios from "axios";
import {
  WeatherInfo,
  Inputcity,
  CityWeather,
  CityP,
  TemperatureP,
  WeatherP,
} from "./weather.style";

export default function Weather() {
  const [cityname, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "d8f5b470a30b1d00285d386d762b8820";
  const weatherAPIUrl = "https://api.openweathermap.org/data/2.5/weather";

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await axios.get(
          `${weatherAPIUrl}?q=${cityname}&appid=${API_KEY}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("날씨 데이터를 불러오는 중 에러 발생:", error);
      }
    }
  };

  return (
    <WeatherInfo>
      <h1>Weather </h1>
      <Inputcity
        type="text"
        value={cityname}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="도시를 입력하세요"
        className="input-field"
      />

      {weatherData && weatherData.main && (
        <CityWeather>
          <CityP>{weatherData.name}</CityP>
          <TemperatureP>
            {Math.round((weatherData.main.temp - 273.15) * 10) / 10}°C
          </TemperatureP>
          <WeatherP>{weatherData.weather[0].description}</WeatherP>
        </CityWeather>
      )}
    </WeatherInfo>
  );
}
