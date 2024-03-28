import { useState, useEffect } from "react";

export const About = () => {
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
  
    return (
      <div>
        <h2>My Current Location</h2>
        {position.lat && position.lon ? (
          <p>
            Latitude: {position.lat}, Longitude: {position.lon}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}
