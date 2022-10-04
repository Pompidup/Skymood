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
    getSectionForCitySelection() {
        return document.querySelector('#citySelection');
    }
    getSectionForCurrentForecast() {
        return document.querySelector("#currentForecast");
    }
    getSectionForPeriodicalForecast() {
        return document.querySelector("#periodicalForecast");
    }
    getSpanForErrorMessage() {
        return document.querySelector("#errorMessage");
    }
}

export default DomElements;