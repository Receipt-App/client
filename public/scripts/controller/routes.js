'use strict';

page('/', view.home, user.add );
page('/login', user.loadUsers, user.checkUser );
page('/profile', view.profUser, user.dataUser );
page('/upload');
page('upload');


page();