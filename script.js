// Sample data
const listings = [
  { id: 1, title: "Gateway Alpha", desc: "Fast and reliable performance.", details: "Gateway Alpha offers 99.9% uptime and 24/7 support." },
  { id: 2, title: "Gateway Beta", desc: "Low latency for real-time apps.", details: "Gateway Beta is optimized for trading and streaming." },
  { id: 3, title: "Gateway Gamma", desc: "Secure and scalable solution.", details: "Gateway Gamma features advanced encryption and scaling." },
];

const posts = [
  { id: 1, title: "What is a Gateway?", excerpt: "Understand basics of gateways...", content: "A gateway connects two networks with different protocols, allowing secure communication." },
  { id: 2, title: "5 Tips for Choosing a Gateway", excerpt: "How to pick the right one...", content: "Consider speed, security, scalability, uptime, and customer support when choosing." },
];

// Navigation
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Render listings
function renderListings() {
  const homeGrid = document.getElementById("listingGrid");
  const allGrid = document.getElementById("allListings");
  if (homeGrid) homeGrid.innerHTML = "";
  if (allGrid) allGrid.innerHTML = "";

  listings.forEach(l => {
    const card = `<div class="card"><h3><a href="#" onclick="showListing(${l.id})">${l.title}</a></h3><p>${l.desc}</p></div>`;
    if (homeGrid) homeGrid.innerHTML += card;
    if (allGrid) allGrid.innerHTML += card;
  });
}

// Show listing details
function showListing(id) {
  const item = listings.find(l => l.id === id);
  if (!item) return;
  document.getElementById("detailTitle").textContent = item.title;
  document.getElementById("detailDesc").textContent = item.details;
  showSection("listingDetail");
}

// Render blog
function renderBlog() {
  const grid = document.getElementById("blogGrid");
  if (!grid) return;
  grid.innerHTML = "";
  posts.forEach(p => {
    grid.innerHTML += `<div class="card"><h3><a href="#" onclick="showPost(${p.id})">${p.title}</a></h3><p>${p.excerpt}</p></div>`;
  });
}

// Show blog post
function showPost(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;
  document.getElementById("postTitle").textContent = post.title;
  document.getElementById("postContent").textContent = post.content;
  showSection("post");
}

// Search filter
function initSearch() {
  const search = document.getElementById("searchBox");
  if (!search) return;
  search.addEventListener("input", e => {
    const filter = e.target.value.toLowerCase();
    const homeGrid = document.getElementById("listingGrid");
    homeGrid.innerHTML = "";
    listings
      .filter(l => l.title.toLowerCase().includes(filter))
      .forEach(l => {
        homeGrid.innerHTML += `<div class="card"><h3><a href="#" onclick="showListing(${l.id})">${l.title}</a></h3><p>${l.desc}</p></div>`;
      });
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderListings();
  renderBlog();
  initSearch();
});
