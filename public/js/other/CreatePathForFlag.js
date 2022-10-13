import countriesIsoCode from "../utils/CountriesIsoCode";

class CreatePathForFlag {
    #countriesIsoCode
    #basePath
    #extension
    constructor() {
        this.#countriesIsoCode = countriesIsoCode;
        this.#basePath = '../public/img/flag/';
        this.#extension = '.svg';
    }

    /**
     * @deprecated Not used actually
     * @param {string[]} iso
     * @return {string[]} countries
     * @description Get the full name of the country by the iso code
     * @example
     * const iso = ['FR', 'US', 'GB'];
     * const countries = getCountriesFullnameByIso(iso);
     * console.log(countries); // ['France', 'United States', 'United Kingdom']
     */
    getCountriesFullnameByIso(arrayIso) {
        const countriesFullname = [];
        arrayIso.forEach(iso => {
            countriesFullname.push(this.#countriesIsoCode[iso]);
        });

        return countriesFullname;
    }
    
    /**
     * @param {string[]} iso
     * @return {string[]} paths
     * @description Get the path of the flag by iso
     * @example
     * const iso = ['FR', 'US', 'GB'];
     * const paths = getPathsByCountries(countries);
     * console.log(paths); // ['../img/flags/France.svg', '../img/flags/United States.svg', '../img/flags/United Kingdom.svg']
     */
    createPaths(arrayIso) {
        const paths = [];
        arrayIso.forEach(iso => {
            paths.push(`${this.#basePath}${this.#countriesIsoCode[iso]}${this.#extension}`);
        });

        return paths;
    }
}

export default CreatePathForFlag;