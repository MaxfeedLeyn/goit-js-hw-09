const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

let formDate = {
  email: '',
  message: '',
};

const input = form.elements['email'];
const textarea = form.elements['message'];

formDate = JSON.parse(localStorage.getItem(localStorageKey)) || formDate;

input.value = formDate.email;
textarea.value = formDate.message;

form.addEventListener('input', evt => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      ...formDate,
      [evt.target.name]: evt.target.value,
    })
  );
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!input.value || !textarea.value) {
    alert('Please fill in all the fields!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  form.reset();
});
