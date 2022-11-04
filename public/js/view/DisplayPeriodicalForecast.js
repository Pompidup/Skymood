import DomElements       from "../other/DomElements.js";
import DatetimeConverter from '../utils/DatetimeConverter.js';

class DisplayPeriodicalForecast {
    
    displayPeriodicalForecast(arrayPeriodicalWeather) {
        const domElements = new DomElements();
        const section     = domElements.getBySelector("#periodicalForecast");
        // const title       = document.createElement('h2');
        section.innerHTML = "";
        // title.innerText   = "Prochaines heures";
        // section.prepend(title);
        
        for(let i = 0; i < arrayPeriodicalWeather.length; i++) {
            const periodicalWeather = arrayPeriodicalWeather[i];
            const time     = new DatetimeConverter(periodicalWeather.getAllTimestamp(), periodicalWeather.getTimezone() ).toLocaleTime();
            const list     = document.createElement('ul');
            const itemTime = document.createElement('li');
            const itemImg  = document.createElement('li');
            const itemTemp = document.createElement('li');
            const itemWind = document.createElement('li');
            const img      = document.createElement('img');
            
            list.className = "periodical-forecast__list";

            itemTime.innerHTML = `${time}`;
            itemTime.className = "periodical-forecast__item periodical-forecast__item-time";
            
            itemImg.className = "periodical-forecast__item periodical-forecast__item-img";
            img.src = `
                        http://openweathermap.org/img/wn/${periodicalWeather.getWeatherIcons()}.png
                    `;
            img.alt = `${periodicalWeather.getDescriptions()}`;
            img.className = "periodical-forecast__img";
            
            itemTemp.innerHTML = `${periodicalWeather.getTemperatures()} °C`;
            itemTemp.className = "periodical-forecast__item periodical-forecast__item-temp";
            itemWind.innerHTML = `${periodicalWeather.getWindSpeed()} km/h`;
            itemWind.className = "periodical-forecast__item periodical-forecast__item-wind";
            
            section.append(list);
            list.append(itemTime);
            itemImg.append(img);
            list.append(itemImg);
            list.append(itemTemp);
            list.append(itemWind);
        }
    }
    displayError(error) {
        const domElements          = new DomElements();
        const spanErrorMessage     = domElements.getBySelector("#errorMessage");
        spanErrorMessage.innerText = error;
    }
}

export default DisplayPeriodicalForecast;