const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let found = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        card.appendChild(h2);

        motto.textContent = towns[i].motto;
        card.appendChild(motto);

        found.textContent = 'Year Founded: ' + towns[i].yearFounded;
        card.appendChild(found);

        pop.textContent = 'Population: ' + towns[i].currentPopulation;
        card.appendChild(pop);

        rain.textContent = 'Annual Rain Fall: ' + towns[i].currentPopulation;
        card.appendChild(rain);
        
        image.setAttribute('src', towns[i].photo);
        image.setAttribute('alt', towns[i].name + ' ' + towns[i].lastname + ' - ' + towns[i].order);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }
  });