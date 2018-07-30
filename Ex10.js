var card1 = parseInt(prompt("Enter card 1."));
var card2 = parseInt(prompt("Enter card 2."));
var card3 = parseInt(prompt("Enter card 3."));
var cardSum = card1+card2+card3;
if (cardSum == 21){
    alert("BLACKJACK!")
}
else if(cardSum > 21){
    alert("BUST")
}
else if(cardSum < 21){
    alert("The total is: " + cardSum)
}
