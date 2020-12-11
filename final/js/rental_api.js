const forApi = "/final/data/rental.json";

fetch(forApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    console.table(jsObject);
    const prophets = jsObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        card.appendChild(h2);

        p.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        card.appendChild(p);

        p2.textContent = 'Birthplace: ' + prophets[i].birthplace;
        card.appendChild(p2);
        
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }
  });