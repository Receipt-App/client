'use strict';


(function(module) {
    const view = {};

    view.home = function(ctx, next) {
        $('upload').css('display', 'none');
        $('graph').css('display', 'none');
        $('about-us').css('display', 'none');

        $('create-user').on('submit', function(e) {
            e.preventDefault();
            let data = {
            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value
            }
            ctx.newuser = data;

        });
        next();     
        //sign in or login button 

        // login redirect to ('/login')
  
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