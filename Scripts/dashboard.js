const headerTitle = document.querySelector(".header-title");
const menu = document.querySelector(".menu-section");
const menuIcon = document.querySelector(".menu-icon");
const menuItem = document.querySelectorAll(".menu-item");
const dashboardSection = document.querySelector(".dashboard-section");
const productsSection = document.querySelector(".products-section");
const profileSection = document.querySelector(".profile-section");

menuIcon.addEventListener("click", () => {
  menu.style.right = "0";
});

menuItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.parentElement.id);
    switch (e.target.parentElement.id) {
      case "dashboard-btn":
        dashboardSection.style.display = "flex";
        productsSection.style.display = "none";
        profileSection.style.display = "none";
        headerTitle.innerHTML = "داشبورد";
        break;
      case "products-btn":
        dashboardSection.style.display = "none";
        productsSection.style.display = "flex";
        profileSection.style.display = "none";
        headerTitle.innerHTML = "محصولات";
        break;
      case "profile-btn":
        dashboardSection.style.display = "none";
        productsSection.style.display = "none";
        profileSection.style.display = "flex";
        headerTitle.innerHTML = "پروفایل";
        break;
    }
  });
});

window.addEventListener("click", (e) => {
  if (
    e.target.className !== "menu" &&
    e.target.className !== "logo" &&
    e.target.className !== "menu-section" &&
    e.target.className !== "icon menu-icon"
  ) {
    menu.style.right = "-60%";
  }
});
