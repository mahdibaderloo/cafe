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
const CategoriesSection = document.querySelector(".categories-section");
const profileSection = document.querySelector(".profile-section");
const categories = document.querySelectorAll(".category");
const ProductsSection = document.querySelector(".products-section");
const ProductsWrapper = document.querySelector(".products");
const linesSection = document.querySelector(".lines-section");
const lines = document.querySelectorAll(".line-link");

menuIcon.addEventListener("click", () => {
  menu.style.right = "0";
});

menuItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    switch (e.target.parentElement.id) {
      case "dashboard-btn":
        dashboardSection.style.display = "flex";
        CategoriesSection.style.display = "none";
        profileSection.style.display = "none";
        headerTitle.innerHTML = "داشبورد";
        break;
      case "products-btn":
        dashboardSection.style.display = "none";
        CategoriesSection.style.display = "flex";
        profileSection.style.display = "none";
        headerTitle.innerHTML = "محصولات";
        break;
      case "profile-btn":
        dashboardSection.style.display = "none";
        CategoriesSection.style.display = "none";
        profileSection.style.display = "flex";
        headerTitle.innerHTML = "پروفایل";
        break;
    }
  });
});

categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    switch (e.target.dataset.item) {
      case "cold-drink":
        generateItems(cold);
        break;
      case "hot-drink":
        generateItems(hot);
        break;
      case "shake":
        generateItems(shake);
        break;
      case "cake":
        generateItems(cake);
        break;
      case "snack":
        generateItems(snack);
        break;
      case "bubble-tea":
        generateItems(bubbleTea);
        break;
      case "hot-coffee":
        selectLine("hot-coffee");
        break;
      case "cold-coffee":
        selectLine("cold-coffee");
        break;
      case "tea":
        selectTeaGlass("tea");
        break;
    }
    CategoriesSection.style.display = "none";
  });
});

function selectLine(data) {
  linesSection.style.display = "flex";

  lines.forEach((line) => {
    line.addEventListener("click", (e) => {
      e.preventDefault();
      if (data === "hot-coffee") {
        switch (e.target.dataset.line) {
          case "100r":
            generateItems(sadRobosta);
            break;
          case "7030r":
            generateItems(vaftad30Robosta);
            break;
          case "100a":
            generateItems(sadArabica);
            break;
          case "7030a":
            generateItems(vaftad30Arabica);
            break;
        }
      }
      if (data === "cold-coffee") {
        switch (e.target.dataset.line) {
          case "100r":
            generateItems(coldCoffee_100r);
            break;
          case "7030r":
            generateItems(coldCoffee_7030r);
            break;
          case "100a":
            generateItems(coldCoffee_100a);
            break;
          case "7030a":
            generateItems(coldCoffee_7030a);
            break;
        }
      }
      linesSection.style.display = "none";
    });
  });
}

function selectTeaGlass(data) {
  console.log(data);
}

function generateItems(items) {
  ProductsSection.style.display = "block";
  ProductsWrapper.innerHTML = "";
  items.forEach((item) => {
    ProductsWrapper.insertAdjacentHTML(
      "beforeend",
      `<li class="product">
            <img
              src="Images/Cafe-Au-Lait-001s.jpg"
              alt="pic"
              class="product-img"
            />
            <div>
              <p class="product-title">${item.product}</p>
              <p class="product-price">${item.price.toLocaleString()}</p>
            </div>
          </li>`
    );
  });
}

function backToCategories() {
  ProductsSection.style.display = "none";
  CategoriesSection.style.display = "flex";
}

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

window.backToCategories = backToCategories;
