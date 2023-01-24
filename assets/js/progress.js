window.addEventListener("scroll", function () {
    var scroll = document.querySelector(".back-to-top");
    scroll.classList.toggle("back-to-top-active", window.scrollY > 500);
  });
  window.addEventListener("scroll", function () {
    var scroll = document.querySelectorAll(".skill-bars");
    scroll.forEach((element) => {
      element.classList.toggle("skill-bar", window.scrollY > 1300);
    });
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  var ww = $(window).width();
  var limit = 700;
  
  function refresh() {
    ww = $(window).width();
    var w =
      ww < limit
        ? location.reload(true)
        : ww > limit
        ? location.reload(true)
        : (ww = limit);
  }
  
  var tOut;
  $(window).resize(function () {
    var resW = $(window).width();
    clearTimeout(tOut);
    if ((ww > limit && resW < limit) || (ww < limit && resW > limit)) {
      tOut = setTimeout(refresh, 100);
    }
  });
  