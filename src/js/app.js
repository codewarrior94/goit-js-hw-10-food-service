import menuElementsTpl from '/templates/menu-elem.hbs';
import menuItems from '/menu.json';

// console.log(menuElementsTpl(menuItems));

const refs = {
  menu: document.querySelector('.js-menu'),
};

const parsedPage = menuElementsTpl(menuItems);
refs.menu.insertAdjacentHTML('beforeend', parsedPage);

/* 
   ### Реализация переключения темы ###
*/
