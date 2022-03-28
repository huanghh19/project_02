window.addEventListener("load", function () {
  // var ban = document.querySelector(".banner");
  // var ul = ban.children[0];
  // var wid = ban.offsetWidth;
  // var ol = ban.children[1];
  // console.log(wid);
  // var index = 0;
  // var timer = setInterval(function () {
  //   index++;
  //   var trs = -index * wid;
  //   ul.style.transition = "all .3s";
  //   ul.style.transform = "translateX(" + trs + "px)";
  // }, 2000);
  // ul.addEventListener("transitionend", function () {
  //   if (index >= 3) {
  //     index = 0;
  //     ul.style.transition = "none";
  //     var tr = -index * wid;
  //     ul.style.transform = "translateX(" + tr + "px)";
  //   } else if (index < 0) {
  //     index = 2;
  //     ul.style.transition = "none";
  //     var tr = -index * wid;
  //     ul.style.transform = "translateX(" + tr + "px)";
  //   }
  //   ol.querySelector(".current").classList.remove("current");
  //   ol.children[index].classList.add("current");
  // });
  // var startx = 0;
  // var movex = 0;
  // ul.addEventListener("touchstart", function (e) {
  //   startx = e.targetTouches[0].pageX;
  //   clearInterval(timer);
  // });
  // ul.addEventListener("touchmove", function (e) {
  //   movex = e.targetTouches[0].pageX - startx;
  //   var tr = -index * wid + movex;
  //   ul.style.transition = "none";
  //   ul.style.transform = "translateX(" + tr + "px)";
  // });
  // ul.addEventListener("touchend", function () {
  //   if (Math.abs(movex) > 50) {
  //     if (movex > 0) {
  //       index--;
  //     } else {
  //       index++;
  //     }
  //     var tr = -index * wid;
  //     ul.style.transition = "all .3s";
  //     ul.style.transform = "translateX(" + tr + "px)";
  //   } else {
  //     var tr = -index * wid;
  //     ul.style.transform = "translateX(" + tr + "px)";
  //   }
  //   clearInterval(timer);
  //   setInterval(function () {
  //     index++;
  //     var trs = -index * wid;
  //     ul.style.transition = "all .3s";
  //     ul.style.transform = "translateX(" + trs + "px)";
  //   }, 2000);
  // });
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
