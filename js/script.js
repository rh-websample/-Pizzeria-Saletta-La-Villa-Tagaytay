// Pizzeria Saletta — La Villa Tagaytay
(function () {
  "use strict";

  /* Header scroll state */
  var header = document.getElementById("siteHeader");
  var onScroll = function () {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav toggle */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Reveal-on-scroll */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Generate the hero string-light bulbs along a gentle swag path */
  var bulbRow = document.getElementById("bulbRow");
  if (bulbRow) {
    var count = 26;
    for (var i = 0; i < count; i++) {
      var t = i / (count - 1); // 0..1
      // approximate the same swag curve as the SVG path, in percentages
      var x = t * 100;
      var y = 10 + Math.sin(t * Math.PI * 2.1 + 0.4) * 34 + 20;
      var bulb = document.createElement("div");
      bulb.className = "bulb";
      bulb.style.left = x + "%";
      bulb.style.top = y + "px";
      bulb.style.animationDelay = (Math.random() * 3).toFixed(2) + "s";
      bulbRow.appendChild(bulb);
    }
  }
})();
