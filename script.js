// menu items - grouped by category
// each item has a name, description, price, and an image filename
const menu = {
  starters: [
    { name: "Duqqa-Crusted Halloumi", desc: "Seared halloumi, hazelnut duqqa, wild honey.", price: "KSh 850", img: "dish-duqqa-halloumi.jpg" },
    { name: "Molokhia Veloute", desc: "Silky jute-leaf soup, garlic-coriander taqleya, crisp pita.", price: "KSh 700", img: "dish-molokhia-veloute.jpg" },
    { name: "Sambousek Trio", desc: "Lamb, spinach-feta and spiced lentil pastries.", price: "KSh 900", img: "dish-sambousek-trio.jpg" },
  ],
  mains: [
    { name: "Nile Perch Sayadeya", desc: "Pan-roasted perch, caramelised onion rice, cumin broth.", price: "KSh 2,400", img: "dish-nile-perch-sayadeya.jpg" },
    { name: "Hamam Mahshi", desc: "Roast pigeon stuffed with freekeh, pomegranate glaze.", price: "KSh 2,800", img: "dish-hamam-mahshi.jpg" },
    { name: "Kofta Royale", desc: "Charcoal-grilled beef kofta, smoked tomato, tahini.", price: "KSh 1,950", img: "dish-kofta-royale.jpg" },
    { name: "Koshari Deluxe", desc: "The Cairo street classic, refined - crispy shallots, aged vinegar.", price: "KSh 1,400", img: "dish-koshari-deluxe.jpg" },
  ],
  desserts: [
    { name: "Om Ali", desc: "Warm bread pudding, pistachio, clotted cream.", price: "KSh 750", img: "dish-om-ali.jpg" },
    { name: "Basbousa & Rose", desc: "Semolina cake, rose syrup, candied orange.", price: "KSh 700", img: "dish-basbousa-rose.jpg" },
    { name: "Cardamom Affogato", desc: "Turkish coffee poured over cardamom ice cream.", price: "KSh 650", img: "dish-cardamom-affogato.jpg" },
  ],
};

const menuGrid = document.getElementById("menuGrid");

// builds the dish cards for whichever tab is clicked
function showMenu(category) {
  if (!menuGrid) return;

  let html = "";
  for (let i = 0; i < menu[category].length; i++) {
    const item = menu[category][i];
    html += `
      <article class="dish">
        <img class="dish-photo" src="images/${item.img}" alt="${item.name}" onerror="this.remove()">
        <div class="dish-top">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p>${item.desc}</p>
      </article>
    `;
  }
  menuGrid.innerHTML = html;
}

if (menuGrid) {
  showMenu("starters"); // default tab when the dining page loads
}

// menu tab buttons
const menuTabs = document.querySelectorAll(".menu-tabs .tab");
menuTabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    menuTabs.forEach(function (t) { t.classList.remove("active"); });
    tab.classList.add("active");
    showMenu(tab.dataset.menu);
  });
});

// navbar - background changes when you scroll down + mobile menu toggle
const nav = document.getElementById("nav");
const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");

if (nav) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  // close the mobile menu after clicking a link
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
}

// fade sections in as you scroll down (elements with class "reveal")
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(function (el) {
  revealObserver.observe(el);
});

// reservation form - switching between Table and Room
const formTypeInput = document.getElementById("formType");
const roomRow = document.getElementById("roomRow");

const switchTabs = document.query
