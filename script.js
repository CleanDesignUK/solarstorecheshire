const navbarFallback = `
<nav class="navbar navbar-expand-xl premium-navbar" aria-label="Main navigation">
  <div class="container">
    <div class="nav-glass-shell">
      <a class="navbar-brand brand-wrap" href="index.html#top" aria-label="Solar Store Cheshire home">
        <img 
          src="images/solar-store-cheshire-logo-icon-400.jpg" 
          alt="Solar Store Cheshire logo" 
          class="brand-logo"
        >

        <span class="brand-copy">
          <span class="brand-title">Solar Store</span>
          <span class="brand-subtitle">Cheshire</span>
        </span>
      </a>

      <button 
        class="navbar-toggler premium-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#mainNav" 
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto align-items-xl-center">
          <li class="nav-item"><a class="nav-link" href="index.html#why-cheshire">Why Cheshire</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#solutions">Solutions</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#property-types">Properties</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#real-results">Results</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#experience">Trust</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#areas">Areas</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#faqs">FAQs</a></li>
        </ul>

        <div class="nav-cta">
          <a href="tel:+447990945510" class="nav-call-btn" aria-label="Call Solar Store Cheshire">
            <span class="nav-call-icon">
              <i class="bi bi-telephone-fill"></i>
            </span>

            <span class="nav-call-text">
              <small>Call us</small>
              <strong>+44 7990 945510</strong>
            </span>
          </a>

          <a href="index.html#contact-form" class="btn btn-nav">
            Get A Quote
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
`;

