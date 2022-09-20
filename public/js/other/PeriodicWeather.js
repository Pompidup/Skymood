// // per 3 hours forecast
// class PeriodicWeather {
//     #localTimestamp;
//     #localTimezone;
//     #weatherIcons;
//     #temperatures;
//     #windSpeed;

//     constructor(datas, i) {
//         this.#localTimestamp = datas.list[i].dt;
//         this.#localTimezone  = datas.city.timezone;
//         this.#weatherIcons   = datas.list[i].weather[0].icon;
//         this.#temperatures   = datas.list[i].main.temp;
//         this.#windSpeed      = datas.list[i].wind.speed;
//     }

//     getNextTimestamp() {
//         return this.#localTimestamp;
//     }
//     getTimezone() {
//         return this.#localTimezone;
//     }
//     getWeatherIcons() {
//         return this.#weatherIcons;
//     }
//     getTemperatures() {
//         return Math.round(this.#temperatures);
//     }
//     getWindSpeed() {
//         const speedInKilometers = this.#windSpeed * 3.6;
        
//         return Math.round(speedInKilometers);
//     }
// };

// export default PeriodicWeather;

//     // tomorrowDate : function(datas, i) {
//     //     const datetime    = this.convertDailyTimestamp(datas, i);
//     //     const dateOptions = { 
//     //         weekday: 'short'
//     //     };
//     //     const localDate   = datetime.toLocaleDateString(undefined, dateOptions);
    
//     //     return localDate;
//     // }