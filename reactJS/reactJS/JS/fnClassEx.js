function Athelte(name, club, money, energy){
    this.name = name;
    this.club = club;
    this.money = money || 100;
    this.energy = energy || 90;
}
Athelte.prototype.eat = function(){
    this.energy += 8;
}
Athelte.prototype.run = function(){
    this.energy -= 12;
}
Athelte.prototype.buyCar = function(){
    this.money -= 200;
}
Athelte.prototype.endorsement = function(){
    this.money += 1000;
}

function Cricketer(name, club, money, energy){
    Athelte.call(this, name, club, money, energy)
}
Cricketer.prototype = Object.create(Athelte.prototype);
Cricketer.prototype.bat = function(){
    this.energy -= 12
}
Cricketer.prototype.ipl = function(){
    this.money += 300
}
function Footballer(name, club, money, energy){
    Athelte.call(this, name, club, money, energy)
}
Footballer.prototype = Object.create(Athelte.prototype);
Footballer.prototype.sprint = function(){
    this.energy -= 13
}
Footballer.prototype.fired = function(){
    this.money =0
}

var kohli = new Cricketer("Kohli", "RCB", 1000000, 100);
var ronaldo = new Footballer("Ronaldo", "JU", 5000000, 120)