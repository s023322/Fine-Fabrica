var stripe = Stripe(
  "pk_test_51OnOAzH4ceWkCZ13BXbBaxpkT8RSdA3CgH9yczcnwK5hCAXqm4o551aVupJla4LVXNRP8DlqSTMMYhMXNM7ujPyN00sR6BTImW"
);

document.getElementById("tier1").addEventListener("click", function () {
  stripe.redirectToCheckout({
    lineItems: [
      {
        price: "price_1OnOgbH4ceWkCZ13pUtWKkjD",
        quantity: 1,
      },
    ],
    mode: "subscription",
    successUrl: "https://www.finefabrica.us.eu.org/pages/membership",
    cancelUrl: "https://www.finefabrica.us.eu.org/pages/services",
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
    successUrl: "https://www.finefabrica.us.eu.org/pages/membership",
    cancelUrl: "https://www.finefabrica.us.eu.org/pages/services",
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
    successUrl: "https://www.finefabrica.us.eu.org/pages/membership",
    cancelUrl: "https://www.finefabrica.us.eu.org/pages/services",
  });
});
