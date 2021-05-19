import { createFilterSection } from './createFilterSection.js';

function createFilterAsideSection() {
  const asideEl = document.createElement('aside');
  asideEl.setAttribute('class', 'filters-section');

  const functionEl = createFilterSection();
  asideEl.append(h2El, functionEl);
  return asideEl;
}

export { createFilterAsideSection };
