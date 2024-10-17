
# Weather App

This is a simple weather application built with React that provides current weather conditions and a 7-day forecast for a selected city. It integrates with the WeatherAPI to fetch real-time weather data, includes autocomplete suggestions for city searches, and displays loading and error states.

## Features

- Search weather information by city name.
- Autocomplete suggestions based on the city name typed.
- Displays current weather conditions, including temperature, humidity, wind speed, etc.
- Shows a 7-day weather forecast for the selected city.
- Responsive design for optimal viewing on different devices.

## Demo

![Weather App Screenshot]()

## Technologies Used

- **React**: Frontend framework for building the UI.
- **Axios**: For making HTTP requests to the WeatherAPI.
- **WeatherAPI**: Provides real-time weather data.
- **CSS**: Styling of the application.

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) and npm (Node Package Manager) installed on your machine.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd weather-app
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Get an API key from [WeatherAPI](https://www.weatherapi.com/)**
   
   - Sign up at WeatherAPI and get your API key.
   - Replace the `YOUR_API_KEY_HERE` placeholder in the app with your API key.

5. **Run the app**:
   ```bash
   npm start
   ```

6. **Access the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. Type the name of a city into the search input field.
2. As you type, city suggestions will appear below the input field.
3. Select a city from the suggestions to view the current weather and 7-day forecast.

## Project Structure

```
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Current.js          # Displays current weather details
│   │   └── Forecast.js         # Displays the 7-day weather forecast
│   ├── App.js                  # Main application component
│   ├── App.css                 # Custom styles
│   └── index.js                # React DOM entry point
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

## API Endpoints

This app uses the following endpoints from WeatherAPI:

1. **Autocomplete for cities**:
   ```
   https://api.weatherapi.com/v1/search.json?key=YOUR_API_KEY&q=city_name
   ```

2. **Weather forecast for a city**:
   ```
   https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=city_name&days=7
   ```

## Future Improvements

- Add unit tests to improve code reliability.
- Add support for displaying weather alerts.
- Add user preferences for temperature units (Celsius/Fahrenheit).
- Improve the UI for mobile devices.

## Contributing

Feel free to contribute by forking this repository and submitting a pull request. All contributions are welcome!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

### Screenshot Example

For the screenshot, you can replace the `path_to_screenshot.png` with a relevant image showing how the app looks when running.


Let me know if you'd like to add anything specific to this!
