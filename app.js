// 'use strict';
$(document).ready(function() {
  // hamburger menu
  $(function() {
    $('.fa-bars').on('click', function(e) {
      e.preventDefault();
      $('.list').slideToggle();
    });
    // show and hide projects
    $('#articles').hide();
    $('.showpro').click(function() {
      if ($('#articles').is(":hidden")) {
        $('#articles').slideDown("slow");
      } else {
        $('#articles').hide();
      }
    });

    $('#aboutMe').hide();
    $('.aboutMe').click(function() {
      if ($('#aboutMe').is(":hidden")) {
        $('#aboutMe').slideDown("slow");
      } else {
        $('#aboutMe').hide();
      }
    });
  });
  $('#game').hide();
  $('.game').click(function() {
    if ($('#game').is(":hidden")) {
      $('#game').slideDown("slow");
    } else {
      $('#game').hide();
    }
  });


  // Constructor function

  var projects = [];
  // Projects.all = [];

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
    $('#articles').append(compiled(this));
    // return compiled(this);
  };

  rawData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });

  projects.forEach(function(Project) {
    $('#articles').append(Project.toHtml());
  });
});

Projects.fetchAll = function() {
  if (localStorage.rawData) {
    Projects.loadAll(JSON.parse(localStorage.rawData));
  } else {

    $.getJSON('rawData.jason')
      .then(function(data) {
        localStorage.setItem('rawData', JSON.stringify(data))
        console.log('SUCCESS!' + data)
        Projects.loadAll(JSON.parse(localStorage.rawData))
      }, function(err) {
        console.error('Error Has Occured' + err)
      })
  }
}
Projects.fetchAll();
