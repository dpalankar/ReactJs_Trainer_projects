var SportsMan = {
    name: '',
    age: 00,
    ht: 00,
    energy: 90,
    stamina: 100,
    topScores: {one: 70, two: 60, three: 40},
    run: function(){
        this.energy -= 8;
    },
    eat: function(){
        this.energy += 5;
    }
}
var kohli = Object.create(SportsMan);
var ronaldo = Object.create(SportsMan);

function init(obj, name, age, ht, energy, stamina, one, ){
    obj.name = name || obj.name;
    obj.age = age || obj.age;
    obj.ht = ht || obj.ht;
    obj.energy = energy || obj.energy;
    obj.stamina = stamina || obj.stamina;
}
init(kohli, "Virat Kohli", 31, 175);
init(ronaldo, "Christiano Ronaldo", 33, 183, 100, 120);
kohli.topScores.one = 200;
kohli.topScores.two = 150;
kohli.topScores.three = 100;

ronaldo.topScores.one = 5;
ronaldo.topScores.two = 3;
ronaldo.topScores.three = 2;

console.log("Kohli",kohli.topScores);
console.log("Ronaldo",ronaldo.topScores);
console.log("test");
