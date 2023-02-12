function loadContact() {
  const contactButton = document.querySelector('.contactTab');
  contactButton.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactTitle = document.createElement('div');
    contactTitle.classList.add('title');
    contactTitle.innerText = 'Contact Us';

    content.appendChild(contactTitle);
  });
}

export default loadContact;
