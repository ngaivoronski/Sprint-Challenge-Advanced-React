import React, { useState } from "react";
import axios from 'axios';


export const getData = (link) => {
    // const [returnedData, setReturnedData] = useState([]);

    const getData = (link) => {
        axios
            .get(link)
            .then(response => {
            console.log(response.data);
            return(response.data);
            })
            .catch(error => {
            console.log(error);
            });
    }
    return [getData];
}