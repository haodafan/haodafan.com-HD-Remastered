//Dynamically loads all components onto the page
$(function() {
    $("#modularnav").load("../NavBarAndJumbo.html");
});

$(function(){
   $("#modularFooter").load("../mainFooter.html");
 });
// Set background
$(function () {
  $.getScript('../background.js', function () {
    console.log("background script loaded.");
  })
})
