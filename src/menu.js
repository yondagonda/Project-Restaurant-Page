function loadMenu() {
  const menuButton = document.querySelector('.menuTab');
  menuButton.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('title');
    menuTitle.innerText = 'Our Menu';

    content.appendChild(menuTitle);
  });
}

export default loadMenu;
