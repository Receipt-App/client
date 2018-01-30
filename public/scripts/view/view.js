'use strict';


(function(module) {
    const view = {};

    ////homepage

    view.home = function(ctx, next) {
        $('upload').css('display', 'none');
        $('graph').css('display', 'none');
        $('about-us').css('display', 'none');

        $('create-user').on('submit', function(e) {
            e.preventDefault();
            let data = {
            name: e.target.name.value,
            email: e.target.email.value,
            username: e.target.username.value
            }
            ctx.newuser = data;

        });
        next();     
        //sign in or login button 
        // login redirect to ('/login')  
        console.log('home page');

    }

    //login to the acount
    view.login = function(ctx, next) {
        $('create-user').css('display', 'none');
        $('upload').css('display', 'none');
        $('graph').css('display', 'none');
        $('about-us').css('display', 'none');

        $('login').on('submit', function(e) {
            e.preventDefault();
            ctx.curentUser = e.targer.username.value;
        });
        next();
        //hide all stuff
        //show login window
        console.log('login');

    }

    // if no username
    view.noUserName = function() {
        console.log('no username') 
        /// same as login but red user name don't exist
        console.log('login');
        view.login();
    }


    // render information about user
    view.profUser = function(ctx,next) {
        $('create-user').css('display', 'none');
        $('upload').css('display', 'none');
        $('graph').css('display', 'none');
        $('about-us').css('display', 'none');
        console.log('userpage');
        
    }


    
    module.view = view;
})(window);