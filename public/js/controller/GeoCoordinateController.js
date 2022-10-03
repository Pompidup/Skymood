import GeoCoordinateApi         from "../repository/GeoCoordinateApi.js";
import DomElements              from "../other/DomElements.js";
import CityGeoCoordinate        from "../model/CityGeoCoordinate.js";
import DisplayCityGeoCoordinate from "../view/DisplayCityGeoCoordinate.js";

class GeoCoordinate {
    
    async getGeoCoordinateForCity() {
        const api               = new GeoCoordinateApi();
        const domElements       = new DomElements();
        const displayCoordinate = new DisplayCityGeoCoordinate();
        const city              = domElements.getCityInputValue()
        const response          = await api.getCoordinateByCity(city);
        
        if(response.success) {
            let arrayGeoCoordinate = [];
            response.datas.results.map( gc => {
                const geoCoordinate = new CityGeoCoordinate( gc );
                arrayGeoCoordinate.push(geoCoordinate);
            });
            displayCoordinate.displayGeoCoordinate(arrayGeoCoordinate);
        } else {
            displayCoordinate.displayError(response.error)
        };
    }
};

export default GeoCoordinate;