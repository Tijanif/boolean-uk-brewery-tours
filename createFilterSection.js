const h2El = document.createElement('h2');
h2El.innerText = 'Filter By:';

// form
const formEl = document.createElement('form');
formEl.setAttribute('id', 'filter-by-type-form');
formEl.setAttribute('autocompete', 'off');

//  form label
const formLabelEl = document.createElement('label');
formLabelEl.setAttribute('for', 'filter-by-type');
const formLabelH3 = document.createElement('h3');
formLabelH3.innerText = 'Type of Brewery';
formLabelEl.append(formLabelH3);

// form select
const formSelectEl = document.createElement('select');
formSelectEl.setAttribute('id', 'filter-by-type');
formSelectEl.setAttribute('name', 'filter-by-type');

// form options
const selectOptionTypeEl = document.createElement('option');
selectOptionTypeEl.setAttribute('value', '');
selectOptionTypeEl.innerText = 'Select a type...';

const selectOptionMicroEl = document.createElement('option');
selectOptionMicroEl.setAttribute('value', 'micro');
selectOptionMicroEl.innerText = 'Micro';

const selectOptionRegionalEl = document.createElement('option');
selectOptionRegionalEl.setAttribute('value', 'regional');
selectOptionRegionalEl.innerText = 'Reginal';

const selectOptionBrewpubEl = document.createElement('option');
selectOptionBrewpubEl.setAttribute('value', 'brewpub');
selectOptionBrewpubEl.innerText = 'BrewPub';

formSelectEl.append(
  selectOptionTypeEl,
  selectOptionMicroEl,
  selectOptionRegionalEl,
  selectOptionBrewpubEl
);

formEl.append(formLabelEl, formSelectEl);

// Div element
const divEl = document.createElement('div');
divEl.setAttribute('class', 'filter-by-city-heading');

const divH3El = document.createElement('h3');
divH3El.innerText = 'Cities';
const divBtn = document.createElement('button');
divBtn.setAttribute('class', 'clear-all-btn');
divBtn.innerText = 'clear all';

divEl.append(divH3El, divBtn);

// Second form
const filterByCityFormEl = document.createElement('form');
filterByCityFormEl.setAttribute('id', 'filter-by-city-form');

const filterByCityInputOne = document.createElement('input');
filterByCityInputOne.setAttribute('type', 'checkbox');
filterByCityInputOne.setAttribute('name', 'chardon');
filterByCityInputOne.setAttribute('value', 'chardon');

const filterLabelEl = document.createElement('label');
filterLabelEl.setAttribute('for', 'chardon');
filterLabelEl.innerText = 'Chardon';

const filterByCityInputTwo = document.createElement('input');
filterByCityInputTwo.setAttribute('type', 'checkbox');
filterByCityInputTwo.setAttribute('name', 'cincinnati');
filterByCityInputTwo.setAttribute('value', 'cincinnati');

const secondFilterLabelEl = document.createElement('label');
secondFilterLabelEl.setAttribute('for', 'cincinnati');
secondFilterLabelEl.innerText = 'Cincinnati';

filterByCityFormEl.append(
  filterByCityInputOne,
  filterLabelEl,
  filterByCityInputTwo,
  secondFilterLabelEl
);

function createFilterAsideSection() {
  const asideEl = document.createElement('aside');
  asideEl.setAttribute('class', 'filters-section');

  asideEl.append(h2El, formEl, divEl, filterByCityFormEl);
  return asideEl;
}
export { createFilterAsideSection };
