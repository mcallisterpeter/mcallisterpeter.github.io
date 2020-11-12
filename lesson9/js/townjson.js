const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
            let card = document.createElement('section');
            let towninfo = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let found = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');
            
            card.appendChild(towninfo);

            card.setAttribute('class', 'townsect');

            towninfo.setAttribute('class', 'towninfo');

            h2.textContent = towns[i].name;
            towninfo.appendChild(h2);

            motto.textContent = towns[i].motto;
            towninfo.appendChild(motto);

            found.textContent = 'Year Founded: ' + towns[i].yearFounded;
            towninfo.appendChild(found);

            pop.textContent = 'Population: ' + towns[i].currentPopulation;
            towninfo.appendChild(pop);

            rain.textContent = 'Annual Rain Fall: ' + towns[i].currentPopulation;
            towninfo.appendChild(rain);
            
            image.setAttribute('class', 'townimg');
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', 'Image of ' + towns[i].name);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    }
  });