const SITE_PAGES = {
  home: "index.html",
  services: "services.html",
  movingAreas: "moving-areas.html",
  about: "about.html",
  calculator: "calculator.html",
  contact: "contact.html",
  residential: "residential.html",
  commercial: "commercial.html",
  packing: "packing.html",
  speciality: "speciality.html",
  longDistance: "long-distance.html",
  storage: "storage.html"
};

function currentPage() {
  const file = window.location.pathname.split("/").pop() || "index.html";
  return file.toLowerCase();
}

function isServicesPage(page) {
  return [
    SITE_PAGES.services,
    SITE_PAGES.residential,
    SITE_PAGES.commercial,
    SITE_PAGES.packing,
    SITE_PAGES.speciality,
    SITE_PAGES.longDistance,
    SITE_PAGES.storage
  ].includes(page);
}

function navLink(href, label, key, extra = "") {
  return `<a href="${href}" class="${extra}" data-page="${key}">${label}</a>`;
}

function renderSiteHeader() {
  const page = currentPage();
  const servicesActive = isServicesPage(page);

  return `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="${SITE_PAGES.home}" aria-label="Jaguar Movers home">
          <img src="assets/logo.JPG" alt="Jaguar Movers Logo">
        </a>

        <nav class="desktop-nav" aria-label="Main navigation">
          ${navLink(SITE_PAGES.home, "Home", "home", page === SITE_PAGES.home ? "active" : "")}

          <div class="nav-dropdown ${servicesActive ? "active-parent" : ""}">
            <a href="${SITE_PAGES.services}" class="${servicesActive ? "active" : ""}" data-page="services">
              Services <span aria-hidden="true">▾</span>
            </a>
            <div class="dropdown-menu">
              ${navLink(SITE_PAGES.residential, "Residential Moving", "residential", page === SITE_PAGES.residential ? "active" : "")}
              ${navLink(SITE_PAGES.commercial, "Commercial Moving", "commercial", page === SITE_PAGES.commercial ? "active" : "")}
              ${navLink(SITE_PAGES.packing, "Packing Services", "packing", page === SITE_PAGES.packing ? "active" : "")}
              ${navLink(SITE_PAGES.speciality, "Specialty Moving", "speciality", page === SITE_PAGES.speciality ? "active" : "")}
              ${navLink(SITE_PAGES.longDistance, "Long Distance", "long-distance", page === SITE_PAGES.longDistance ? "active" : "")}
              ${navLink(SITE_PAGES.storage, "Storage", "storage", page === SITE_PAGES.storage ? "active" : "")}
            </div>
          </div>

          ${navLink(SITE_PAGES.movingAreas, "Moving Areas", "moving-areas", page === SITE_PAGES.movingAreas ? "active" : "")}
          ${navLink(SITE_PAGES.about, "About", "about", page === SITE_PAGES.about ? "active" : "")}
          ${navLink(SITE_PAGES.calculator, "Calculator", "calculator", page === SITE_PAGES.calculator ? "active" : "")}
          ${navLink(SITE_PAGES.contact, "Contact", "contact", page === SITE_PAGES.contact ? "active" : "")}
        </nav>

        <div class="nav-truck" aria-hidden="true">
          <lottie-player
            autoplay
            background="transparent"
            loop
            speed="1"
            src="assets/jaguar_movers_truck.json">
          </lottie-player>
        </div>

        <button class="menu-toggle" id="menuToggle"
                aria-label="Open menu"
                aria-expanded="false"
                aria-controls="mobileNav">☰</button>
      </div>

      <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
        <div class="mobile-nav-top">
          <span>Jaguar Movers</span>
          <div class="mobile-nav-truck" aria-hidden="true">
            <lottie-player autoplay background="transparent" loop speed="1" src="assets/jaguar_movers_truck.json"></lottie-player>
          </div>
        </div>

        ${navLink(SITE_PAGES.home, "Home", "home", page === SITE_PAGES.home ? "active" : "")}

        <div class="mobile-services ${servicesActive ? "active-parent" : ""}">
          <div class="mobile-services-row">
            <a href="${SITE_PAGES.services}" class="${servicesActive ? "active" : ""}" data-page="services">Services</a>
            <button class="mobile-services-toggle" type="button" aria-expanded="false" aria-controls="mobileServicesSubmenu" aria-label="Toggle Services submenu"><span aria-hidden="true">▾</span></button>
          </div>
          <div class="mobile-services-submenu" id="mobileServicesSubmenu">
            <div>
              ${navLink(SITE_PAGES.residential, "Residential Moving", "residential", page === SITE_PAGES.residential ? "active" : "")}
              ${navLink(SITE_PAGES.commercial, "Commercial Moving", "commercial", page === SITE_PAGES.commercial ? "active" : "")}
              ${navLink(SITE_PAGES.packing, "Packing Services", "packing", page === SITE_PAGES.packing ? "active" : "")}
              ${navLink(SITE_PAGES.speciality, "Specialty Moving", "speciality", page === SITE_PAGES.speciality ? "active" : "")}
              ${navLink(SITE_PAGES.longDistance, "Long Distance", "long-distance", page === SITE_PAGES.longDistance ? "active" : "")}
              ${navLink(SITE_PAGES.storage, "Storage", "storage", page === SITE_PAGES.storage ? "active" : "")}
            </div>
          </div>
        </div>

        ${navLink(SITE_PAGES.movingAreas, "Moving Areas", "moving-areas", page === SITE_PAGES.movingAreas ? "active" : "")}
        ${navLink(SITE_PAGES.about, "About", "about", page === SITE_PAGES.about ? "active" : "")}
        ${navLink(SITE_PAGES.calculator, "Calculator", "calculator", page === SITE_PAGES.calculator ? "active" : "")}
        ${navLink(SITE_PAGES.contact, "Contact", "contact", page === SITE_PAGES.contact ? "active" : "")}
      </nav>
    </header>
  `;
}

