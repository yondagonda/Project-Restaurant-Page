import pageLoad from './pageload';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

const header = document.querySelector('.header');

const navBar = document.createElement('div');
navBar.classList.add('navBar');
header.appendChild(navBar);

const mainTitle = document.createElement('div');
mainTitle.classList.add('mainTitle');
mainTitle.innerText = "Johny's Pizzeria";
navBar.appendChild(mainTitle);

mainTitle.addEventListener('click', () => {
  pageLoad();
});

const navButtons = document.createElement('ul');
navButtons.classList.add('navButtons');
navBar.appendChild(navButtons);

const homeTab = document.createElement('li');
homeTab.classList.add('homeTab');
homeTab.innerText = 'Home';
navButtons.appendChild(homeTab);

const menuTab = document.createElement('li');
menuTab.classList.add('menuTab');
menuTab.innerText = 'Menu';
navButtons.appendChild(menuTab);

const contactTab = document.createElement('li');
contactTab.classList.add('contactTab');
contactTab.innerText = 'Contact';
navButtons.appendChild(contactTab);

pageLoad();
loadMenu();
loadContact();

homeTab.addEventListener('click', () => {
  pageLoad();
});

menuTab.addEventListener('click', () => {
  loadMenu();
});

contactTab.addEventListener('click', () => {
  loadContact();
});
