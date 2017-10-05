//That's right bitches, this is all one massive function :O
$(function () {


  //Retrieve the template data from the HTML (jQuery is used here)
  var template = $('#handlebars').html();

  // Compile the template data into a function
  var templateScript = Handlebars.compile(template);

  //Brings the context into the json file
  var context;
  $.get('projects.json', function(res) {
    context = res;
  });

  console.log(context) //debugging

  //html...
  var newHtml = templateScript(context);

  console.log(newHtml) //debugging

  //Insert the HTML code into the page
  $('#allProjects').append(html);

});
