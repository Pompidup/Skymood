import WeatherConditions from '../utils/WeatherConditions.js';

class DynamicBackground {
    #weatherConditions;
    #basePath;
    #extension;

    constructor() {
        this.#weatherConditions = WeatherConditions;
        this.#basePath          = 'public/img/background/';
        this.#extension        = '.jpg';
    }
    getWeatherConditions(weatherIcon) {
        const allWeatherConditions = this.#weatherConditions;
        const currentCondition     = Object.keys(allWeatherConditions).find(key => 
                allWeatherConditions[key].includes(weatherIcon));
                console.log(currentCondition);
        
        return currentCondition;
    }
    createBackgroundPath(weatherIcon) {
        const pictureName = this.getWeatherConditions(weatherIcon);
        const path = `${this.#basePath}${pictureName}${this.#extension}`;
        console.log(path);

        return path;
    }
    changeBackground() {

//mettre un bg si 404 not found
        // if(weatherIcon === "01d") {
        //     body.style.backgroundImage = "url(public/img/background/sunny.jpg)";
        // }
        // if( weatherIcon === "01n" ||
        //     weatherIcon === "02n" ||
        //     weatherIcon === "03n") {
            
        //     document.body.style.backgroundImage = "url(public/img/background/night.jpg)";
        // }
        // else {
        //     document.body.style.backgroundImage = "url(public/img/background/rainy.jpg)";
        // }
    }
}

export default DynamicBackground;