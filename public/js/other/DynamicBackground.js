import WeatherConditions from '../utils/WeatherConditions.js';

class DynamicBackground {
    #weatherConditions;
    #basePath;
    #extension;

    constructor() {
        this.#weatherConditions = WeatherConditions;
        this.#basePath = 'public/img/background/';
        this.#extension = '.jpg';
    }

    getPictureName(weatherIcon) {
        return Object.keys(this.#weatherConditions).find(
            key => this.#weatherConditions[key].includes(weatherIcon)
        );
    }

    createBackgroundPath(pictureName) {
        return `${this.#basePath}${pictureName}${this.#extension}`;
    }

    changeBackground(weatherIcon) {
        const pictureName = this.getPictureName(weatherIcon);
        const path = this.createBackgroundPath(pictureName);

        document.body.style.backgroundImage = `url(${path})`;
    }
}

export default DynamicBackground;