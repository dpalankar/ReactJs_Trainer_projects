function Character(name, energy, special){
    this.name = "";
    this.energy = 90;
    this.specials = {name: special, execute: this.special.bind(this)}
}
Character.prototype.potion = function(){
    this.energy += 6
}
Character.prototype.kick = function(){
    this.energy -= 4
}
Character.prototype.special = function(){
    this.energy -= 12
}
function Hero(name, energy, special){
    Character.call(this, name, energy, special);
}
Hero.prototype = Object.create(Character.prototype);
Hero.prototype.saveLife = function(){
    console.log("Not interested");
}
var liuKang = new Hero("Liu Kang", 100, "Round kick");
liuKang.specials.execute();
console.log(liuKang.energy);
liuKang.saveLife();
