'use strict';

(function(module) {
    const user = {};

    user.add = function() {
       //capture form and post it at he database
       //ajax.post

        console.log('add new user');

    }


    user.loadUsers = function(ctx, next) {
        // add ajax to load users
        //and save to local storage????????????
        ctx.users = data;
        next();
        console.log('load users from database');

    }

    user.checkUser = function(ctx, next) {
        var username;
        // capture username from page
        var username = e.target.value;
        if (ctx.users.toUperCase().includes(username.toUperCase()) === true){
            cts.curentUser  = username;
        } else {
            console.log('NO USERNAME');
            view.noUserName();
            // clean page and prompt user dont exist 

        }
        red
        next();           
    }

    user.loadUserData = function(cts, next) {
        username = ctx.curentUser;
        // make ajax to bring user data from anoter table 
        ctx.userData = data;
        next();    
    }
        
    module.user = user;
})(window);