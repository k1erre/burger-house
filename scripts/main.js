document.getElementById("main-action-button").onclick = () => {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

const links = document.querySelectorAll(".menu-item > a");
links.forEach((element) => {
  element.onclick = () => {
    document
      .getElementById(element.getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
});

const buttons = document.querySelectorAll(".product-button");
buttons.forEach((element) => {
  element.onclick = () => {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
});

const burger = document.getElementById("burger"),
  name = document.getElementById("name"),
  phone = document.getElementById("phone");

document.getElementById("order-action").onclick = () => {
  const inputs = [burger, name, phone];
  let hasError = false;

  inputs.forEach((element) => {
    if (!element.value) {
      element.parentElement.style.background = "red";
      hasError = true;
    } else {
      element.parentElement.style.background = "";
    }
  });

  if (!hasError) {
    inputs.forEach((element) => {
      element.value = "";
    });
    alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
  }
};

const prices = document.querySelectorAll(".products-item-price");

document.getElementById("change-currency").onclick = (e) => {
  const currentCurrency = e.target.innerText;

  let newCurrency = "$";
  let coef = 1;

  if (currentCurrency === "$") {
    newCurrency = "₽";
    coef = 100;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYN";
    coef = 3;
  } else if (currentCurrency === "BYN") {
    newCurrency = "€";
    coef = 0.9;
  } else if (currentCurrency === "€") {
    newCurrency = "¥";
    coef = 6.9;
  } else {
    newCurrency = "$";
    coef = 1;
  }

  e.target.innerText = newCurrency;

  prices.forEach((element) => {
    element.innerText =
      +(element.getAttribute("data-base-price") * coef).toFixed(1) +
      " " +
      newCurrency;
  });
};
