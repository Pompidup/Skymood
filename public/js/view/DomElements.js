import DatetimeConverter from '../utils/DatetimeConverter.js';

class DomElements {
    
    getSubmitCityButton() {
        return document.querySelector('#confirmCity');
    }
    getCityInputValue() {
        return document.querySelector("#city").value;
    }
    getDivForCurrentForecast() {
        return document.querySelector("#current_forecast");
    }
    getDivForPeriodicForecast() {
        return document.querySelector("#periodic_forecast");
    }
    showError(error){
        return document.querySelector("#errorMessage").innerHTML = error;
    }
    displayCurrentForecast(currentWeather) {
        console.log(currentWeather);
        const date              = new DatetimeConverter(currentWeather.getCurrentTimestamp(), currentWeather.getTimezone() ).toLocaleDate();
        const time              = new DatetimeConverter(currentWeather.getCurrentTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const sunrise           = new DatetimeConverter(currentWeather.getSunriseTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const sunset            = new DatetimeConverter(currentWeather.getSunsetTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const target            = this.getDivForCurrentForecast();

        target.innerHTML        = `
                                <h1>${currentWeather.getCityName()} (${currentWeather.getCountryName()})</h1>
                                <div>
                                    <p>Date et heure locale</p>
                                    <ul>
                                        <li>${date}</li>
                                        <li>Heure locale: ${time}</li>
                                    </ul>
                                </div>
                                <p>
                                    ${currentWeather.getTemperature()} °C
                                </p>
                                
                                <div>
                                <img src="http://openweathermap.org/img/wn/${currentWeather.getWeatherIcon()}@2x.png" 
                                    alt="${currentWeather.getDescription()}">
                                </div>
                                
                                <p>
                                    ${currentWeather.getDescription()}
                                </p>
                                
                                <div>
                                <ul>
                                    <li>
                                        Humidité: ${currentWeather.getHumidity()}%
                                    </li>
                                    <li>
                                        Vent: ${currentWeather.getWindSpeed()} km/h
                                    </li>
                                    <li>
                                        Lever: ${sunrise}
                                    </li>
                                    <li>
                                        Coucher: ${sunset}
                                    </li>
                                    <li>
                                        Ressenti: ${currentWeather.getFeelTemperature()} °C
                                    </li>
                                </ul>
                                </div>
                            `;
    }
}

export default DomElements;