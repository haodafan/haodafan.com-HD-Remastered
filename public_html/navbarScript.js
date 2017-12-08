/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//This assumes the navigation bar has already loaded onto the right page.

$(function () {
    var thisPath = window.location.pathname;

    // haodafan.com/about/index.html -> haodafan.com/about -> about
    console.log("=> string: " + thisPath);
    var thisPage = thisPath;
    if (thisPath.lastIndexOf("/index.html") !== -1) {
        thisPage = thisPath.substring(0, thisPath.lastIndexOf('/index.html')); //this eliminates the confusion of the home page index and other page indexes
        console.log("=> string: " + thisPage);
    }
    if (thisPath.lastIndexOf(".html") !== -1) {
        thisPage = thisPage.substring(0, thisPage.lastIndexOf('.html'));
        console.log("=> string: " + thisPage);
    }

    thisPage = thisPage.substring(thisPage.lastIndexOf('/') + 1);
    console.log("=> string: " + thisPage);
    //debugging
    console.log("This page string: " + thisPage);

    //If there is nothing there, then it must mean the home page (haodafan.com/index.html)
    if (thisPage === "public_html" || thisPage === "" || thisPage === "BootStrapSite" || thisPage === "HaodaFanDotComRemasteredHD") {
        $("#home").addClass("active");
    }
        //If there is something there, it must be a webpage
    else {
        $("#" + thisPage).addClass("active");
    }
	/*
    $(".navbar").affix({
        offset: {
            top: 600
        }
    });
	*/
});
