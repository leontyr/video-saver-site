// Public website content only. Never put API keys or licence keys here.
// Change checkout URLs and displayed prices here when launching a new offer.
// Approve each new price on the licensing server BEFORE publishing its link.
(() => {
  const config = Object.freeze({
    enabled: true,
    plans: Object.freeze({
      annual: Object.freeze({
        price: "US$14.99 / year",
        regionalPrice: "",
        checkoutUrl: "https://buy.stripe.com/00w5kEe2o5W78v5bo40Ba02"
      }),
      lifetime: Object.freeze({
        price: "US$29.99 once",
        regionalPrice: "",
        checkoutUrl: "https://buy.stripe.com/5kQ4gA6zW5W73aL4ZG0Ba03"
      })
    })
  });
  globalThis.VideoSaverPurchase = config;
  if (typeof module !== "undefined" && module.exports) module.exports = config;
})();
