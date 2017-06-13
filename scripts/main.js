/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var numbers = ['1','2','3','4','5','6','7','8','9','10'];
  var face = ["K", "Q", "J"];
  var ace = "A";
  var total = 0;
  var cardValue = 0;
  var card = '';

  for (var i = 0; i < hand.length; i++) {
     card = hand[i];
     console.log(card);
  }

  for (var m = 0; m < numbers.length; m++) {
    var numberCard = numbers[m];
    if (card === numberCard) {
       cardValue = numberCard;
       
     }
  }

  for (var f = 0; f < face.length; f++) {
    var faceCard = numbers[f];
    if (card === faceCard) {
      cardValue = 10;
    }
  }

 if (card === ace) {
    if (total > 21){
      cardValue = 1;
    } else {
      cardValue = 11;
    }
  }

  return cardValue+=cardValue;
}
console.log(handValue(["K", "Q"]));
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
