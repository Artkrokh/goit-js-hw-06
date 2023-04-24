const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
  const inputLength = Number(event.currentTarget.dataset.length);
  const inputValue = event.currentTarget.value;
  const isValidInputLength = inputValue.length === inputLength;
  const isNotValidInputLength = inputValue.length !== inputLength;

  if (isValidInputLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else if (isNotValidInputLength) {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
}
