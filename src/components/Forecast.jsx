import React from "react";

const Forecast = ({ forecast }) => {
  const { forecastday } = forecast;
  return (
    <div>
      <h1 className="mt-5 border">Forecast</h1>

      {forecastday.map((day, i) => {
        const {
          date,

          day: {
            avgtemp_c,
            avgtemp_f,
            uv,
            maxtemp_c,
            maxtemp_f,
            mintemp_c,
            mintemp_f,
          },
          astro: { sunrise, sunset },
        } = day;
        return (
          <div key={i} className="border p-3 mt-2">
            <div className="row">
              {/* this row used to display the date and sunrise and sunset */}
              <div className="row  p-3 ml-3 border-bottom border-info">
                <div className="col-12 gap-3 col-md-6 col-lg-3 p-2">
                  <h4 className="d-inline-block"> Date : {date}</h4>
                </div>
                <div className="col-12 gap-3 col-md-6 col-lg-3 p-2">
                  <h4 className="d-inline-block"> Sunrise : {sunrise}</h4>
                </div>
                <div className="col-12 gap-3 col-md-6 col-lg-3 p-2">
                  <h4 className="d-inline-block"> Sunset : {sunset}</h4>
                </div>
                <div className="col-12 gap-3 col-md-6 col-lg-3 p-2">
                  <h4 className="d-inline-block">UV : {uv}</h4>
                </div>
              </div>

              {/* this row is used to display the weather condition */}
              <div className="col-12 gap-3 col-md-6 col-lg-3 p-2">
                <img
                  src={day?.day.condition.icon}
                  alt={day?.day.condition.text}
                />
                <h4>{day?.day.condition.text}</h4>
              </div>
              <div className="col-12 gap-3 col-md-6 col-lg-3 p-2">
                <h4>Avg Temp °C: {avgtemp_c} </h4>
                <h4>Avg Temp °F: {avgtemp_f} </h4>
              </div>
              <div className="col-12 gap-3 col-md-6 col-lg-3 p-2">
                <h4>Min Temp °C: {mintemp_c} </h4>
                <h4>Max Temp °C: {maxtemp_c} </h4>
              </div>
              <div className="col-12 gap-3 col-md-6 col-lg-3 p-2">
                <h4>Min Temp °F: {mintemp_f} </h4>
                <h4>Max Temp °F: {maxtemp_f} </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
