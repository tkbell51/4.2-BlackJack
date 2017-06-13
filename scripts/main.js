/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var total = 0;
  for (var i = 0; i < hand.length; i++) {
     var card = parseInt(hand[i]);
     if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
       card = 10;
     } else if (hand[i] === "A") {
       if (hand[i] === "A" && total < 10 && hand.length < 3){
        card = 11;
      } else {
        card = 1;
      }
      }

     total+=card;
  }








 return total;

}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
