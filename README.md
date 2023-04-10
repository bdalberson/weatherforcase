# weatherforcase

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     
| Fetch Api | [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)    


## Description 
[Visit the Deployed Site](https://bdalberson.github.io/weatherforcase/)

![plot](./Assets/Screen%20Shot%202023-04-10%20at%208.57.43%20AM.png)

## Code Refactor Example


Below is the Api function, it must query a city name to get the lattitue and longitude and then make another call using the lat/lon to get the forecast for the city. 

```javascript

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      buildPage(data); // pass the response parameter as an argument to buildPage function
    })
});

  function buildPage(data) {
    let queriedLat = data[0].lat;
    let queriedLon = data[0].lon;
  
    // Second API call to get weather forecast using latitude and longitude
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${queriedLat}&lon=${queriedLon}&units=imperial&appid=947f373954b974834bc6986dec7c1dd0`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) { //sets up all the variables from the api calls and stores them
        let queriedCity = data.city.name;
        let queriedTemp = data.list[0].main.temp;
        let queriedWind = data.list[0].wind.speed;
        let queriedHum = data.list[0].main.humidity;
        let queriedTime = data.list[0].dt;
        let queriedWeather = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png'
  
```

Added some CSS to make it look better on smaller devices

```css


@media screen and (max-width: 500px) {
    .searchBox{
        font-size: large;
        width: 45%;
        height: 60%;
        display: inline-block;
        margin: auto;
        
    }
    .forcastBox{
        font-size: x-small;
        width: 100%;
        float: right;
        height: 40%;
        flex: auto;
        margin: auto;
        display: flex;
        flex-direction: column;
       flex-wrap: wrap;   
    }
    .forcastBox ul {
        display: flex;
        flex-direction: column;
       flex-wrap: wrap;  
       color: black; 
    }
    footer{
        display : none; 
        visibility : hidden; 
    }

  }
```

This is my save button,  it uses local storage to store a button of the recent save and then sets a button to search that city if pressed again. Also builds a list of searches from local storage on load 

```javascript


            const savedButton = document.getElementById("savedbutton");//recent search button grabber


const searchlist = JSON.parse(localStorage.getItem("searchlist")) || [] //searches for saved cities in local storage or makes an empty array

  for (let i in searchlist){   //makes a new button for each item in local storage, clicking it makes the search
  const newButton = document.createElement("button");
  savedCity = JSON.parse(localStorage.getItem("searchlist"))
  newButton.textContent = searchlist[i];
  savedButton.appendChild(newButton);
  newButton.addEventListener("click", function() {
    searchNewCity(searchlist[i]);
  });
}

```


## Usage 

Enter a city you want to go to and click the search button to begin.  If its an actual city it will return 5 dady forcast for selected city and the search will be saved as a button for future use. 

## Learning Points 


Api week so most of learning was in how to handle api calls and work with the data. The code should use a loop to go through some unneccesary bits of code and that will  be my main point of focus for the next project. 


## Author Info

QA professional turning into coder 

* [Portfolio](https://bdalberson.github.io/Course2Biopage/)
* [LinkedIn](https://www.linkedin.com/in/brian-alberson-464b2271/)
* [Github](https://github.com/bdalberson)
```

## Credits

Gotta thanks the wife and family for giving me time and space to complete this it was quite an amount of work.     

---

## Tests
Tested and works on mobile. test buttons and layout on varrying screens and sizes.  
