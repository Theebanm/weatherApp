import React from "react";

const Forecast = ({ forecast, location }) => {
  const { forecastday } = forecast;

  return (
    <div>
      <h3 className="pt-3 border rounded m-2 p-2">
        Current Weather Of " {location.name},{location.region},
        {location.country}"{" "}
      </h3>
      {forecastday.map((day, i) => {
        const {
          date,
          hour,
          day: {
            condition: { text, icon },
            maxtemp_c,
            maxtemp_f,
          },
          astro: { sunrise, sunset },
        } = day;

        return (
          <div
            key={i}
            className="accordion accordion-flush "
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${i}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <div className="d-flex flex-column flex-md-row align-items-center bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                      {" "}
                      <h6>{date}</h6>
                    </div>
                    <div className="p-3 bd-highlight">
                      <img src={icon} alt={text} />
                      <h6> {text}</h6>
                    </div>
                    <div className="p-3 bd-highlight">
                      <h6>Max Temp in C: {maxtemp_c}</h6>
                    </div>
                    <div className="p-3 bd-highlight">
                      <h6>Max Temp in F: {maxtemp_f}</h6>
                    </div>
                    <div className="p-3 bd-highlight">
                      <h6>Sunrise : {sunrise}</h6>
                      <h6>Sunset : {sunset}</h6>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={`${i}`}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {hour &&
                    hour.map((hour, i) => {
                      const {
                        temp_c,
                        time,
                        condition: { text, icon },
                      } = hour;
                      return (
                        <>
                          <h6>
                            Time : {time} / Temp : {temp_c}
                          </h6>

                          <div className="progress ">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${temp_c}%` }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
