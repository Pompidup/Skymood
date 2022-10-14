import DomElements           from "../other/DomElements.js";
import SetCoordinateToButton from '../other/SetCoordinateToButton.js';
import SendCoordinate        from '../other/SendCoordinateToForecast.js';

class DisplayCityGeoCoordinate {

    displayGeoCoordinate(arrayGeoCoordinate) {
        const domElements      = new DomElements();
        const errorMessage     = domElements.getBySelector("#errorMessage");
        const target           = domElements.getBySelector('#citySelection');
        errorMessage.innerText = "";
        target.innerHTML       = "";

        const existingUl = target.querySelectorAll("ul");
            if (existingUl.length > 0) {
                existingUl.forEach((ul) => ul.remove());
            }
        
        const list     = document.createElement('ul');
        list.className = "city-selection__inner";
        target.append(list);

        for( let i = 0; i < arrayGeoCoordinate.length; i++ ) {
            const geoCoordinate  = arrayGeoCoordinate[i];
            const listItems      = document.createElement("li");
            const listItemsEvent = new SetCoordinateToButton();
            listItems.innerHTML  = `
                                ${geoCoordinate.getFormattedAddress()}
                            `;
            listItems.dataset.latitude  = geoCoordinate.getLatitude();
            listItems.dataset.longitude = geoCoordinate.getLongitude();
            listItems.dataset.city      = geoCoordinate.getLocation();
            listItems.dataset.cntycode  = geoCoordinate.getCountryCode();
            listItems.className         = "city-selection__items";
            listItems.addEventListener("click", listItemsEvent.setCityCoordinateToButton);
            list.append(listItems);
        }
        const button      = document.createElement("button");
        const buttonEvent = new SendCoordinate();
        button.disabled   = true;
        button.innerText  = "Valider";
        button.className += "button city-selection__button";
        button.addEventListener("click", buttonEvent.sendCoordinateToForecast);
        target.append(button);
    }
    displayError(error) {
        const domElements          = new DomElements();
        const section              = domElements.getBySelector('#citySelection')
        const spanErrorMessage     = domElements.getBySelector("#errorMessage");
        section.innerHTML = "";
        spanErrorMessage.innerText = error;
    }
}

export default DisplayCityGeoCoordinate;