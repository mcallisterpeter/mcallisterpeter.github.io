const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=3efcd4225e37daee266d0b251f791a4b&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('tempF').textContent = jsObject.main.temp;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;
    document.getElementById('currently').textContent = jsObject.weather[0].main;
  });