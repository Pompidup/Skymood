import WeatherApi                from '../repository/WeatherApi.js';
import DomElements               from '../other/DomElements.js';
import CurrentWeather            from '../model/CurrentWeather.js';
import PeriodicalWeather         from '../model/PeriodicalWeather.js';
import DisplayCurrentForecast    from '../view/DisplayCurrentForecast.js';
import DisplayPeriodicalForecast from '../view/DisplayPeriodicalForecast.js';
import CreatePathForFlag         from '../other/CreatePathForFlag.js';
import DynamicBackground         from '../other/DynamicBackground.js';

class Forecast {

    async getCurrentForecastForCity() {
        const api             = new WeatherApi();
        const domElements     = new DomElements();
        const displayForecast = new DisplayCurrentForecast();
        const flagPath        = new CreatePathForFlag();
        const dynamicBckgrnd  = new DynamicBackground();
        
        const userSelection       = domElements.getBySelector(".city-selection__item");
        const latitude            = domElements.getDataAttribute(userSelection, "latitude");
        const longitude           = domElements.getDataAttribute(userSelection, "longitude");
        const city                = domElements.getDataAttribute(userSelection, "city");
        const countryCode         = domElements.getDataAttribute(userSelection, "cntycode").toUpperCase();
        const countryFlag         = flagPath.createPath([countryCode]);
        const response            = await api.getCurrentWeatherForecastByCity(latitude, longitude);
        
        if(response.success) {
            const currentWeather = new CurrentWeather(response.datas);
            const weatherIcon    = currentWeather.getWeatherIcon();
            dynamicBckgrnd.changeBackground(weatherIcon);
            displayForecast.displayCurrentForecast(currentWeather, city, countryCode, countryFlag[0]);
        } else {
            displayForecast.displayError(response.error)
        };
    }
    async getPeriodicalForecastForCity() {
        const api             = new WeatherApi();
        const domElements     = new DomElements();
        const displayForecast = new DisplayPeriodicalForecast();

        const userSelection       = domElements.getBySelector(".city-selection__item");
        const latitude            = domElements.getDataAttribute(userSelection, "latitude");
        const longitude           = domElements.getDataAttribute(userSelection, "longitude");
        const response            = await api.getPeriodicalWeatherForecastByCity(latitude, longitude);
        
        if(response.success) {
            let arrayPeriodicalWeather = [];
            response.datas.list.map( pw => {
                const periodicalWeather = new PeriodicalWeather( pw, response.datas.city);
                arrayPeriodicalWeather.push(periodicalWeather);
            });
            displayForecast.displayPeriodicalForecast(arrayPeriodicalWeather);
        } else {
            displayForecast.displayError(response.error)
        };
    }
}

export default Forecast;