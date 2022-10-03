import DomElements       from "../other/DomElements.js";
import DatetimeConverter from '../utils/DatetimeConverter.js';

class DisplayPeriodicalForecast {
    
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
    displayError(error) {
        const domElements          = new DomElements();
        const spanErrorMessage     = domElements.getSpanForErrorMessage();
        spanErrorMessage.innerText = error;
    }
}

export default DisplayPeriodicalForecast;