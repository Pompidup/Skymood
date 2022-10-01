class GeoCoordinateApi {
    #apiKey;
    #apiUrl;

    constructor() {
        this.#apiKey = "3fa12cc4bc46472c9a1209379cf65f44"; // free subscription
        this.#apiUrl = "https://api.geoapify.com/v1/geocode"
    }

    async getCoordinateByCity(city) {

        try {
            const response = await fetch(`${this.#apiUrl}/search?text=${city}&lang=fr&format=json&limit=3&apiKey=${this.#apiKey}`);
            const datas    = await response.json();
            // console.log(datas);
            if( response.status === 404 || datas.statusCode === 400 ) {
                return {success: false , error: "Aucun résultats"};
            }
            return {success: true, error: '', datas: datas};

        } catch(error) {
            return {success: false , error: error};
        }
    }
}

export default GeoCoordinateApi;