const footerFallback = `
<footer class="site-footer">
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand-col">
          <a href="index.html#top" class="footer-logo-wrap" aria-label="Solar Store Cheshire homepage">
            <img 
              src="images/solar-store-cheshire-logo-icon-400.jpg"
              alt="Solar Store Cheshire logo" 
              class="footer-logo"
            >
          </a>

          <p class="footer-description">
            Solar Store Cheshire designs and installs premium solar panel systems, battery storage and hybrid inverter solutions for Cheshire homes, barn conversions, farms, rural properties and businesses. Focused on Lymm, Altrincham, Hale, Bowdon and nearby Cheshire areas, we help property owners reduce grid reliance, protect against rising energy costs and future-proof their buildings with bespoke solar PV systems.
          </p>

          <div class="footer-contact-list">
            <a href="tel:+447990945510">
              <i class="bi bi-telephone-fill"></i>
              <span>+44 7990 945510</span>
            </a>

            <a href="mailto:johnfwalsh@solarstore.biz">
              <i class="bi bi-envelope-fill"></i>
              <span>johnfwalsh@solarstore.biz</span>
            </a>
          </div>
        </div>

        <div class="footer-links-col">
          <h2>Solar Services</h2>
          <ul>
            <li><a href="index.html#solutions">Solar Panel Installation</a></li>
            <li><a href="index.html#solutions">Battery Storage</a></li>
            <li><a href="index.html#solutions">Hybrid Inverters</a></li>
            <li><a href="index.html#property-types">Barn Conversion Solar</a></li>
            <li><a href="index.html#property-types">Farm Solar</a></li>
            <li><a href="index.html#property-types">Commercial Solar</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h2>Areas Covered</h2>
          <ul>
            <li><a href="index.html#areas">Solar Panels Lymm</a></li>
            <li><a href="index.html#areas">Solar Panels Altrincham</a></li>
            <li><a href="index.html#areas">Solar Panels Hale</a></li>
            <li><a href="index.html#areas">Solar Panels Bowdon</a></li>
            <li><a href="index.html#areas">Solar Installation WA13</a></li>
            <li><a href="index.html#areas">Solar Installation WA14 &amp; WA15</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h2>Useful Links</h2>
          <ul>
            <li><a href="index.html#why-cheshire">Why Solar Store Cheshire</a></li>
            <li><a href="index.html#real-results">Real Customer Results</a></li>
            <li><a href="index.html#experience">Accreditations &amp; Reviews</a></li>
            <li><a href="index.html#faqs">Solar FAQs</a></li>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="cookie-policy.html">Cookie Policy</a></li>
            <li><a href="https://uk.trustpilot.com/review/solarstore.biz" target="_blank" rel="noopener">Trustpilot Reviews</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-trust-row">
        <div><i class="bi bi-shield-check"></i><span>MCS Certified</span></div>
        <div><i class="bi bi-patch-check"></i><span>RECC Approved</span></div>
        <div><i class="bi bi-award"></i><span>TrustMark Approved</span></div>
        <div><i class="bi bi-house-heart"></i><span>Homes, Farms &amp; Businesses</span></div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <div class="footer-bottom-inner">
        <p>© <span id="footerYear"></span> Solar Store Cheshire. All rights reserved.</p>

        <p class="footer-credit">
          Made with <span class="footer-heart">♥</span> by 
          <a href="https://cleandesignuk.com" target="_blank" rel="noopener">Clean Design UK</a>
        </p>
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

    if (!response.ok) {
      throw new Error(`Could not load ${filePath}`);
    }

    target.innerHTML = await response.text();
  } catch (error) {
    console.warn(error);
    target.innerHTML = fallbackHtml;
  }
}

function initFooterYear() {
  const yearElements = document.querySelectorAll("#footerYear");

  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

function initNavbarBehaviour() {
  const navbar = document.querySelector(".premium-navbar");
  const collapseElement = document.getElementById("mainNav");

  const handleNavbarScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 10);
  };

  handleNavbarScroll();
  window.addEventListener("scroll", handleNavbarScroll, { passive: true });

  document.querySelectorAll(".nav-link, .btn-nav, .nav-call-btn").forEach((link) => {
    link.addEventListener("click", () => {
      if (!collapseElement || typeof bootstrap === "undefined") return;

      const collapseInstance = bootstrap.Collapse.getInstance(collapseElement);

      if (collapseInstance) {
        collapseInstance.hide();
      }
    });
  });

  if (collapseElement) {
    collapseElement.addEventListener("show.bs.collapse", () => {
      document.body.classList.add("nav-open");
    });

    collapseElement.addEventListener("hidden.bs.collapse", () => {
      document.body.classList.remove("nav-open");
    });
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

  return !fakeSequences.some((sequence) => digits.includes(sequence));
}

function containsSpam(text) {
  const value = text.trim().toLowerCase();

  const urlMatches = value.match(/https?:\/\/|www\.|\.ru|\.xyz|\.top/g);

  if (urlMatches && urlMatches.length > 1) return true;

  const spamWords = [
    "crypto",
    "casino",
    "loan offer",
    "seo backlink",
    "adult"
  ];

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

function initReviewReadMore() {
  const reviewToggles = document.querySelectorAll("[data-review-toggle]");

  reviewToggles.forEach((button) => {
    const reviewBody = button.closest(".review-body");
    const reviewText = reviewBody ? reviewBody.querySelector("[data-review-text]") : null;

    if (!reviewText) return;

    button.style.display = "inline-flex";
    button.textContent = "Read more";

    button.addEventListener("click", () => {
      const isOpen = reviewText.classList.toggle("is-open");
      button.textContent = isOpen ? "Read less" : "Read more";
    });
  });

  const reviewCarousel = document.querySelector("#solarStoreReviews");

  if (reviewCarousel) {
    reviewCarousel.addEventListener("slide.bs.carousel", () => {
      const openReviews = reviewCarousel.querySelectorAll(".review-text.is-open");

      openReviews.forEach((reviewText) => {
        const reviewBody = reviewText.closest(".review-body");
        const toggle = reviewBody ? reviewBody.querySelector("[data-review-toggle]") : null;

        reviewText.classList.remove("is-open");

        if (toggle) {
          toggle.textContent = "Read more";
          toggle.style.display = "inline-flex";
        }
      });
    });
  }
}

function initMobileSwipeControls() {
  const carousels = [
    {
      selector: ".solutions-grid",
      label: "Swipe solar solutions"
    },
    {
      selector: ".property-mini-grid",
      label: "Swipe property types"
    },
    {
      selector: ".benefit-grid",
      label: "Swipe benefits"
    }
  ];

  const createControls = (track, label) => {
    if (!track || track.previousElementSibling?.classList.contains("mobile-swipe-controls")) {
      return;
    }

    const controls = document.createElement("div");
    controls.className = "mobile-swipe-controls";
    controls.innerHTML = `
      <span class="mobile-swipe-label">
        <i class="bi bi-hand-index-thumb"></i>
        ${label}
      </span>

      <span class="mobile-swipe-buttons">
        <button type="button" class="mobile-swipe-btn" data-mobile-swipe-prev aria-label="Previous card">
          <i class="bi bi-arrow-left"></i>
        </button>

        <button type="button" class="mobile-swipe-btn" data-mobile-swipe-next aria-label="Next card">
          <i class="bi bi-arrow-right"></i>
        </button>
      </span>
    `;

    track.parentNode.insertBefore(controls, track);

    const prevButton = controls.querySelector("[data-mobile-swipe-prev]");
    const nextButton = controls.querySelector("[data-mobile-swipe-next]");

    const getScrollAmount = () => {
      const firstCard = track.querySelector(".solution-card, .property-mini-card, .benefit-card");

      if (!firstCard) {
        return track.clientWidth * 0.85;
      }

      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = 16;

      return cardWidth + gap;
    };

    const updateButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;

      prevButton.disabled = track.scrollLeft <= 4;
      nextButton.disabled = track.scrollLeft >= maxScroll - 4;
    };

    prevButton.addEventListener("click", () => {
      track.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth"
      });
    });

    nextButton.addEventListener("click", () => {
      track.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth"
      });
    });

    track.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);

    updateButtons();
  };

  carousels.forEach((carousel) => {
    const track = document.querySelector(carousel.selector);
    createControls(track, carousel.label);
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
  initReviewReadMore();
  initMobileSwipeControls();
});

function initCookieBanner() {
  const consentKey = "solarStoreCookieConsent";
  const existingConsent = localStorage.getItem(consentKey);

  if (existingConsent) {
    if (existingConsent === "accepted") {
      loadOptionalCookieScripts();
    }

    return;
  }

  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-live", "polite");
  banner.setAttribute("aria-label", "Cookie notice");

  banner.innerHTML = `
    <p>
      🍪 We use cookies to improve your browsing experience, deliver personalised content, and analyse our traffic. By clicking “Accept All”, you consent to our use of cookies. See our <a href="cookie-policy.html">Cookie Policy</a> for details.
    </p>

    <div class="cookie-actions">
      <button type="button" class="cookie-btn cookie-accept" data-cookie-accept>
        Accept All 🍪
      </button>

      <button type="button" class="cookie-btn cookie-decline" data-cookie-decline>
        Decline
      </button>
    </div>
  `;

  document.body.appendChild(banner);

  const acceptButton = banner.querySelector("[data-cookie-accept]");
  const declineButton = banner.querySelector("[data-cookie-decline]");

  const hideBanner = () => {
    banner.classList.remove("is-visible");

    setTimeout(() => {
      banner.remove();
    }, 250);
  };

  acceptButton.addEventListener("click", () => {
    localStorage.setItem(consentKey, "accepted");
    hideBanner();
    loadOptionalCookieScripts();
  });

  declineButton.addEventListener("click", () => {
    localStorage.setItem(consentKey, "declined");
    hideBanner();
  });

  setTimeout(() => {
    banner.classList.add("is-visible");
  }, 600);
}

function loadOptionalCookieScripts() {
  /*
    Add analytics, ads or tracking scripts here only after cookie consent.

    Example:
    if (window.optionalCookiesLoaded) return;
    window.optionalCookiesLoaded = true;

    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");
  */
}

document.addEventListener("DOMContentLoaded", initCookieBanner);