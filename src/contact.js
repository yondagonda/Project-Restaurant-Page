function loadContact() {
  const contactButton = document.querySelector('.contactTab');
  contactButton.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactTitle = document.createElement('div');
    contactTitle.classList.add('title');
    contactTitle.innerText = 'Contact Us';
    content.appendChild(contactTitle);

    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');
    content.appendChild(contactSection);

    const contactPhoto1 = document.createElement('div');
    contactPhoto1.classList.add('contact-photo-1');
    contactSection.appendChild(contactPhoto1);
    const photo1 = document.createElement('img');
    photo1.classList.add('contact-photo-first');
    photo1.src =
      'https://media.istockphoto.com/id/1063976282/photo/chef-takes-out-a-hot-pizza-from-the-oven.jpg?s=612x612&w=0&k=20&c=8p5LDDoPWOnXWKVoZXwhOCIPaMS5pQANXy0NvolWD_k=';
    contactPhoto1.appendChild(photo1);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    contactSection.appendChild(contactContainer);

    const contactUs = document.createElement('div');
    contactUs.classList.add('contact-us');
    contactContainer.appendChild(contactUs);
    contactUs.innerHTML = 'Contact Us';

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
    contactContainer.appendChild(contactForm);

    const formName = document.createElement('div');
    formName.classList.add('form-item');
    contactForm.appendChild(formName);

    const nameLabel = document.createElement('label');
    nameLabel.classList.add('label-name');
    formName.appendChild(nameLabel);
    nameLabel.innerHTML = 'Name';

    const nameInput = document.createElement('input');
    nameInput.classList.add('input-name');
    formName.appendChild(nameInput);

    const formEmail = document.createElement('div');
    formEmail.classList.add('form-item');
    contactForm.appendChild(formEmail);

    const emailLabel = document.createElement('label');
    emailLabel.classList.add('label-email');
    formEmail.appendChild(emailLabel);
    emailLabel.innerHTML = 'Email';

    const emailInput = document.createElement('input');
    emailInput.classList.add('input-email');
    formEmail.appendChild(emailInput);

    const formInquiry = document.createElement('div');
    formInquiry.classList.add('form-item');
    contactForm.appendChild(formInquiry);

    const InquiryLabel = document.createElement('label');
    InquiryLabel.classList.add('label-inquiry');
    formInquiry.appendChild(InquiryLabel);
    InquiryLabel.innerHTML = 'Inquiry';

    const InquiryInput = document.createElement('textarea');
    InquiryInput.classList.add('label-inquiry-input');
    formInquiry.appendChild(InquiryInput);

    const contactSubmitButton = document.createElement('button');
    contactSubmitButton.classList.add('contact-submit-button');
    contactForm.appendChild(contactSubmitButton);
    contactSubmitButton.innerHTML = 'Submit';
    contactSubmitButton.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
}

export default loadContact;
