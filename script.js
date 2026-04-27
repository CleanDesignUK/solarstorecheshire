const navbarFallback = `
<nav class="navbar navbar-expand-xl premium-navbar sticky-top" aria-label="Main navigation">
  <div class="container">
    <a class="navbar-brand brand-wrap" href="index.html#top" aria-label="Solar Store Cheshire home">
      <span class="brand-mark"><i class="bi bi-sun"></i></span>
      <span class="brand-copy">
        <span class="brand-title">Solar Store</span>
        <span class="brand-subtitle">Cheshire</span>
      </span>
    </a>
    <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav mx-auto align-items-xl-center">
        <li class="nav-item"><a class="nav-link" href="index.html#why-cheshire">Why Cheshire</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#solutions">Solutions</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#property-types">Properties</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#savings">Savings</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#areas">Areas</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#faqs">FAQs</a></li>
      </ul>
      <div class="nav-cta">
        <a href="tel:+447990945510" class="nav-phone"><i class="bi bi-telephone"></i> +44 7990 945510</a>
        <a href="index.html#contact-form" class="btn btn-nav">Get A Quote</a>
      </div>
    </div>
  </div>
</nav>
`;

const footerFallback = `
<footer class="site-footer">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-4">
        <a class="footer-brand" href="index.html#top">
          <span class="brand-mark"><i class="bi bi-sun"></i></span>
          <span><strong>Solar Store</strong><small>Cheshire</small></span>
        </a>
        <p class="footer-copy">Premium solar panels, battery storage and hybrid inverter systems for Cheshire homes, rural properties, farms and businesses.</p>
        <a href="index.html#contact-form" class="btn btn-gold">Request A Quote</a>
      </div>
      <div class="col-6 col-lg-2">
        <h3>Services</h3>
        <ul>
          <li><a href="index.html#solutions">Solar PV</a></li>
          <li><a href="index.html#solutions">Battery Storage</a></li>
          <li><a href="index.html#solutions">Hybrid Inverters</a></li>
          <li><a href="index.html#solutions">Commercial Solar</a></li>
          <li><a href="index.html#solutions">Farm Solar</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2">
        <h3>Areas</h3>
        <ul>
          <li><a href="index.html#areas">Lymm</a></li>
          <li><a href="index.html#areas">Altrincham</a></li>
          <li><a href="index.html#areas">Hale</a></li>
          <li><a href="index.html#areas">Bowdon</a></li>
          <li><a href="index.html#areas">WA13, WA14, WA15</a></li>
        </ul>
      </div>
      <div class="col-lg-4">
        <h3>Contact</h3>
        <ul class="footer-contact">
          <li><i class="bi bi-telephone"></i> <a href="tel:+447990945510">+44 7990 945510</a></li>
          <li><i class="bi bi-geo-alt"></i> Cheshire and wider North West</li>
          <li><i class="bi bi-shield-check"></i> MCS-accredited solar installations</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span id="footerYear"></span> Solar Store Cheshire. All rights reserved.</p>
      <div>
        <a href="policy.html">Policy Page</a>
        <a href="index.html#faqs">FAQs</a>
        <a href="index.html#contact-form">Get Quote</a>
      </div>
    </div>
  </div>
</footer>
`;

async function loadPartial(targetId, filePath, fallbackHtml) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(filePath, { cache: "no-cache" });
    if (!response.ok) throw new Error(`Could not load ${filePath}`);
    target.innerHTML = await response.text();
  } catch (error) {
    target.innerHTML = fallbackHtml;
  }
}

function initFooterYear() {
  const year = document.getElementById("footerYear");
  if (year) year.textContent = new Date().getFullYear();
}

function initNavbarBehaviour() {
  const collapseElement = document.getElementById("mainNav");

  document.querySelectorAll(".nav-link, .btn-nav, .nav-phone").forEach((link) => {
    link.addEventListener("click", () => {
      if (!collapseElement) return;
      const collapseInstance = bootstrap.Collapse.getInstance(collapseElement);
      if (collapseInstance) collapseInstance.hide();
    });
  });

  if (collapseElement) {
    collapseElement.addEventListener("show.bs.collapse", () => document.body.classList.add("nav-open"));
    collapseElement.addEventListener("hidden.bs.collapse", () => document.body.classList.remove("nav-open"));
  }
}

