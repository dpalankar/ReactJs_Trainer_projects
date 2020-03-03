let Greet = require('./mod/pattern_04');
let GreetConstrustor = require('./mod/pattern_05');
// Greet.greetEn("Akash");
// Greet.greetEs("Akash");
let greetMe = new GreetConstrustor("Akash");
greetMe.greetEvening();