import '../css/WeatherAndTempContainer.css';
import Weather from './Weather';
import Temperature from './Temperature';

const WeatherAndTempContainer = () => {
    return (
        <div className="Container">
            <Weather />
            <Temperature />
        </div>
    );
}

export default WeatherAndTempContainer;