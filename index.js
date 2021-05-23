// // https://api.openbrewerydb.org/breweries?by_state=ohio

// // input: US state: string
// // action: get a list of breweries from a specific US state (USA! USA!)
// // output: Promise<breweries>
// function getBreweriesByState(state) {
//   return fetch(
//     `https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=50`
//   ) // Promise<Response>
//     .then(function (response) {
//       return response.json();
//     }); // Promise<whatever returned from the function inside the .then, in this case it is an array of breweries (the parsed JSON)>
// }

// // input: nothing
// // action: adds an event listener to the select brewery form
// // output: nothing
// function listenToSelectStateForm() {
//   // find the form element on the page
//   const formEl = document.querySelector('#select-state-form');

//   // add an event listener when the form is submitted
//   formEl.addEventListener('submit', function (event) {
//     // <<< function that runs on submit
//     // we need an event, because forms by default, refresh the page
//     // and we want to prevent that
//     event.preventDefault();

//     // get the user's input from the select-state input on the form
//     // NOTE: forms have properties for every input with a name within it
//     const USState = formEl['select-state'].value;

//     // getBreweriesByState
//     // input: US State: string
//     // action: fetch breweries that are in that US state
//     // output: Promise<breweries>
//     getBreweriesByState(USState).then(function (breweriesFromServer) {
//       // at this point, we have up to 50 breweries of ANY TYPE
//       // but we want only breweries that are of type: micro, regional, or brewpub
//       // also... we don't want more than 10 of them
//       // so we filter the wrong types out
//       // then we slice to make sure we have AT MOST 10

//       // UP TO 50 BREWERIES THAT ARE MICRO, REGIONAL or BREWPUB
//       const filteredBreweries = breweriesFromServer.filter(function (brewery) {
//         // condition of the brewery I want to find
//         return (
//           brewery.brewery_type === 'brewpub' ||
//           brewery.brewery_type === 'micro' ||
//           brewery.brewery_type === 'regional'
//         );
//       });

//       // give me UP TO the first 10 from the filtered list
//       const slicedBreweries = filteredBreweries.slice(0, 10);

//       // store those in state
//       state.breweries = slicedBreweries;

//       // show me state in the console
//       // HERE WE CAN GUARANTEE THAT WE HAVE THE UPDATED BREWERY LIST

//       renderBreweryList();
//       getMainEl.append(createFilterAsideSection());
//     });
//   });
// }

// //  h1
// // header
// const listHeaderEl = document.createElement('header');
// listHeaderEl.setAttribute('class', 'search-bar');

// // form
// const listFormEl = document.createElement('form');
// listFormEl.setAttribute('id', 'search-breweries-form', 'autocomplete', 'off');

// //  form label
// const formLabelEl = document.createElement('label');
// formLabelEl.setAttribute('for', 'search-breweries');

// const labelH2 = document.createElement('h2');
// labelH2.innerText = 'Search breweries:';
// formLabelEl.append(labelH2);

// // form input

// const formInput = document.createElement('input');
// formInput.setAttribute(
//   'id',
//   'search-breweries',
//   'name',
//   'search-breweries',
//   'type',
//   'text'
// );
// listFormEl.append(formLabelEl, formLabelEl, formInput);

// const mainEl = document.querySelector('main');
// const articleEl = document.createElement('artile');
// const ulEl = document.createElement('ul');
// ulEl.setAttribute('class', 'breweries-list');

// articleEl.append(ulEl);
// const listH1El = document.createElement('h1');
// listH1El.innerText = 'List of Breweries';
// mainEl.append(listHeaderEl, listFormEl, articleEl);

// // input: nothing
// // action: put the list of breweries on the page
// // output: nothing
// function renderBreweryList() {
//   for (const brewery of state.breweries) {
//     renderSingleBreweryListItem(brewery);
//   }
// }

// function renderSingleBreweryListItem(brewery) {
//   // code to put a single brewery on the page here...
//   const liEl = createSingleBreweryListItem(brewery);
//   ulEl.append(liEl);
// }

// function createSingleBreweryListItem(brewery) {
//   const LiEl = document.createElement('li');

//   const h2El = document.createElement('h2');
//   h2El.innerText = brewery.name;

//   const divTypeEl = document.createElement('div');
//   divTypeEl.setAttribute('class', 'type');
//   divTypeEl.innerText = brewery.brewery_type;

//   const addressSectionEl = document.createElement('section');
//   addressSectionEl.setAttribute('class', 'address');

//   const h3El = document.createElement('h3');
//   h3El.innerText = 'Address:';

//   const streetPEl = document.createElement('p');
//   streetPEl.innerText = brewery.street;

//   const cityPostCodePEl = document.createElement('p');
//   const strongEl = document.createElement('strong');
//   strongEl.innerText = `${brewery.city}, ${brewery.postal_code}`;

