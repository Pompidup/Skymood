import WeatherApi from '../repository/WeatherApi.js';
import DomElements from '../other/DomElements.js';
import CurrentWeather from '../model/CurrentWeather.js';
import PeriodicalWeather from '../model/PeriodicalWeather.js';
import DisplayCurrentForecast from '../view/DisplayCurrentForecast.js';
import DisplayPeriodicalForecast from '../view/DisplayPeriodicalForecast.js';
import CreatePathForFlag from '../other/CreatePathForFlag.js';


class Forecast {

    async getCurrentForecastForCity() {
        const api = new WeatherApi();
        const domElements = new DomElements();
        const displayForecast = new DisplayCurrentForecast();
        const flagPath = new CreatePathForFlag();

        const citySelectionButton = domElements.getBySelector(".city-selection__button");

        const latitude = domElements.getDataAttribute("latitude", citySelectionButton);
        const longitude = domElements.getDataAttribute("longitude", citySelectionButton);
        const city = domElements.getDataAttribute("city", citySelectionButton);
        const countryCode = domElements.getDataAttribute("cntycode", citySelectionButton);
        const countryFlag = flagPath.createPath([countryCode]);
        const response = await api.getCurrentWeatherForecastByCity(latitude, longitude);

        if (response.success) {
            const currentWeather = new CurrentWeather(response.datas);
            displayForecast.displayCurrentForecast(currentWeather, city, countryCode, countryFlag[0])
        } else {
            displayForecast.displayError(response.error)
        };
    }
    async getPeriodicalForecastForCity() {
        const api = new WeatherApi();
        const domElements = new DomElements();
        const displayForecast = new DisplayPeriodicalForecast();

        const citySelectionButton = domElements.getBySelector(".city-selection__button");

        const latitude = domElements.getDataAttribute("latitude", citySelectionButton);
        const longitude = domElements.getDataAttribute("longitude", citySelectionButton);
        const response = await api.getPeriodicalWeatherForecastByCity(latitude, longitude);

        if (response.success) {
            let arrayPeriodicalWeather = [];
            response.datas.list.map(pw => {
                const periodicalWeather = new PeriodicalWeather(pw, response.datas.city);
                arrayPeriodicalWeather.push(periodicalWeather);
            });
            displayForecast.displayPeriodicalForecast(arrayPeriodicalWeather);
        } else {
            displayForecast.displayError(response.error)
        };
    }
}

export default Forecast;