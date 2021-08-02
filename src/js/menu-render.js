import menuElementsTpl from '/templates/menu-elem.hbs';
import menuItems from '/menu.json';
import refs from './references';

const parsedPage = menuElementsTpl(menuItems);

refs.menu.insertAdjacentHTML('beforeend', parsedPage);
