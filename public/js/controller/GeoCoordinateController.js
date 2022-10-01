import GeoCoordinateApi     from "../repository/GeoCoordinateApi.js";
import DomElements          from "../view/DomElements.js";
import CityGeoCoordinate    from "../model/CityGeoCoordinate.js";

class GeoCoordinate {
    
    async getGeoCoordinateForCity() {
        const api         = new GeoCoordinateApi();
        const domElements = new DomElements();
        const city        = domElements.getCityInputValue()
        const response    = await api.getCoordinateByCity(city);
        
        if(response.success) {
            // console.log(response.datas);
            let arrayGeoCoordinate = [];
            response.datas.results.map( gc => {
                const geoCoordinate = new CityGeoCoordinate( gc );
                arrayGeoCoordinate.push(geoCoordinate);
            });
            domElements.displayGeoCoordinate(arrayGeoCoordinate);
        } else {
            console.log(response.error);
            domElements.showError(response.error)
        };
    }
};

export default GeoCoordinate;