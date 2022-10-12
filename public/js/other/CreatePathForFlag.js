import DomElements      from "../other/DomElements.js";
import countriesIsoCode from "../utils/CountriesIsoCode.js";

class CreatePathForFlag {
    
    getAllIsoCountries() {
        return countriesIsoCode;
    }
    getCountriesFullnameByIso(iso) {
        const isoCountries = this.getAllIsoCountries();
        const fullname = isoCountries[iso];

        return fullname;
    }
    getSelectedCountry() {
        const domElements = new DomElements();
        const iso         = domElements.getDataAttributeCountryCode();

        return iso;
    }
    createPath() {
        const iso         = this.getSelectedCountry();
        const basePath    = '../public/img/flag/';
        const countryName = this.getCountriesFullnameByIso(iso);
        const extension   = '.svg';

        return basePath + countryName + extension;
    }
}

export default CreatePathForFlag;