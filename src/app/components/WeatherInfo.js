"use client";

import ReactWeather, { useOpenWeather } from "react-open-weather";
import { use, useState, useEffect } from "react";

const WeatherInfo = ({city}) => {
    const [coords, setCoords] = useState({lat: null, lon: null, working: false});
    console.log("hello")
    useEffect(() => {
        const fetchCoords = async () => {
          try {
            const res = await fetch(
              `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
            );

            const data = await res.json();
            if (data.length > 0) {
              setCoords({
                lat: data[0].lat,
                lon: data[0].lon,
                working: true,
              });
            } else {
              setCoords({
                lat: null,
                lon: null,
                working: false,
              });
            }
          } catch (err) {
            console.error("Failed to fetch location");
          }
        };
    
        fetchCoords();
      }, [city]);
    
    const { data, isLoading, errorMsg } = useOpenWeather({
        key: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        lat: coords.lat,
        lon: coords.lon,
        lang: "en",
        unit: "metric",
    });

    return(
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg w-64">
      {isLoading && <p>Loading...</p>}
      {errorMsg && <p>Error: {errorMsg}</p>}
      {data && (
        <>
          <h3 className="text-lg font-semibold">{city}</h3>
          <p className="text-sm">{data.main.temp}°C</p>
        </>
      )}
    </div>
    )
}

export default WeatherInfo;