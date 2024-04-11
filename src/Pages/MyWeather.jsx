import { useState, useEffect } from "react";
import { WeatherFetching } from "../components/comptesting/WeatherFetching";

export const MyWeather = () => {
    const [position, setPosition] = useState({ lat: null, lon: null });
  
    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setPosition({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        });
      } else {
        console.log("Geolocation is not available in your browser.");
      }
    }, []);
    console.log(setPosition)
  
    return (
      <div  className="container">
        <h2>My Weather</h2>
        {position.lat && position.lon ? (
          <>
            <WeatherFetching latitude = {position.lat} longitude = {position.lon}/>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}

