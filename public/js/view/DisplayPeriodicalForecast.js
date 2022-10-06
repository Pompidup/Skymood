import DomElements       from "../other/DomElements.js";
import DatetimeConverter from '../utils/DatetimeConverter.js';

class DisplayPeriodicalForecast {
    
    displayPeriodicalForecast(arrayPeriodicalWeather) {
        const domElements = new DomElements();
        const section     = domElements.getSectionForPeriodicalForecast();
        const title       = document.createElement('h2');
        section.innerHTML = "";
        title.innerText   = "Prochaines heures";
        section.prepend(title);
        
        for(let i = 0; i < arrayPeriodicalWeather.length; i++) {
            const periodicalWeather = arrayPeriodicalWeather[i];
            const time     = new DatetimeConverter(periodicalWeather.getAllTimestamp(), periodicalWeather.getTimezone() ).toLocaleTime();
            const list     = document.createElement('ul');
            const listTime = document.createElement('li');
            const listImg  = document.createElement('li');
            const listTemp = document.createElement('li');
            const listWind = document.createElement('li');
            const img      = document.createElement('img');
            
            listTime.innerHTML = `
                                    ${time}
                                `;
            img.src = `
                        http://openweathermap.org/img/wn/${periodicalWeather.getWeatherIcons()}.png
                    `;
            img.alt = `
                        ${periodicalWeather.getDescriptions()}
                    `;
            listTemp.innerHTML = `
                                    ${periodicalWeather.getTemperatures()} °C
                                `;
            listWind.innerHTML = `
                                    ${periodicalWeather.getWindSpeed()} km/h
                                `;
            section.append(list);
            list.append(listTime);
            listImg.append(img);
            list.append(listImg);
            list.append(listTemp);
            list.append(listWind);
        }
    }
    displayError(error) {
        const domElements          = new DomElements();
        const spanErrorMessage     = domElements.getSpanForErrorMessage();
        spanErrorMessage.innerText = error;
    }
}

export default DisplayPeriodicalForecast;