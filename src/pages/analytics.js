import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import './analytics.css'

const Analytics = () => {
    const [maxBase, setMaxBase] = useState("")
    const [maxToppings, setMaxToppings] = useState([])
    const [maxSweetness, setMaxSweetness] = useState("")
    const [maxTemp, setMaxTemp] = useState([])

    const getMaxBase = () => {
        axios
        .get(`bubble-tea-analytics-lb-38452084.us-east-2.elb.amazonaws.com/analytics/base`)
        .then((response) => {
            // console.log("orders:", response.data);
            console.log('max_base:', response.data[0]['base'])
            setMaxBase(response.data[0]['base']);
        })
        .catch((error) => {
            console.log('Unable to retrieve most popular base:', error);
        });
    };

    const getMaxToppings = () => {
        axios
        .get(`bubble-tea-analytics-lb-38452084.us-east-2.elb.amazonaws.com/analytics/toppings`)
        .then((response) => {
            // console.log("orders:", response.data);
            console.log('max_toppings:', response.data[0]['toppings'])
            setMaxToppings(response.data[0]['toppings']);
        })
        .catch((error) => {
            console.log('Unable to retrieve most popular toppings:', error);
        });
    };

    const getMaxSweetness = () => {
        axios
        .get(`bubble-tea-analytics-lb-38452084.us-east-2.elb.amazonaws.com/analytics/sweetness`)
        .then((response) => {
            // console.log("orders:", response.data);
            console.log('max_sweetness:', response.data[0]['sweetness'])
            setMaxSweetness(response.data[0]['sweetness']);
        })
        .catch((error) => {
            console.log('Unable to retrieve most popular sugar level:', error);
        });
    };

    const getMaxTemp = () => {
        axios
        .get(`bubble-tea-analytics-lb-38452084.us-east-2.elb.amazonaws.com/analytics/temp`)
        .then((response) => {
            // console.log("orders:", response.data);
            console.log('max_temp:', response.data[0]['temp'])
            setMaxTemp(response.data[0]['temp']);
        })
        .catch((error) => {
            console.log('Unable to retrieve most popular temp:', error);
        });
    };
    
    useEffect(() => {
        getMaxBase();
        getMaxToppings();
        getMaxSweetness();
        getMaxTemp();
    }, []);


    return (
        <div className="boba-trends__container">
            <h1>
                Boba Trends
            </h1>
            <ul className="most-popular__list">
                <li>
                    Most popular base: <span>{maxBase}</span>
                </li>
                <li>
                    Most popular topping(s): <span>{maxToppings}</span>
                </li>
                <li>
                    Most popular sugar level: <span>{maxSweetness}</span>
                </li>
                <li>
                    Most popular ice level: <span>{maxTemp}</span>
                </li>
            </ul>
        </div>
    );
};

export default Analytics;