//   cityPostCodePEl.append(strongEl);

//   addressSectionEl.append(h3El, streetPEl, cityPostCodePEl);

//   const phoneSectionEl = document.createElement('section');
//   phoneSectionEl.setAttribute('class', 'phone');

//   const h3PhoneEl = document.createElement('h3');
//   h3PhoneEl.innerText = 'Phone:';

//   const pEl = document.createElement('p');
//   pEl.innerText = brewery.phone;

//   phoneSectionEl.append(h3PhoneEl, pEl);

//   const linkSectionEl = document.createElement('section');
//   linkSectionEl.setAttribute('class', 'link');

//   const linkEl = document.createElement('a');
//   linkEl.href = brewery.website_url;
//   linkEl.setAttribute('target', '_blank');
//   linkEl.innerText = 'Visit Website';

//   linkSectionEl.append(linkEl);

//   LiEl.append(h2El, divTypeEl, addressSectionEl, phoneSectionEl, linkSectionEl);

//   return LiEl;
// }

// listenToSelectStateForm();

const mainEl = document.querySelector('main');

function unique(array) {
  return [...new Set(array)];
}

// GET the first 20 breweries
// https://api.openbrewerydb.org/breweries

// GET the first 20 breweries in san diego
// https://api.openbrewerydb.org/breweries?by_city=san_diego

// GET the first 20 breweries in ohio
// https://api.openbrewerydb.org/breweries?by_state=ohio

// GET the first 20 MICRO breweries in san diego
// https://api.openbrewerydb.org/breweries?by_city=san_diego&by_type=micro

// GET the first 10 MICRO breweries in san diego
// https://api.openbrewerydb.org/breweries?by_city=san_diego&by_type=micro&per_page=10

// GET results that include a name
//api.openbrewerydb.org/breweries/search?query=pub

// EXAMPLE BREWERY
// {
//   id: 10989,
//   obdb_id: "gnarly-cedar-brewing-greenleaf",
//   name: "Gnarly Cedar Brewing",
//   brewery_type: "nano",
//   street: "6381 Hwy 57",
//   address_2: null,
//   address_3: null,
//   city: "Greenleaf",
//   state: "Wisconsin",
//   county_province: null,
//   postal_code: "54126",
//   country: "United States",
//   longitude: "-88.0909977",
//   latitude: "44.3341752",
//   phone: "9205324384",
//   website_url: "https://www.ledgestonevineyards.xyz/gnarly-cedar-brewing/",
//   updated_at: "2020-10-23T00:00:00.000Z",
//   created_at: "2020-10-23T00:00:00.000Z"
// }

const state = {
  breweries: [],
  filters: {
    type: '',
    cities: [],
  },
};

// WHAT ARE THE QUESTIONS MY APP NEEDS TO KNOW THE ANSWER TO
// What breweries do I have? state.breweries
// Am I filtering anything? state.filters
// What kind of stuff can I filter? state.filters.stuff
//  - type of brewery // what type am I filtering for? state.filters.type
//  - cities // what cities am I filtering for? state.filters.city
//  - name // what name are we looking for? state.filters.name
// Can I get all the breweries that match my current filters?

// https://api.openbrewerydb.org/breweries?by_state=ohio

// input: US state: string
// action: get a list of breweries from a specific US state (USA! USA!)
// output: Promise<breweries>
function getBreweriesByState(state) {
  return fetch(
    `https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=50`
  ) // Promise<Response>
    .then(function (response) {
      return response.json();
    }); // Promise<whatever returned from the function inside the .then, in this case it is an array of breweries (the parsed JSON)>
}

// input: nothing
// action: adds an event listener to the select brewery form
// output: nothing
function listenToSelectStateForm() {
  // find the form element on the page
  const formEl = document.querySelector('#select-state-form');

  // add an event listener when the form is submitted
  formEl.addEventListener('submit', function (event) {
    // <<< function that runs on submit
    // we need an event, because forms by default, refresh the page
    // and we want to prevent that
    event.preventDefault();

    // get the user's input from the select-state input on the form
    // NOTE: forms have properties for every input with a name within it
    const USState = formEl['select-state'].value;

    // getBreweriesByState
    // input: US State: string
    // action: fetch breweries that are in that US state
    // output: Promise<breweries>
    getBreweriesByState(USState).then(function (breweriesFromServer) {
      // at this point, we have up to 50 breweries of ANY TYPE
      // but we want only breweries that are of type: micro, regional, or brewpub
      // also... we don't want more than 10 of them
      // so we filter the wrong types out
      // then we slice to make sure we have AT MOST 10

      // UP TO 50 BREWERIES THAT ARE MICRO, REGIONAL or BREWPUB
      const filteredBreweries = breweriesFromServer.filter(function (brewery) {
        // condition of the brewery I want to find
        return (
          brewery.brewery_type === 'brewpub' ||
          brewery.brewery_type === 'micro' ||
          brewery.brewery_type === 'regional'
        );
      });

      // give me UP TO the first 10 from the filtered list
      // const slicedBreweries = filteredBreweries.slice(0, 10);

      // store those in state
      state.breweries = filteredBreweries;

      // show me state in the console
      // HERE WE CAN GUARANTEE THAT WE HAVE THE UPDATED BREWERY LIST
      render();
    });
  });
}

