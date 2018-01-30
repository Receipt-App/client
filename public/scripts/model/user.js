'use strict';

(function(module) {

    let user = {};

    user.add = function(ctx, next) {
        let data = ctx.newuser;
        $.ajax({
            url: `${__API_URL__ }/users/allusers`,
            method: 'POST',
            data: {
                name: data.name,
                email: data.email,
                username: data.username
            },
        })
        
        console.log('add new user');

    }


    user.loadUsers = function(ctx, next) {
        $.get(`${__API_URL__}/users/allusers`)
           .then(results => {
               ctx.allusers = results;
               localStorage.allusers = JSON.stringify(results);
           });
        next();
        console.log('load users from database');
    }

    //// ask about 
    user.checkUser = function(ctx, next) {
        var username = ctx.curentUser;
        if (ctx.users.toUperCase().includes(username.toUperCase()) === true){
            cts.curentUser  = username;
            next();           

        } else {
            console.log('NO USERNAME');
            page('/login');

        }
    }

    user.loadUserData = function(cts, next) {
        data = ctx.curentUser;
         $.get(`${__API_URL__}/users/receipts`, data)
           .then(results => {
               ctx.userData = results;
            });
            next();    
    }
        
    module.user = user;
})(window);