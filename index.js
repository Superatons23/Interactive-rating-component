window.onload = function () {
  var ratings = document.getElementsByClassName("ratings").item(0);
  var buttons = ratings.getElementsByClassName("btn-rating");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
      var current = document.getElementsByClassName(" btn-active");

      if (current[0] !== undefined) {
        current[0].className = current[0].className.replace("btn-active", "");
      }
      this.className += " btn-active";
    });
  }

  var btnSumbmit = document.getElementsByClassName("btn-submit").item(0);

  btnSumbmit.addEventListener("click", function (e) {
    var current = document.getElementsByClassName(" btn-active");
    if (current[0] !== undefined) {
      textRating = document
        .getElementsByClassName("rating-selected")
        .item(0)
        .getElementsByTagName("h6")
        .item(0);
      textRating.innerHTML = `You selected ${current[0].innerHTML} out 6`;

      sectionStart = document
        .getElementsByClassName("rating-start")
        .item(0).classList += " inactive";

      sectionEnd = document
        .getElementsByClassName("rating-end")
        .item(0).classList += " active";
    }
  });
};
