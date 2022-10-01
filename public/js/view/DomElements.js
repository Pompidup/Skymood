import DatetimeConverter            from '../utils/DatetimeConverter.js';
import SetCoordinateToButton        from '../other/SetCoordinateToButton.js';
import AddEventSendCoordinateButton from '../other/AddEventSendCoordinateButton.js';

class DomElements {
    
    getSubmitCityButton() {
        return document.querySelector('#confirmCity');
    }
    getSendCoordinateButton() {
        return document.querySelector(".city-selection__button");
    }
    getSendCoordinateButtonLatitude() {
        const button = this.getSendCoordinateButton();
        
        return button.dataset.latitude; 
    }
    getSendCoordinateButtonLongitude() {
        const button = this.getSendCoordinateButton();
        
        return button.dataset.longitude; 
    }
    getCityInput() {
        return document.querySelector('#city');
    }
    getCityInputValue() {
        return document.querySelector("#city").value;
    }
    getDivForCitySelection() {
        return document.querySelector('#citySelection');
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
    // displayCurrentForecast(currentWeather) {
    //     const date              = new DatetimeConverter(currentWeather.getCurrentTimestamp(), currentWeather.getTimezone() ).toLocaleDate();
    //     const time              = new DatetimeConverter(currentWeather.getCurrentTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
    //     const sunrise           = new DatetimeConverter(currentWeather.getSunriseTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
    //     const sunset            = new DatetimeConverter(currentWeather.getSunsetTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
    //     const target            = this.getDivForCurrentForecast();

    //     target.innerHTML        = `
    //                             <h1>${currentWeather.getCityName()} (${currentWeather.getCountryName()})</h1>
    //                             <div>
    //                                 <p>Date et heure locale</p>
    //                                 <ul>
    //                                     <li>${date}</li>
    //                                     <li>Heure locale: ${time}</li>
    //                                 </ul>
    //                             </div>
    //                             <p>
    //                                 ${currentWeather.getTemperature()} °C
    //                             </p>
                                
    //                             <div>
    //                             <img src="http://openweathermap.org/img/wn/${currentWeather.getWeatherIcon()}@2x.png" 
    //                                 alt="${currentWeather.getDescription()}">
    //                             </div>
                                
    //                             <p>
    //                                 ${currentWeather.getDescription()}
    //                             </p>
                                
    //                             <div>
    //                             <ul>
    //                                 <li>
    //                                     Humidité: ${currentWeather.getHumidity()}%
    //                                 </li>
    //                                 <li>
    //                                     Vent: ${currentWeather.getWindSpeed()} km/h
    //                                 </li>
    //                                 <li>
    //                                     Lever: ${sunrise}
    //                                 </li>
    //                                 <li>
    //                                     Coucher: ${sunset}
    //                                 </li>
    //                                 <li>
    //                                     Ressenti: ${currentWeather.getFeelTemperature()} °C
    //                                 </li>
    //                             </ul>
    //                             </div>
    //                         `;
    // }
    // displayPeriodicalForecast(arrayPeriodicalWeather) {
    //     const domElements = new DomElements();
    //     const target = domElements.getDivForPeriodicalForecast();
    //     const h2 = `
    //                 <h2>
    //                     Prochaines heures
    //                 </h2>
    //                 `;
    //     target.innerHTML = h2;
    //     for(let i = 0; i < arrayPeriodicalWeather.length; i++) {
    //         const periodicalWeather = arrayPeriodicalWeather[i];
    //         const time    = new DatetimeConverter(periodicalWeather.getAllTimestamp(), periodicalWeather.getTimezone() ).toLocaleTime();
    //         const article = `
    //                             <article>
    //                                 <ul>
    //                                     <li>
    //                                         ${time}
    //                                     </li>
    //                                     <li>
    //                                         <img src="http://openweathermap.org/img/wn/${periodicalWeather.getWeatherIcons()}.png" 
    //                                             alt="${periodicalWeather.getDescriptions()}">
    //                                     </li>
    //                                     <li>
    //                                         ${periodicalWeather.getTemperatures()} °C
    //                                     </li>
    //                                     <li>
    //                                         ${periodicalWeather.getWindSpeed()} km/h
    //                                     </li>
    //                                 </ul>
    //                             </article>
    //                         `;
    //             target.innerHTML += article;
    //     }
    // }
    displayGeoCoordinate(arrayGeoCoordinate) {
        // const domElements = new DomElements();
        const target     = this.getDivForCitySelection();
        const title      = document.createElement('h1');
        target.innerHTML = "";
        title.innerText  = "Lieux";
        target.prepend(title);

        const existingUl = target.querySelectorAll("ul");
            if (existingUl.length > 0) {
                existingUl.forEach((ul) => ul.remove());
            }
        const list     = document.createElement('ul');
        list.className = "city-selection__inner";
        target.append(list);

        for( let i = 0; i < arrayGeoCoordinate.length; i++ ) {
            const geoCoordinate  = arrayGeoCoordinate[i];
            console.log(geoCoordinate.getCity());
            const listItems      = document.createElement("li");
            const listItemsEvent = new SetCoordinateToButton();
            listItems.innerHTML  = `
                                ${geoCoordinate.getCity()},
                                ${geoCoordinate.getCountry()},
                                ${geoCoordinate.getState()}
            `;
            listItems.dataset.latitude  = geoCoordinate.getLatitude();
            listItems.dataset.longitude = geoCoordinate.getLongitude();
            listItems.className         = "city-selection__items";
            listItems.addEventListener("click", listItemsEvent.setCityCoordinateToButton);
            list.append(listItems);
        }
        const button     = document.createElement("button");
        const buttonEvent = new AddEventSendCoordinateButton();
        button.disabled  = true;
        button.innerText = "Valider";
        button.className += "button city-selection__button";
        button.addEventListener("click", buttonEvent.sendCoordinateToForecast);
        target.append(button);
    }
}

export default DomElements;