// const generalWeatherDatas = {
//     // prévisions tranches 3H
//     displayPeriodicWeather: function () {
//         const domElements = new DomElements();
//         const userCity = domElements.getCityInputValue();
//         const APIKey   = generalWeatherDatas.APIKey();
//         const nbrResults = 8;
//         fetch("https://api.openweathermap.org/data/2.5/forecast?q=" 
//                 + userCity + 
//                 ",fra&lang=fr&cnt="
//                 + nbrResults +
//                 "&units=metric&appid=" 
//                 + APIKey
//             )
//         .then(response => response.json())
//         .then((datas) => {
//             console.log(datas);
//             const target = domElements.getDivForPeriodicForecast();
//             const h2 = `
//                         <h2>
//                             Prochaines heures
//                         </h2>
//                         `;
//             target.innerHTML = h2;
//             for(let i = 0; i < datas.list.length; i++) {
//                 const weatherDatas = new PeriodicWeather(datas, i);
//                 const time         = new DatetimeConverter(weatherDatas.getNextTimestamp(), weatherDatas.getTimezone() ).toLocaleTime();
//                 const icons        = weatherDatas.getWeatherIcons(datas, i);
//                 const temperatures = weatherDatas.getTemperatures(datas, i);
//                 const windSpeed    = weatherDatas.getWindSpeed(datas, i);
//                 const article      = `
//                                     <article>
//                                         <ul>
//                                             <li>
//                                                 ${time}
//                                             </li>
//                                             <li>
//                                                 <img src="http://openweathermap.org/img/wn/${icons}.png" 
//                                                     alt="">
//                                             </li>
//                                             <li>
//                                                 ${temperatures} °C
//                                             </li>
//                                             <li>
//                                                 ${windSpeed} km/h
//                                             </li>
//                                         </ul>
//                                     </article>
//                                 `;
//                 target.innerHTML += article;
//             }
//         })
//     },
//     displayIconsPhrase: function (datas) {
//         if(datas.weather[0].icon == "01d") {
//             return `<p>Pensez aux lunettes de soleil !</p>`;
//         }
//         if(datas.weather[0].icon == "09d" ) {
//             return `<p>Pensez au parapluie !</p>`;
//         }
//         if(datas.weather[0].icon == "50d") {
//             return `<p>Attention sur la route !</p>`;
//         }
//         return ``;
//     }
// };