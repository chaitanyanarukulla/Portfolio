'use strict';

var projects = [];

function Project(rawDataObj) {

  this.title = projects.title,
    this.image = projects.image,
    this.projectUrl = projects.projectUrl,
    this.complatedOn = projects.complatedOn
}

if (!this.complatedOn) $newProject.addClass('draft');
$newProject.data('category', this.category);
$('.template').find('h1').html(this.title);
$('.template').find('href').html(this.projectUrl);
$('.template').find('time').html(this.completedOn);
$('.template').find('section').html(this.image);


$newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.complatedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
$newProject.append('<hr>');
// return $newProject;
};

rawData.sort(function(a, b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it.
  return (new Date(b.complatedOn)) - (new Date(a.complatedOn));
});

rawData.forEach(function(articleObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  projects.push(new Project(articleObject));
});

articles.forEach(function(projects) {
  $('#main').append(Project.toHtml());
});
