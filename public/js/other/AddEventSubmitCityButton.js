import DomElements from "../view/DomElements.js";
import Forecast    from '../controller/ForecastController.js';

class AddEventSubmitCityButton {

    addEventOnClick() {
        const domElements = new DomElements();
        const forecast    = new Forecast();
        const button      = domElements.getSubmitCityButton();
        button.addEventListener("click", () => {
            forecast.getCurrentForecastForCity();
            // userInterface.displayPeriodicWeather();
        });
    }
};

export default AddEventSubmitCityButton;