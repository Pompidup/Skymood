import DomElements from "./DomElements.js";

class SetCoordinateToButton {

    setCityCoordinateToButton(event) {
        const domElements        = new DomElements();
        const latitude           = event.target.dataset.latitude;
        const longitude          = event.target.dataset.longitude;
        const city               = event.target.dataset.city;
        const countryCode        = event.target.dataset.cntycode;
        const button             = domElements.getSendCoordinateButton();
        button.dataset.latitude  = latitude;
        button.dataset.longitude = longitude;
        button.dataset.city      = city;
        button.dataset.cntycode  = countryCode;
        button.disabled          = false;
    }
}
export default SetCoordinateToButton;