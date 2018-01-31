'use strict';

(function(module) {
  const profileView = {};

  profileView.init = () => {
    $('#create-user').hide();
    $('#login').hide();
    $('#profile').show();
    $('#about-us').hide();
  }
  module.profileView = profileView;
})(window);