for (var i = 0; i <= 10; i++) {
    console.log(i)
}
var text = " "
var person = {
    fname: "ced",
    lname: "kathy",
    age: 20
};
var x
for (x in person) {
    text += person[x] + " "
}
document.getElementById("loop").innerHTML = text;

//for of statement loops through the values of the array

var colours = ["blue", "green", "Yellow"];
var x
for (x of colours) {
    document.write(x + "<br>")
}