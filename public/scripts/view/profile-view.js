'use strict';

(function(module) {
  const profileView = {};
  profileView.init = () => {
    $('#create-user').hide();
    $('#login').hide();
    $('#profile').show();
    $('#login').hide();
    $('#about-us').hide();
  }
  module.profileView = profileView;
})(window);