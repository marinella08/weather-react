import React from "react";
import axios from 'axios';
import ReactAnimatedWeather from "react-animated-weather";



export default function Weather(props){
    function handleSubmit(response) {
        alert (`The weather in ${response.data.name} is ${response.data.main.temp} C`);
    }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=eadaf9d564268a9d29e613879a48803e`;
        axios.get(url).then(handleSubmit);
      

    return (
        <h2>
            Hello Weather
            <ReactAnimatedWeather
 icon="CLEAR_DAY"
 color="pink"
 size={51}
 animate={true}
/>
        </h2>


    )
}