const listH1El = document.createElement('h1');
listH1El.innerText = 'List of Breweries';

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

const formInput = document.createElement('input');
formInput.setAttribute(
  'id',
  'search-breweries',
  'name',
  'search-breweries',
  'type',
  'text'
);
