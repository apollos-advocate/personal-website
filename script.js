document.addEventListener("DOMContentLoaded", function () {

  loadLayoutByLayout();

  // add more js here
});

function loadLayoutByLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

