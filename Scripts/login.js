const username = "liiloadmin";
const password = "liiloadmin";

const loginBtn = document.querySelector(".login-btn");
let usernameInput = document.querySelector(".username-input");
let passwordInput = document.querySelector(".password-input");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let usernameInputValue = usernameInput.value;
  let passwordInputValue = passwordInput.value;
  validation(usernameInputValue, passwordInputValue);
});

function validation(usernameValue, passwordValue) {
  if (usernameValue === username && passwordValue === password) {
    login();
  } else {
    alert("نام کاربری یا پسورد اشتباه وارد شده :(");
  }
}
