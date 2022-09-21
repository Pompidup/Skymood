import DomElements from "../view/DomElements.js";
import Forecast    from '../controller/ForecastController.js';

class AddEventSubmitCityButton {

    addEventOnClick() {
        const domElements = new DomElements();
        const forecast    = new Forecast();
        const button      = domElements.getSubmitCityButton();
        const input       = domElements.getCityInput();
        button.addEventListener("click", () => {
            forecast.getCurrentForecastForCity();
            forecast.getPeriodicalForecastForCity();
        });
        input.addEventListener("keypress", function(event) {
            if(event.key === "Enter") {
                console.log("Touche entrée");
                forecast.getCurrentForecastForCity();
                forecast.getPeriodicalForecastForCity();
            }
        });
    }
};

export default AddEventSubmitCityButton;