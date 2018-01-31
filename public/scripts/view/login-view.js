'use strict';

(function(module) {
  var loginView = {};

  ////// login view. only login form

  loginView.init = function(ctx, next) { 
    $('#create-user').hide();
    $('#upload').hide();
    $('#profile').hide();
    $('#about-us').hide();
    $('#login').show();

    $('#login').on('submit', function(e) {
      e.preventDefault();
      ctx.curentUser = e.target.username.value;
      console.log(e.target.username.value);
      next();
    });
  };
  module.loginView = loginView;
})(window);

