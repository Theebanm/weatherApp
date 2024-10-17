import React from "react";

const Current = ({ current, location }) => {
  return (
    <div className="container border rounded mt-3">
      {/* Display The city name on top of weather */}
      <h3 className="pt-3 border rounded m-2 p-2">
        Current Weather Of " {location.name},{location.region},
        {location.country}"{" "}
      </h3>
      {/* Today condition */}
      <div className="row p-3">
        {/* col 1 */}
        <div className="col-12 gap-3 col-md-6 col-lg-3">
          <div className="p-2">
            <img src={current.condition.icon} alt="weather-icon" />
            <h3>{current.condition.text}</h3>
          </div>
        </div>
        {/* col 2 */}

        <div className="col-12 gap-3 col-md-6 col-lg-3">
          <div className="p-2">
            <h3>Temprature in °C</h3>
            <h1>{current.temp_c}</h1>
          </div>
        </div>
        {/* col 3 */}

        <div className="col-12 gap-3 col-md-6 col-lg-3">
          <div className="p-2">
            <h3>Temprature in °F</h3>
            <h1>{current.temp_f}</h1>
          </div>
        </div>
        {/* col 4 */}

        <div className="col-12 gap-3 col-md-6 col-lg-3">
          <div className="p-2 ">
            <h3>Humidity</h3>
            <h1>{current.humidity}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
