// Main js file

import humburger from './modules/humburger'
import skills from './modules/skills'
import overlayScrollbars from './modules/overlayScrollbars'
import swiperPortfolio from "./modules/swiperPortfolio";
import customCursor from "./modules/customCursor";

window.addEventListener('DOMContentLoaded', () => {

    humburger();
    skills();
    overlayScrollbars();
    swiperPortfolio();
    customCursor();

});
