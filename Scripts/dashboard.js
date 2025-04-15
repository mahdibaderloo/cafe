const menu = document.querySelector(".menu-section");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  menu.style.right = "0";
});

window.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (
    e.target.className !== "menu" &&
    e.target.className !== "logo" &&
    e.target.className !== "menu-section" &&
    e.target.className !== "icon menu-icon"
  ) {
    menu.style.right = "-60%";
  }
});
