/*
 *
 * This Javascript file loads all the important components of all the main webpages:
 * -- The Navigation Bar
 * -- The Jumbotron
 * -- The Footer
 * -- The background
 *
 * COMING SOON:
 * -- Your Account Information and/or login
 * -- Fully integrated shoutbox -- OR -- Featured shouts from the shoutbox webproject
 *
 *
 */

//Navbar and jumbo (now banner)
$(function() {
    $("#modularnav").load("NavBarAndJumbo.html");
});

// Footer
$(function() {
  $("#modularFooter").load("mainFooter.html");
});

// Set background
$(function () {
  $.getScript('background.js', function () {
    console.log("background script loaded.");
  })
})
