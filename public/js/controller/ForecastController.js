import WeatherApi                from '../repository/WeatherApi.js';
import DomElements               from '../other/DomElements.js';
import CurrentWeather            from '../model/CurrentWeather.js';
import PeriodicalWeather         from '../model/PeriodicalWeather.js';
import DisplayCurrentForecast    from '../view/DisplayCurrentForecast.js';
import DisplayPeriodicalForecast from '../view/DisplayPeriodicalForecast.js';
import CreatePathForFlag         from '../other/CreatePathForFlag.js';

class Forecast {

    async getCurrentForecastForCity() {
        const api             = new WeatherApi();
        const domElements     = new DomElements();
        const displayForecast = new DisplayCurrentForecast();
        const flagPath        = new CreatePathForFlag();
        
        const latitude        = domElements.getDataAttributeLatitude();
        const longitude       = domElements.getDataAttributeLongitude();
        const city            = domElements.getDataAttributeCity();
        const countryCode     = domElements.getDataAttributeCountryCode();
        const countryFlag     = flagPath.createPath([countryCode]);
        const response        = await api.getCurrentWeatherForecastByCity(latitude, longitude);

        if(response.success) {
            const currentWeather = new CurrentWeather(response.datas);
            displayForecast.displayCurrentForecast(currentWeather, city, countryCode, countryFlag[0]);
        } else {
            displayForecast.displayError(response.error)
        };
    }
    async getPeriodicalForecastForCity() {
        const api             = new WeatherApi();
        const domElements     = new DomElements();
        const displayForecast = new DisplayPeriodicalForecast();

        const latitude        = domElements.getDataAttributeLatitude();
        const longitude       = domElements.getDataAttributeLongitude();
        const response        = await api.getPeriodicalWeatherForecastByCity(latitude, longitude);
        
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