document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByLayout();
  // add more js here
});

function loadLayoutByLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;

  // skip adding header/footer on the home page
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
              <li><a href="about-me.html">About Me</a></li>
              <li><a href="projects.html">Projects</a></li>
              <li><a href="contact.html">Contact Me</a></li>
              <li>
                <strong>Submenu (hover to show)</strong>
                <ul>
                  <li><a href="reading-log.html">Reading Log</a></li>
                  <li><a href="neuroscience-blog.html">Neuroscience Blog</a></li>
                  <li><a href="guestbook.html">Guest Book</a></li>
                  <li><a href="mini-games.html">Mini Games</a></li>
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
