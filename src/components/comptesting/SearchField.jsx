import { useState, useEffect } from "react";
import { WeatherFetching } from "./WeatherFetching";


export const SearchField = ({searchResult, setSearchResult}) => {

  const [city, setCity] = useState({ city: "", country: ""});
  const key = import.meta.env.VITE_WEATHER_API_KEY;
  const lonLatApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city.city},${city.country}&limit=5&appid=${key}`;
  const [position, setPosition] = useState({ lat: null, lon: null });
  const [timer, setTimer] = useState(null)
  const [loadWeather, setLoadWeather] = useState(false)
  
  const fetchLonLat = async () => {

    
        try {
          const response = await fetch(lonLatApi);
          const data = await response.json();
          const filteredItems = data.filter(chosenCity => {
            return chosenCity.name.toLowerCase().includes(city.city.toLowerCase())
          });
          console.log(filteredItems);
          setSearchResult(filteredItems);
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
    setCity({
      city: e.target.value
    })

    clearTimeout(timer)

    const newTimer = setTimeout(() => {
      fetchLonLat()
    }, 0)

    setTimer(newTimer)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(position)
    
  };

  return (
    <>
    <div className="search-field">
       {/* <form onSubmit={handleSubmit}> */}
      <input id="searchBox" type="text" placeholder="Enter city name" value={city.city} onChange={handleInput}/>
      {/* <button type="submit">Get Weather</button> */}
      {city.city ? (<ul>
      {
        searchResult.map((results, id) => {
            return <li key={id} onClick={(e) => {
            setCity({city: results.name, country: results.country}); 
            fetchLonLat();
            setLoadWeather(current => !current)
            setPosition({
              lat: results.lat,
              lon: results.lon,
            }); 
            
          } 
        }>{results.name + ", " + results.country}</li>
      }
    )
    }
    </ul>) : (<></>)}
      {/* </form> */}
    </div>
    <div>
      {loadWeather ? (
        <>
      <WeatherFetching latitude = {position.lat} longitude = {position.lon}/>
      </>
      )  : (
        <></>
      )}
    </div>
    </>
  )
}
