document.addEventListener("DOMContentLoaded", function () {
  let categories = [];

  let types = [];

  let products = [];

  async function init() {
    await fetchCategories();
    await fetchTypes();
    await fetchProducts();
    renderCategories();
    renderProductList("bestSellerList", (p) => p.type === 1);
    renderProductList("newProductList", (p) => p.type === 2);
    renderProductList("promoList", (p) => p.type === 3);
    renderProductList("sepedaBalapList", (p) => p.category === 1);
    renderProductList("sepedaGunungList", (p) => p.category === 2);
    renderProductList("sepedaLipatList", (p) => p.category === 3);
    renderProductList("sepedaListrikList", (p) => p.category === 4);
    filterProducts("all");
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  async function fetchCategories() {
    try {
      const res = await fetch("/api/categories");
      if (!res.ok) throw new Error("Failed to fetch categories");
      categories = await res.json();
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchTypes() {
    try {
      const res = await fetch("/api/types");
      if (!res.ok) throw new Error("Failed to fetch types");
      types = await res.json();
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchProducts() {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      products = await res.json();
    } catch (err) {
      console.error(err);
    }
  }

  function createCategoryCard(category) {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = `#${toCamelCase(category.name)}`;
    card.innerHTML = `
      <div class="category-icon">${category.name[7]}</div>
      <h3>${formatName(category.name)}</h3>
      <p>Explore various models of ${formatName(category.name)}.</p>
    `;
    return card;
  }

  function renderCategories() {
    const container = document.getElementById("categoriesGrid");
    container.innerHTML = "";
    categories.forEach((category) =>
      container.appendChild(createCategoryCard(category))
    );
  }

  function createProductCard(product) {
    const category =
      formatName(categories.find((cat) => cat.id === product.category)?.name) ||
      "Unknown";
    const labelName =
      formatName(types.find((t) => t.id === product.type)?.name) || "Unknown";
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="images/${product.image}" alt="${product.name}">
      <span class="label ${labelName}">${labelName}</span>
      <h3>${product.name}</h3>
      <h4>${category}</h4>
      <p class="price">${formatRupiah(product.price)}</p>
      <button class="detail-btn" onclick="openProductModal(${
        product.id
      })">Detail</button>
    `;
    return card;
  }

  function renderProductList(containerId, filterFn) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    products.filter(filterFn).forEach((product) => {
      container.appendChild(createProductCard(product));
    });
  }

  function formatName(name) {
    return (
      name &&
      name.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    );
  }

  function formatRupiah(angka) {
    const cleanNumber = Math.floor(Number(angka));

    return (
      "Rp. " + cleanNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    );
  }

  function toCamelCase(str) {
    return str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
  }

  window.filterProducts = function (label) {
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));

    const button = Array.from(document.querySelectorAll(".filter-btn")).find(
      (btn) =>
        btn.innerText.toLowerCase() === label.toLowerCase() ||
        (label === "all" && btn.innerText.toLowerCase() === "all products")
    );
    if (button) button.classList.add("active");

    renderProductList("productList", (product) => {
      if (label === "all") return true;

      const typeObj = types.find((t) => t.id === product.type);
      return typeObj?.name?.toLowerCase() === label.toLowerCase();
    });
  };

  window.openProductModal = function (id) {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    document.getElementById("modalImage").src = `images/${product.image}`;
    document.getElementById("modalTitle").textContent = product.name;
    document.getElementById("modalCategory").textContent =
      formatName(categories.find((c) => c.id === product.category)?.name) || "";
    document.getElementById("modalPrice").textContent = formatRupiah(
      product.price
    );
    document.getElementById("modalDescription").textContent =
      product.description;
    document.getElementById("productModal").classList.remove("hidden");
  };

  window.closeProductModal = function () {
    document.getElementById("productModal").classList.add("hidden");
  };

  // Start everything
  init();
});
