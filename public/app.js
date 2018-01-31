'use strict';

(function(module){
  const card = {};

  card.add = () => {
    var cardList = $('#card-list');
    let content = `<li>x</li>`;
    cardList.append(content);
    console.log('card added')
  }

  module.card = card;
})(window)  
  
