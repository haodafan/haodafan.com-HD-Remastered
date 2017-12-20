$(function () {
  setPattern();
});

function setPattern() {
  console.log("setPattern function executed.")
  //set parallax background pattern

  var index = Math.floor(Math.random() * 6);
  var pattern = "url('http://haodafan.com/back" + index.toString() + ".png')";

  $("body").css({
      "background-image": pattern,
      "background-attachment": "fixed",
      "background-repeat": "repeat",
  });
}
