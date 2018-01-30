'use strict';

(function(module) {
    var loginView = {};
    loginView.init = (ctx, next) => {
        $('#create-user').hide();
        $('#upload').hide();
        $('#profile').hide();
        $('#login').show();
        $('#about-us').hide();
        next();
    }
    loginView.login = (ctx, next) => {
        $('#login').on('submit', function (e) {
        e.preventDefault();
        ctx.currentUser = e.target.username.value;
        console.log(e.target.username.value);
        next();
        });
        console.log('login');
    };

    module.loginView = loginView;
})(window);

