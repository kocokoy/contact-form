const contactFormButton = document.querySelector('.submit-btn');
const firstNameElement = document.querySelector('.jsFirstNameSection');
const lastNameElement = document.querySelector('.jsLastNameSection');
const emailElement = document.querySelector('.jsEmailSection');
const generalRadioElement = document.querySelector('.jsGeneralRadio');
const RadioElement = document.querySelector('.jsRadio');

let firstName = '';


contactFormButton.addEventListener('click', () => {
  const firsNameValue = firstNameElement.value;
  const lastNameValue = lastNameElement.value;
  const emailValue = emailElement.value;

  console.log(firsNameValue);
  console.log(lastNameValue);
  console.log(emailValue);
})

RadioElement.addEventListener('click',() => {
  console.log(RadioElement.checked);
  if(!RadioElement.checked){
    RadioElement.checked = true;
  }

  if(RadioElement.checked){
    RadioElement.checked = false;
  }

 
})