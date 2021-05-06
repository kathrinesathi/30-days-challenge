const name = prompt('what is your name')
if (name == 'kat' || name == 'yoga') {
    alert("hello")
} else if (name == 'hari') {
    console.log('this is Hari')
} else {
    console.log('Hii....')
}

// another example using if
var diceValue = Math.floor(Math.random()*6) + 1;
console.log("Dice value:", diceValue);
if(diceValue % 2 != 0){
  console.log("Is an odd number");
}
console.log("you have to be odd number");

// example for if else
var tossValue = Math.random();
console.log("Random toss value:", tossValue);
if (tossValue >= .5){
  console.log("Heads");
}
else {
  console.log("Tails");
}
