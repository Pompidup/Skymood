class WeatherApi {
    #apiKey;
    #apiUrl;

    constructor() {
        this.#apiKey = "68973775853f06c5d2e8509d17d5270e"; // free subscription
        this.#apiUrl = "https://api.openweathermap.org/data/2.5"
    }

    async getCurrentWeatherForecastByCity(latitude, longitude) {

        try {
            const response = await fetch(`${this.#apiUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${this.#apiKey}&units=metric&lang=fr`);
            const datas    = await response.json();
            // console.log(datas);

            if(response.status === 404 ) {
                return {success: false , error: "Aucun résultats"};
            }
            return {success: true, error: '', datas: datas};

        } catch(error) {
            return {success: false , error: error};
        }
    }
    async getPeriodicalWeatherForecastByCity(latitude, longitude) {

        try {
            const response = await fetch(`${this.#apiUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${this.#apiKey}&units=metric&cnt=8&lang=fr`);
            const datas    = await response.json();
            // console.log(datas);

            if(response.status === 404 ) {
                return {success: false , error: "Aucun résultats"};
            }
            return {success: true, error: '', datas: datas};
        
        } catch(error) {
            return {success: false , error: error};
        }
    }
}

export default WeatherApi;