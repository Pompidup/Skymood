import DomElements                  from "../view/DomElements.js";
import SetCoordinateToButton        from '../other/SetCoordinateToButton.js';
import AddEventSendCoordinateButton from '../other/AddEventSendCoordinateButton.js';

class DisplayCityGeoCoordinate {

    displayGeoCoordinate(arrayGeoCoordinate) {
        const domElements = new DomElements();
        const errorMessage = domElements.getSpanForErrorMessage();
        errorMessage.innerText = "";
        const target      = domElements.getDivForCitySelection();
        const title       = document.createElement('h1');
        target.innerHTML  = "";
        title.innerText   = "Lieux";
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

export default DisplayCityGeoCoordinate;