import Forecast from '../controller/ForecastController.js';

class SendCoordinate {

    sendCoordinateToForecast() {
        const forecast = new Forecast();
            forecast.getCurrentForecastForCity();
            forecast.getPeriodicalForecastForCity();
            //lancement fonction du switch flag
    }
}

export default SendCoordinate;