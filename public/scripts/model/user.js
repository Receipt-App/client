'use strict';

(function(module) {

    var __API_URL__ = "https://pop-server-staging.herokuapp.com"

    const user = {};

    user.add = function(ctx, next) {
        // console.log(ctx);
        let data = ctx.newuser;
        console.log('data for the post ', data);
        $.post(`${__API_URL__}/users/allusers`, data)
            .then(page('/login'));
        }


    user.loadUsers = function(ctx, next) {
        $.get(`${__API_URL__}/users/allusers`)
           .then(results => {
               ctx.allusers = results.rows;
               console.log(ctx.allusers);
               next();
           });
        console.log('load users from database');
    }

    //// ask about 
    user.checkUser = function(ctx, next) {
        var arr = [];
        ctx.allusers.map(item=>arr.push (item.username.toUpperCase()));
        console.log(arr);

         if (arr.includes(ctx.curentUser.toUpperCase()) === true){
            console.log('final user' , ctx.curentUser);
            next();           

        } else {
            console.log('NO USERNAME');
            page('/login');

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