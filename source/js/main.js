import {iosVhFix} from './utils/ios-vh-fix';
import {activateMainNav} from './modules/modals/burger';
import {openInfoCards} from './modules/modals/cruises-cards';
import {addListenersForForm} from './modules/modals/form';
import './modules/modals/map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  addListenersForForm();
  activateMainNav();
  openInfoCards();
});
