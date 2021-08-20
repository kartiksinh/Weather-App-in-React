import React, { useEffect, useState } from 'react';
import { Select, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { WeatherDetails, AppLabel, WeatherLogo, Temperature, Condition, LocationCity, H2, H5, Info } from './LocationStyles';
import data from '../../data/weather.json';

const Location = () => {
    const { Option } = Select;
    const history = useHistory();

    const [current, setCurrent] = useState(data.current_observation);
    const [location, setLocation] = useState(data.location);
    const [forecasts, setForecasts] = useState(data.forecasts);
    const [params, setparams] = useState("Wind");


    function handleChange(value) {
        setparams(value);
    }

    useEffect(() => {
        console.log(data);
    }, []);


    return (
        <WeatherDetails>
            <AppLabel>Weather App</AppLabel>

            <Condition>
                <Temperature>
                    <span>{current.condition.temperature} C</span> | {current.condition.text}
                </Temperature>
                <WeatherLogo src="/icons/rainy.svg" />
            </Condition>

            <LocationCity>{location.city}, {location.country}</LocationCity>

            <H2>Weather Info</H2>

            <Select defaultValue="wind" style={{ width: 120 }} onChange={handleChange}>
                <Option value="Wind">Wind</Option>
                <Option value="Humidity">Humidity</Option>
                <Option value="Pressure">Pressure</Option>
                <Option value="Sunrise/SunsetTime">Sunrise/SunsetTime</Option>
            </Select>

            <H5>{params}</H5>
            {
                params === "Wind" ?
                    <Info>
                        <span>Wind speed: {current.wind.speed}</span>
                        <span>Wind direction: {current.wind.direction}</span>
                    </Info> :
                    params === "Humidity" ?
                        <Info>
                            <span>Atmospheric Humidity: {current.atmosphere.humidity}</span>
                        </Info> :
                        params === "Pressure" ?
                            <Info>
                                <span>Atmospheric Pressure: {current.atmosphere.pressure}</span>
                            </Info> :
                            params === "Sunrise/SunsetTime" ?
                                <Info>
                                    <span>Sunrise: {current.astronomy.sunrise}</span>
                                    <span>Sunset: {current.astronomy.sunset}</span>
                                </Info> : null
            }

            <Button type="link" block onClick={() => history.push('/forecasts')}>
                Forecasts Info
            </Button>

        </WeatherDetails>
    )
}

export default Location;