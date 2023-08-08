import React from "react";
import "../css/Weather.css";

export default function Weather() {
    return (
        <div className="container">
            <label for="weather-choice" className="label">날씨</label>
            <input list="weather-choose" id="weather-choice" name="weather-choice" />

            <datalist id="weather-choice">
                <option value="맑음"></option>
                <option value="흐림"></option>
                <option value="비"></option>
                <option value="눈"></option>
            </datalist>
        </div>
    );
}