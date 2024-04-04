var names = [
  "prox,price_1OxZe6H4ceWkCZ13UTzCvPWD",
  "bambu,price_1OxZcBH4ceWkCZ13lvCawoOL",
  "jdp,price_1OxZbJH4ceWkCZ13lELODY9V",
  "cench,price_1OxZakH4ceWkCZ1379oQqYKN",
  "grizzly,price_1OxZa1H4ceWkCZ13CIuimqrQ",
  "miter,price_1OxZZUH4ceWkCZ134YDeUum9",
  "laser,price_1OxZYoH4ceWkCZ136oBPsFab",
  "band,price_1OxZXbH4ceWkCZ13O2tAjxhE",
  "planer,price_1OxZHsH4ceWkCZ13x9mchtst",
];

var links = [];
links.length = names.length;

var stripe = Stripe(
  "pk_test_51OnOAzH4ceWkCZ13BXbBaxpkT8RSdA3CgH9yczcnwK5hCAXqm4o551aVupJla4LVXNRP8DlqSTMMYhMXNM7ujPyN00sR6BTImW"
);

console.log(localStorage.getItem("username"), localStorage.getItem("pfp"));

for (let index = 0; index < names.length; index++) {
  links[index] = document.getElementById(names[index].split(",")[0]);
  links[index].addEventListener("click", function () {
    if (
      localStorage.getItem("username") != (null || "undefined") &&
      localStorage.getItem("pfp") != (null || "undefined")
    ) {
      stripe.redirectToCheckout({
        lineItems: [
          {
            price: names[index].split(",")[1],
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl: "http://localhost:5500/pages/account.html",
        cancelUrl: "http://localhost:5500/pages/services.html",
      });
    } else {
      window.location.href = "/pages/account.html";
    }
  });
}

document.getElementById("tier1").addEventListener("click", function () {
  stripe.redirectToCheckout({
    lineItems: [
      {
        price: "price_1OnOgbH4ceWkCZ13pUtWKkjD",
        quantity: 1,
      },
    ],
    mode: "subscription",
    successUrl: "http://localhost:5500/pages/membership.html",
    cancelUrl: "http://localhost:5500/pages/services.html",
  });
});

document.getElementById("tier2").addEventListener("click", function () {
  stripe.redirectToCheckout({
    lineItems: [
      {
        price: "price_1OnOffH4ceWkCZ13GvIbBRhX",
        quantity: 1,
      },
    ],
    mode: "subscription",
    successUrl: "http://localhost:5500/pages/membership.html",
    cancelUrl: "http://localhost:5500/pages/services.html",
  });
});

document.getElementById("tier3").addEventListener("click", function () {
  stripe.redirectToCheckout({
    lineItems: [
      {
        price: "price_1OnOfqH4ceWkCZ13ZjKqKgy4",
        quantity: 1,
      },
    ],
    mode: "subscription",
    successUrl: "http://localhost:5500/pages/membership.html",
    cancelUrl: "http://localhost:5500/pages/services.html",
  });
});
