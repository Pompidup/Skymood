import AddEventSubmitCityButton from './other/AddEventSubmitCityButton.js';


document.addEventListener("DOMContentLoaded", function () {

    sessionStorage.clear();
    new AddEventSubmitCityButton().addEventOnClick();
});