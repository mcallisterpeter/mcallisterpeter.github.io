const curApi = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=3efcd4225e37daee266d0b251f791a4b&units=imperial';


fetch(curApi)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('tempF').textContent = jsObject.main.temp;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;
    document.getElementById('currently').textContent = jsObject.weather[0].main;
  });

  const forApi = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=3efcd4225e37daee266d0b251f791a4b&units=imperial';

  fetch(forApi)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var x = 1;
    var weekDay = new Array(7);
    weekDay[0] = "SUN";
    weekDay[1] = "MON";
    weekDay[2] = "TUE";
    weekDay[3] = "WED";
    weekDay[4] = "THU";
    weekDay[5] = "FRI";
    weekDay[6] = "SAT";
    for (var i = 0; i < jsObject.list.length; i++ ) {
        var myTime = jsObject.list[i].dt_txt.substring(11);
        var myDate = new Date(jsObject.list[i].dt * 1000);
        var myDay = weekDay[myDate.getDay()];
        if (myTime == '18:00:00' && x <= 5) {
            document.getElementById('myDay' + x).textContent = myDay;
            document.getElementById('forTemp' + x).textContent = jsObject.list[i].main.temp;

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            const desc = jsObject.list[i].weather[0].description;
            document.getElementById('icon' + x).setAttribute('src', imagesrc);
            document.getElementById('icon' + x).setAttribute('alt', desc);

            x++
        }
    }
  });