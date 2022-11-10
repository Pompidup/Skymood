// https://openweathermap.org/weather-conditions

const weatherConditions = {

    sunny:        [
                    "01d",
                    "02d", 
                    "03d"
                ],
    cloudy:       ["04d"],
    rainy:        [
                    "09d", 
                    "10d", 
                ],
    thunderstorm: ["11d"],
    snowy:        ["13d"],
    fog:          ["50d"], 
    night:        [
                    "01n",
                    "02n",
                    "03n", 
                    "04n", 
                    "09n", 
                    "10n", 
                    "11n", 
                    "13n", 
                    "50n"
                ],
}

export default weatherConditions;