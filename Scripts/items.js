import { getItems } from "./apiItems.js";
import { addOrder } from "./apiOrders.js";

const items = [];

const itemsWrapper = document.querySelector(".items");
const category = document.querySelectorAll(".category");
const coffeeLines = document.querySelector(".coffee-lines");
const lines = document.querySelectorAll(".line-link");
const teaGlasses = document.querySelector(".tea-glasses");
const glasses = document.querySelectorAll(".glass");
const products = document.querySelector(".products");
const totalPrice = document.querySelector(".total-price");
const shoppingCart = document.querySelector(".shopping-cart-logo");
const orderButtonBox = document.querySelector(".order_btn_box");
const orderButton = document.querySelector(".order_btn");

let productsContent = [];

category.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    itemsWrapper.innerHTML = "";

    if (event.target.dataset.item === "snack") {
      coffeeLines.style.display = "none";
      teaGlasses.style.display = "none";
      itemsWrapper.style.marginTop = "1rem";

      createListItems("snack");
    }

    if (event.target.dataset.item === "tea") {
      coffeeLines.style.display = "none";
      teaGlasses.style.display = "flex";
      itemsWrapper.style.marginTop = "1rem";

      glasses.forEach((glass) => {
        glass.addEventListener("click", (event) => {
          event.preventDefault();
          itemsWrapper.innerHTML = "";

          if (event.target.dataset.line === "tea-1") {
            createListItems("tea_1");
          }
          if (event.target.dataset.line === "tea-2") {
            createListItems("tea_2");
          }
        });
      });
    }

    if (event.target.dataset.item === "cake") {
      coffeeLines.style.display = "none";
      teaGlasses.style.display = "none";
      itemsWrapper.style.marginTop = "1rem";

      createListItems("cake");
    }

    if (event.target.dataset.item === "cold-drink") {
      coffeeLines.style.display = "none";
      teaGlasses.style.display = "none";
      itemsWrapper.style.marginTop = "1rem";

      createListItems("cold");
    }

    if (event.target.dataset.item === "shake") {
      coffeeLines.style.display = "none";
      teaGlasses.style.display = "none";
      itemsWrapper.style.marginTop = "1rem";

      createListItems("shake");
    }

    if (event.target.dataset.item === "hot-drink") {
      coffeeLines.style.display = "none";
      teaGlasses.style.display = "none";
      itemsWrapper.style.marginTop = "1rem";

      createListItems("hot");
    }

    if (event.target.dataset.item === "bubble-tea") {
      coffeeLines.style.display = "none";
      teaGlasses.style.display = "none";
      itemsWrapper.style.marginTop = "1rem";

      createListItems("bubbleTea");
    }

    if (event.target.dataset.item === "hot-coffee") {
      teaGlasses.style.display = "none";
      coffeeLines.style.display = "flex";
      itemsWrapper.style.marginTop = "5rem";

      lines.forEach((line) => {
        line.addEventListener("click", (event) => {
          event.preventDefault();
          itemsWrapper.innerHTML = "";

          if (event.target.dataset.line === "100r") {
            createListItems("sadRobosta");
          }

          if (event.target.dataset.line === "7030a") {
            createListItems("vaftad30Arabica");
          }

          if (event.target.dataset.line === "7030r") {
            createListItems("vaftad30Robosta");
          }

          if (event.target.dataset.line === "100a") {
            createListItems("sadArabica");
          }
        });
      });
    }

    if (event.target.dataset.item === "cold-coffee") {
      teaGlasses.style.display = "none";
      coffeeLines.style.display = "flex";
      itemsWrapper.style.marginTop = "5rem";

      lines.forEach((line) => {
        line.addEventListener("click", (event) => {
          event.preventDefault();
          itemsWrapper.innerHTML = "";

          if (event.target.dataset.line === "100r") {
            createListItems("coldCoffee_100r");
          }

          if (event.target.dataset.line === "7030a") {
            createListItems("coldCoffee_7030a");
          }

          if (event.target.dataset.line === "7030r") {
            createListItems("coldCoffee_7030r");
          }

          if (event.target.dataset.line === "100a") {
            createListItems("coldCoffee_100a");
          }
        });
      });
    }
  });
});

function createListItems(data) {
  let selectedItems = items.filter((item) => item.category === data);
  selectedItems.forEach((item) => {
    itemsWrapper.insertAdjacentHTML(
      "beforeend",
      `<li class="item"><div class="item-top"><img class="item-img" src=${
        item.image
      } alt=""><div class="item__content"><h3 class="item-title">${
        item.product
      }</h3><p class="item-desc">${
        item.desc
      }</p></div></div><div class="item-bottom"><p class="item-price">${item.price.toLocaleString(
        "EN"
      )}</p><button class="item-btn" onclick="updateProductsArray(${
        item.id
      })">افزودن به سفارشات</button></div></li>`
    );
  });
}

