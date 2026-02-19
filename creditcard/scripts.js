function displayError(msg) {
  document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function submitHandler(event) {
  event.preventDefault();

  displayError('');

  let errorMsg = '';

  const cardNumberInput = document.querySelector('#creditCardNumber');
  const cardNum = cardNumberInput.value.trim(); 

  
  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Invalid credit card number\n';
  }


  const expMonth = Number(document.querySelector('#month').value);
  const expYear = Number(document.querySelector('#year').value);
  const currentDate = new Date();

  const fullExpYear = 2000 + expYear; 
  if (
    fullExpYear < currentDate.getFullYear() ||
    (fullExpYear === currentDate.getFullYear() && expMonth <= currentDate.getMonth() + 1)
  ) {
    errorMsg += 'Card is expired\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return; 
  }


  const formContainer = document.querySelector('#cardInfo');
  formContainer.innerHTML = '<h2>Thank you for shopping with us!</h2>';
}


document.querySelector('#cardInfo').addEventListener('submit', submitHandler);
