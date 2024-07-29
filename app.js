let close_btn = document.getElementById("close_btn");
let menu_btn = document.getElementById("menu_btn");
let main_menu = document.getElementById("main_menu");
let main_btn = document.getElementById("main-btn");
let icon_btn = document.getElementById("icon-btn");
let close_icon = document.getElementById("close-icon");
let menu = document.getElementById("menu");
let mobile_menu = document.getElementById("mobile-menu");
let abatar_btn = document.getElementById("user-menu-button");
let abatar_menu = document.getElementById("abatar_menu");

toggleElement(close_btn, main_menu);
toggleElement(menu_btn, main_menu);
toggleElement(main_btn, icon_btn);
toggleElement(abatar_btn, abatar_menu);

// close_btn.addEventListener("click", function () {
//   main_menu.classList.toggle("hidden");
// });
// menu_btn.addEventListener("click", function () {
//   main_menu.classList.toggle("hidden");
// });
main_btn.addEventListener("click", function () {
  if (close_icon.classList.contains("hidden")) {
    close_icon.classList.remove("hidden");
    icon_btn.classList.add("hidden");
  } else {
    close_icon.classList.add("hidden");
    icon_btn.classList.remove("hidden");
  }
  menu.classList.toggle("hidden");
});

// abatar_btn.addEventListener("click", () => {
//   abatar_menu.classList.toggle("hidden");
// });

function toggleElement(triger, collapsibleElement) {
  triger.addEventListener("click", function () {
    collapsibleElement.classList.toggle("hidden");
  });
}
