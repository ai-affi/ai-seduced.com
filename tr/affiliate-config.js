// Affiliate Configuration — AI Seduced
const AFFILIATE_BASE = 'https://sdg22.com/@swI4YvKq?cmp=justpornai';
const OFFERS = {
  women:   AFFILIATE_BASE + '?source=ai-seduced_modal_women',
  men:     AFFILIATE_BASE + '?source=ai-seduced_modal_men',
  anime:   AFFILIATE_BASE + '?source=ai-seduced_modal_anime',
  default: AFFILIATE_BASE + '?source=ai-seduced_direct'
};
window.goToOffer = function(preference) {
  const url = OFFERS[preference] || OFFERS.default;
  window.open(url, '_blank');
};

// Modal auto-open après 3s, 1x/session (sessionStorage)
document.addEventListener('DOMContentLoaded', function () {
  if (!sessionStorage.getItem('modal_shown')) {
    setTimeout(function () {
      const overlay = document.getElementById('modal-overlay');
      const modal   = document.getElementById('preference-modal');
      if (overlay && modal) {
        overlay.classList.add('active');
        modal.classList.add('active');
        sessionStorage.setItem('modal_shown', '1');
      }
    }, 3000);
  }

  // Close modal
  function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.getElementById('preference-modal').classList.remove('active');
  }

  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // Preference buttons
  document.querySelectorAll('.pref-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const pref = btn.getAttribute('data-preference');
      closeModal();
      goToOffer(pref);
    });
  });

  // CTA buttons → direct, pas de modal
  document.querySelectorAll('[data-open-modal]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      goToOffer('default');
    });
  });
});
