import items from "./db.js";

const container = document.querySelector(".container");
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
const teaGlassesSection = document.querySelector(".tea-glasses-section");
const glasses = document.querySelectorAll(".glass");
const popupSection = document.querySelector(".popup-section");
const popupImage = document.querySelector(".popup-image");
const productTitleInput = document.querySelector(".product-title-input");
const productPriceInput = document.querySelector(".product-price-input");
const productDescInput = document.querySelector(".product-desc-input");
const buttons = document.querySelector(".buttons");

menuIcon.addEventListener("click", () => {
  menu.style.right = "0";
});

menuItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    let route = "/";
    switch (e.target.parentElement.id) {
      case "dashboard-btn":
        route = "#/dashboard";
        break;
      case "products-btn":
        route = "#/products";

        break;
      case "profile-btn":
        route = "#/profile";
        break;
    }
    location.hash = route;
    navigateTo(route);
  });
});

function navigateTo(route) {
  switch (route) {
    case "#/dashboard":
      dashboardSection.style.display = "flex";
      CategoriesSection.style.display = "none";
      profileSection.style.display = "none";
      headerTitle.innerHTML = "داشبورد";
      break;
    case "#/products":
      dashboardSection.style.display = "none";
      CategoriesSection.style.display = "flex";
      profileSection.style.display = "none";
      headerTitle.innerHTML = "محصولات";
      break;
    case "#/profile":
      dashboardSection.style.display = "none";
      CategoriesSection.style.display = "none";
      profileSection.style.display = "flex";
      headerTitle.innerHTML = "پروفایل";
      break;
    default:
      dashboardSection.style.display = "flex";
      CategoriesSection.style.display = "none";
      profileSection.style.display = "none";
      headerTitle.innerHTML = "داشبورد";
  }
}

categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    switch (e.target.dataset.item) {
      case "cold-drink":
        generateItems("cold");
        break;
      case "hot-drink":
        generateItems("hot");
        break;
      case "shake":
        generateItems("shake");
        break;
      case "cake":
        generateItems("cake");
        break;
      case "snack":
        generateItems("snack");
        break;
      case "bubble-tea":
        generateItems("bubbleTea");
        break;
      case "hot-coffee":
        selectLine("hot-coffee");
        break;
      case "cold-coffee":
        selectLine("cold-coffee");
        break;
      case "tea":
        selectTeaGlass();
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
            generateItems("sadRobosta");
            break;
          case "7030r":
            generateItems("vaftad30Robosta");
            break;
          case "100a":
            generateItems("sadArabica");
            break;
          case "7030a":
            generateItems("vaftad30Arabica");
            break;
        }
      }
      if (data === "cold-coffee") {
        switch (e.target.dataset.line) {
          case "100r":
            generateItems("coldCoffee_100r");
            break;
          case "7030r":
            generateItems("coldCoffee_7030r");
            break;
          case "100a":
            generateItems("coldCoffee_100a");
            break;
          case "7030a":
            generateItems("coldCoffee_7030a");
            break;
        }
      }
      linesSection.style.display = "none";
    });
  });
}

function selectTeaGlass() {
  teaGlassesSection.style.display = "flex";

  glasses.forEach((glass) => {
    glass.addEventListener("click", (e) => {
      e.preventDefault();
      switch (e.target.dataset.line) {
        case "tea-1":
          generateItems("tea_1");
          break;
        case "tea-2":
          generateItems("tea_2");
          break;
      }
      teaGlassesSection.style.display = "none";
    });
  });
}

function generateItems(data) {
  ProductsSection.style.display = "block";
  ProductsWrapper.innerHTML = "";

  let selectedItems = items.filter((item) => item.category === data);
  selectedItems.forEach((item) => {
    ProductsWrapper.insertAdjacentHTML(
      "beforeend",
      `<li class="product" onclick=(editProduct(${item.id}))>
            <img
              src=${item.image}
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

function editProduct(id) {
  popupSection.style.display = "block";
  container.style.filter = "blur(10px)";
  container.style.pointerEvents = "none";

  let selectedItem = items.filter((item) => item.id === id);

  buttons.id = id;

  productTitleInput.value = selectedItem[0].product;
  productPriceInput.value = selectedItem[0].price;
  popupImage.src = selectedItem[0].image;
  productDescInput.value = selectedItem[0].desc ? selectedItem[0].desc : "";
}

function closePopup() {
  popupSection.style.display = "none";
  container.style.filter = "blur(0px)";
  container.style.pointerEvents = "unset";
}

function deleteProduct(el) {
  console.log(el.parentElement.id);
}

function submitChanges(el) {
  console.log(el.parentElement.id);
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

window.addEventListener("load", () => {
  navigateTo(location.hash || "#/dashboard");
});

window.addEventListener("hashchange", () => {
  navigateTo(location.hash);
});

window.backToCategories = backToCategories;
window.editProduct = editProduct;
window.closePopup = closePopup;
window.deleteProduct = deleteProduct;
window.submitChanges = submitChanges;
