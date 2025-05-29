import { editAdminData, getAdmin } from "./apiAdmins.js";
import { getItems, updateItem } from "./apiItems.js";

const items = [];

async function loadItems() {
  const data = await getItems();

  items.length = 0;
  data.forEach((dataItem) => items.push(dataItem));
}

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
const popupForm = document.querySelector(".popup-main");
const popupImage = document.querySelector(".popup-image");
const popupImageInput = document.querySelector(".popup-image-input");
const productTitleInput = document.querySelector(".product-title-input");
const productPriceInput = document.querySelector(".product-price-input");
const productDescInput = document.querySelector(".product-desc-input");
const buttons = document.querySelector(".buttons");
const profilePopupSection = document.querySelector(".profile-popup-section");
const profilePopupForm = document.querySelector(".profile-popup-main");
const editProfileBtn = document.querySelector(".edit-profile-btn");
const profileImg = document.querySelector(".profile-img");
const profileUsername = document.querySelector(".username");
const profileEmail = document.querySelector(".email");
const profileImagePopup = document.querySelector(".profile-image");
const profileUsernameInput = document.querySelector(".profile-username-input");
const profileEmailInput = document.querySelector(".profile-email-input");
const profilePasswordInput = document.querySelector(".profile-password-input");
const profileImageInput = document.querySelector(".profile-image-input");

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
  popupSection.style.display = "flex";
  container.style.filter = "blur(10px)";
  container.style.pointerEvents = "none";

  if (window.innerWidth > 1023) {
    let leftPos = container.offsetLeft + 100;
    popupSection.style.left = `${leftPos}px`;
  }

  let selectedItem = items.filter((item) => item.id === id);

  buttons.id = id;

  productTitleInput.value = selectedItem[0].product;
  productPriceInput.value = selectedItem[0].price;
  popupImage.src = selectedItem[0].image
    ? selectedItem[0].image
    : "Images/Cafe-Au-Lait-001s.jpg";
  productDescInput.value = selectedItem[0].desc ? selectedItem[0].desc : "";

  popupForm.onsubmit = async function (e) {
    e.preventDefault();

    const item = {
      id: Number(id),
      product: productTitleInput.value,
      price: Number(productPriceInput.value),
      image: popupImage.src,
      desc: productDescInput.value,
    };

    try {
      await updateItem(item);
      console.log("آپدیت موفق بود");
      await loadItems();
      closePopup();
      generateItems(selectedItem[0].category);
    } catch (err) {
      console.error("خطا در آپدیت:", err.message);
    }
  };
}

popupImageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const render = new FileReader();
    render.onload = (e) => {
      popupImage.src = e.target.result;
    };
    render.readAsDataURL(file);
  }
});

function closePopup() {
  popupSection.style.display = "none";
  profilePopupSection.style.display = "none";
  container.style.filter = "blur(0px)";
  container.style.pointerEvents = "unset";
}

function deleteProduct(el) {
  console.log(el.parentElement.id);
}

async function loadAdmin() {
  const data = await getAdmin();
  profilePopupSection.id = data.id;
  profileImg.src = data.image ? data.image : "Images/profile.svg";
  profileUsername.innerHTML = data.username;
  profileEmail.innerHTML = data.email;

  profileImagePopup.src = data.image ? data.image : "Images/profile.svg";
  profileUsernameInput.value = data.username;
  profileEmailInput.value = data.email;
  profilePasswordInput.value = data.password;
}

editProfileBtn.addEventListener("click", () => {
  profilePopupSection.style.display = "flex";
  container.style.filter = "blur(10px)";
  container.style.pointerEvents = "none";

  if (window.innerWidth > 1023) {
    let leftPos = container.offsetLeft + 100;
    profilePopupSection.style.left = `${leftPos}px`;
  }
});

profilePopupForm.onsubmit = async function (e) {
  e.preventDefault();

  const adminData = {
    id: profilePopupSection.id,
    username: profileUsernameInput.value,
    email: profileEmailInput.value,
    password: profilePasswordInput.value,
    image: profileImagePopup.src,
  };

  try {
    await editAdminData(adminData);
    console.log("آپدیت موفق بود");
    loadAdmin();
    closePopup();
  } catch (err) {
    console.error("خطا در آپدیت:", err.message);
  }
};

profileImageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const render = new FileReader();
    render.onload = (e) => {
      profileImagePopup.src = e.target.result;
    };
    render.readAsDataURL(file);
  }
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

window.addEventListener("load", () => {
  navigateTo(location.hash || "#/dashboard");
  loadItems();
  loadAdmin();
});

window.addEventListener("hashchange", () => {
  navigateTo(location.hash);
});

window.backToCategories = backToCategories;
window.editProduct = editProduct;
window.closePopup = closePopup;
window.deleteProduct = deleteProduct;
