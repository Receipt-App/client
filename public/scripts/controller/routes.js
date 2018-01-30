'use strict';

page('/', user.loadUsers, loginView.init, user.checkUser);
page('/login', loginView.init);
page('/aboutus', aboutView.init);
page('/profile', profileView.init)
// page('/profile', user.userData, view.profUser);
// page('/upload');
// page('upload');

page('/new', createView.init);

page();