

let queriedCity = ""

let queriedLat, queriedLon, queriedTemp, queriedWind;// Declare variables to needed query params

// First API call to get latitude and longitude for queried city

const searchButton = document.getElementById("searchbutton"); 
searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  let queriedCity = document.getElementById("searchterm").value;
  let apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + queriedCity + "&limit=1&appid=947f373954b974834bc6986dec7c1dd0";
  
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let queriedLat = data[0].lat;
      let queriedLon = data[0].lon;
      // Second API call to get weather forecast using latitude and longitude
      return fetch("http://api.openweathermap.org/data/2.5/forecast?lat=" + queriedLat + "&lon=" + queriedLon + "&units=imperial&appid=947f373954b974834bc6986dec7c1dd0");
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let queriedTemp = data.list[0].main.temp; 
      let queriedWind = data.list[0].wind.speed;
      console.log(data);
      let cityBoxSelector = document.getElementById('citiesBox');
      
      // Create a new h element to display the city name
      let cityName = document.createElement('h');
      cityName.textContent = queriedCity;
      cityBoxSelector.appendChild(cityName);
      
      // Create a new p element to display the queried temperature
      let cityTemp = document.createElement('li');
      cityTemp.textContent = ("Temp: " + queriedTemp);
      cityBoxSelector.appendChild(cityTemp);


      let cityWind = document.createElement('li');
      cityWind.textContent = ("Wind: " + queriedWind);
      cityBoxSelector.appendChild(cityWind);



    })
    .catch(function (error) {
      console.error(error);
    });
});



// Temp: 76.62°F
// Wind: 8.43 MPH
// Humidity: 44 %