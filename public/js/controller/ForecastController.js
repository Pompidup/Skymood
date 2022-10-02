import WeatherApi                from '../repository/WeatherApi.js';
import DomElements               from '../view/DomElements.js';
import CurrentWeather            from '../model/CurrentWeather.js';
import PeriodicalWeather         from '../model/PeriodicalWeather.js';
import DisplayCurrentForecast    from '../view/DisplayCurrentForecast.js';
import DisplayPeriodicalForecast from '../view/DisplayPeriodicalForecast.js';

class Forecast {

    async getCurrentForecastForCity() {
        const api             = new WeatherApi();
        const domElements     = new DomElements();
        const displayForecast = new DisplayCurrentForecast();
        const latitude        = domElements.getSendCoordinateButtonLatitude();
        const longitude       = domElements.getSendCoordinateButtonLongitude();
        const response        = await api.getCurrentWeatherForecastByCity(latitude, longitude);

        if(response.success) {
            const currentWeather = new CurrentWeather(response.datas);
            displayForecast.displayCurrentForecast(currentWeather)
        } else {
            domElements.showError(response.error)
        };
    }
    async getPeriodicalForecastForCity() {
        const api           = new WeatherApi();
        const domElements   = new DomElements();
        const displayForecast = new DisplayPeriodicalForecast();
        const latitude      = domElements.getSendCoordinateButtonLatitude();
        const longitude     = domElements.getSendCoordinateButtonLongitude();
        const response      = await api.getPeriodicalWeatherForecastByCity(latitude, longitude);
        
        if(response.success) {
            let arrayPeriodicalWeather = [];
            response.datas.list.map( pw => {
                const periodicalWeather = new PeriodicalWeather( pw, response.datas.city);
                arrayPeriodicalWeather.push(periodicalWeather);
            });
            displayForecast.displayPeriodicalForecast(arrayPeriodicalWeather);
        } else {
            domElements.showError(response.error)
        };
    }
}

export default Forecast;