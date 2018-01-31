'use strict';

page('/', user.loadUsers, loginView.init);
page('/login', loginView.login, user.checkUser);
page('/aboutus', aboutView.init);
page('/profile', profileView.init)
// page('/profile', user.userData, view.profUser);
// page('/upload');
// page('upload');

page('/new', createView.init);
page('/new:user', createView.new, user.add);

page();