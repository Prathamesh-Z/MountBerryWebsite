// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Nav scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ─── FULL MENU DATA FROM PDF ───────────────────────────────────────────────
const menu = {
  'Hot Coffee': {
    icon: '☕',
    items: [
      { name: 'Espresso',            price: 70,  icon: '☕', recipe: 'Espresso made in 100% Arabica coffee' },
      { name: 'Americano',           price: 80,  icon: '☕', recipe: 'Espresso shot + Hot water' },
      { name: 'Cappuccino',          price: 95,  icon: '☕', recipe: 'Espresso shot + Warm rich frothed milk' },
      { name: 'Flat White',          price: 95,  icon: '☕', recipe: 'Espresso shot + Micro foam steam milk' },
      { name: 'Cafe Latte',          price: 95,  icon: '☕', recipe: 'Espresso shot + Rich frothed steamed milk' },
      { name: 'French Vanilla Latte',price: 99,  icon: '☕', recipe: 'Espresso shot + Vanilla syrup + Rich frothed steamed milk' },
      { name: 'Hazelnut Latte',      price: 99,  icon: '☕', recipe: 'Espresso shot + Hazelnuts syrup + Rich frothed steamed milk' },
      { name: 'Caramel Latte',       price: 99,  icon: '☕', recipe: 'Espresso shot + Caramel syrup + Rich frothed steamed milk' },
      { name: 'Spice Latte',         price: 99,  icon: '☕', recipe: 'Espresso shot + Cinnamon/Ginger spice + Rich frothed steamed milk' },
      { name: 'Irish Latte',         price: 99,  icon: '☕', recipe: 'Espresso shot + Irish syrup + Steamed milk' },
      { name: 'Hot Milk Base Coffee',price: 95,  icon: '☕', recipe: 'Rich, creamy espresso-based hot milk coffee' },
    ]
  },
  'House Special Hot': {
    icon: '⭐',
    items: [
      { name: 'Cafe Mocha',            price: 109, icon: '⭐', recipe: 'Espresso shot + Chocolate Sauce + Rich frothed steamed milk' },
      { name: 'Orange Zest Mocha',     price: 109, icon: '⭐', recipe: 'Espresso shot + Orange zest syrup + Chocolate syrup + Steamed milk' },
      { name: 'Spanish Latte',         price: 109, icon: '⭐', recipe: 'Espresso shot + Condensed milk + Steamed milk' },
      { name: 'Salted Caramel Latte',  price: 109, icon: '⭐', recipe: 'Espresso shot + Salted caramel sauce + Steamed milk' },
      { name: 'Honey Vanilla Latte',   price: 109, icon: '⭐', recipe: 'Espresso shot + Honey + Vanilla syrup + Steamed milk' },
    ]
  },
  'Cold Coffee': {
    icon: '🧊',
    items: [
      { name: 'Ice Americano',         price: 85,  icon: '🧊', recipe: 'Espresso shot + Ice cube + Water' },
      { name: 'Ice Cappuccino',        price: 95,  icon: '🧊', recipe: 'Espresso shot + Ice cube + Hand Foamed chilled milk' },
      { name: 'Ice Cafe Latte',        price: 109, icon: '🧊', recipe: 'Espresso shot + Ice cube + Chilled milk' },
      { name: 'French Vanilla Ice Latte', price: 109, icon: '🧊', recipe: 'Espresso shot + Vanilla syrup + Ice cube + Chilled milk' },
      { name: 'Spanish Ice Latte',     price: 109, icon: '🧊', recipe: 'Espresso shot + Cookies + Ice cube + Chilled milk' },
      { name: 'Carael Ice Latte',      price: 109, icon: '🧊', recipe: 'Espresso shot + Caramel syrup + Ice cube + Chilled milk' },
      { name: 'House Special Ice Blended Latte', price: 109, icon: '🧊', recipe: 'Espresso shot + Cacao powder + Condensed milk + Ice cube + Chilled milk' },
      { name: 'Biscoff Ice Latte',     price: 120, icon: '🧊', recipe: 'Espresso shot + Biscoff spread + Ice cube + Chilled milk' },
      { name: 'Vietnamese Cold Coffee',price: 120, icon: '🧊', recipe: 'Espresso shot + Condensed milk + Ice cube' },
      { name: 'Shakerato',             price: 120, icon: '🧊', recipe: 'Espresso shot + Condensed milk — shake in a shaker to create a chilled, sweetened and frothy version' },
      { name: 'Tiramisu Cold Coffee',  price: 109, icon: '🧊', recipe: 'Espresso shot + Fresh cream + Chilled milk + Maple syrup + Cinnamon powder' },
    ]
  },
  'Frappuccino': {
    icon: '🥤',
    items: [
      { name: 'Cafe Frappe',        price: 129, icon: '🥤', recipe: 'Espresso shot + Ice cube + Chilled milk + Top whipped cream' },
      { name: 'Mocha Frappe',       price: 135, icon: '🥤', recipe: 'Espresso shot + Chocolate sauce + Ice cube + Chilled milk + Top whipped cream' },
      { name: 'Nutella Mocha Frappe', price: 135, icon: '🥤', recipe: 'Espresso shot + Nutrella Spread + Ice cube + Chilled milk + Top whipped cream' },
      { name: 'Irish Frappe',       price: 129, icon: '🥤', recipe: 'Espresso shot + Irish syrup + Ice cube + Chilled milk + Top whipped cream' },
      { name: 'Cookies Frappe',     price: 135, icon: '🥤', recipe: 'Espresso shot + Cookies + Ice cube + Chilled milk + Top whipped cream' },
      { name: 'Caramel Frappe',     price: 129, icon: '🥤', recipe: 'Espresso shot + Caramel syrup + Ice cube + Top whipped cream' },
      { name: 'Hazelnut Frappe',    price: 129, icon: '🥤', recipe: 'Espresso shot + Hazelnut syrup + Ice cube + Chilled milk + Top whipped cream' },
      { name: 'Strawberry Frappe',  price: 135, icon: '🥤', recipe: 'Espresso shot + Strawberry Crush + Ice cube + Chilled milk + Top whipped cream' },
    ]
  },
  'Ice Cream Blend': {
    icon: '🍦',
    items: [
      { name: 'Ice Cream Blend Coffee',      price: 145, icon: '🍦', recipe: 'Espresso shot + Ice cream + Chilled milk' },
      { name: 'Chocolate Blend Coffee',      price: 145, icon: '🍦', recipe: 'Espresso shot + Ice cream + Chocolate sauce + Chilled milk' },
      { name: 'Brownie Blend Coffee',        price: 149, icon: '🍦', recipe: 'Espresso shot + Ice cream + Brownie + Chilled milk' },
      { name: 'Nuttella Blend Coffee',       price: 149, icon: '🍦', recipe: 'Espresso shot + Ice cream + Nuttella + Chilled milk' },
      { name: 'Broco-Choco Blend Coffee',    price: 149, icon: '🍦', recipe: 'Espresso shot + Brownie + Ice cube + Chilled milk + Top whipped cream' },
      { name: 'Affogato Coffee',             price: 140, icon: '🍦', recipe: 'Espresso shot + Ice cream' },
      { name: 'Biscoff Ice Cream Blend',     price: 149, icon: '🍦', recipe: 'Espresso shot + Biscoff spread + Ice cream + Biscoff crunch + Chilled milk' },
    ]
  },
  'Hot Chocolate': {
    icon: '🍫',
    items: [
      { name: '55% Dark Hot Chocolate', price: 110, icon: '🍫', recipe: 'Rich dark 55% cacao chocolate, steamed to perfection' },
      { name: 'Nutella Hot Chocolate',  price: 120, icon: '🍫', recipe: 'Creamy Nutella melted into steamed milk' },
      { name: 'Irish Hot Chocolate',    price: 120, icon: '🍫', recipe: 'Irish syrup blended with rich hot chocolate' },
      { name: 'Java Chip Hot Chocolate',price: 120, icon: '🍫', recipe: 'Hot chocolate with crunchy java chips' },
      { name: 'Black Cocoa Vanilla Chocolate', price: 120, icon: '🍫', recipe: 'Intense black cocoa with a hint of vanilla' },
      { name: 'Ice Chocolate',          price: 110, icon: '🍫', recipe: 'Chilled rich chocolate drink over ice' },
    ]
  },
  'Signature Cold Brew': {
    icon: '🫗',
    items: [
      { name: 'Cranberry Cold Brew Coffee', price: 109, icon: '🫗', recipe: 'Cranberry juice + Cold Brew + Espresso shot + Sweet Aerated Water' },
      { name: 'Orange Cold Brew Coffee',    price: 109, icon: '🫗', recipe: 'Orange juice + Cold Brew + Espresso shot + Sweet Aerated Water' },
      { name: 'Litchi Cold Brew Coffee',    price: 109, icon: '🫗', recipe: 'Litchi juice + Cold Brew + Espresso shot + Sweet Aerated Water' },
      { name: 'Cold Brew Tonic Water',      price: 130, icon: '🫗', recipe: 'Tonic water + Cold Brew + Espresso shot' },
    ]
  },
  'Matcha': {
    icon: '🍵',
    items: [
      { name: 'Hot Cappuccino Matcha',    price: 130, icon: '🍵', recipe: 'Matcha + Steamed milk (Add any flavour for ₹30 extra)' },
      { name: 'Matcha Ice Latte',         price: 140, icon: '🍵', recipe: 'Matcha + Ice + Chilled milk' },
      { name: 'Strawberry Matcha Ice Latte', price: 160, icon: '🍵', recipe: 'Matcha + Strawberry + Ice + Chilled milk' },
    ]
  },
  'Shakes & Smoothies': {
    icon: '🥛',
    items: [
      { name: 'Strawberry Shake',      price: 155, icon: '🥛', recipe: 'Fresh strawberry blended with milk and ice cream' },
      { name: 'Oreo Overload Shake',   price: 155, icon: '🥛', recipe: 'Crushed Oreo cookies blended with milk and cream' },
      { name: 'Nutella Shake',         price: 159, icon: '🥛', recipe: 'Rich Nutella blended with milk' },
      { name: 'Chocolate Shake',       price: 155, icon: '🥛', recipe: 'Classic creamy chocolate milkshake' },
      { name: 'Biscoff Shake',         price: 159, icon: '🥛', recipe: 'Biscoff spread blended with milk and cream' },
      { name: 'Mixed Berry Smoothie',  price: 165, icon: '🍓', recipe: 'Mixed berries blended smooth' },
      { name: 'Blue Berry Smoothie',   price: 165, icon: '🍓', recipe: 'Fresh blueberries blended smooth' },
      { name: 'Mango Smoothie',        price: null,icon: '🍓', recipe: 'Fresh mango blended smooth (seasonal availability)' },
    ]
  },
  'Sandwiches': {
    icon: '🥪',
    items: [
      { name: 'Spinach & Corn Sandwich',      price: 140, icon: '🥪', recipe: 'Spinach and corn + honey creamy mayonnaise + cheese — nestled between grilled bread, served with fries' },
      { name: 'Mushroom Sandwich',             price: 140, icon: '🥪', recipe: 'Creamy mushroom and cheese in grilled bread, served with fries' },
      { name: 'Butter Mushroom Croissant Sandwich', price: 129, icon: '🥐', recipe: 'Buttery croissant filled with creamy mushroom' },
      { name: 'Butter Paneer Croissant Sandwich',   price: 129, icon: '🥐', recipe: 'Buttery croissant filled with paneer' },
      { name: 'Grilled Cheese Sandwich',       price: 109, icon: '🥪', recipe: 'Classic melted cheese in crispy grilled bread' },
      { name: 'Veg Cheese Grilled Sandwich',   price: 119, icon: '🥪', recipe: 'Mixed vegetables with cheese, grilled to perfection' },
      { name: 'Paneer Makhani Sandwich',       price: 109, icon: '🥪', recipe: 'Paneer in makhani sauce, served in grilled bread' },
      { name: 'Special Cold Sandwich',         price: 99,  icon: '🥪', recipe: 'Chilled sandwich with special house filling' },
      { name: 'Spicy Cold Sandwich',           price: 99,  icon: '🥪', recipe: 'Spicy chilled sandwich' },
      { name: 'Special Cheese Cold Sandwich',  price: 109, icon: '🥪', recipe: 'Chilled sandwich loaded with cheese' },
    ]
  },
  'Burgers': {
    icon: '🍔',
    items: [
      { name: 'Aloo Tikki Burger',    price: 99,  icon: '🍔', recipe: 'Crispy aloo tikki patty with lettuce, tomato and house sauce' },
      { name: 'Crispy Cheese Burger', price: 119, icon: '🍔', recipe: 'Crispy patty loaded with melted cheese' },
      { name: 'Spicy Paneer Burger',  price: 110, icon: '🍔', recipe: 'Spiced paneer patty with pickles and mayo' },
      { name: 'Paneer Cheese Burger', price: 110, icon: '🍔', recipe: 'Paneer patty topped with cheese and house sauce' },
    ]
  },
  'Fries': {
    icon: '🍟',
    items: [
      { name: 'Fries Platter',   price: 250, icon: '🍟', recipe: 'Spring Roll + Nuggets + Cheese Ball + Fries — the ultimate sharing platter' },
      { name: 'Peri Peri Fries', price: 110, icon: '🍟', recipe: 'Crispy fries tossed in spicy peri peri seasoning' },
      { name: 'Salted Fries',    price: 109, icon: '🍟', recipe: 'Golden crispy fries with sea salt' },
      { name: 'Cheese Fries',    price: 120, icon: '🍟', recipe: 'Hot fries smothered in melted cheese sauce' },
      { name: 'Cheese Ball',     price: 110, icon: '🧀', recipe: 'Crispy fried cheese balls with dipping sauce' },
      { name: 'Nuggets',         price: 110, icon: '🍟', recipe: 'Crispy golden veggie nuggets' },
    ]
  },
  'Pasta': {
    icon: '🍝',
    items: [
      { name: 'Red Sauce Pasta',   price: 149, icon: '🍝', recipe: 'Classic marinara — pasta in rich tomato-based Italian sauce' },
      { name: 'White Sauce Pasta', price: 149, icon: '🍝', recipe: 'Bechamel pasta — creamy Italian dish with smooth, rich white sauce' },
    ]
  },
  'Garlic Bread': {
    icon: '🥖',
    items: [
      { name: 'Cheese Garlic Bread', price: 129, icon: '🥖', recipe: 'Toasted bread with garlic butter and melted cheese' },
      { name: 'Garlic Bread',        price: 120, icon: '🥖', recipe: 'Classic toasted bread with herb garlic butter' },
    ]
  },
  'Veg Hot Dogs': {
    icon: '🌭',
    items: [
      { name: 'Mix Veg Hot Dog',      price: 120, icon: '🌭', recipe: 'Mixed vegetable sausage in a soft bun with condiments' },
      { name: 'Paneer Hot Dog',        price: 129, icon: '🌭', recipe: 'Paneer sausage in a soft bun with mustard and relish' },
      { name: 'Mushroom Hot Dog',      price: 129, icon: '🌭', recipe: 'Mushroom-filled sausage in a soft bun' },
      { name: 'Special Nugget Hot Dog',price: 135, icon: '🌭', recipe: 'Hot dog topped with crispy nuggets' },
    ]
  },
  'Croissants & Bakes': {
    icon: '🥐',
    items: [
      { name: 'Butter Croissant',          price: 95,  icon: '🥐', recipe: 'Classic buttery, flaky baked croissant' },
      { name: 'Chocolate Croissant',       price: 99,  icon: '🥐', recipe: 'Flaky croissant filled with rich chocolate' },
      { name: 'Nutella Croissant',         price: 109, icon: '🥐', recipe: 'Flaky croissant filled with Nutella spread' },
      { name: 'Almond Butter Croissant',   price: 109, icon: '🥐', recipe: 'Croissant with almond butter filling' },
      { name: 'Peanut Butter Croissant',   price: 99,  icon: '🥐', recipe: 'Flaky croissant filled with peanut butter' },
      { name: 'Cinnamon Roll',             price: 95,  icon: '🥐', recipe: 'Soft, sweet roll swirled with cinnamon and glaze' },
      { name: 'Double Chocolate Cookies',  price: 45,  icon: '🍪', recipe: 'Rich double chocolate chip cookies — baked fresh' },
    ]
  },
};

