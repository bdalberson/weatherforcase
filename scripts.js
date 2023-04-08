

let queriedCity = ""

// Declare variables to needed query params
let queriedLat, queriedLon, queriedTemp, queriedWind, queriedHum, queriedTime, queriedWeather;
let forcastOneTemp, forcastOneWind, forcastOneHum, forcastOneTime, forcastOneWeather 

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
      let queriedHum = data.list[0].main.humidity;
      let queriedTime = data.list[0].dt; 
      let queriedWeather = data.list[0].weather[0].main
      
      let forcastOneTemp = data.list[8].main.temp;
      let forcastOneWind = data.list[8].wind.speed;
      let forcastOneHum = data.list[8].main.humidity;
      let forcastOneTime = data.list[8].dt;
      let forcastOneWeather = data.list[8].weather[0].main


      console.log(data);
      let cityBoxSelector = document.getElementById('citiesBox');
      
      // Create a new h element to display the city name
      let cityName = document.createElement('h');
      cityName.textContent = queriedCity;
      cityBoxSelector.appendChild(cityName);
      
      // Create a new p element to display the queried time
      let cityTime = document.createElement('li');
      cityTime.textContent = (dayjs.unix(queriedTime).format('MMM D, YYYY'));
      cityBoxSelector.appendChild(cityTime);

        // Create a new p element to display the queried weather
      let cityWeather = document.createElement('li');
      cityWeather.textContent = (queriedWeather);
      cityBoxSelector.appendChild(cityWeather);



      // Create a new p element to display the queried temperature
      let cityTemp = document.createElement('li');
      cityTemp.textContent = ("Temp: " + queriedTemp + "°F");
      cityBoxSelector.appendChild(cityTemp);


      let cityWind = document.createElement('li');
      cityWind.textContent = ("Wind: " + queriedWind + " MPH");
      cityBoxSelector.appendChild(cityWind);

      let cityHum = document.createElement('li');
      cityHum.textContent = ("Humidity: " + queriedHum + "%");
      cityBoxSelector.appendChild(cityHum);


    })
    .catch(function (error) {
      console.error(error);
    });
});


time = dayjs.unix(1681311600).format('MMM D, YYYY')

console.log(time)