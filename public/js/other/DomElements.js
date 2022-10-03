class DomElements {
    
    getSubmitCityButton() {
        return document.querySelector('#confirmCity');
    }
    getSendCoordinateButton() {
        return document.querySelector(".city-selection__button");
    }
    getSendCoordinateButtonLatitude() {
        const button = this.getSendCoordinateButton();
        
        return button.dataset.latitude; 
    }
    getSendCoordinateButtonLongitude() {
        const button = this.getSendCoordinateButton();
        
        return button.dataset.longitude; 
    }
    getCityInput() {
        return document.querySelector('#city');
    }
    getCityInputValue() {
        return document.querySelector("#city").value;
    }
    getDivForCitySelection() {
        return document.querySelector('#citySelection');
    }
    getDivForCurrentForecast() {
        return document.querySelector("#current_forecast");
    }
    getDivForPeriodicalForecast() {
        return document.querySelector("#periodical_forecast");
    }
    getSpanForErrorMessage() {
        return document.querySelector("#errorMessage");
    }
}

export default DomElements;