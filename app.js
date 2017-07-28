'use strict';
$(document).ready(function() {
  // hamburger menu
  $(function() {
    $('.fa-bars').on('click', function(e) {
      e.preventDefault();
      $('.list').slideToggle();
    });
  });
  // show and hide Tabs
  $('#articles').hide();
  $('.showpro').click(() => $('#articles').toggle('slow'));

  $('#aboutMe').hide();
  $('.aboutMe').click(() => $('#aboutMe').toggle('slow'));

  $('#game').hide();
  $('.game').click(() => $('#game').toggle('slow'));
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
  let compiled = Handlebars.compile($('#myprojectsList-template').html())
  $('#articles').append(compiled(this));
};

rawData.forEach((projectObject) => projects.push(new Project(projectObject)));

projects.forEach((Project) => $('#articles').append(Project.toHtml()));
