import GeoCoordinateApi         from "../repository/GeoCoordinateApi.js";
import DomElements              from "../other/DomElements.js";
import CityGeoCoordinate        from "../model/CityGeoCoordinate.js";
import DisplayCityGeoCoordinate from "../view/DisplayCityGeoCoordinate.js";
import SessionStorage           from "../utils/SessionStorage.js";

class GeoCoordinate {
    
    async getGeoCoordinateForCity() {
        const api               = new GeoCoordinateApi();
        const domElements       = new DomElements();
        const displayCoordinate = new DisplayCityGeoCoordinate();
        const sessionStorage    = new SessionStorage();
        const city              = domElements.getCityInputValue()
        const cityStored        = sessionStorage.getCity();

        if( city !== cityStored ){
            const response = await api.getCoordinateByCity(city);
            if(response.success) {
                let arrayGeoCoordinate = [];
                response.datas.results.map( gc => {
                    const geoCoordinate = new CityGeoCoordinate( gc );
                    arrayGeoCoordinate.push(geoCoordinate);
                });
                displayCoordinate.displayGeoCoordinate(arrayGeoCoordinate);
                sessionStorage.setCity(city);
            } else {
                displayCoordinate.displayError(response.error)
            };
        }
    }
};

export default GeoCoordinate;