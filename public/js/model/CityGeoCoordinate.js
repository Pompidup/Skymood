class CityGeoCoordinate {
    #city;
    #country;
    #state;
    #latitude;
    #longitude;

    constructor(datas) {
        this.#city      = datas.city;
        this.#country   = datas.country;
        this.#state     = datas.state;
        this.#latitude  = datas.lat;
        this.#longitude = datas.lon;
    }
    getCity() {
        return this.#city;
    }
    getCountry() {
        return this.#country;
    }
    getState() {
        return this.#state;
    }
    getLatitude() {
        return this.#latitude;
    }
    getLongitude() {
        return this.#longitude;
    }
};

export default CityGeoCoordinate;