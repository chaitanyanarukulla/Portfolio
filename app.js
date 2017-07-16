// 'use strict';
$(document).ready(function() {
  // hamburger menu
  $(function() {
    $('.fa-bars').on('click', function(e) {
      e.preventDefault();
      $('.list').slideToggle();
    });
  });

  // Constructor function

  var projects = [];

  function Project(rawDataObj) {
    this.title = rawDataObj.title;
    this.projectUrl = rawDataObj.projectUrl;
    this.image = rawDataObj.image;
    this.catagory = rawDataObj.catagory;
    this.complatedOn = rawDataObj.complatedOn;
  }

  // grab the template  and compile

  Project.prototype.toHtml = function() {
    // var $newProject = $('myprojectsList-template').clone();

    var myprojectsList = $('#myprojectsList-template').html();
    var compiled = Handlebars.compile(myprojectsList);
    // $('#articles').append(compile(this));
    return compiled(this);
  };

  rawData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });

  projects.forEach(function(Project) {
    $('#articles').append(Project.toHtml());
  });
});
