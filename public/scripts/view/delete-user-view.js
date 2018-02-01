'use strict';

(function (module) {
  const deleteUserView = {};
  deleteUserView.init = () => {
    $("form").trigger("reset");
    $('#create-user').hide();
    $('#login').hide();
    $('#profile').hide();
    $('#login').hide();
    $('#about-us').hide();
    $('#delete-user').show();
    $('#update-user-form').hide();

  }
  module.deleteUserView = deleteUserView;
})(window);