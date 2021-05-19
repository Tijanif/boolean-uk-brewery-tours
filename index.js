import { createFilterAsideSection } from './createFilterAsideSection.js';

const getMainEl = document.querySelector('main');
getMainEl.append(createFilterAsideSection());
console.log(getMainEl);
// let mainState = {
//   breweries: [],
// };

// fetch(`https://api.openbrewerydb.org/breweries?by_state=${}`)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {

//     mainState.breweries = data;

//     checkState();
//   });

// // a function called get state
// function checkState() {
//   console.log(mainState.breweries[0].city);
// }
