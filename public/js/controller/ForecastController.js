import Api                      from '../repository/Api.js';
import DomElements              from '../view/DomElements.js';
import CurrentWeather           from '../model/CurrentWeather.js';

class ForecastController {

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
}

export default ForecastController;