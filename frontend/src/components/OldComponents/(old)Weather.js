import React from "react";
import WeatherContainer from "./WeatherContainer";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="container">
            <div className="text">날씨</div>
            <p>맑음 흐림 비 눈</p>
            <WeatherContainer />
        </div>
    );
}