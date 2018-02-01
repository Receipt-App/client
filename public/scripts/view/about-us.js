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
    $('#delete-user').hide();
    $('#update-user-form').hide();


  }
  module.aboutView = aboutView;
})(window);