'use strict';

(function(module) {
  var loginView = {};

  ////// login view. only login form

  loginView.init = function(ctx, next) {
    localStorage.clear();
    $("form").trigger("reset"); 
    $('#create-user').hide();
    $('#upload').hide();
    $('#profile').hide();
    $('#us-view').hide();
    $('#update-user-form').hide();
    $('#login').show();
    $('#delete-user').hide();

    

    $('#login').on('submit', function(e) {
      e.preventDefault();
      ctx.curentUser = e.target.username.value;
      // console.log(e.target.username.value);
      next();
    });
  };
  module.loginView = loginView;
})(window);

