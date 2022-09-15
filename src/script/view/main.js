import '../component/game-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const gameListElement = document.querySelector('game-list');

  let radios = document.getElementsByName('category');

  let initValue = Array.from(radios).find(radio => radio.checked).value;

  // show initial value when radio button loaded
  window.addEventListener('load', async () => {
    try {
      const result = await DataSource.selectCategory(initValue);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  });

  // show latest value when radio checked changes
  radios.forEach(radio => {
    radio.addEventListener('change', () => onCategoryChange(radio.value), false);
  });

  const onCategoryChange = async (value) => {
    try {
      const result = await DataSource.selectCategory(value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    gameListElement.games = results;
  };

  const fallbackResult = message => {
    gameListElement.renderError(message);
  };
};

export default main;
