

let queriedCity = ""

let queriedLat, queriedLon; // Declare variables to needed query params

// First API call to get latitude and longitude for queried city

const searchButton = document.getElementById("searchbutton"); 
searchButton.addEventListener("click", function(event) {event.preventDefault(),queriedCity = document.getElementById("searchterm").value , fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + queriedCity + "&limit=1&appid=947f373954b974834bc6986dec7c1dd0")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    queriedLat = response[0].lat;
    queriedLon = response[0].lon;
    // Second API call to get weather forecast using latitude and longitude
    return fetch("http://api.openweathermap.org/data/2.5/forecast?lat=" + queriedLat + "&lon=" + queriedLon + "&appid=947f373954b974834bc6986dec7c1dd0");
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    let cityBoxSelector = document.getElementById('citiesBox'); //grabber for question box
    let cityName = document.createElement('p')
    cityBoxSelector.textContent = queriedCity
    cityBoxSelector.appendChild(cityName)
  })
})



