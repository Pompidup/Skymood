class CityGeoCoordinate {
    #city;
    #country;
    #county;
    #latitude;
    #longitude;

    constructor(datas) {
        this.#city      = datas.city;
        this.#country   = datas.country;
        this.#county     = datas.county;
        this.#latitude  = datas.lat;
        this.#longitude = datas.lon;
    }
    getCity() {
        return this.#city;
    }
    getCountry() {
        return this.#country;
    }
    getCounty() {
        return this.#county;
    }
    getLatitude() {
        return this.#latitude;
    }
    getLongitude() {
        return this.#longitude;
    }
};

export default CityGeoCoordinate;