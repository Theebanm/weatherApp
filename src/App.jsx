import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import "../node_modules/bootstrap/dist/js/bootstrap";
const App = () => {
  const [city, setCity] = useState("");
  const [weatherSuggested, setWeatherSuggeted] = useState([]);
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCitySelected, setIsCitySelected] = useState(false);
  const autoCompleteURL = `https://api.weatherapi.com/v1/search.json?key=d3053b771cc2486382022403241010&q=${city}`;
  const weatherUrl = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=d3053b771cc2486382022403241010&q=${city}&days=7&api=no&alerts=no`;

  const fetchWeather = async () => {
    //   fetch weather data api response undergone here
    setLoading(true);
    try {
      const res = await axios.get(autoCompleteURL);
      const result = res.data;

      setWeatherSuggeted(result);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
      console.log(error.message);
    }
  };

  const fetchWeatherApi = async (city) => {
    try {
      const response = await axios.get(weatherUrl(city));
      // pass the result to the state
      const resp = await response.data;
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
      setIsCitySelected(true);
    } catch (error) {
      console.log("Weather Api error", error.message);
    }
  };

  useEffect(() => {
    // fetchWeather while the user is typing minimum 3 characters;
    if (city && city.length > 3) {
      fetchWeather();
    }
  }, [city]);

  const handleSelectedCity = (city) => {
    // need to set the setcity after clicking the suggested city
    const cityAndRegion = `${city.name},${city.region}, ${city.country}`; // Combine city name and region
    setCity(cityAndRegion);
    fetchWeatherApi(city.name);
    setIsCitySelected(false);
    setWeatherSuggeted([]);
  };

  return (
    <div className="container-fluid  bgImg p-5 text-center text-white">
      <h2>WEATHER APP</h2>
      <input
        type="text"
        placeholder="Enter City Name"
        name="city"
        value={city}
        className="form-control p-2 w-75 m-auto mt-3 "
        onChange={(e) => {
          setCity(e.target.value), setIsCitySelected(false);
        }}
      />
      {/* Loading State */}
      {loading && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
          alt="loading"
          width="50px"
        />
      )}
      {/* Error State */}
      {isError && (
        <h2 className="mt-5 border border-info p-3">
          Something Went Wrong, Please try again later....
        </h2>
      )}

      {!isCitySelected &&
        weatherSuggested &&
        weatherSuggested.map((data, i) => {
          return (
            <div
              onClick={() => handleSelectedCity(data)}
              style={{ cursor: "pointer" }}
              key={i}
              className="border  mt-2 m-auto p-2 rounded border-info w-75"
            >
              <h3 className="">
                {data.name}, {data.region},{data.country}{" "}
              </h3>
            </div>
          );
        })}

      {current && <Current current={current} location={location} />}
      {forecast && <Forecast forecast={forecast} location={location} />}
    </div>
  );
};

export default App;
