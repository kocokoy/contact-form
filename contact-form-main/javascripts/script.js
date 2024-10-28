const contactFormButton = document.querySelector('.submit-btn');
const firstNameElement = document.querySelector('.jsFirstNameSection');
const lastNameElement = document.querySelector('.jsLastNameSection');
const emailElement = document.querySelector('.jsEmailSection');
const generalSectionElement = document.querySelector('.jsGeneralRadioQueryTypeSection');
const supportSectionElement = document.querySelector('.jsSupportRadioQueryTypeSection');
const generalRadioElement = document.querySelector('.jsGeneralRadio');
const supportRadioElement = document.querySelector('.jsSupportRadio');
const messageSectionTextAreaElement = document.querySelector('.jsMessageSectionTextArea');
const consentSectionElement = document.querySelector('.jsConsentCheckbox');
const requiredFieldsElement = document.querySelectorAll('.require-field-message');
const alertBadgeElement = document.querySelector('.alert-badge');

let firstName = '';
let generalRadioChecked = false;
let supportRadioChecked = false;


contactFormButton.addEventListener('click', () => {
  const firsNameValue = firstNameElement.value;
  const lastNameValue = lastNameElement.value;
  const emailValue = emailElement.value;
  const messageValue = messageSectionTextAreaElement.value;
  const consentValue = consentSectionElement.checked;
  const generalRadioValue = generalRadioElement.checked;
  const supportRadioValue = supportRadioElement.checked;
  


  if(!(firsNameValue && lastNameValue && emailValue && messageValue && consentValue && (generalRadioValue || supportRadioValue))){

    let arr = [firsNameValue,lastNameValue,emailValue,messageValue,consentValue,generalRadioValue,supportRadioValue];

    // console.log(arr.filter(ele => ele === '' || ele === false));
    requiredFieldsElement.forEach((element) => {
      element.classList.add('alert-require-field-message');
    })
  }else{
    setTimeout(() => {
      alertBadgeElement.classList.add('show-alert'); 
    }, 100);
    setTimeout(() => {
      alertBadgeElement.classList.remove('show-alert'); 
    }, 3000);
    requiredFieldsElement.forEach((element) => {
      element.classList.remove('alert-require-field-message');
    })

    firstNameElement.value = '';
    lastNameElement.value = '';
    emailElement.value = '';
    generalSectionElement.classList.remove('query-type-radio-clicked');
    supportSectionElement.classList.remove('query-type-radio-clicked');
    messageSectionTextAreaElement.value = '';
    supportRadioElement.checked = false;
    supportRadioValue.checked = false;
    consentSectionElement.checked = false;

  }

});



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