import DomElements       from "../other/DomElements.js";
import DatetimeConverter from '../utils/DatetimeConverter.js';

class DisplayCurrentForecast {

    displayCurrentForecast(currentWeather, city, countryCode, countryFlag) {
        const domElements = new DomElements();
        const date        = new DatetimeConverter(currentWeather.getCurrentTimestamp(), currentWeather.getTimezone() ).toLocaleDate();
        const time        = new DatetimeConverter(currentWeather.getCurrentTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const sunrise     = new DatetimeConverter(currentWeather.getSunriseTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const sunset      = new DatetimeConverter(currentWeather.getSunsetTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const geoCoordTarget     = domElements.getBySelector('#citySelection');
        geoCoordTarget.innerHTML = "";

        const section       = domElements.getBySelector("#currentForecast");
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

        listLocation.className = "current-forecast__list current-forecast__list-location";

        itemCity.innerHTML = `${city}`;
        itemCity.className = "current-forecast__item current-forecast__item-city";
        
        itemCountry.innerHTML = `(${countryCode})`;
        itemCountry.className = "current-forecast__item current-forecast__item-country";
        
        itemFlag.className = "current-forecast__item current-forecast__item-img_flag";
        flag.src = `${countryFlag}`;
        flag.alt = `Drapeau du pays (${countryCode})`;
        flag.title = "Drapeau du pays";
        flag.className = "current-forecast__img_flag";
        
        listDateTime.className = "current-forecast__list current-forecast__list-datetime";
        itemDate.innerHTML = `Date: ${date}`;
        itemDate.className = "current-forecast__item current-forecast__item-date";
        
        itemTime.innerHTML = `Heure locale: ${time}`;
        itemTime.className = "current-forecast__item current-forecast__item-time";
        
        listSkyInfos.className = "current-forecast__list current-forecast__list-skyinfos";
        itemTemp.innerHTML = `${currentWeather.getTemperature()} °C`;
        itemTemp.className = "current-forecast__item current-forecast__item-temp";
        
        itemImg.className = "current-forecast__item current-forecast__item-img_icon";
        img.src = `http://openweathermap.org/img/wn/${currentWeather.getWeatherIcon()}@2x.png`;
        img.alt = `${currentWeather.getDescription()}`;
        img.className = "current-forecast__img_icon";
        
        itemDescr.innerHTML = `${currentWeather.getDescription()}`;
        itemDescr.className = "current-forecast__item current-forecast__item-descr";
        
        listOthers.className = "current-forecast__list current-forecast__list-others";
        itemHumidity.innerHTML = `Humidité: ${currentWeather.getHumidity()}%`;
        itemHumidity.className = "current-forecast__item current-forecast__item-humidity";
        
        itemWind.innerHTML = `Vent: ${currentWeather.getWindSpeed()} km/h`;
        itemWind.className = "current-forecast__item current-forecast__item-wind";
        
        itemSunrise.innerHTML = `Lever: ${sunrise}`;
        itemSunrise.className = "current-forecast__item current-forecast__item-sunrise";
        
        itemSunset.innerHTML = `Coucher: ${sunset}`;
        itemSunset.className = "current-forecast__item current-forecast__item-sunset";
        
        itemFeelTemp.innerHTML = `Ressenti: ${currentWeather.getFeelTemperature()} °C`;
        itemFeelTemp.className = "current-forecast__item current-forecast__item-feelTemp";

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
        const spanErrorMessage     = domElements.getBySelector("#errorMessage");
        spanErrorMessage.innerText = error;
    }
}

export default DisplayCurrentForecast;