import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";

const Analytics = () => {
    const [maxBase, setMaxBase] = useState("")

    const getMaxBase = () => {
        axios
        .get(`http://127.0.0.1:5000/analytics`)
        .then((response) => {
            // console.log("orders:", response.data);
            console.log('max_base:', response.data[0]['base'])
            setMaxBase(response.data[0]['base']);
        })
        .catch((error) => {
            console.log('Error:', error);
            alert('Unable to retrieve orders.');
        });
    };
    
    useEffect(() => {
        getMaxBase();
    }, []);


    return (
        <div>
            <h1>
                Boba Trends
            </h1>
            <ul>
                <li>
                    Most popular base: {maxBase}
                </li>
            </ul>
        </div>
    );
};

export default Analytics;