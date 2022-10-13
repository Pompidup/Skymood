import DomElements       from "../other/DomElements.js";
import DatetimeConverter from '../utils/DatetimeConverter.js';

class DisplayCurrentForecast {

    displayCurrentForecast(currentWeather, city, countryCode, countryFlag) {
        const domElements = new DomElements();
        const date        = new DatetimeConverter(currentWeather.getCurrentTimestamp(), currentWeather.getTimezone() ).toLocaleDate();
        const time        = new DatetimeConverter(currentWeather.getCurrentTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const sunrise     = new DatetimeConverter(currentWeather.getSunriseTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const sunset      = new DatetimeConverter(currentWeather.getSunsetTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const geoCoordTarget     = domElements.getSectionForCitySelection();
        geoCoordTarget.innerHTML = "";

        const section       = domElements.getSectionForCurrentForecast();
        const listLocation  = document.createElement('ul');
        const itemCity      = document.createElement('li');
        const itemCountry   = document.createElement('li');
        const itemFlag      = document.createElement('li');
        const flag          = document.createElement('img');
        const listDateTime  = document.createElement('ul');
        const itemDate      = document.createElement('li');
        const itemTime      = document.createElement('li');
        const listSkyInfos  = document.createElement('ul');
        const itemTemp      = document.createElement('li');
        const itemImg       = document.createElement('li');
        const img           = document.createElement('img');
        const itemDescr     = document.createElement('li');
        const listOthers    = document.createElement('ul');
        const itemHumidity  = document.createElement('li');
        const itemWind      = document.createElement('li');
        const itemSunrise   = document.createElement('li');
        const itemSunset    = document.createElement('li');
        const itemFeelTemp  = document.createElement('li');

        section.innerHTML = "";

        itemCity.innerHTML = `
                            ${city}
        `;
        itemCountry.innerHTML = `
                            ${countryCode}
        `;
        flag.src = `
                ${countryFlag}
        `;
        flag.alt = `
                Drapeau du pays (${countryCode})
        `;
        itemDate.innerHTML = `
                            Date: ${date}
        `;
        itemTime.innerHTML = `
                            Heure locale: ${time}
        `;
        itemTemp.innerHTML = `
                            ${currentWeather.getTemperature()} °C
        `;
        img.src = `
                    http://openweathermap.org/img/wn/${currentWeather.getWeatherIcon()}@2x.png
        `;
        img.alt = `
                    ${currentWeather.getDescription()}
        `;
        itemDescr.innerHTML = `
                            ${currentWeather.getDescription()}
        `;
        itemHumidity.innerHTML = `
                                Humidité: ${currentWeather.getHumidity()}%
        `;
        itemWind.innerHTML = `
                                Vent: ${currentWeather.getWindSpeed()} km/h
        `;
        itemSunrise.innerHTML = `
                                Lever: ${sunrise}
        `;
        itemSunset.innerHTML = `
                                Coucher: ${sunset}
        `;
        itemFeelTemp.innerHTML = `
                                Ressenti: ${currentWeather.getFeelTemperature()} °C
        `;

    section.append(listLocation);
    listLocation.append(itemCity);
    listLocation.append(itemCountry);
    itemFlag.append(flag);
    listLocation.append(itemFlag);
    section.append(listDateTime);
    listDateTime.append(itemDate);
    listDateTime.append(itemTime);
    section.append(listSkyInfos);
    listSkyInfos.append(itemTemp);
    itemImg.append(img);
    listSkyInfos.append(itemImg);
    listSkyInfos.append(itemDescr);
    section.append(listOthers);
    listOthers.append();
    listOthers.append();
    listOthers.append();
    listOthers.append();
    listOthers.append();

    }
    displayError(error) {
        const domElements          = new DomElements();
        const spanErrorMessage     = domElements.getSpanForErrorMessage();
        spanErrorMessage.innerText = error;
    }
}

export default DisplayCurrentForecast;