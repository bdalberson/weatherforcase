var queriedCity = "oakland"

var getCityLatlon = fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + queriedCity +(",ca,usa&limit=1&appid=947f373954b974834bc6986dec7c1dd0"))
.then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response[0].lat)
    console.log(response[0].lon)
  });