function updateProductsArray(id) {
  products.innerHTML = "";

  let selectedItem = items.filter((item) => item.id === id);

  if (!productsContent.find((item) => item.id === id)) {
    productsContent.push({ ...selectedItem[0], count: 1 });

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      color: "#351f08",
      background: "#fff",
      width: "80%",
      fontSize: 16,
    });
    Toast.fire({
      icon: "success",
      title: `${selectedItem[0].product} به سبد خرید اضافه شد`,
      iconColor: "#351f08",
    });
  }
  setItemsInLocalStorage(productsContent);
  addToCart(productsContent);
}

function setItemsInLocalStorage(data) {
  localStorage.setItem("items", JSON.stringify(data));
}

function getItemsInLocalStorage() {
  let localItems = localStorage.getItem("items");

  if (localItems) {
    productsContent = JSON.parse(localItems);
  } else {
    productsContent = [];
  }
  return productsContent;
}

function addToCart(data) {
  data.forEach((item) => {
    products.insertAdjacentHTML(
      "beforeend",
      `
            <li class="product">
            <div class="product-right-content">
                <img src="Images/Cafe-Au-Lait-001s.jpg" alt="" class="product-img">
                <h3 class="product-title">${item.product}</h3>
            </div>
            <div class="product-left-content">
                <div class="product-count">
                    <span class="product-count-plus" onclick="changePrice(this, ${
                      item.id
                    })">+</span>
                    <span class="product-count-number">${item.count}</span>
                    <span class="product-count-minus" onclick="changePrice(this, ${
                      item.id
                    })">-</span>
                </div>
                <h3 class="product-price">${(item.count
                  ? item.price * item.count
                  : item.price
                ).toLocaleString("EN")}</h3>
            </div>
            </li>`
    );
  });
  totalPriceCount();
  orderButtonBox.style.display = "flex";
  // changeCartLight()
}

function changePrice(el, id) {
  let localItems = getItemsInLocalStorage();
  let selectedItem = localItems.filter((item) => item.id === id);
  let countElement = el.parentElement.children[1];

  if (el.innerHTML === "+" && selectedItem[0].count < 10) {
    selectedItem[0].count++;
  }

  if (el.innerHTML === "-" && selectedItem[0].count != 0) {
    selectedItem[0].count--;
  }

  countElement.innerHTML = selectedItem[0].count;

  if (selectedItem[0].count === 0) {
    removeItem(id);
  }

  let prePriceElement =
    el.parentElement.parentElement.querySelector(".product-price");
  let finalPrice = selectedItem[0].price * selectedItem[0].count;
  prePriceElement.innerHTML = finalPrice.toLocaleString("EN");

  setItemsInLocalStorage(productsContent);
  totalPriceCount();
}

// function changeCartLight () {

//     if (!itemsWrapper || totalPrice.innerHTML == 0) {
//         shoppingCart.style.color = '#fff'
//     } else {
//         shoppingCart.style.color = '#000'
//     }
// }

function totalPriceCount() {
  let total = 0;
  let prices = document.querySelectorAll(".product-price");
  prices.forEach((priceElem) => {
    total += +priceElem.innerHTML.replace(/,/g, "");
    totalPrice.innerHTML = total.toLocaleString("EN");
  });

  if (products.innerHTML == "") {
    totalPrice.innerHTML = 0;
  }
}

function removeItem(id) {
  let localItems = getItemsInLocalStorage();
  let itemIndex = localItems.findIndex((item) => item.id == id);
  localItems.splice(itemIndex, 1);

  products.innerHTML = "";
  setItemsInLocalStorage(localItems);
  addToCart(localItems);

  if (products.textContent === "") {
    orderButtonBox.style.display = "none";
  }
}

orderButton.addEventListener("click", async () => {
  const order = getItemsInLocalStorage();
  const total = totalPrice.textContent;
  const response = await addOrder(order, Number(total.replace(",", "")));

  if (response) {
    localStorage.removeItem("items");
    productsContent = [];
    products.innerHTML = "";
    totalPriceCount();
    orderButtonBox.style.display = "none";
  }
});

window.addEventListener("load", (event) => {
  getItems().then((data) => {
    data.forEach((dataItems) => items.push(dataItems));
    createListItems("cold");
  });

  let localItems = getItemsInLocalStorage();
  addToCart(localItems);
});

window.updateProductsArray = updateProductsArray;
window.changePrice = changePrice;
window.removeItem = removeItem;
