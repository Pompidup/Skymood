// per 3 hours forecast
class PeriodicalWeather {
    #localTimestamp;
    #localTimezone;
    #weatherIcons;
    #descriptions;
    #temperatures;
    #windSpeed;

    constructor(datas, city) {
        this.#localTimestamp = datas.dt;
        this.#localTimezone  = city.timezone;
        this.#weatherIcons   = datas.weather[0].icon;
        this.#descriptions   = datas.weather[0].description;
        this.#temperatures   = datas.main.temp;
        this.#windSpeed      = datas.wind.speed;
    }

    getAllTimestamp() {
        return this.#localTimestamp;
    }
    getTimezone() {
        return this.#localTimezone;
    }
    getWeatherIcons() {
        return this.#weatherIcons;
    }
    getDescriptions() {
        return this.#descriptions;
    }
    getTemperatures() {
        return Math.round(this.#temperatures);
    }
    getWindSpeed() {
        const speedInKilometers = this.#windSpeed * 3.6;
        
        return Math.round(speedInKilometers);
    }
};

export default PeriodicalWeather;

    // tomorrowDate : function(datas, i) {
    //     const datetime    = this.convertDailyTimestamp(datas, i);
    //     const dateOptions = { 
    //         weekday: 'short'
    //     };
    //     const localDate   = datetime.toLocaleDateString(undefined, dateOptions);
    
    //     return localDate;
    // }