function renderFilterSection() {
  const asideEl = document.createElement('aside');
  asideEl.setAttribute('class', 'filters-section');
  asideEl.innerHTML = `
    <h2>Filter By:</h2>
    <form id="filter-by-type-form" autocompete="off">
      <label for="filter-by-type">
        <h3>Type of Brewery</h3>
      </label>
      <select name="filter-by-type" id="filter-by-type">
        <option ${
          state.filters.type === '' ? 'selected' : ''
        } value="">Select a type...</option>
        <option ${
          state.filters.type === 'micro' ? 'selected' : ''
        } value="micro">Micro</option>
        <option ${
          state.filters.type === 'regional' ? 'selected' : ''
        } value="regional">Regional</option>
        <option ${
          state.filters.type === 'brewpub' ? 'selected' : ''
        } value="brewpub">Brewpub</option>
      </select>
    </form>
    <div class="filter-by-city-heading">
      <h3>Cities</h3>
      <button class="clear-all-btn">clear all</button>
    </div>
    <form id="filter-by-city-form">
      
    </form>
  `;

  const selectEl = asideEl.querySelector('#filter-by-type');
  selectEl.addEventListener('change', function () {
    state.filters.type = selectEl.value;
    render();
  });

  const formEl = asideEl.querySelector('#filter-by-city-form');

  // WE WANT TO HAVE AN ARRAY WITH UNIQUE CITIES ORDERED ALPHABETICALLY
  // WE CAN DERIVE THIS INFO FROM THE BREWERIES
  // NO NEED TO STORE IT IN STATE
  const repeatedCities = state.breweries.map(function (brewery) {
    return brewery.city;
  });

  const uniqueCities = unique(repeatedCities);
  const sortedCities = uniqueCities.slice().sort();

  for (const city of sortedCities) {
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'checkbox');
    inputEl.setAttribute('name', city);
    inputEl.setAttribute('value', city);

    const labelEl = document.createElement('label');
    labelEl.setAttribute('for', city);
    labelEl.innerText = city;

    formEl.append(inputEl, labelEl);
  }

  mainEl.append(asideEl);
}

// input: nothing
// action: put the list of breweries on the page
// output: nothing
function renderBreweryList() {
  const divEl = document.createElement('div');
  divEl.innerHTML = `
  <h1>List of Breweries</h1>
  <header class="search-bar">
    <form id="search-breweries-form" autocomplete="off">
      <label for="search-breweries"><h2>Search breweries:</h2></label>
      <input id="search-breweries" name="search-breweries" type="text" />
    </form>
  </header>
  <article>
    <ul class="breweries-list">
    </ul>
  </article>
  `;

  const breweryListEl = divEl.querySelector('.breweries-list');

  // All the breweries: state.breweries
  // The selected filter type: state.filterByType
  let breweriesToRender = state.breweries;

  if (state.filters.type !== '') {
    // code here depends on filter type
    breweriesToRender = breweriesToRender.filter(function (brewery) {
      return brewery.brewery_type === state.filters.type;
    });
  }

  if (state.filters.cities.length > 0) {
    // code here depends on filter cities
    breweriesToRender = breweriesToRender.filter(function (brewery) {
      return state.filters.cities.includes(brewery.city);
    });
  }

  breweriesToRender = breweriesToRender.slice(0, 10);

  for (const brewery of breweriesToRender) {
    const liEl = renderSingleBreweryListItem(brewery);
    breweryListEl.append(liEl);
  }

  mainEl.append(divEl);
}

function renderSingleBreweryListItem(brewery) {
  const liEl = document.createElement('li');

  liEl.innerHTML = `
    <h2>${brewery.name}</h2>
    <div class="type">${brewery.brewery_type}</div>
    <section class="address">
      <h3>Address:</h3>
      <p>${brewery.street}</p>
      <p>
        <strong>${brewery.city}, ${brewery.postal_code}</strong>
      </p>
    </section>
    <section class="phone">
      <h3>Phone:</h3>
      <p>${brewery.phone}</p>
    </section>
    <section class="link">
      <a href="${brewery.website_url}" target="_blank">
        Visit Website
      </a>
    </section>
  `;

  return liEl;
}

function render() {
  mainEl.innerHTML = '';

  renderFilterSection();
  renderBreweryList();
}

listenToSelectStateForm();
