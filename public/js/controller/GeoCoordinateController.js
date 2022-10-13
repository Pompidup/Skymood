import GeoCoordinateApi         from "../repository/GeoCoordinateApi.js";
import DomElements              from "../other/DomElements.js";
import CityGeoCoordinate        from "../model/CityGeoCoordinate.js";
import DisplayCityGeoCoordinate from "../view/DisplayCityGeoCoordinate.js";
import SessionStorage           from "../utils/SessionStorage.js";
import CreatePathForFlag        from '../other/CreatePathForFlag.js';

class GeoCoordinate {
    
    async getGeoCoordinateForCity() {
        const api               = new GeoCoordinateApi();
        const domElements       = new DomElements();
        const displayCoordinate = new DisplayCityGeoCoordinate();
        const sessionStorage    = new SessionStorage();
        const flagPath          = new CreatePathForFlag();

        const city              = domElements.getBySelector("#city").value;
        const cityStored        = sessionStorage.getCity();

        if( city !== cityStored ){
            const response = await api.getCoordinateByCity(city);
            if(response.success) {
                let arrayGeoCoordinate = [];
                let arrayIso = [];
                response.datas.results.map( gc => {
                    const geoCoordinate = new CityGeoCoordinate( gc );
                    arrayIso.push(geoCoordinate.getCountryCode());
                    arrayGeoCoordinate.push(geoCoordinate);
                });
                const countryFlags = flagPath.createPath(arrayIso);
                displayCoordinate.displayGeoCoordinate(arrayGeoCoordinate);
                sessionStorage.setCity(city);
            } else {
                displayCoordinate.displayError(response.error)
            };
        }
    }
};

export default GeoCoordinate;