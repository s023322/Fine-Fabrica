var names = [
  "prox,https://buy.stripe.com/test_4gweVwecGcuZ8vK144",
  "bambu,https://buy.stripe.com/test_7sIeVw1pU0Mh4fucMQ",
  "jdp,https://buy.stripe.com/test_6oEcNo1pU52x5jyeUZ",
  "cench,https://buy.stripe.com/test_cN2aFgecGgLf7rGaEK",
  "grizzly,https://buy.stripe.com/test_6oEfZA5Ga1Ql9zO007",
  "miter,https://buy.stripe.com/test_28o5kW7Oi7aF8vK6ow",
  "laser,https://buy.stripe.com/test_14k00Cb0u52xcM0fZ7",
  "band,https://buy.stripe.com/test_28oeVwd8CamRcM0dR0",
  "planer,https://buy.stripe.com/test_aEUcNo5Ga3YtbHWeV5",
];

var links = [];
links.length = names.length;

var stripe = Stripe(
  "pk_test_51OnOAzH4ceWkCZ13BXbBaxpkT8RSdA3CgH9yczcnwK5hCAXqm4o551aVupJla4LVXNRP8DlqSTMMYhMXNM7ujPyN00sR6BTImW"
);

var memberships = [
  "0,https://finefabrica.us.eu.org/pages/account.html",
  "40,https://buy.stripe.com/test_4gwcNoc4ybqV7rG4gh",
  "75,https://buy.stripe.com/test_bIY5kW1pU9iNdQ4dQS",
  "100,https://buy.stripe.com/test_5kAaFgfgK1Ql3bq003",
];

console.log(localStorage.getItem("username"), localStorage.getItem("pfp"));

for (let index = 0; index < names.length; index++) {
  links[index] = document.getElementById(names[index].split(",")[0]);
  links[index].addEventListener("click", function () {
    if (
      localStorage.getItem("username") != (null || "undefined") &&
      localStorage.getItem("pfp") != (null || "undefined")
    ) {
      localStorage.setItem("lastItem", names[index].split(",")[0]);
      window.location.href = names[index].split(",")[1];
      /*stripe.redirectToCheckout({
        lineItems: [
          {
            price: names[index].split(",")[1],
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl: "http://localhost:5500/pages/account.html",
        cancelUrl: "http://localhost:5500/pages/services.html",
      });*/
    } else {
      window.location.href = "/pages/account.html";
    }
  });
}

for (let index = 1; index < memberships.length; index++) {
  document
    .getElementById("tier" + index)
    .addEventListener("click", function () {
      localStorage.setItem("lastItem", "tier" + index);
      window.location.href = memberships[index].split(",")[1];
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
