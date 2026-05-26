// highlight active section in research subnav
document.addEventListener("DOMContentLoaded", function () {
  const subnav = document.querySelector(".research-subnav");
  if (!subnav) return;
  const links = subnav.querySelectorAll("a");
  const headings = Array.from(links).map((a) => document.querySelector(a.getAttribute("href")));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((a) => a.classList.remove("active"));
          const active = subnav.querySelector(`a[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-56px 0px -70% 0px", threshold: 0 }
  );

  headings.forEach((h) => {
    if (h) observer.observe(h);
  });
});

// add bootstrap classes to tables
$(document).ready(function () {
  $("table").each(function () {
    if (determineComputedTheme() == "dark") {
      $(this).addClass("table-dark");
    } else {
      $(this).removeClass("table-dark");
    }

    // only select tables that are not inside an element with "news" (about page) or "card" (cv page) class
    if ($(this).parents('[class*="news"]').length == 0 && $(this).parents('[class*="card"]').length == 0 && $(this).parents("code").length == 0) {
      // make table use bootstrap-table
      $(this).attr("data-toggle", "table");
      // add some classes to make the table look better
      // $(this).addClass('table-sm');
      $(this).addClass("table-hover");
    }
  });
});
