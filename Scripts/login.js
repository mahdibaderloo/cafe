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

function login() {
  window.location.href = "dashboard.html";
}

window.history.pushState(null, null, window.location.href);
window.addEventListener("popstate", () => {
  window.location.href = "index.html";
});
