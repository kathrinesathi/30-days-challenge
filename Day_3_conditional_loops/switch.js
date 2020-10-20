// example for switch case
var keyNames ="WASDwash";
var keyName= keyNames.charAt(Math.floor(Math.random()*keyNames.length));
console.log("keyName",keyName);
switch (keyName.toLowerCase()){
  case "a":
  console.log("move left");
  break;
  case "d":
  console.log("move right");
  break;
  case "w":
  console.log("move up");
  break;
  case "s":
  console.log("move down");
  break;
  default:
  console.log("invalid key");
  break;
}
