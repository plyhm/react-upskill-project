import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/DebounceHook";
import { WeatherSvg } from "weather-icons-animated";
import { Home } from "../../Pages/Home";
import { SearchResultComp } from "./SearchResultComp";


export const SearchField = ({setSearchResult}) => {

  
  const [city, setCity] = useState("")
  const [weatherInfo, setWeatherInfo] = useState(null);
  const id = import.meta.env.VITE_WEATHER_API_KEY; 
  const [weatherMain, setWeatherMain] = useState("");

  const lonLatApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${id}`;
  
  
      const fetchLonLat = async () => {
        try {
          const response = await fetch(lonLatApi);
          const data = await response.json();
          const filteredItems = data.filter(chosenCity => {
            return chosenCity.name.toLowerCase().includes(city.toLowerCase())
          });
          console.log(filteredItems);
          setSearchResult(filteredItems);

          if (filteredItems) {
            let lat = data[0].lat;
            let lon = data[0].lon;
            const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${id}`;

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
            console.log(`lat is:${lat}`);
            console.log(`lon is:${lon}`);
          }
        } catch (error) {
          // Error Handling: Log any errors during fetch to the console
          console.error("Error fetching the lat/lon fact:", error);
        }
      }

  useEffect(() => {
    fetchLonLat();
  }, []);

  const handleInput = (e) => {
    e.preventDefault()
    setCity(e.target.value)
    fetchLonLat()
  }

  //useDebounce(city, 500, SearchField);
  

  

  return (
    <div className="search-field">
      <input type="text" placeholder="Enter city name" value={city} onChange={handleInput}/>
      <SearchResultComp weatherInfo={weatherInfo} weatherMain={weatherMain}/>
    </div>
  )
}
