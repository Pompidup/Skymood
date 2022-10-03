import DomElements       from "./DomElements.js";
import GeoCoordinate     from "../controller/GeoCoordinateController.js";

class AddEventSubmitCityButton {

    addEventOnClick() {
        const domElements   = new DomElements();
        const geoCoordinate = new GeoCoordinate();
        const button        = domElements.getSubmitCityButton();
        const input         = domElements.getCityInput();
        button.addEventListener("click", () => {
            geoCoordinate.getGeoCoordinateForCity();
        });
        input.addEventListener("keypress", function(event) {
            if(event.key === "Enter") {
                geoCoordinate.getGeoCoordinateForCity();
            }
        });

    }
};

export default AddEventSubmitCityButton;