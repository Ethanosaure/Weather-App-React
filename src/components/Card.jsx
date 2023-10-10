import { API } from "../congif/config";
import React, { useEffect, useState } from "react";

function Card({ allLocations }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (allLocations) {
        try {
          const result = await API(allLocations);
          setWeatherData(result);
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchData();
  }, [allLocations]);

  return (
    <div>
      {weatherData && (
        <div>
          <h2>Weather Information for {allLocations}</h2>
          <p>Location: {weatherData.location.name}</p>
          <p>Country: {weatherData.location.country}</p>
          {/* Display other weather information as needed */}
        </div>
      )}
    </div>
  );
}

export default Card;
