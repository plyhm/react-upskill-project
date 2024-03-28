
import { WeatherSvg } from 'weather-icons-animated';
import { TiThermometer } from "react-icons/ti";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaThermometerFull } from "react-icons/fa";

export const SearchResultComp = ({weatherInfo, weatherMain}) => {
    
    let weatherIcon = "";
      switch (weatherMain) {
        case "Haze":
          weatherIcon = "sunny";
          break;
        case "Clouds":
          weatherIcon = "cloudy";
          break;
        case "Rain":
          weatherIcon = "rainy";
          break;
        case "Snow":
          weatherIcon = "snowy";
          break;
        case "Dust":
          weatherIcon = "fog";
          break;
        case "Drizzle":
          weatherIcon = "rainy";
          break;
        case "Fog":
          weatherIcon = "fog";
          break;
        case "Smoke":
          weatherIcon = "fog";
          break;
        case "Tornado":
          weatherIcon = "windy-variant";
          break;
        default:
          weatherIcon = "sunny";
      };

      
  return (
    <div className="weather-wrapper">
        {weatherInfo ? (
        <>
          <div className="weather-icon">
            <WeatherSvg state={weatherIcon} width={250} height={250}/>
            <p>{weatherInfo.main.temp}°C</p>
            <p>{weatherInfo.weather[0].description}</p>
          </div>
          <div className="weather-box">
            <h2>{weatherInfo.name}</h2>
            <div className="weather-info">
              <div>
              <p>Feels like : {weatherInfo.main.feels_like}°C</p>
              <TiThermometer />
              </div>
              <div>
              <p>Humidity : {weatherInfo.main.humidity}%</p>
              <WiHumidity />
              </div>
              <div>
              <p>Wind Speed : {weatherInfo.wind.speed}m/s</p>
              <LuWind />
              </div>
              <div>
              <p>Temp Min : {weatherInfo.main.temp_min}°C</p>
              <FaThermometerEmpty />
              </div>
              <div>
              <p>Temp Max : {weatherInfo.main.temp_max}°C</p>
              <FaThermometerFull />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No current data</p>
      )}
    </div>
    
  )
}

