import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import data from '../../data/weather.json';
import { Bar } from 'react-chartjs-2';

import { ForecastsDetails } from './ForecastsStyles';

const Forecasts = () => {

    const getDays = () => {
        let days = [];
        forecasts.map(a => {
            if (days.length <= 6) {
                days.push(a.day);
            }
        });
        return days;
    }
    const getHighestTemp = () => {
        let temp = [];
        forecasts.map(a => {
            if (temp.length <= 6) {
                temp.push(a.high);
            }
        });
        return temp;
    }

    const history = useHistory();
    const [forecasts, setForecasts] = useState(data.forecasts);
    const [currentDate, setCurrentDate] = useState(data.current_observation.pubDate);
    const [chartData, setChartData] = useState({
        labels: getDays(),
        datasets: [
            {
                label: 'Highest Temperature',
                data: getHighestTemp(),
                backgroundColor: [
                    '#fff1ac', '#f9bcdd', '#dadada', '#fdc4b6', '#ceefe4', '#d9d9f3', '#78fee0'
                ]
            }
        ]
    });

    useEffect(() => {
        console.log(moment.utc(1546992000).format());
    }, []);

    return (
        <ForecastsDetails>
            <Button type="link" block onClick={() => history.push('/')}>Back to Weather page</Button>
            <Bar
                data={chartData}
                options={{ maintainAspectRatio: true }}
            />
        </ForecastsDetails>
    )
}

export default Forecasts;