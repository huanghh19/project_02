window.addEventListener("load", function () {
  var ban = document.querySelector(".banner");
  var top = document.querySelector(".top");
  var ul = document.querySelector("ul");
  var img = document.querySelectorAll("img");
  var mid = document.querySelector(".middle");
  var ol = document.querySelector("ol");

  ban.addEventListener("mouseenter", function () {
    mid.style.display = "block";
    clearInterval(timer);
    timer = null;
  });
  ban.addEventListener("mouseleave", function () {
    mid.style.display = "none";
    timer = window.setInterval(function () {
      mid.children[1].click();
    }, 2000);
  });
  var focuswidth = ban.offsetWidth;
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    ol.appendChild(li);
    li.appendChild(span);
    span.setAttribute("index", i);
    span.addEventListener("click", function () {
      for (var j = 0; j < ol.children.length; j++) {
        ol.children[j].children[0].className = "";
      }
      this.className = "current2";
      var index = this.getAttribute("index");
      num = circle = index;
      console.log(focuswidth);
      animate(ul, -index * focuswidth);
    });
    ol.children[0].children[0].className = "current2";
  }
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  var num = 0;
  var circle = 0;
  var flag = true;
  mid.children[1].addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == img.length) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focuswidth, function () {
        flag = true;
      });
      circle++;
      if (circle == ol.children.length) {
        circle = 0;
      }
      for (var j = 0; j < ol.children.length; j++) {
        ol.children[j].children[0].className = "";
      }
      ol.children[circle].children[0].className = "current2";
    }
  });

  mid.children[0].addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * focuswidth + "px";
      }
      num--;
      animate(ul, -num * focuswidth, function () {
        flag = true;
      });
      circle--;
      if (circle < 0) {
        circle = ol.children.length - 1;
      }
      for (var j = 0; j < ol.children.length; j++) {
        ol.children[j].children[0].className = "";
      }
      ol.children[circle].children[0].className = "current2";
    }
  });
  var timer = window.setInterval(function () {
    mid.children[1].click();
  }, 2000);
});
