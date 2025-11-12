const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const input = form.elements['email'];
const textarea = form.elements['message'];

formData = JSON.parse(localStorage.getItem(localStorageKey)) || formData;

input.value = formData.email;
textarea.value = formData.message;

form.addEventListener('input', evt => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  );
  formData = JSON.parse(localStorage.getItem(localStorageKey));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!input.value || !textarea.value) {
    alert('Please fill in all the fields!');
    return;
  }
  console.log(JSON.stringify(formData));
  localStorage.removeItem(localStorageKey);
  formData = {
    email: '',
    message: '',
  };
  form.reset();
});
