'use strict';

(function(module) {

    var __API_URL__ = "https://pop-server-staging.herokuapp.com"

    const user = {};

    user.add = function(ctx, next) {
        // console.log(ctx);
        let data = ctx.newuser;
        console.log('data for the post ', data);
        $.post(`${__API_URL__}/users/allusers`, data)
            .then(page('/profile'));
        }


    user.loadUsers = function(ctx, next) {
        $.get(`${__API_URL__}/users/allusers`)
           .then(results => {
               localStorage.allusers = JSON.stringify(results.rows);
               console.log(localStorage);
               next();
           });
        console.log('load users from database');
    }

    //// ask about 
    user.checkUser = function(ctx, next) {
        var username = ctx.curentUser;
        if (ctx.users.toUpperCase().includes(username.toUperCase()) === true){
            cts.curentUser  = username;
            console.log(ctx.curentUser);
            next();
            page.redirect('/profile')           

        } else {
            console.log('NO USERNAME');
            page('/');

        }
    }

    user.loadUserData = function(cts, next) {
        data = ctx.curentUser;
         $.get(`${__API_URL__}/users/cards`, data)
           .then(results => {
               ctx.userData = results;
            });
            next();    
    }
        
    module.user = user;

})(window);