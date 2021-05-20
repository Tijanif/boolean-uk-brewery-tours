// import { createFilterAsideSection } from './createFilterAsideSection.js';
import { createFilterAsideSection } from './createFilterSection.js';

const getMainEl = document.querySelector('main');
getMainEl.append(createFilterAsideSection());
console.log(getMainEl);
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
    });
  });
}

// input: nothing
// action: put the list of breweries on the page
// output: nothing
function renderBreweryList() {
  const mainEl = document.querySelector('main');
  mainEl.innerHTML = '';

  for (const brewery of state.breweries) {
    renderSingleBreweryListItem(brewery);
  }
}

function renderSingleBreweryListItem(brewery) {
  const mainEl = document.querySelector('main');

  // code to put a single brewery on the page here...
  const liEl = document.createElement('li');
  liEl.innerText = brewery.name;
  mainEl.append(liEl);
}

listenToSelectStateForm();
