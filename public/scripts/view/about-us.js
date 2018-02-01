'use strict';

(function(module) {
  const aboutView = {}; 
  aboutView.init = () => {
    $('input').trigger('reset'); 
    $('#create-user').hide();
    $('#login').hide();
    $('#profile').hide();
    $('#login').hide();
    $('#about-us').show();
  }
  module.aboutView = aboutView;
})(window);