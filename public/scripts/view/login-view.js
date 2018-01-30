'use strict';

(function(module) {
    var loginView = {};
    loginView.init = () => {
        $('#create-user').hide();
        $('#upload').hide();
        $('#profile').hide();
        $('#login').show();
        $('#about-us').hide();
    }
    module.loginView = loginView;
})(window);

