'use strict';

(function(module) {
    const view = {};

    view.home = function() {
        
        //sign in or login button 

        // login redirect to ('/login')
        // sign in show the form ()

        console.log('home page');

    }


    view.login = function() {
        user.loadUsers();
        //hide all stuff
        //show login window
        console.log('login');

    }

    view.noUserName = function() {
        console.log('no username') 
        /// same as login but red user name don't exist
        console.log('login');
        view.login();
    }


    
    view.profUser = function(ctx,next) {
        //hide all stuf
        //show user page
        console.log('userpage');
        
    }


    
    module.view = view;
})(window);