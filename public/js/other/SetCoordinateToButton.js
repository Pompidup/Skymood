import DomElements from "./DomElements.js";

class SetCoordinateToButton {

    setCityCoordinateToButton(event) {
        const domElements        = new DomElements();
        const latitude           = event.target.dataset.latitude;
        const longitude          = event.target.dataset.longitude;
        const button             = domElements.getSendCoordinateButton();
        button.dataset.latitude  = latitude;
        button.dataset.longitude = longitude;
        button.disabled          = false;
    }
}
export default SetCoordinateToButton;