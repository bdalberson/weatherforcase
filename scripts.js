let queriedCity = "oakland"; // Example queried city name, replace this with your desired value

let queriedLat, queriedLon; // Declare variables to store latitude and longitude

// First API call to get latitude and longitude for queried city
fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + queriedCity + ",ca,usa&limit=1&appid=947f373954b974834bc6986dec7c1dd0")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    queriedLat = response[0].lat;
    queriedLon = response[0].lon;
    console.log(queriedLat, queriedLon);
    
    // Second API call to get weather forecast using latitude and longitude
    return fetch("http://api.openweathermap.org/data/2.5/forecast?lat=" + queriedLat + "&lon=" + queriedLon + "&appid=947f373954b974834bc6986dec7c1dd0");
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
  })
  



  