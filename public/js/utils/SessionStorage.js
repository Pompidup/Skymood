class SessionStorage {

    setCity(city) {
        sessionStorage.setItem("city", city);
    }
    getCity() {
        return sessionStorage.getItem("city");
    }
}

export default SessionStorage;