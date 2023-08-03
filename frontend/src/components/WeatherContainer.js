import React from "react";

export default function WeatherContainer() {
    return (
        <div>
            <label for="weather-choice">날씨를 입력하세요 : </label>
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