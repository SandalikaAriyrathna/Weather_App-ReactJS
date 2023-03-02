import React, { useState } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../../pages/api';
import ForecastB from './forecastb';
import ForecastA from './forecasta';
import Search from '../search/search';
import CurrentWeather from '../current-weather/current-weather';

export default function Forecast() {
  const [readMore, setReadMore] = useState(false);
  const [forecasta, setForecastA] = useState(null);
  const [forecastb, setForecastB] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastA({ city: searchData.label, ...forcastResponse });
        setForecastB({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  const extraContent = <div>{forecastb && <ForecastB data={forecastb} />}</div>;
  const linkName = readMore ? 'View Less << ' : 'View More >> ';

  return (
    <>
      <h2 className="title text-center">Daily Weather Forecast</h2>
      <br />
      <br />
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      <div>
        {forecasta && <ForecastA data={forecasta} />}
        <br />
        <a
          className="read-more-link"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          <h4>{linkName}</h4>
        </a>
      </div>

      <div>{readMore && extraContent}</div>
    </>
  );
}
