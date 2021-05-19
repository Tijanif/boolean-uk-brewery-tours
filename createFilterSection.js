const createFilterSection = () => {
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

  return formEl;
};

export { createFilterSection };

// <form id="filter-by-type-form" autocompete="off">
//   <label for="filter-by-type"><h3>Type of Brewery</h3></label>
//   <select name="filter-by-type" id="filter-by-type">
//     <option value="">Select a type...</option>
//     <option value="micro">Micro</option>
//     <option value="regional">Regional</option>
//     <option value="brewpub">Brewpub</option>
//   </select>
// </form>
// <div class="filter-by-city-heading">
//   <h3>Cities</h3>
//   <button class="clear-all-btn">clear all</button>
// </div>
// <form id="filter-by-city-form">
//   <input type="checkbox" name="chardon" value="chardon" /><label for="chardon"
//     >Chardon</label
//   ><input type="checkbox" name="cincinnati" value="cincinnati" /><label
//     for="cincinnati"
//     >Cincinnati</label
//   >
//   // More checkboxes
// </form>
