import DomElements       from "../other/DomElements.js";
import SendCoordinate    from '../other/SendCoordinateToForecast.js';
import DynamicBackground from '../other/DynamicBackground.js';

class DisplayCityGeoCoordinate {

    displayGeoCoordinate(arrayGeoCoordinate, countryFlag) {
        const domElements      = new DomElements();
        const errorMessage     = domElements.getBySelector("#errorMessage");
        const target           = domElements.getBySelector('#citySelection');
        errorMessage.innerText = "";
        target.innerHTML       = "";

        const existingUl = target.querySelectorAll("ul");
            if (existingUl.length > 0) {
                existingUl.forEach((ul) => ul.remove());
            }
        const info     = document.createElement('span');
        info.innerText = "selectionnez votre ville";
        info.className = "city-selection__info";
        target.prepend(info);
        
        const list     = document.createElement('ul');
        list.className = "city-selection__list";
        target.append(list);

        for( let i = 0; i < arrayGeoCoordinate.length; i++ ) {
            const geoCoordinate  = arrayGeoCoordinate[i];
            const listItemsEvent = new SendCoordinate();
            // const dynamicBckgrnd = new DynamicBackground();
            const listItems      = document.createElement("li");
            const flag           = document.createElement('img');
            
            listItems.innerHTML  = `${geoCoordinate.getFormattedAddress()}`;
            listItemsEvent.className = "city-selection__item";
            
            flag.src   = `${countryFlag[i]}`;
            flag.alt   = "Drapeau du pays";
            flag.title = "Drapeau du pays";
            flag.className = "city-selection__img";

            listItems.dataset.latitude  = geoCoordinate.getLatitude();
            listItems.dataset.longitude = geoCoordinate.getLongitude();
            listItems.dataset.city      = geoCoordinate.getLocation();
            listItems.dataset.cntycode  = geoCoordinate.getCountryCode();
            listItems.className         = "city-selection__item";
            listItems.addEventListener("click", listItemsEvent.sendCoordinateToForecast);
            // listItems.addEventListener("click", dynamicBckgrnd.createBackgroundPath());

            list.append(listItems);
            listItems.append(flag);
        }
    }
    displayError(error) {
        const domElements          = new DomElements();
        const section              = domElements.getBySelector('#citySelection')
        const spanErrorMessage     = domElements.getBySelector("#errorMessage");
        section.innerHTML          = "";
        spanErrorMessage.innerText = error;
    }
}

export default DisplayCityGeoCoordinate;