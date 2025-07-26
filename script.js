document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByLayout();

});

function loadLayoutByLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;

 

  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

function headerHTML() {
  return `
     <header>
       <div class="header-content">
        <img src="http://dl9.glitter-graphics.net/pub/493/493789nfy8xzi1n4.gif" width=374 height=44 border=0>
          <img src="https://text.glitter-graphics.net/sblue/h.gif" border=0><img src="https://text.glitter-graphics.net/sblue/e.gif" border=0><img src="https://text.glitter-graphics.net/sblue/y.gif" border=0><img src="https://dl3.glitter-graphics.net/empty.gif" width=20 border=0><img src="https://dl3.glitter-graphics.net/empty.gif" width=20 border=0><img src="https://text.glitter-graphics.net/sblue/i.gif" border=0><img src="https://text.glitter-graphics.net/sblue/t.gif" border=0><img src="https://text.glitter-graphics.net/sblue/s.gif" border=0><img src="https://dl3.glitter-graphics.net/empty.gif" width=20 border=0><img src="https://text.glitter-graphics.net/sblue/s.gif" border=0><img src="https://text.glitter-graphics.net/sblue/o.gif" border=0><img src="https://text.glitter-graphics.net/sblue/l.gif" border=0><img src="https://text.glitter-graphics.net/sblue/a.gif" border=0><img src="https://text.glitter-graphics.net/sblue/n.gif" border=0><img src="https://text.glitter-graphics.net/sblue/e.gif" border=0><img src="http://dl4.glitter-graphics.net/pub/561/561874hhz1c12ps5.gif" alt="butterfly"/>    
	        <!-- NAVIGATION -->
	        <nav>
	          <ul>
	            <li><a href="/">Home</a></li>
	            <li><img src="https://i.postimg.cc/fbMtDqLV/tumblr-inline-pl6z6xx1yb1vsqiz2-500.gif" alt="starss"/>   <a href="/about-me.html">About Me</a></li>
	            <li><img src="https://i.postimg.cc/fbMtDqLV/tumblr-inline-pl6z6xx1yb1vsqiz2-500.gif" alt="starss"/>   <a href="/projects.html">Projects</a></li>
	            <li><img src="https://i.postimg.cc/fbMtDqLV/tumblr-inline-pl6z6xx1yb1vsqiz2-500.gif" alt="starss"/>   <a href="/contact.html">Contact Me!</a></li>
	            <li>
                  <a href="#">More ▼</a><img src="https://i.postimg.cc/fbMtDqLV/tumblr-inline-pl6z6xx1yb1vsqiz2-500.gif" alt="starss"/>   
                     <ul>
                          <li><a href="/reading-log.html" target="_blank">Reading log</a></li>
                          <li><a href="/guestbook.html" target="_blank">Guest book</a></li>
                          <li><a href="/mini-games.html" target="_blank">Mini Games</a></li>
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
