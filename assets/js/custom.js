$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#header").addClass("bg-black");
  } else {
    $("#header").removeClass("bg-black");
  }
});
