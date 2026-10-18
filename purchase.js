(() => {
  const config = globalThis.VideoSaverPurchase;
  for (const card of document.querySelectorAll('[data-plan]')) {
    const plan = config?.plans?.[card.dataset.plan];
    const price = card.querySelector('[data-price]');
    const regional = card.querySelector('[data-regional-price]');
    const buy = card.querySelector('[data-checkout]');
    if (price && plan?.price) price.textContent = plan.price;
    if (regional) {
      regional.textContent = plan?.regionalPrice || '';
      regional.hidden = !plan?.regionalPrice;
    }
    if (!buy) continue;
    let url;
    try { url = new URL(plan?.checkoutUrl); } catch {}
    if (config?.enabled && url?.protocol === 'https:' && url.hostname === 'buy.stripe.com') {
      buy.href = url.href;
      buy.removeAttribute('aria-disabled');
      buy.classList.remove('disabled');
    } else {
      buy.removeAttribute('href');
      buy.setAttribute('aria-disabled', 'true');
      buy.classList.add('disabled');
      buy.textContent = 'Purchases unavailable';
    }
  }
})();
