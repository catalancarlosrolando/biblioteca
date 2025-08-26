(function () { // Toggle extra content on FAB click 
document.querySelectorAll(".jb-card").forEach((card) => { const fab = card.querySelector(".jb-fab"); const extra = card.querySelector(".jb-card-extra"); if (!fab || !extra) return;

fab.addEventListener("click", () => {
  const isHidden = extra.hasAttribute("hidden");
  fab.setAttribute("aria-expanded", String(isHidden));
  if (isHidden) {
    extra.removeAttribute("hidden");
    extra.style.opacity = "1";
  } else {
    extra.setAttribute("hidden", "");
    extra.style.opacity = "0";
  }
});

// Subtle tilt effect
card.addEventListener("mousemove", (e) => {
  const r = card.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  card.style.transform = `translateY(-2px) rotateX(${py * -4}deg) rotateY(${px * 4}deg)`;
});
card.addEventListener("mouseleave", () => {
  card.style.transform = "";
});
}); })();