const mobileMenu = document.querySelector("#mobile_menu");
const menuItems = document.querySelector("#menu_items");
const hideBtn = document.querySelectorAll(".minus");
const showBtn = document.querySelectorAll(".plus");
const answer = document.querySelectorAll(".answer");

mobileMenu.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});

showBtn.forEach((ele, i) => {
  let hide = hideBtn[i];
  let ans = answer[i];

  ele.addEventListener("click", () => {
    // hide all the buttons

    showBtn.forEach((btn) => btn.classList.remove("hide"));
    hideBtn.forEach((btn) => btn.classList.remove("show"));
    answer.forEach((ans) => ans.classList.remove("show"));

//     open all the current buttons

    ele.classList.toggle("hide");
    hide.classList.toggle("show");
    ans.classList.toggle("show");

  });
});

hideBtn.forEach((ele, i) => {
  let show = showBtn[i];
  let ans = answer[i];

  ele.addEventListener("click", () => {
    ele.classList.remove("show");
    show.classList.remove("hide");
    ans.classList.remove("show");
  });
});
