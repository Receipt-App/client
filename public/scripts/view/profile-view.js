'use strict';

(function(module) {
  const profileView = {};

  profileView.init = (ctx, next) => {
    $('#create-user').hide();
    $('#login').hide();
    $('#profile').show();
    $('#about-us').hide();

    ctx.userNow = localStorage.curentUser;
    // console.log('profile get user from local storage' , ctx);
    next();
  }

  module.profileView = profileView;
})(window);