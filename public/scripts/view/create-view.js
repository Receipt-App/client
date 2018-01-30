'use strict';

(function (module) {
    var createView = {};
    createView.init = () => {
        $('#create-user').show();
        $('#upload').hide();
        $('#profile').hide();
        $('#login').hide();
        $('#about-us').hide();
    }
    module.createView = createView;
})(window);
