import { isValidAdmin } from "./apiAdmins.js";
import { toast } from "./toast.js";

const loginBtn = document.querySelector(".login-btn");
let emailInput = document.querySelector(".email-input");
let passwordInput = document.querySelector(".password-input");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let emailInputValue = emailInput.value;
  let passwordInputValue = passwordInput.value;

  isValidAdmin(emailInputValue, passwordInputValue).then((data) => {
    if (data) {
      toast("ورود موفق", "success");
      login();
    } else {
      toast("ایمیل یا پسورد اشتباه وارد شده :(", "error");
    }
  });
});

function login() {
  window.location.href = "dashboard.html";
}

window.history.pushState(null, null, window.location.href);
window.addEventListener("popstate", () => {
  window.location.href = "index.html";
});
