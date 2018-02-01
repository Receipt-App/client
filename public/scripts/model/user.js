'use strict';

(function(module) {
    var forRegex;

    var __API_URL__ = "https://pop-server-staging.herokuapp.com"

    const user = {};
    
    var userFromLocal;

    user.add = function(ctx, next) {
        // console.log(ctx);
        let data = ctx.newuser;
        console.log('data for the post ', data);
        $.post(`${__API_URL__}/users/allusers`, data)
        .then(console.log('data send to the server '));
        window.location.href = 'https://pop-client-staging.herokuapp.com/';
        }


    user.loadUsers = function(ctx, next) {
        $.get(`${__API_URL__}/users/allusers`)
           .then(results => {
               ctx.allusers = results.rows;
               console.log(ctx.allusers);
               next();
           });
    }
 
    user.checkUser = function(ctx, next) {
        var arr = [];
        ctx.allusers.map(item=>arr.push (item.username.toUpperCase()));
        if (arr.includes(ctx.curentUser.toUpperCase()) === true){
            localStorage.curentUser = ctx.curentUser;
            userFromLocal = ctx.curentUser;
            
            page('/profile');
            next();
            // console.log('checked user from login' , ctx.curentUser);
        } else {
                alert('NO USERNAME');
                window.location.href = 'https://pop-client-staging.herokuapp.com/';
                
            }
        }
        
    user.loadUserData = function(ctx, next) {
        // var data = localStorage.curentUser;
        // console.log(ctx);
        $.get(`${__API_URL__}/users/cards`)
        .then(results => {
            $('#card-list').empty();
            results.rows.forEach(function(item) {
                // if (item.username === userFromLocal){
                    let card = `
                    <li id='card'>
                    <p>Name: ${item.name}</p>
                    <p>Email: ${item.email}</p>
                    <p>Phone: ${item.email}</p>
                    <p>Additional comment: ${item.other}</p>
                    </li>
                    `;
                    $('#card-list').append(card);
                // } else {
                //     $('#card-list').append('No cards found');
                // }
                
            });
        });        
            
            var userFromLocal = localStorage.curentUser;
            console.log(userFromLocal);

        $('#card-for-db').on('submit', function(e) {
            e.preventDefault();

            let cardForDb = {
                username: userFromLocal,
                name: e.target.cardName.value,
                email: e.target.cardEmail.value,
                phone: e.target.cardPhone.value,
                other: e.target.cardAddress.value
            }
            console.log(cardForDb);
            $.ajax({
                url: `${__API_URL__}/users/cards`,
                method: 'POST',
                data: {
                    username: cardForDb.username,
                    name: cardForDb.name,
                    email: cardForDb.email,
                    phone: cardForDb.phone,
                    other: cardForDb.other
                }
            })
                
                .then(console.log('card sended', cardForDb.username, cardForDb.email ))
                .then(page.redirect('/profile'))

        });

        var forRegex;




    // user.addnewcard = function(ctx,next) {
    //     console.log(ctx.newcard);
    //     let data =  {
    //         username:ctx.userNow,
    //         card:ctx.params.newcard,
    //     };
    //     console.log('new card for server' , data);
    //     $.post(`${__API_URL__}/users/cards`, data)
    //     .then(console.log('new card aded'));
    //     page.redirect('/profile');


    }

        
    module.user = user;

})(window);