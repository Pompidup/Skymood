import DatetimeConverter from '../utils/DatetimeConverter.js';

class DomElements {
    
    getSubmitCityButton() {
        return document.querySelector('#confirmCity');
    }
    getCityInput() {
        return document.querySelector('#city');
    }
    getCityInputValue() {
        return document.querySelector("#city").value;
    }
    getDivForCurrentForecast() {
        return document.querySelector("#current_forecast");
    }
    getDivForPeriodicalForecast() {
        return document.querySelector("#periodical_forecast");
    }
    showError(error){
        return document.querySelector("#errorMessage").innerHTML = error;
    }
    displayCurrentForecast(currentWeather) {
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
    displayPeriodicalForecast(arrayPeriodicalWeather) {
        const domElements = new DomElements();
        const target = domElements.getDivForPeriodicalForecast();
        const h2 = `
                    <h2>
                        Prochaines heures
                    </h2>
                    `;
        target.innerHTML = h2;
        for(let i = 0; i < arrayPeriodicalWeather.length; i++) {
            const periodicalWeather = arrayPeriodicalWeather[i];
            const time    = new DatetimeConverter(periodicalWeather.getAllTimestamp(), periodicalWeather.getTimezone() ).toLocaleTime();
            console.log(periodicalWeather);
            const article = `
                                <article>
                                    <ul>
                                        <li>
                                            ${time}
                                        </li>
                                        <li>
                                            <img src="http://openweathermap.org/img/wn/${periodicalWeather.getWeatherIcons()}.png" 
                                                alt="${periodicalWeather.getDescriptions()}">
                                        </li>
                                        <li>
                                            ${periodicalWeather.getTemperatures()} °C
                                        </li>
                                        <li>
                                            ${periodicalWeather.getWindSpeed()} km/h
                                        </li>
                                    </ul>
                                </article>
                            `;
                target.innerHTML += article;
            }
        }
    }

export default DomElements;