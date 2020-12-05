const forApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.422983&lon=-86.922340&appid=3efcd4225e37daee266d0b251f791a4b&units=imperial';

fetch(forApi)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // Current Weather Condition
    document.getElementById('curTemp').textContent = jsObject.current.temp;
    document.getElementById('curHum').textContent = jsObject.current.humidity;
    document.getElementById('curDesc').textContent = jsObject.current.weather[0].description;

    // 5 day forecast
    var x = 1;
    var weekDay = new Array(7);
    weekDay[0] = "SUN";
    weekDay[1] = "MON";
    weekDay[2] = "TUE";
    weekDay[3] = "WED";
    weekDay[4] = "THU";
    weekDay[5] = "FRI";
    weekDay[6] = "SAT";
    for (var i = 1; i < 4; i++ ) {
      var myDate = new Date(jsObject.daily[i].dt * 1000);
      var myDay = weekDay[myDate.getDay()];
      document.getElementById('myDay' + x).textContent = myDay;
      document.getElementById('forTemp' + x).textContent = jsObject.daily[i].temp.day;

      x++;

      /*const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
      const desc = jsObject.list[i].weather[0].description;
      document.getElementById('icon' + x).setAttribute('src', imagesrc);
      document.getElementById('icon' + x).setAttribute('alt', desc);*/
    }
  });