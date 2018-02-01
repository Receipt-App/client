'use strict';

(function(module) {
  const aboutView = {}; 
  aboutView.init = () => {
    $("form").trigger("reset");
    $('#create-user').hide();
    $('#login').hide();
    $('#profile').hide();
    $('#login').hide();
    $('#about-us').show();
  }
  module.aboutView = aboutView;
})(window);