// ─── MODAL ──────────────────────────────────────────────────────────────────
const overlay   = document.getElementById('modalOverlay');
const modalClose= document.getElementById('modalClose');

function openModal(item, cat) {
  document.getElementById('modalIcon').textContent  = item.icon;
  document.getElementById('modalCat').textContent   = cat;
  document.getElementById('modalName').textContent  = item.name;
  document.getElementById('modalRecipe').innerHTML  =
    '<strong>Ingredients:</strong><br/>' + item.recipe;
  document.getElementById('modalPrice').textContent =
    item.price ? '₹' + item.price : 'Seasonal';
  overlay.classList.add('open');
}

modalClose.addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

// ─── MENU RENDER ────────────────────────────────────────────────────────────
const categories = Object.keys(menu);
let activeTab = categories[0];

function renderTabs() {
  const tabs = document.getElementById('menuTabs');
  tabs.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'tab' + (cat === activeTab ? ' active' : '');
    btn.textContent = menu[cat].icon + ' ' + cat;
    btn.dataset.cat = cat;
    btn.addEventListener('click', () => {
      activeTab = cat;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderGrid();
    });
    tabs.appendChild(btn);
  });
}

function renderGrid() {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  const items = menu[activeTab].items;
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="mc-icon">${item.icon}</div>
      <div class="mc-name">${item.name}</div>
      <div class="mc-tap">Tap to see recipe</div>
    `;
    card.addEventListener('click', () => openModal(item, activeTab));
    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), i * 50);
  });
}

renderTabs();
renderGrid();

// ─── CURSOR HOVER ───────────────────────────────────────────────────────────
function attachCursorHovers() {
  document.querySelectorAll('a, button, .menu-card, .order-card, .bs-tag').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
  });
}
attachCursorHovers();

// Re-attach after grid re-render
const menuTabsEl = document.getElementById('menuTabs');
menuTabsEl.addEventListener('click', () => setTimeout(attachCursorHovers, 300));

// ─── SCROLL REVEAL ──────────────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.about-inner, .order-inner, .visit-inner, .reviews-embed-wrap').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});