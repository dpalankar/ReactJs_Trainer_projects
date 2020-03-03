function greetMe(name){
    console.log("Hello "+name);
}
function greet(name){
    console.log("Hola "+name+"!");
}
function greetUser(greet, name){
    greet(name);
}

greetUser(greetMe, "Akash");
