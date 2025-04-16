import {
  sadRobosta,
  vaftad30Robosta,
  vaftad30Arabica,
  sadArabica,
  hot,
  coldCoffee_100r,
  coldCoffee_7030r,
  coldCoffee_7030a,
  coldCoffee_100a,
  shake,
  cold,
  cake,
  snack,
  tea_1,
  tea_2,
  bubbleTea,
} from "../Scripts/db.js";

const headerTitle = document.querySelector(".header-title");
const menu = document.querySelector(".menu-section");
const menuIcon = document.querySelector(".menu-icon");
const menuItem = document.querySelectorAll(".menu-item");
const dashboardSection = document.querySelector(".dashboard-section");
const productsSection = document.querySelector(".products-section");
const profileSection = document.querySelector(".profile-section");
const categories = document.querySelectorAll(".category");

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

categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    console.log(e.target.dataset.item);
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
