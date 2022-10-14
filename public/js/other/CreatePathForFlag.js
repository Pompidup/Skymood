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
    getAllPaths() {
        const paths = [];
        Object.keys(this.#countriesIsoCode).forEach( (key) => {
        paths.push(`${this.#basePath}${this.#countriesIsoCode[key]}${this.#extension}`);
        });
        return paths;
    }
}

export default CreatePathForFlag;

// import CreatePathForFlag from "../other/CreatePathForFlag.js";
//test de tout les drapeaux en même temps
// class Test {
// test() {
//     const flag = new CreatePathForFlag();
//     const getFlag = flag.getAllPaths();
//     const div = document.querySelector("#test");

//     for(let i = 0; i < getFlag.length; i++) {
//         const img = document.createElement("img");
//         img.src = `${getFlag[i]}`;
//         img.title = `Drapeau du pays`;
//         img.className = "imgtest";
//         img.style.width = "24px";
//         div.append(img);
//     };
// }}

// export default Test;