function isLikelyRealEmail(email) {
  const cleanEmail = email.trim().toLowerCase();

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(cleanEmail)) return false;

  const blockedDomains = [
    "example.com",
    "test.com",
    "mailinator.com",
    "tempmail.com",
    "10minutemail.com",
    "guerrillamail.com",
    "yopmail.com"
  ];

  const domain = cleanEmail.split("@")[1];
  if (!domain || blockedDomains.includes(domain)) return false;

  if (/(.)\1{5,}/.test(cleanEmail)) return false;

  return true;
}

function isLikelyRealPhone(phone) {
  const digits = phone.replace(/\D/g, "");

  if (digits.length < 10 || digits.length > 15) return false;
  if (/^(\d)\1+$/.test(digits)) return false;
  if (/(\d)\1{4,}/.test(digits)) return false;

  const fakeSequences = [
    "0123456789",
    "1234567890",
    "9876543210",
    "1111122222",
    "1231231231",
    "0000011111"
  ];

  if (fakeSequences.some((sequence) => digits.includes(sequence))) return false;

  return true;
}

function containsSpam(text) {
  const value = text.trim().toLowerCase();
  const urlMatches = value.match(/https?:\/\/|www\.|\.ru|\.xyz|\.top/g);
  if (urlMatches && urlMatches.length > 1) return true;

  const spamWords = ["crypto", "casino", "loan offer", "seo backlink", "adult"];
  return spamWords.some((word) => value.includes(word));
}

function showFormError(message) {
  const errorBox = document.getElementById("formError");
  if (!errorBox) return;

  errorBox.textContent = message;
  errorBox.classList.remove("d-none");
  errorBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

function clearFormError() {
  const errorBox = document.getElementById("formError");
  if (!errorBox) return;

  errorBox.textContent = "";
  errorBox.classList.add("d-none");
}

function initLeadFormValidation() {
  const form = document.getElementById("solarLeadForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    clearFormError();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const phone = document.getElementById("phone")?.value.trim() || "";
    const propertyType = document.getElementById("propertyType")?.value || "";
    const interest = document.getElementById("interest")?.value || "";
    const message = document.getElementById("message")?.value.trim() || "";
    const area = document.getElementById("area")?.value.trim() || "";
    const botcheck = form.querySelector('input[name="botcheck"]');

    if (botcheck && botcheck.checked) {
      event.preventDefault();
      showFormError("Spam detected. Please refresh the page and try again.");
      return;
    }

    if (name.length < 2 || !/[a-zA-Z]/.test(name) || /(.)\1{5,}/.test(name)) {
      event.preventDefault();
      showFormError("Please enter a valid full name.");
      return;
    }

    if (!isLikelyRealEmail(email)) {
      event.preventDefault();
      showFormError("Please enter a valid email address.");
      return;
    }

    if (!isLikelyRealPhone(phone)) {
      event.preventDefault();
      showFormError("Please enter a valid phone number. Repeated or fake-looking numbers are not accepted.");
      return;
    }

    if (!propertyType) {
      event.preventDefault();
      showFormError("Please select your property type.");
      return;
    }

    if (!interest) {
      event.preventDefault();
      showFormError("Please select whether you are interested in solar, battery storage or both.");
      return;
    }

    if (area && /(.)\1{6,}/.test(area)) {
      event.preventDefault();
      showFormError("Please enter a valid postcode or area.");
      return;
    }

    if (containsSpam(message)) {
      event.preventDefault();
      showFormError("Your message looks like spam. Please remove links or unrelated promotional text.");
      return;
    }

    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadPartial("navbar-placeholder", "navbar.html", navbarFallback),
    loadPartial("footer-placeholder", "footer.html", footerFallback)
  ]);

  initFooterYear();
  initNavbarBehaviour();
  initLeadFormValidation();
});