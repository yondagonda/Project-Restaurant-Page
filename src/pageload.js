function pageLoad() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.innerText = 'Johnys Pizzeria';

  const title = document.createElement('div');
  title.classList.add('title');
  title.innerText = 'OUR STORY';

  const descriptionHome = document.createElement('div');
  descriptionHome.classList.add('description-home');
  descriptionHome.innerText =
    'My Italian grandmother taught me how to make pizza from scratch, so here I am.';

  const hours = document.createElement('div');
  hours.classList.add('hours');
  hours.innerText = 'Hours';

  const sunday = document.createElement('p');
  sunday.classList.add('sunday');
  sunday.innerText = 'Sunday: 8am - 8pm';

  const monday = document.createElement('p');
  monday.classList.add('monday');
  monday.innerText = 'Monday: 8am - 8pm';

  const tuesday = document.createElement('p');
  tuesday.classList.add('tuesday');
  tuesday.innerText = 'Tuesday: 8am - 8pm';

  const wednesday = document.createElement('p');
  wednesday.classList.add('wednesday');
  wednesday.innerText = 'Wednesday: 8am - 8pm';

  const thursday = document.createElement('p');
  thursday.classList.add('thursday');
  thursday.innerText = 'Thursday: 8am - 8pm';

  const friday = document.createElement('p');
  friday.classList.add('friday');
  friday.innerText = 'Friday: 8am - 8pm';

  const saturday = document.createElement('p');
  saturday.classList.add('saturday');
  saturday.innerText = 'Saturday: 8am - 8pm';

  const address = document.createElement('div');
  address.classList.add('address');
  address.innerText = '123 Forest Drive, Forestville, Maine';

  content.appendChild(logo);
  content.appendChild(title);
  content.appendChild(descriptionHome);
  content.appendChild(hours);
  hours.appendChild(sunday);
  hours.appendChild(monday);
  hours.appendChild(tuesday);
  hours.appendChild(wednesday);
  hours.appendChild(thursday);
  hours.appendChild(friday);
  hours.appendChild(saturday);
}

export default pageLoad;
