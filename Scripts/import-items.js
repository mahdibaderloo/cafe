import items from "./db.js";

const itemsWrapper = document.querySelector(".items");
const category = document.querySelectorAll(".category");
const coffeeLines = document.querySelector(".coffee-lines");
const lines = document.querySelectorAll(".line-link");
const teaGlasses = document.querySelector(".tea-glasses");
const glasses = document.querySelectorAll(".glass");
const products = document.querySelector(".products");
const totalPrice = document.querySelector(".total-price");
const shoppingCart = document.querySelector(".shopping-cart-logo");

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
            createListItems("tea-1");
          }
          if (event.target.dataset.line === "tea-2") {
            createListItems("tea-2");
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
      `<li class="item"><div class="item-top"><img class="item-img" src="Images/Cafe-Au-Lait-001s.jpg" alt=""><div class="item__content"><h3 class="item-title">${
        item.product
      }</h3><p class="item-desc">${
        item.disc
      }</p></div></div><div class="item-bottom"><p class="item-price">${item.price.toLocaleString(
        "EN"
      )}</p><button class="item-btn" onclick="updateProductsArray('${
        item.product
      }' , ${item.price}, ${item.id})">افزودن به سفارشات</button></div></li>`
    );
  });
}

function updateProductsArray(title, price, id) {
  products.innerHTML = "";

  let newItem = {
    id: id,
    title: title,
    price: Number(price),
    count: 1,
  };

  if (!productsContent.find((item) => item.id === id)) {
    productsContent.push(newItem);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      color: "#351f08",
      background: "#fff",
      width: "70%",
    });
    Toast.fire({
      icon: "success",
      title: `${title} به سبد خرید اضافه شد`,
      iconColor: "#351f08",
    });
  }
  setItemsInLocalStorage(productsContent);
  addToCart(productsContent);
}

function setItemsInLocalStorage(itemsWrapper) {
  localStorage.setItem("itemsWrapper", JSON.stringify(itemsWrapper));
}

function getItemsInLocalStorage() {
  let localItems = localStorage.getItem("itemsWrapper");

  if (localItems) {
    productsContent = JSON.parse(localItems);
  } else {
    productsContent = [];
  }
  return productsContent;
}

function addToCart(itemsWrapper) {
  itemsWrapper.forEach((item) => {
    let newCartItem = `
            <li class="product">
            <div class="product-right-content">
                <img src="Images/Cafe-Au-Lait-001s.jpg" alt="" class="product-img">
                <h3 class="product-title">${item.title}</h3>
            </div>
            <div class="product-left-content">
                <div class="product-count">
                    <span class="product-count-plus" onclick="changePrice(this, ${
                      item.id
                    }, ${item.price})">+</span>
                    <span class="product-count-number">${item.count}</span>
                    <span class="product-count-minus" onclick="changePrice(this, ${
                      item.id
                    }, ${item.price})">-</span>
                </div>
                <h3 class="product-price">${item.price.toLocaleString(
                  "EN"
                )}</h3>
            </div>
            </li>`;

    products.insertAdjacentHTML("beforeend", newCartItem);
  });
  totalPriceCount();
  // changeCartLight()
}

function changePrice(el, id, price) {
  console.log(productsContent);

  let countElement = el.parentElement.children[1];
  let countItem = el.parentElement.children[1].textContent;

  if (el.innerHTML === "+" && countItem < 10) {
    countItem++;

    if (productsContent.find((item) => item.id === id)) {
      let findItem = productsContent.find((item) => item.id === id);
      findItem.count = countItem;
    }
    countElement.innerHTML = countItem;
  }

  if (el.innerHTML === "-" && countItem != 0) {
    countItem--;

    if (productsContent.find((item) => item.id === id)) {
      let findItem = productsContent.find((item) => item.id === id);
      findItem.count = countItem;
    }
    countElement.innerHTML = countItem;
  }

  if (countItem === 0) {
    removeItem(id);
  }

  let prePriceElement =
    el.parentElement.parentElement.querySelector(".product-price");
  let finalPrice = price * countItem;
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
}

window.addEventListener("load", (event) => {
  // cold.forEach((product) => {
  //   createListItems(product.product, product.price, product.disc, product.id);
  // });

  let localItems = getItemsInLocalStorage();
  addToCart(localItems);
});

window.updateProductsArray = updateProductsArray;
window.changePrice = changePrice;
window.removeItem = removeItem;
