(() => {
  "use strict";

  const themeButton = document.getElementById("theme-toggle");
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeButton.textContent = theme === "dark" ? "Light theme" : "Dark theme";
    themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  }

  // Storage may be unavailable when opening a downloaded file directly.
  let savedTheme;
  try { savedTheme = localStorage.getItem("viewrety-showcase-theme"); } catch { /* Use system preference. */ }
  setTheme(savedTheme === "dark" || savedTheme === "light"
    ? savedTheme
    : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  themeButton.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("viewrety-showcase-theme", next); } catch { /* Theme still works for this visit. */ }
  });

  const filters = [...document.querySelectorAll(".filter")];
  const findings = [...document.querySelectorAll(".finding")];
  const count = document.getElementById("finding-count");
  for (const filter of filters) {
    filter.addEventListener("click", () => {
      const severity = filter.dataset.severity;
      for (const item of filters) {
        const selected = item === filter;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      }
      let visible = 0;
      for (const finding of findings) {
        finding.hidden = severity !== "all" && finding.dataset.severity !== severity;
        if (!finding.hidden) visible++;
      }
      count.textContent = `${visible} finding${visible === 1 ? "" : "s"}`;
    });
  }
})();
