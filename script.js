document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByLayout();
  // add more js here
});

function loadLayoutByLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;

  // Skip adding header/footer on the home page
  const path = window.location.pathname;
  if (path === "/" || path.endsWith("/index.html")) {
    return;
  }

  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

function headerHTML() {
  return `
      <header>
        <div class="header-content">
          <div class="header-title">Hey, it's Solane!</div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="page1.html">Page 1</a></li>
              <li><a href="page2.html">Page 2</a></li>
              <li><a href="page3.html">Page 3</a></li>
              <li>
                <strong>Submenu (hover to show)</strong>
                <ul>
                  <li><a href="page-a.html">Page A</a></li>
                  <li><a href="page-b.html">Page B</a></li>
                  <li><a href="page-c.html">Page C</a></li>
                  <li><a href="page-d.html">Page D</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  `;
}


function footerHTML() {
  return `
      <footer>
        <div>© Created by me (Solane Dasha) in the big 2025! Created with love and lots of care and lots and lots of tears. 🩷. <a href="/">Home</a></div>
      </footer>
  `;
}

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
            el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
