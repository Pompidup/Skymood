// import DomElements      from "../other/DomElements.js";
// import countriesIsoCode from "../utils/CountriesIsoCode.js";

// class CreatePathForFlag {
    
//     getAllIsoCountries() {
//         return countriesIsoCode;
//     }
//     getCountriesFullnameByIso(iso) {
//         const isoCountries = this.getAllIsoCountries();
//         const fullname = isoCountries[iso];

//         return fullname;
//     }
//     getSelectedCountry() {
//         const domElements = new DomElements();
//         const iso         = domElements.getDataAttributeCountryCode();

//         return iso;
//     }
//     createPath() {
//         const iso         = this.getSelectedCountry();
//         const basePath    = '../public/img/flag/';
//         const countryName = this.getCountriesFullnameByIso(iso);
//         const extension   = '.svg';

//         return basePath + countryName + extension;
//     }
// }

// export default CreatePathForFlag;

import countriesIsoCode from "../utils/CountriesIsoCode.js";

class CreatePathForFlag {
    #countriesIsoCode;
    #basePath;
    #extension;
    
    constructor() {
        this.#countriesIsoCode = countriesIsoCode;
        this.#basePath         = '../public/img/flag/';
        this.#extension        = '.svg';
    }
    
    getCountriesFullnameByIso(arrayIso) {
        const countriesFullname = [];
        arrayIso.forEach(iso => {
            countriesFullname.push(this.#countriesIsoCode[iso]);
        });

        return countriesFullname;
    }
    createPath(arrayIso) {
        const path = [];
        const defaultPictureFlag = 'undefined';
        
        arrayIso.forEach(iso => {
            const upperCaseIso = iso.toUpperCase();
            const fullname = this.#countriesIsoCode[upperCaseIso];
            if (fullname) {
                path.push(`${this.#basePath}${fullname}${this.#extension}`);
            } else {
                path.push(`${this.#basePath}${defaultPictureFlag}${this.#extension}`);
            }
        });

        return path;
    }
}

export default CreatePathForFlag;