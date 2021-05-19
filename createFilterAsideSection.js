import { createFilterSection } from './createFilterSection.js';

function createFilterAsideSection() {
  const asideEl = document.createElement('aside');
  asideEl.setAttribute('class', 'filters-section');

  const functionEl = createFilterSection();
  asideEl.append(functionEl);
  return asideEl;
}

export { createFilterAsideSection };
