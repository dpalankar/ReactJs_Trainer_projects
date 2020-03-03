function greetUser(name){
    this.name = name;
}
greetUser.prototype.greetEvening = function(){
    console.log("Good evening "+this.name)
}
module.exports = greetUser;