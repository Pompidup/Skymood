import Api                      from '../repository/Api.js';
import DomElements              from '../view/DomElements.js';
import CurrentWeather           from '../model/CurrentWeather.js';
import PeriodicalWeather        from '../model/PeriodicalWeather.js';

class Forecast {

    async getCurrentForecastForCity() {
        const api         = new Api();
        const domElements = new DomElements();
        const city        = domElements.getCityInputValue()
        const response    = await api.getCurrentWeatherForecastByCity(city);

        if(response.success) {
            const currentWeather = new CurrentWeather(response.datas);
            domElements.displayCurrentForecast(currentWeather)
        } else {
            domElements.showError(response.error)
        };
    }
    async getPeriodicalForecastForCity() {
        const api         = new Api();
        const domElements = new DomElements();
        const city        = domElements.getCityInputValue()
        const response    = await api.getPeriodicalWeatherForecastByCity(city);
        
        if(response.success) {
            let arrayPeriodicalWeather = [];
            response.datas.list.map(pw => {
                const periodicalWeather = new PeriodicalWeather( pw, response.datas.city);
                arrayPeriodicalWeather.push(periodicalWeather);
            });
            domElements.displayPeriodicalForecast(arrayPeriodicalWeather);
        } else {
            domElements.showError(response.error)
        };

    }}

export default Forecast;