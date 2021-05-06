// while loop
let i = 0;
while (i < 10) {
    console.log(i)
    i++
}

// another example for while loop
var die;
var iterations =0;
while (iterations < 10){
  die=Math.floor(Math.random()*6)+1;
  if(die % 2 == 0){
    break;
  }
  iterations ++;
}
console.log("number of iterations", iterations);
console.log("die value:", die);

//example for do while loop

let iterations=0;
do{
  iterations++;
  var die1 = Math.floor(Math.random() * 6)
  var die2 = Math.floor(Math.random() * 6)
console.log("die 1", die1,"die 2", die2 );
}while(die1 != die2);
console.log("the matched value is:", die1);
console.log("number of iterations",iterations);