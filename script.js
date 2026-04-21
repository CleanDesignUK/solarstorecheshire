document.addEventListener('DOMContentLoaded', () => {
  loadPartial('navbar-placeholder', 'component/navbar.html');
  loadPartial('footer-placeholder', 'component/footer.html');
  initSmoothAnchors();
  initFormValidation();
});

function loadPartial(targetId, file) {
  const target = document.getElementById(targetId);
  if (!target) return;

  fetch(file)
    .then(response => response.text())
    .then(html => {
      target.innerHTML = html;
      setActiveNav();
    })
    .catch(() => {
      target.innerHTML = '';
    });
}

function setActiveNav() {
  document.querySelectorAll('.premium-navbar .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === '#top') {
      link.classList.add('active');
    }
  });
}

function initSmoothAnchors() {
  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const section = document.querySelector(targetId);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initFormValidation() {
  const form = document.getElementById('solarLeadForm');
  const errorBox = document.getElementById('formError');
  if (!form || !errorBox) return;

  form.addEventListener('submit', event => {
    errorBox.classList.add('d-none');
    errorBox.textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const propertyType = document.getElementById('propertyType').value;
    const interest = document.getElementById('interest').value;

    const errors = [];

    if (name.length < 2) errors.push('Please enter your full name.');
    if (!isValidEmail(email)) errors.push('Please enter a valid email address.');
    if (!isValidUKPhone(phone)) errors.push('Please enter a valid phone number.');
    if (hasExcessiveRepeatedDigits(phone)) errors.push('Please enter a real phone number without repeated digits.');
    if (!propertyType) errors.push('Please select a property type.');
    if (!interest) errors.push('Please select your interest.');

    if (errors.length > 0) {
      event.preventDefault();
      errorBox.innerHTML = errors.join('<br>');
      errorBox.classList.remove('d-none');
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
}

function isValidUKPhone(phone) {
  const cleaned = phone.replace(/[\s()+-]/g, '');
  return /^(?:0|44|\+44)?7\d{9}$|^(?:0|44|\+44)?[1-9]\d{8,10}$/.test(cleaned);
}

function hasExcessiveRepeatedDigits(value) {
  const digits = value.replace(/\D/g, '');
  return /(\d)\1{4,}/.test(digits);
}