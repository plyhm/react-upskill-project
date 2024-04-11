import { useState, useEffect } from 'react';
import { SearchResultComp } from './SearchResultComp';

export const WeatherFetching = ({latitude, longitude}) => {
    
    console.log(latitude)
    console.log(longitude)
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [weatherMain, setWeatherMain] = useState("");
    const id = import.meta.env.VITE_WEATHER_API_KEY; 
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${id}`;
    console.log(weatherApi);
    
    useEffect(() => {
    const fetchWeather = async () => {
            
          
        
        //const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${id}`;
    
        try {
          const newResponse = await fetch(weatherApi);
          const weatherData = await newResponse.json();
    
          if (weatherData) {
            setWeatherInfo(weatherData);
            setWeatherMain(weatherData.weather[0].main);
            console.log(weatherData);
          }
    
        } catch (error) {
          console.error("Error fetching the weather fact:", error);
        }
        // Logging: Output data to console for debugging
        console.log(`lat is:${latitude}`);
        console.log(`lon is:${longitude}`);
      }

      
        fetchWeather();
      }, []);


  return (
    <div>
        <SearchResultComp weatherInfo={weatherInfo} weatherMain={weatherMain}/>
    </div>
  )
}
