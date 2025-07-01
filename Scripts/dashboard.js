import { editAdminData, getAdmin } from "./apiAdmins.js";
import { getItems, updateItem } from "./apiItems.js";
import { getOrder, getOrders } from "./apiOrders.js";

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
const ordersSection = document.querySelector(".orders-section");
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
const orders = document.querySelector(".orders");
const orderPopupSection = document.querySelector(".order-popup-section");
const ordersButton = document.getElementById("orders-btn");
const orderUsername = document.querySelector(".user-information-name");
const orderMobile = document.querySelector(".user-information-mobile");
const orderData = document.querySelector(".order-data");
const orderTotalPrice = document.querySelector(".order-total-price");
const orderId = document.querySelector(".order-information-id");
const orderDate = document.querySelector(".order-information-date");
const orderTime = document.querySelector(".order-information-time");

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
      case "orders-btn":
        route = "#/orders";
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
      ordersSection.style.display = "none";
      profileSection.style.display = "none";
      headerTitle.innerHTML = "داشبورد";
      break;
    case "#/products":
      dashboardSection.style.display = "none";
      CategoriesSection.style.display = "flex";
      ordersSection.style.display = "none";
      profileSection.style.display = "none";
      headerTitle.innerHTML = "محصولات";
      break;
    case "#/orders":
      dashboardSection.style.display = "none";
      CategoriesSection.style.display = "none";
      ordersSection.style.display = "flex";
      profileSection.style.display = "none";
      headerTitle.innerHTML = "سفارشات";
      break;
    case "#/profile":
      dashboardSection.style.display = "none";
      CategoriesSection.style.display = "none";
      profileSection.style.display = "flex";
      ordersSection.style.display = "none";
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
  orderPopupSection.style.display = "none";
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

async function loadOrders() {
  const apiOrders = await getOrders();
  orders.innerHTML = "";
  await apiOrders.forEach((order) => {
    orders.insertAdjacentHTML(
      "afterbegin",
      `         <tr onclick={showOrder("${order.id}")} class="orders-item">
                  <td>${order.id}</td>
                  <td>${order.username}</td>
                  <td>${order.total_price.toLocaleString()}</td>
                  <td>${order.mobile === null ? "---" : `0${order.mobile}`}</td>
                </tr>
              `
    );
  });
}

ordersButton.addEventListener("click", () => {
  loadOrders();
});

async function showOrder(id) {
  const order = await getOrder(id);
  openOrder(order);
}

function openOrder(order) {
  orderPopupSection.style.display = "flex";
  container.style.filter = "blur(10px)";
  container.style.pointerEvents = "none";

  if (window.innerWidth > 1023) {
    let leftPos = container.offsetLeft + 100;
    profilePopupSection.style.left = `${leftPos}px`;
  }

  orderId.innerHTML = order[0].id;
  orderUsername.innerHTML = order[0].username;
  orderMobile.innerHTML = order[0].mobile;
  orderTotalPrice.innerHTML = order[0].total_price.toLocaleString();

  orderData.innerHTML = shamsiDate(order[0].created_at);
  orderTime.innerHTML = order[0].created_at.slice(11, 19);

  orderData.innerHTML = "";
  JSON.parse(order[0].order).map((item) =>
    orderData.insertAdjacentHTML(
      "beforeend",
      `<tr>
          <td>${item.product}</td>
          <td>${item.price.toLocaleString()}</td>
          <td>${item.count}</td>
      </tr>`
    )
  );
}

function shamsiDate(time) {
  const date = new Date(time);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formatter = new Intl.DateTimeFormat(
    "fa-IR-u-ca-persian-nu-latn",
    options
  );
  return formatter.format(date);
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
  loadItems();
  loadAdmin();
  loadOrders();
});

window.addEventListener("hashchange", () => {
  navigateTo(location.hash);
});

window.backToCategories = backToCategories;
window.editProduct = editProduct;
window.closePopup = closePopup;
window.deleteProduct = deleteProduct;
window.showOrder = showOrder;
