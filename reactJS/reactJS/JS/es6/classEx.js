class Athelte{
    constructor(name, club, money, energy){
        this.name = name;
        this.club = club;
        this.money = money || 100;
        this.energy = energy || 90;
    }
    eat(){
        this.energy += 8;
    }
    run(){
        this.energy -= 12;
    }
    buyCar(){
        this.money -= 200;
    }
    endorsement(){
        this.money += 1000;
    }
}


class Cricketer extends Athelte{
    constructor(name, club, money, energy){
      super(name, club, money, energy)  
    }
    bat(){
        this.energy -= 12
    }
    ipl(){
        this.money += 300
    }
}

class Footballer extends Athelte{
    constructor(name, club, money, energy){
        super(name, club, money, energy)
    }
    sprint(){
        this.energy -= 13
    }
    fired(){
        this.money =0
    }
}
var kohli = new Cricketer("Kohli", "RCB", 1000000, 100);
var ronaldo = new Footballer("Ronaldo", "JU", 5000000, 120);
console.log(kohli.energy);