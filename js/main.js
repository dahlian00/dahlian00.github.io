document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  var pubFilter = document.getElementById("pubFilter");
  var pubList = document.getElementById("pubList");
  if (!pubFilter || !pubList) return;

  pubFilter.querySelectorAll(".pub-filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      pubFilter.querySelectorAll(".pub-filter-btn").forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      pubList.classList.toggle("filter-featured", btn.dataset.filter === "featured");
    });
  });
});
