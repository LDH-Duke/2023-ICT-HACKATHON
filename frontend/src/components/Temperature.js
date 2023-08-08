import '../css/Temperature.css'

const Temperature = () => {
    return (
        <div className="container">
            <label for="temperature-choice" className="label">온도</label>
            <input list="temperature-choose" id="temperature-choice" name="temperature-choice" />

            <datalist id="temperature-choice">
                <option value="맑음"></option>
                <option value="흐림"></option>
                <option value="비"></option>
                <option value="눈"></option>
            </datalist>
        </div>
    );
}

export default Temperature;