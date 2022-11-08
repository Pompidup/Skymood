import Forecast    from '../controller/ForecastController.js';

class SendCoordinate {

    sendCoordinateToForecast() {
        const forecast = new Forecast();
            forecast.getCurrentForecastForCity();
            forecast.getPeriodicalForecastForCity();
    }
}

export default SendCoordinate;