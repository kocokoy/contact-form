const contactFormButton = document.querySelector('.submit-btn');
const firstNameElement = document.querySelector('.jsFirstNameSection');
const lastNameElement = document.querySelector('.jsLastNameSection');
const emailElement = document.querySelector('.jsEmailSection');
const generalSectionElement = document.querySelector('.jsGeneralRadioQueryTypeSection');
const supportSectionElement = document.querySelector('.jsSupportRadioQueryTypeSection');
const generalRadioElement = document.querySelector('.jsGeneralRadio');
const supportRadioElement = document.querySelector('.jsSupportRadio');

let firstName = '';


contactFormButton.addEventListener('click', () => {
  const firsNameValue = firstNameElement.value;
  const lastNameValue = lastNameElement.value;
  const emailValue = emailElement.value;

  console.log(firsNameValue);
  console.log(lastNameValue);
  console.log(emailValue);
});

let generalRadioChecked = false;
let supportRadioChecked = false;

generalRadioElement.addEventListener('click', () => {
  
  if(generalRadioChecked){
    generalSectionElement.classList.remove('query-type-radio-clicked')
    generalRadioElement.checked = false;
    generalRadioChecked = false;
  }else{
    generalSectionElement.classList.add('query-type-radio-clicked');
    supportSectionElement.classList.remove('query-type-radio-clicked');
    supportRadioElement.checked = false;
    supportRadioChecked = false;
    generalRadioChecked = true;
  }
});

supportRadioElement.addEventListener('click', () => {
  if(supportRadioChecked){
    supportSectionElement.classList.remove('query-type-radio-clicked');
    supportRadioElement.checked = false;
    supportRadioChecked = false;
  }else{
    supportSectionElement.classList.add('query-type-radio-clicked');
    generalSectionElement.classList.remove('query-type-radio-clicked')
    generalRadioElement.checked = false;
    generalRadioChecked = false;
    supportRadioChecked = true;
  }
});