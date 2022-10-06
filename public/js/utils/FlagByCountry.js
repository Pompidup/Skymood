import DomElements from "../other/DomElements.js";

class FlagByCountry {

    displayFlagForEachCountry() {
        const domElements = new DomElements();
        const countryCode = domElements.getDataAttributeCountryCode();
        let imgPath;

        switch (countryCode) {

            case "fr":
                imgPath = "../public/img/flag/france.png";
            break;
        }

        return imgPath;
    }
}

export default FlagByCountry;