function renderSiteFooter() {
  const page = currentPage();
  const active = (href, key) =>
    `<a href="${href}" class="${page === href ? "active" : ""}" data-page="${key}">`;

  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="assets/logo.JPG" alt="Jaguar Movers">
          <p>Professional moving services across Toronto and the GTA.</p>
        </div>

        <div>
          <h4>Services</h4>
          ${active(SITE_PAGES.residential, "residential")}Residential</a>
          ${active(SITE_PAGES.commercial, "commercial")}Commercial</a>
          ${active(SITE_PAGES.packing, "packing")}Packing</a>
          ${active(SITE_PAGES.speciality, "speciality")}Specialty</a>
        </div>

        <div>
          <h4>Explore</h4>
          ${active(SITE_PAGES.longDistance, "long-distance")}Long Distance</a>
          ${active(SITE_PAGES.storage, "storage")}Storage</a>
          ${active(SITE_PAGES.movingAreas, "moving-areas")}Service Areas</a>
          ${active(SITE_PAGES.about, "about")}About</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="tel:+9052260226">+1  (905) 226-0226</a>
          <a href="mailto:info@jaguarmovers.ca">info@jaguarmovers.ca</a>
        </div>
      </div>

      <div class="container footer-bottom">
        <span>© <span id="year"></span> Jaguar Movers</span>
        <span>Toronto, Ontario</span>
      </div>
    </footer>
  `;
}

function mountSiteChrome() {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");

  if (headerMount) headerMount.outerHTML = renderSiteHeader();
  if (footerMount) footerMount.outerHTML = renderSiteFooter();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function initNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuToggle.textContent = open ? "×" : "☰";
  });

  const servicesToggle = mobileNav.querySelector(".mobile-services-toggle");
  const servicesSubmenu = mobileNav.querySelector(".mobile-services-submenu");

  servicesToggle?.addEventListener("click", event => {
    event.preventDefault();
    const open = servicesSubmenu?.classList.toggle("open");
    servicesToggle.setAttribute("aria-expanded", String(Boolean(open)));
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      menuToggle.textContent = "☰";
    });
  });
}
function initTestimonials() {
  const testimonials = [...document.querySelectorAll(".testimonial")];
  const prev = document.getElementById("testimonialPrev");
  const next = document.getElementById("testimonialNext");
  let current = testimonials.findIndex(t => t.classList.contains("active"));
  if (current < 0) current = 0;

  const showTestimonial = index => {
    if (!testimonials.length) return;
    current = (index + testimonials.length) % testimonials.length;
    testimonials.forEach((item, i) =>
      item.classList.toggle("active", i === current)
    );
  };

  prev?.addEventListener("click", () => showTestimonial(current - 1));
  next?.addEventListener("click", () => showTestimonial(current + 1));

  if (testimonials.length > 1) {
    setInterval(() => showTestimonial(current + 1), 6500);
  }
}

function initMovingAreasMap() {
  const mapElement = document.getElementById("gtaMap");
  const mapShell = mapElement?.closest(".areas-map-shell");
  if (!mapElement) return;

  if (typeof L === "undefined") {
    setTimeout(initMovingAreasMap, 150);
    return;
  }

  const isHomepageMap = mapElement.classList.contains("home-areas-map");

  const map = L.map(mapElement, {
    scrollWheelZoom: false,
    zoomControl: false,
    dragging: !isHomepageMap,
    doubleClickZoom: !isHomepageMap,
    boxZoom: !isHomepageMap,
    keyboard: !isHomepageMap,
    touchZoom: !isHomepageMap,
    tap: !isHomepageMap,
    attributionControl: true
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  if (isHomepageMap) {
    map.getContainer().style.cursor = "default";
    map.getContainer().style.pointerEvents = "none";
    map.getContainer().querySelector(".leaflet-control-attribution")?.style.setProperty("pointer-events", "auto");
  }

  const gtaBounds = [
    [43.15, -80.15],
    [44.05, -78.45]
  ];

  L.rectangle(gtaBounds, {
    color: "#c71f1f",
    weight: 2,
    opacity: 0.8,
    fillColor: "#c71f1f",
    fillOpacity: 0.08,
    dashArray: "7 7"
  }).addTo(map);

  const markerIcon = L.divIcon({
    className: "",
    html: '<div class="jaguar-map-marker"></div>',
    iconSize: [22, 22],
    iconAnchor: [11, 22],
    popupAnchor: [0, -20]
  });

  const areas = [
    ["Toronto", 43.6532, -79.3832, "Professional residential and commercial moving throughout Toronto."],
    ["North York", 43.7615, -79.4111, "Home, condo and apartment moving throughout North York."],
    ["Scarborough", 43.7764, -79.2318, "Residential and specialty moving across Scarborough."],
    ["Mississauga", 43.5890, -79.6441, "Reliable moving services for homes and businesses in Mississauga."],
    ["Brampton", 43.7315, -79.7624, "Local and longer-distance moving services throughout Brampton."],
    ["Vaughan", 43.8561, -79.5085, "Professional moving services for Vaughan homes, condos and businesses."],
    ["Markham", 43.8561, -79.3370, "Residential and commercial moving services throughout Markham."],
    ["Richmond Hill", 43.8828, -79.4403, "Reliable residential moving services throughout Richmond Hill."],
    ["Oakville", 43.4675, -79.6877, "Professional moving services for Oakville homes and businesses."],
    ["Burlington", 43.3255, -79.7990, "Moving support throughout Burlington and surrounding areas."],
    ["Milton", 43.5183, -79.8774, "Residential moving services throughout Milton."],
    ["Pickering", 43.8384, -79.0868, "Residential and commercial moving across Pickering."],
    ["Ajax", 43.8509, -79.0204, "Professional moving services throughout Ajax."],
    ["Whitby", 43.8975, -78.9429, "Local and long-distance moving services throughout Whitby."],
    ["Oshawa", 43.8971, -78.8658, "Moving services for homes and businesses throughout Oshawa."]
  ];

  areas.forEach(([name, lat, lng, description]) => {
    const marker = L.marker([lat, lng], {
      icon: markerIcon,
      title: name
    }).addTo(map);

    marker.bindPopup(`
      <div class="area-popup">
        <div class="area-popup-tag">Jaguar Movers</div>
        <h4>${name}</h4>
        <p>${description}</p>
        <a href="contact.html#quote">Request a moving quote →</a>
      </div>
    `);
  });

  L.circle([43.70, -79.45], {
    radius: 56000,
    color: "#c71f1f",
    weight: 1.5,
    opacity: 0.45,
    fillColor: "#c71f1f",
    fillOpacity: 0.035
  }).addTo(map);

  const revealMap = () => {
    mapShell?.classList.add("is-map-visible");
    map.invalidateSize(true);
  };

  map.fitBounds(gtaBounds, {
    padding: isHomepageMap ? [24, 24] : [30, 30]
  });
  requestAnimationFrame(() => map.invalidateSize(true));
  setTimeout(() => map.invalidateSize(true), 150);

  if (mapShell && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      revealMap();
      observer.disconnect();
    }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });
    observer.observe(mapShell);
  } else {
    revealMap();
  }
}

function initScrollAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animatedSelectors = [
    ".section-heading",
    ".hero-content",
    ".hero-visual",
    ".page-hero > .container",
    ".two-column > *",
    ".feature",
    ".service-card",
    ".detail-card",
    ".process-step",
    ".stat-card",
    ".testimonial",
    ".quote-card",
    ".quick-quote",
    ".contact-info",
    ".quote-form",
    ".calculator-result",
    ".areas-hero-copy",
    ".areas-hero-stat",
    ".areas-intro > *",
    ".area-card",
    ".coverage-grid > *",
    ".areas-final-box"
  ];

  document.querySelectorAll(animatedSelectors.join(",")).forEach((element, index) => {
    if (element.closest(".mobile-nav")) return;

    element.classList.add("scroll-reveal");

    if (element.matches(".two-column > :first-child, .coverage-grid > :first-child, .areas-intro > :first-child")) {
      element.classList.add("reveal-left");
    } else if (element.matches(".two-column > :last-child, .coverage-grid > :last-child, .areas-intro > :last-child")) {
      element.classList.add("reveal-right");
    }

    const group = element.closest(".service-grid, .detail-grid, .process-grid, .stats-grid, .areas-list, .coverage-points");
    if (group) {
      const siblings = [...group.children].filter(child => child.classList.contains(element.classList[0]));
      const position = siblings.indexOf(element);
      if (position >= 0) {
        element.style.setProperty("--reveal-delay", `${Math.min(position, 5) * 80}ms`);
      }
    } else {
      element.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 35}ms`);
    }
  });

  const revealElements = [...document.querySelectorAll(".scroll-reveal")];

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(element => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => observer.observe(element));
  }

  document.querySelectorAll(".service-card, .detail-card, .area-card, .process-step, .stat-card, .feature").forEach(card => {
    card.classList.add("animated-card");
  });
}

function initMotionEffects() {
  const header = document.querySelector(".site-header");

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initPageEntrance() {
  requestAnimationFrame(() => {
    document.body.classList.add("page-ready");
    document.querySelector(".areas-page")?.classList.add("page-motion-ready");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mountSiteChrome();
  initNavigation();
  initTestimonials();
  initMovingAreasMap();
  initScrollAnimations();
  initMotionEffects();
  initPageEntrance();
});
