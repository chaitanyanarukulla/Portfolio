'use strict';
$(function() {
      $('.fa-bars').on('click', function(e) {
          e.preventDefault();
          $('.list').slideToggle();
        }
      });
