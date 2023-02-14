function loadMenu() {
  const menuButton = document.querySelector('.menuTab');
  menuButton.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('title');
    menuTitle.innerText = 'Our Menu';

    content.appendChild(menuTitle);

    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');

    content.appendChild(menuSection);

    const menuLinks = document.createElement('ul');
    menuLinks.classList.add('menu-links');
    menuSection.appendChild(menuLinks);

    const menuMain = document.createElement('li');
    menuMain.classList.add('menu-link-item');
    menuMain.innerText = 'Main';
    menuLinks.appendChild(menuMain);

    const menuSides = document.createElement('li');
    menuSides.classList.add('menu-link-item');
    menuSides.innerText = 'Sides';
    menuLinks.appendChild(menuSides);

    const menuDrinks = document.createElement('li');
    menuDrinks.classList.add('menu-link-item');
    menuDrinks.innerText = 'Drinks';
    menuLinks.appendChild(menuDrinks);

    const menuDesserts = document.createElement('li');
    menuDesserts.classList.add('menu-link-item');
    menuDesserts.innerText = 'Desserts';
    menuLinks.appendChild(menuDesserts);

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');
    menuSection.appendChild(menuWrapper);

    const menuItemOne = document.createElement('div');
    menuItemOne.classList.add('menu-item');
    menuItemOne.innerHTML = 'Margherita';
    menuWrapper.appendChild(menuItemOne);
    const margherita = document.createElement('img');
    margherita.classList.add('menu-pizzas');
    margherita.src =
      'https://images.getrecipekit.com/20220211142754-margherita-9920.jpg?aspect_ratio=4:3&quality=90&';
    menuItemOne.appendChild(margherita);

    const menuItemTwo = document.createElement('div');
    menuItemTwo.classList.add('menu-item');
    menuItemTwo.innerText = 'Pepperoni';
    menuWrapper.appendChild(menuItemTwo);
    const pepperoni = document.createElement('img');
    pepperoni.classList.add('menu-pizzas');
    pepperoni.src =
      'https://www.dogtownpizza.com/wp-content/uploads/2020/01/picking-slice-of-pepperoni-pizza-picture-id1133727757.jpg';
    menuItemTwo.appendChild(pepperoni);

    const menuItemThree = document.createElement('div');
    menuItemThree.classList.add('menu-item');
    menuItemThree.innerText = 'Garlic & Cheese';
    menuWrapper.appendChild(menuItemThree);
    const garlic = document.createElement('img');
    garlic.classList.add('menu-pizzas');
    garlic.src =
      'https://baketheneat.com/wp-content/uploads/2019/12/Super-Easy-Cheesy-Garlic-Bread-3-500x375.jpg';
    menuItemThree.appendChild(garlic);

    const menuItemFour = document.createElement('div');
    menuItemFour.classList.add('menu-item');
    menuItemFour.innerText = 'Meatlovers';
    menuWrapper.appendChild(menuItemFour);
    const meatlovers = document.createElement('img');
    meatlovers.classList.add('menu-pizzas');
    meatlovers.src =
      'https://myfoodbook.com.au/sites/default/files/styles/schema_img/public/recipe_photo/Whisk_PI_190919_Pizzas_006_MEAT_LOVERS.jpg';
    menuItemFour.appendChild(meatlovers);

    const menuItemFive = document.createElement('div');
    menuItemFive.classList.add('menu-item');
    menuItemFive.innerText = 'BBQ Chicken';
    menuWrapper.appendChild(menuItemFive);
    const bbq = document.createElement('img');
    bbq.classList.add('menu-pizzas');
    bbq.src =
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/2caca97b-77f6-48e7-837d-62642c0c9861/Derivates/12591894-e010-4a02-b04e-2627d8374298.jpg';
    menuItemFive.appendChild(bbq);

    const menuItemSix = document.createElement('div');
    menuItemSix.classList.add('menu-item');
    menuItemSix.innerText = 'Hawaiian';
    menuWrapper.appendChild(menuItemSix);
    const hawaiian = document.createElement('img');
    hawaiian.classList.add('menu-pizzas');
    hawaiian.src =
      'http://www.thesouthafrican.com/wp-content/uploads/2022/04/Hawaiian-pizza-2.jpg';
    menuItemSix.appendChild(hawaiian);

    const menuItemSeven = document.createElement('div');
    menuItemSeven.classList.add('menu-item');
    menuItemSeven.innerText = 'Americana';
    menuWrapper.appendChild(menuItemSeven);
    const americana = document.createElement('img');
    americana.classList.add('menu-pizzas');
    americana.src =
      'https://www.dominos.nl/ManagedAssets/NL/product/PAME/NL_PAME_all_hero_7544.jpg?v979234471';
    menuItemSeven.appendChild(americana);

    const menuItemEight = document.createElement('div');
    menuItemEight.classList.add('menu-item');
    menuItemEight.innerText = 'Beef & Onion';
    menuWrapper.appendChild(menuItemEight);
    const beefOnion = document.createElement('img');
    beefOnion.classList.add('menu-pizzas');
    beefOnion.src =
      'https://embed.widencdn.net/img/beef/pz4eba64j5/1120x840px/beef-pepper-and-onion-pizza-horizontal.tif?keep=c&u=7fueml';
    menuItemEight.appendChild(beefOnion);
  });
}

export default loadMenu;
