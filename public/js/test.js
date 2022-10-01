
// let lastCitySearched = "";

// const button = document.querySelector('#testbutton');
// button.addEventListener("click", displayLocation);
// const input = document.querySelector('#inputtest');
// input.addEventListener("keypress", function(event) {
//     if(event.key === "Enter") {
//         displayLocation();
//     }
// });

// function displayLocation(){
//     const actualCity = document.querySelector('#inputtest').value;
//     if( actualCity !== lastCitySearched ) {
//         lastCitySearched = actualCity;
    
//     const div = document.querySelector('#divtest');
//     div.innerHTML = "";
//     const h1 = document.createElement("h1");
//     h1.innerText = "Lieux";
//     div.prepend(h1);

//     const existingUl = div.querySelectorAll("ul");
//         if (existingUl.length > 0) {
//         existingUl.forEach((ul) => ul.remove());
//         }
//     const ul = document.createElement("ul");

//         fetch(`https://api.geoapify.com/v1/geocode/search?text=${actualCity}&lang=fr&format=json&limit=3&apiKey=3fa12cc4bc46472c9a1209379cf65f44`)

//             .then(response => response.json())
//             .then(datas => {
//                 console.log(datas);
//                 const ul = document.createElement("ul");
//                 div.append(ul);
//                 for(let i = 0; i < datas.results.length; i++) {
//                     const li = document.createElement("li");
//                     li.innerHTML = `
//                                     ${datas.results[i].city}, 
//                                     ${datas.results[i].state},
//                                     ${datas.results[i].country}     
//                                 `;
//                     li.dataset.latitude = `${datas.results[i].lat}`;
//                     li.dataset.longitude = `${datas.results[i].lon}`;
//                     li.className = "city-results";
//                     li.addEventListener("click", setCityCoordinateToButton);
//                     ul.append(li);
//                 }
//                 const button     = document.createElement("button");
//                 button.disabled  = true;
//                 button.innerText = "Valider";
//                 button.className = "confirm-city";
//                 button.addEventListener("click", sentCoordinateToWeatherApi);
//                 div.append(button);
//             });
//         }  
//     }

//     function setCityCoordinateToButton(event) {
//         const latitude = event.target.dataset.latitude;
//         const longitude = event.target.dataset.longitude;
//         const button = document.querySelector('.confirm-city');
//         button.dataset.latitude  = latitude;
//         button.dataset.longitude = longitude;
//         button.disabled = false;
//     }

//     function sentCoordinateToWeatherApi() {
//         const button = document.querySelector('.confirm-city');
//         console.log(button.dataset.latitude, button.dataset.longitude);
//     }