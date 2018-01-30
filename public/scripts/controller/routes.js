'use strict';

page('/', view.home, user.add );
page('/login', user.loadUsers, view.login, user.checkUser );
page('/profile', user.userData, view.profUser);
// page('/upload');
// page('upload');


page();