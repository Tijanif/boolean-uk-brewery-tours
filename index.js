// import { createFilterAsideSection } from './createFilterAsideSection.js';
import { createFilterAsideSection } from './createFilterSection.js';

const getMainEl = document.querySelector('main');

const state = {
  breweries: [],
};

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
      const slicedBreweries = filteredBreweries.slice(0, 10);

      // store those in state
      state.breweries = slicedBreweries;

      // show me state in the console
      // HERE WE CAN GUARANTEE THAT WE HAVE THE UPDATED BREWERY LIST

      renderBreweryList();
      getMainEl.append(createFilterAsideSection());
    });
  });
}

//  h1
// header
const listHeaderEl = document.createElement('header');
listHeaderEl.setAttribute('class', 'search-bar');

// form
const listFormEl = document.createElement('form');
listFormEl.setAttribute('id', 'search-breweries-form', 'autocomplete', 'off');

//  form label
const formLabelEl = document.createElement('label');
formLabelEl.setAttribute('for', 'search-breweries');

const labelH2 = document.createElement('h2');
labelH2.innerText = 'Search breweries:';
formLabelEl.append(labelH2);

// form input

const formInput = document.createElement('input');
formInput.setAttribute(
  'id',
  'search-breweries',
  'name',
  'search-breweries',
  'type',
  'text'
);
listFormEl.append(formLabelEl, formLabelEl, formInput);

const mainEl = document.querySelector('main');
const articleEl = document.createElement('artile');
const ulEl = document.createElement('ul');
ulEl.setAttribute('class', 'breweries-list');

articleEl.append(ulEl);
const listH1El = document.createElement('h1');
listH1El.innerText = 'List of Breweries';
mainEl.append(listHeaderEl, listFormEl, articleEl);

// input: nothing
// action: put the list of breweries on the page
// output: nothing
function renderBreweryList() {
  for (const brewery of state.breweries) {
    renderSingleBreweryListItem(brewery);
  }
}

function renderSingleBreweryListItem(brewery) {
  // code to put a single brewery on the page here...
  const liEl = createSingleBreweryListItem(brewery);
  ulEl.append(liEl);
}

function createSingleBreweryListItem(brewery) {
  const LiEl = document.createElement('li');

  const h2El = document.createElement('h2');
  h2El.innerText = brewery.name;

  const divTypeEl = document.createElement('div');
  divTypeEl.setAttribute('class', 'type');
  divTypeEl.innerText = brewery.brewery_type;

  const addressSectionEl = document.createElement('section');
  addressSectionEl.setAttribute('class', 'address');

  const h3El = document.createElement('h3');
  h3El.innerText = 'Address:';

  const streetPEl = document.createElement('p');
  streetPEl.innerText = brewery.street;

  const cityPostCodePEl = document.createElement('p');
  const strongEl = document.createElement('strong');
  strongEl.innerText = `${brewery.city}, ${brewery.postal_code}`;

  cityPostCodePEl.append(strongEl);

  addressSectionEl.append(h3El, streetPEl, cityPostCodePEl);

  const phoneSectionEl = document.createElement('section');
  phoneSectionEl.setAttribute('class', 'phone');

  const h3PhoneEl = document.createElement('h3');
  h3PhoneEl.innerText = 'Phone:';

  const pEl = document.createElement('p');
  pEl.innerText = brewery.phone;

  phoneSectionEl.append(h3PhoneEl, pEl);

  const linkSectionEl = document.createElement('section');
  linkSectionEl.setAttribute('class', 'link');

  const linkEl = document.createElement('a');
  linkEl.href = brewery.website_url;
  linkEl.setAttribute('target', '_blank');
  linkEl.innerText = 'Visit Website';

  linkSectionEl.append(linkEl);

  LiEl.append(h2El, divTypeEl, addressSectionEl, phoneSectionEl, linkSectionEl);

  return LiEl;
}

listenToSelectStateForm();
