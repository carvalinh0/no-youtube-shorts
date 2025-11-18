const SELECTORS_TO_HIDE = [
    // --- Desktop ---
    '#contents > ytd-rich-section-renderer:not([items-per-row])',
    'ytd-guide-entry-renderer a[href="/shorts"]',
    '#guide-inner-content #items > :nth-child(2)',

    // --- Mobile ---
    'ytm-rich-grid-renderer .rich-section-single-column',
    'ytd-mini-guide-entry-renderer:nth-child(2)'
];

function hide() {
  document.querySelectorAll(SELECTORS_TO_HIDE.join(', ')).forEach(element => {
    const elementToHide = element.closest('ytd-guide-entry-renderer') || element;
    elementToHide.style.display = 'none';
  });
}

const observer = new MutationObserver(hide);
observer.observe(document.body, { childList: true, subtree: true });

hide();
