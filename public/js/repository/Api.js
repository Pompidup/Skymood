class Api {
    #apiKey;
    #apiUrl;

    constructor() {
        this.#apiKey = "68973775853f06c5d2e8509d17d5270e"; // free subscription
        this.#apiUrl = "https://api.openweathermap.org/data/2.5/weather"
    }

    async getCurrentWeatherForecastByCity(city) {

        try {
            const response = await fetch(`${this.#apiUrl}?q=${city},fra&appid=${this.#apiKey}&units=metric&lang=fr`);
            const datas    = await response.json();
            console.log(datas);

            return {success: true, error: '', datas: datas};

        } catch(error) {

            return {success: false , error: error};
        }
    }
}

export default Api;