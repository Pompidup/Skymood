class CurrentWeather {
    #localTimestamp;
    #localTimezone;
    #cityName;
    #countryName;
    #weatherIcon;
    #temperature;
    #feelTemperature;
    #description;
    #humidity;
    #windSpeed;
    #sunriseTimestamp;
    #sunsetTimestamp;

    constructor(datas) {
        this.#localTimestamp   = datas.dt;
        this.#localTimezone    = datas.timezone;
        this.#cityName         = datas.name;
        this.#countryName      = datas.sys.country;
        this.#weatherIcon      = datas.weather[0].icon;
        this.#temperature      = datas.main.temp;
        this.#feelTemperature  = datas.main.feels_like;
        this.#description      = datas.weather[0].description;
        this.#humidity         = datas.main.humidity;
        this.#windSpeed        = datas.wind.speed;
        this.#sunriseTimestamp = datas.sys.sunrise;
        this.#sunsetTimestamp  = datas.sys.sunset;
    }

    getCurrentTimestamp() {
        return this.#localTimestamp;
    }
    getTimezone() {
        return this.#localTimezone;
    }
    getCityName() {
        return this.#cityName;
    }
    getCountryName() {
        return this.#countryName;
    }
    getWeatherIcon() {
        return this.#weatherIcon;
    }
    getTemperature() {
        return Math.round(this.#temperature);
    }
    getFeelTemperature() {
        return Math.round(this.#feelTemperature);
    }
    getDescription() {
        return this.#description;
    }
    getHumidity() {
        return this.#humidity;
    }
    getWindSpeed() {
        const speedInKilometers = this.#windSpeed * 3.6;

        return Math.round(speedInKilometers);
    }
    getSunriseTimestamp() {
        return this.#sunriseTimestamp;
    }
    getSunsetTimestamp() {
        return this.#sunsetTimestamp;
    }
};

export default CurrentWeather;