class CityGeoCoordinate {
    #city;
    #country;
    #county;
    #latitude;
    #longitude;
    #address;
    #location;
    #ISOcode;

    constructor(datas) {
        this.#city      = datas.city;
        this.#country   = datas.country;
        this.#county    = datas.county;
        this.#latitude  = datas.lat;
        this.#longitude = datas.lon;
        this.#address   = datas.formatted;
        this.#location  = datas.address_line1;
        this.#ISOcode   = datas.country_code;
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
    getFormattedAddress() {
        return this.#address;
    }
    getLocation() {
        return this.#location;
    }
    getCountryCode() {
        return this.#ISOcode;
    }
};

export default CityGeoCoordinate;