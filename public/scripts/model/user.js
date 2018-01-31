'use strict';

(function(module) {

    var __API_URL__ = "https://pop-server-staging.herokuapp.com"

    const user = {};

    user.add = function(ctx, next) {
        // console.log(ctx);
        let data = ctx.newuser;
        console.log('data for the post ', data);
        $.post(`${__API_URL__}/users/allusers`, data)
        .then(console.log('data send to the server '));
        page.redirect('/');
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
 
    user.checkUser = function(ctx, next) {
        var arr = [];
        ctx.allusers.map(item=>arr.push (item.username.toUpperCase()));
        if (arr.includes(ctx.curentUser.toUpperCase()) === true){
            localStorage.curentUser = ctx.curentUser;
            page('/profile');
            console.log(ctx.curentUser);
        } else {
                alert('NO USERNAME');
                page.redirect('/');
                
            }
        }
        
        user.loadUserData = function(cts, next) {
            data = localStorage.curentUser;
            console.log('final user' , data);
            $.get(`${__API_URL__}/users/cards`, data)
           .then(results => {
               ctx.userData = results;
            });
            next();    
    }
        
    module.user = user;

})(window);