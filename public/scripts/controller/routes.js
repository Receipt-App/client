'use strict';

page('/', view.home, user.add );
page('/login', view.login, user.checkUser );
page('/profile', user.dataUser, view.profUser);
// page('/upload');
// page('upload');


page();