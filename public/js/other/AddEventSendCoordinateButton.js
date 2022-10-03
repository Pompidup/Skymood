import DomElements from "./DomElements.js";
import Forecast    from '../controller/ForecastController.js';

class AddEventSendCoordinateButton {

    sendCoordinateToForecast() {
        const domElements = new DomElements();
        const forecast    = new Forecast();
        const button      = domElements.getSendCoordinateButton();
        button.addEventListener("click", () => {
            forecast.getCurrentForecastForCity();
            forecast.getPeriodicalForecastForCity();
        });
    }
}

export default AddEventSendCoordinateButton;