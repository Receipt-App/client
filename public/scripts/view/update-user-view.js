(function (module) {
  var updateView = {};
  updateView.init = function (ctx, next) {
    $('#create-user').hide();
    $('#upload').hide();
    $('#profile').hide();
    $('#login').hide();
    $('#us-view').hide();
    $('#update-user-form').show();
    $('#delete-user').hide();


    $('#update-user').on('submit', function (e) {
      e.preventDefault();
      let data = {
        name: e.target.name.value,
        email: e.target.email.value,
        username: e.target.username.value
      };
      ctx.curentUser = data;
      console.log('data from form', ctx.curentUser);
      next();
    });
  }
  module.updateView = updateView;
})(window);