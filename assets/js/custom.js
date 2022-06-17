$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#header").addClass("bg-black");
  } else {
    $("#header").removeClass("bg-black");
  }
});

//tabs
let tabs = document.querySelectorAll(".tab__toggle"),
  contents = document.querySelectorAll(".tabs__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("is-active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });
    contents[index].classList.add("is-active");
    tabs[index].classList.add("is-active");
  });
});
