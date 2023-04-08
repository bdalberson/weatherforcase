

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

      let forcastTwoTemp = data.list[16].main.temp;
      let forcastTwoWind = data.list[16].wind.speed;
      let forcastTwoHum = data.list[16].main.humidity;
      let forcastTwoTime = data.list[16].dt;
      let forcastTwoWeather = data.list[16].weather[0].main


      let forcastThreeTemp = data.list[24].main.temp;
      let forcastThreeWind = data.list[24].wind.speed;
      let forcastThreeHum = data.list[24].main.humidity;
      let forcastThreeTime = data.list[24].dt;
      let forcastThreeWeather = data.list[24].weather[0].main

      let forcastFourTemp = data.list[31].main.temp;
      let forcastFourWind = data.list[31].wind.speed;
      let forcastFourHum = data.list[31].main.humidity;
      let forcastFourTime = data.list[31].dt;
      let forcastFourWeather = data.list[31].weather[0].main

      let forcastFiveTemp = data.list[39].main.temp;
      let forcastFiveWind = data.list[39].wind.speed;
      let forcastFiveHum = data.list[39].main.humidity;
      let forcastFiveTime = data.list[39].dt;
      let forcastFiveWeather = data.list[39].weather[0].main

      


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


//////////////////////////
      let forcastBox1Selector = document.getElementById('forcastBox1');
      let castOneTime = document.createElement('li');
      castOneTime.textContent = (dayjs.unix(forcastOneTime).format('MMM D, YYYY'));
      forcastBox1Selector.appendChild(castOneTime);

      let castOneWeather = document.createElement('li');
        castOneWeather.textContent = (forcastOneWeather);
        forcastBox1Selector.appendChild(castOneWeather);

        let castOneTemp = document.createElement('li');
        castOneTemp.textContent = ("Temp: " + forcastOneTemp + "°F");
        forcastBox1Selector.appendChild(castOneTemp);

        let castOneWind = document.createElement('li');
      castOneWind.textContent = ("Wind: " + forcastOneWind + " MPH");
      forcastBox1Selector.appendChild(castOneWind);

      let castOneHum = document.createElement('li');
      castOneHum.textContent = ("Humidity: " + forcastOneHum + "%");
      forcastBox1Selector.appendChild(castOneHum);







      let forcastBox2Selector = document.getElementById('forcastBox2');
      let castTwoTime = document.createElement('li');
      castTwoTime.textContent = (dayjs.unix(forcastTwoTime).format('MMM D, YYYY'));
      forcastBox2Selector.appendChild(castTwoTime);

      let castTwoWeather = document.createElement('li');
      castTwoWeather.textContent = (forcastTwoWeather);
      forcastBox2Selector.appendChild(castTwoWeather);

      let castTwoTemp = document.createElement('li');
      castTwoTemp.textContent = ("Temp: " + forcastTwoTemp + "°F");
      forcastBox2Selector.appendChild(castTwoTemp);

      let castTwoWind = document.createElement('li');
    castTwoWind.textContent = ("Wind: " + forcastTwoWind + " MPH");
    forcastBox2Selector.appendChild(castTwoWind);

    let castTwoHum = document.createElement('li');
    castTwoHum.textContent = ("Humidity: " + forcastTwoHum + "%");
    forcastBox2Selector.appendChild(castTwoHum);



      let forcastBox3Selector = document.getElementById('forcastBox3');
      let castThreeTime = document.createElement('li');
      castThreeTime.textContent = (dayjs.unix(forcastThreeTime).format('MMM D, YYYY'));
      forcastBox3Selector.appendChild(castThreeTime);


      let castThreeWeather = document.createElement('li');
      castThreeWeather.textContent = (forcastThreeWeather);
      forcastBox3Selector.appendChild(castThreeWeather);

      let castThreeTemp = document.createElement('li');
      castThreeTemp.textContent = ("Temp: " + forcastThreeTemp + "°F");
      forcastBox3Selector.appendChild(castThreeTemp);

      let castThreeWind = document.createElement('li');
    castThreeWind.textContent = ("Wind: " + forcastThreeWind + " MPH");
    forcastBox3Selector.appendChild(castThreeWind);

    let castThreeHum = document.createElement('li');
    castThreeHum.textContent = ("Humidity: " + forcastThreeHum + "%");
    forcastBox3Selector.appendChild(castThreeHum);



      let forcastBox4Selector = document.getElementById('forcastBox4');
      let castFourTime = document.createElement('li');
      castFourTime.textContent = (dayjs.unix(forcastFourTime).format('MMM D, YYYY'));
      forcastBox4Selector.appendChild(castFourTime);

      let castFourWeather = document.createElement('li');
      castFourWeather.textContent = (forcastFourWeather);
      forcastBox4Selector.appendChild(castFourWeather);

      let castFourTemp = document.createElement('li');
      castFourTemp.textContent = ("Temp: " + forcastFourTemp + "°F");
      forcastBox4Selector.appendChild(castFourTemp);

      let castFourWind = document.createElement('li');
    castFourWind.textContent = ("Wind: " + forcastFourWind + " MPH");
    forcastBox4Selector.appendChild(castFourWind);

    let castFourHum = document.createElement('li');
    castFourHum.textContent = ("Humidity: " + forcastFourHum + "%");
    forcastBox4Selector.appendChild(castFourHum);


      let forcastBox5Selector = document.getElementById('forcastBox5');
      let castFiveTime = document.createElement('li');
      castFiveTime.textContent = (dayjs.unix(forcastFiveTime).format('MMM D, YYYY'));
      forcastBox5Selector.appendChild(castFiveTime);



      let castFiveWeather = document.createElement('li');
      castFiveWeather.textContent = (forcastFiveWeather);
      forcastBox5Selector.appendChild(castFiveWeather);

      let castFiveTemp = document.createElement('li');
      castFiveTemp.textContent = ("Temp: " + forcastFiveTemp + "°F");
      forcastBox5Selector.appendChild(castFiveTemp);

      let castFiveWind = document.createElement('li');
    castFiveWind.textContent = ("Wind: " + forcastFiveWind + " MPH");
    forcastBox5Selector.appendChild(castFiveWind);

    let castFiveHum = document.createElement('li');
    castFiveHum.textContent = ("Humidity: " + forcastFiveHum + "%");
    forcastBox5Selector.appendChild(castFiveHum);

 


    })
    .catch(function (error) {
      console.error(error);
    });
});

// function getWeatherImage(text) {
//     switch (text) {
//       case 'Clear':
//         return 'Assets/clear.png';
//       case 'Rain':
//         return 'Assets/rain.png';
//       case 'Clouds':
//         return 'Assets/cloud.png';
//       case 'Snow':
//         return 'Assets/snow.png';
//     }
//   }

//   const icon = "Clear"
  

//   let forcastBox1Selector = document.getElementById('forcastBox1');
//   let showIcon = document.createElement('img');
//   showIcon.innerText = icon.src = getWeatherImage(icon)
//   forcastBox1Selector.appendChild(showIcon)