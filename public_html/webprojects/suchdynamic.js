//Dynamically loads all components onto the page
$(function() {
    $("#modularnav").load("../NavBarAndJumbo.html");
});

//This thing loads the handlebarsJS portion of the page
$(function() {
  $("#handlebarTemplateHere").load("projectviewer.html");
  console.log("project viewer load completed.");

  //The script is loaded here to make sure it's activated ONLY after the template has been loaded.
  $.getScript('handle_it.js', function () {
    console.log("load was performed.");
  });

});

$(function(){
  $("#modularFooter").load("webProjectsFooter.html");
});
