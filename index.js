

// Signup.html
const signIn = document.querySelector('#signin-now');
let message = 'Sorry, something went wrong';
let errorMsg = document.getElementById('error-msg');

signIn.addEventListener('click', () => {
  errorMsg.textContent = message
})