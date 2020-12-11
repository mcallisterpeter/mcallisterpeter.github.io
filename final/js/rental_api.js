const forApi = "/final/data/rental.json";

fetch(forApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    console.table(jsObject);
    const rental = jsObject['rental'];
    for (let i = 0; i < rental.length; i++ ) {
        let card = document.createElement('section');
        let h1 = document.createElement('h1');
        let max = document.createElement('p');
        let res_h2 = document.createElement('h2');
        let res = document.createElement('p');
        let mlk_h2 = document.createElement('h2');
        let wlk = document.createElement('p');
        let image = document.createElement('img');

        h1.textContent = rental[i].vehicle;
        card.appendChild(h1);

        max.textContent = 'Maximum People: ' + rental[i].max_p;
        card.appendChild(max);

        res_h2.textContent = 'Price for Reservations';
        card.appendChild(res_h2);

        res.textContent = 'Half Day Rental: $' + rental[i].reservation.hlf_day + '.00 | Full Day Rental: $' + rental[i].reservation.fll_day + '.00';
        card.appendChild(res);

        mlk_h2.textContent = 'Price for Walk-ins';
        card.appendChild(mlk_h2);

        wlk.textContent = 'Half Day Rental: $' + rental[i].walk_in.hlf_day + '.00 | Full Day Rental: $' + rental[i].walk_in.fll_day + '.00';
        card.appendChild(wlk);
        
        image.setAttribute('src', rental[i].img_src);
        image.setAttribute('alt', rental[i].img_alt);
        card.appendChild(image);

        document.querySelector('div.rent_cards').appendChild(card);
    }
  });